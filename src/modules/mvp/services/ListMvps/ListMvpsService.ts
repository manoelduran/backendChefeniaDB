import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListGeneralMvpsUseCase {
    constructor(
        @inject('GeneralMvpsRepository')
        private mvpsRepository: IMvpsRepository
    ) { }
    async execute(): Promise<Mvp[]> {
        const Mvps = await this.mvpsRepository.list();
        return Mvps;
    };
};

export { ListGeneralMvpsUseCase };