import { inject, injectable } from "tsyringe";
import { GeneralMvps } from "../../entities/GeneralMvps";
import { IGeneralMvpsRepository } from "../../repositories/IGeneralMvpsRepository";

@injectable()
class ListGeneralMvpsUseCase {
    constructor(
        @inject('GeneralMvpsRepository')
        private generalMvpsRepository: IGeneralMvpsRepository
    ) {}
    async execute(): Promise<GeneralMvps[]> {
        const generalMvps = await this.generalMvpsRepository.list();
        return generalMvps;
    };
};

export {ListGeneralMvpsUseCase};