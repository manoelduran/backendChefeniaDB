import { MvpListNotFoundException } from "@modules/mvp/domain/Mvp/MvpListNotFoundException";
import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { ListMvpResponse } from "@modules/mvp/responses/ListMvpResponse";
import { left } from "@shared/either";
import { inject, injectable } from "tsyringe";


@injectable()
class ListMvpsService {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository
    ) { }
    async execute(): ListMvpResponse {
        const mvpListOrError = await this.mvpsRepository.list();
        if(mvpListOrError.isLeft()) {
            return left(new MvpListNotFoundException())
        }
        return mvpListOrError;
    };
};

export { ListMvpsService };