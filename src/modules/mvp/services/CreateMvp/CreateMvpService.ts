
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateMvpService {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository
    ) { }
    async execute({ }: CreateMvpDTO): Promise<Mvp> {
        const alreadyExists = await this.mvpsRepository.findByName(name);
        if (alreadyExists) {
            throw new AppError("This Mvp is already created!");
        };
        this.mvpsRepository.create({

        });
    };
};

export { CreateMvpService };