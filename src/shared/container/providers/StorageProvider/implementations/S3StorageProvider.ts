import fs from 'fs';
import path from 'path';
import mime from 'mime';
import aws, { S3 } from 'aws-sdk';

import uploadConfig from '@config/upload';


import IStorageProvider from '../models/IStorageProvider';
import { ISaveFileDTO } from '../dtos/ISaveFileDTO';
import { AppError } from '@shared/errors/AppError';

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: uploadConfig.config.aws.region,
      credentials: uploadConfig.config.aws.credentials,
    });
  }
  public async save({ file, fileType, fileContent, folderName }: ISaveFileDTO): Promise<string> {
    let ContentType = fileType;
    const readFile = () => {
      const originalPath = path.resolve(uploadConfig.tmpFolder, file);

      ContentType = mime.getType(originalPath);

      if (!ContentType) {
        throw new AppError('Arquivo inválido', 400);
      }

      const result = fs.createReadStream(originalPath);
      return result;
    };
    const fileData = fileContent || readFile();
    const filePath = `${folderName ? `${folderName}/` : ''}${file}`;

    await this.client
      .putObject({
        Bucket: uploadConfig.config.aws.bucket,
        Key: filePath,
        ACL: 'public-read',
        Body: fileData,
        ContentType: ContentType,
        ContentDisposition: `inline; filename=${file}`,
      }).promise()
    return filePath;
  }
  public async delete(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
      })
      .promise();
  }
  public async get(file: string): Promise<any> {
    await this.client.getObject({ Bucket: uploadConfig.config.aws.bucket, Key: file }).promise()
  }
}

export default S3StorageProvider;
