import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { ListMvpResponse } from "@modules/mvp/responses/ListMvpResponse";
import { inject, injectable } from "tsyringe";


@injectable()
class ListMvpsService {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository
    ) { };
    async execute(): ListMvpResponse {
        const mvps = await this.mvpsRepository.list();
        return mvps;
    };
};

export { ListMvpsService };