import { GeneralMvps } from "@modules/generalMvps/entities/GeneralMvps";
import { IGeneralMvpsRepository } from "@modules/generalMvps/repositories/IGeneralMvpsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListGeneralMvpsUseCase {
    constructor(
        @inject('GeneralMvpsRepository')
        private generalMvpsRepository: IGeneralMvpsRepository
    ) { }
    async execute(): Promise<GeneralMvps[]> {
        const generalMvps = await this.generalMvpsRepository.list();
        return generalMvps;
    };
};

export { ListGeneralMvpsUseCase };