
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { MvpAlreadyExistsException } from "@modules/mvp/domain/Mvp/MvpAlreadyExistsException";
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { CreateMvpResponse } from "@modules/mvp/responses/CreateMvpResponse";
import { left, right } from "@shared/either";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateMvpService {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository
    ) { }
    async execute(data: CreateMvpDTO): CreateMvpResponse {
        const alreadyExists = await this.mvpsRepository.findByName(data.name);
        if (alreadyExists.isRight()) {
            return left(new MvpAlreadyExistsException());
        };
        const newMvp = await this.mvpsRepository.create(data);
        return right(newMvp);
    };
};

export { CreateMvpService };