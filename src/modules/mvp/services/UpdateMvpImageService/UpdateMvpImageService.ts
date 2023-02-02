import { UpdateMvpImageDTO } from "@modules/mvp/dtos/UpdateMvpImageDTO";
import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { UpdateMvpImageResponse } from "@modules/mvp/responses/UpdateMvpImageResponse";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import { left, right } from "@shared/either";
import { classToPlain, instanceToInstance } from "class-transformer";
import { inject, injectable } from "tsyringe";


@injectable()
class UpdateMvpImageService {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ) { };
    async execute({ mvp_id, file }: UpdateMvpImageDTO): UpdateMvpImageResponse {

        const mvpOrError = await this.mvpsRepository.findById(mvp_id)
        if (mvpOrError.isLeft()) {
            return left(mvpOrError.value)
        };
        if (mvpOrError.value.image) {
            await this.storageProvider.delete(mvpOrError.value.image);
        }

        const filename = await this.storageProvider.save({
            file: file,
            folderName: `mvps/${mvp_id}`
        })
 
        mvpOrError.value.image = filename;
        await this.mvpsRepository.save(mvpOrError.value)
        return right(instanceToInstance(mvpOrError.value))
    };
};

export { UpdateMvpImageService };