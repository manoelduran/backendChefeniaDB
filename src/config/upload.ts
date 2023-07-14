import multer, { StorageEngine } from "multer";
import { resolve } from 'path';
import crypto from 'crypto';
import mime from "mime";

import { AppError } from "@shared/errors/AppError";
import { replaceSpecialCharactersWithinString } from "@utils/specialCharacters";
import { CredentialsOptions } from "aws-sdk/lib/credentials";

interface AWSConfig {
    bucket: string;
    uri: string;
    defaultAvatarUri: string;
    defaultLogoUri: string;
    credentials: CredentialsOptions;
    region: string;
}
interface IUploadConfig {
    driver: 's3' | 'local';
    tmpFolder: string;
    uploadsFolder: string;

    multer: {
        storage: StorageEngine;
    };

    config: {
        disk: {};
        aws: AWSConfig;
    };
    getAvatar: (avatar: string) => string;
    getMvpImage: (mvp_image: string) => string;
}

const tmpFolder = '/tmp'

export default {
    driver: process.env.STORAGE_DRIVER,
    tmpFolder,
    uploadsFolder: resolve(tmpFolder, 'uploads'),
    multer: {
        storage: multer.diskStorage({
            destination: tmpFolder,
            filename(_, file, callback) {
                const extension = mime.getExtension(file.mimetype);
                function validateExtension(): void {
                    const extensionsEnabled = [
                        'image/jpeg',
                        'image/png',
                        'image/jpg',
                        'image/gif',
                        'svg',
                        'png',
                        'jpg',
                        'jpeg',
                        'gif',
                        'mpeg',
                    ];

                    if (!extensionsEnabled.includes(extension)) {
                        return callback(new AppError(`Arquivo com extensão ${extension} indisponível`, 400) as any, file.filename);
                    }
                }

                function validateFileSize(): void {
                    function isGreaterThanLimit(): boolean {
                        let result = false;

                        const MAX_IMAGE_SIZE_IN_MB = 15000; // 15mb


                        if (file.size > MAX_IMAGE_SIZE_IN_MB) {
                            result = true;
                        }

                        return result;
                    }

                    if (isGreaterThanLimit()) {
                        return callback(new AppError(`Arquivo ${file.originalname} muito grande.`, 400) as any, file.filename);
                    }
                }

                function generateFileHash(): string {
                    return crypto.randomBytes(10).toString('hex');
                }

                function formatFileName(): string {
                    let result = replaceSpecialCharactersWithinString(file.originalname);
                    function replaceBlankSpaces(): void {
                        result = result.replace(/\s/g, '-');
                    }

                    function replaceExtension(): void {
                        result = result.replace(/\.[^/.]+$/, '');
                        result = result.replace(extension, '');
                        result = `${result}.${extension}`;
                    }

                    replaceBlankSpaces();
                    replaceExtension();
                    return result;
                }

                validateExtension();
                validateFileSize();

                const originalName = formatFileName();

                const fileName = `${generateFileHash()}-${originalName}`;
                return callback(null, fileName);
            },
        }),
    },
    config: {
        disk: {},
        aws: {
            bucket: process.env.UPLOAD_BUCKET,
            region: 'us-east-1',
            uri: `https://${process.env.UPLOAD_BUCKET}.s3.us-east-1.amazonaws.com`,
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            },
        },
    },
    getAvatar(avatar: string): string {
        const drivers = {
            local: `${process.env.APP_API_URL}/files/${avatar}`,
            s3: `${this.config.aws.uri}/${avatar}`,
        };
        const driver = drivers[this.driver];
        if (!avatar || !driver) {
            return null;
        }
        return driver;
    },
    getMvpImage(mvp_image: string): string {
        console.log('OLA')
        const drivers = {
            disk: `${process.env.APP_API_URL}/files/${mvp_image}`,
            s3: `${this.config.aws.uri}/${mvp_image}`,
        };
        const driver = drivers[this.driver];
        if (!mvp_image || !driver) {
            return null;
        }
        return driver;
    },
} as IUploadConfig;