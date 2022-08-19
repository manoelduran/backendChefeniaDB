import { inject, injectable } from "tsyringe";
import { GeneralMvps } from "../../entities/GeneralMvp";
import { IGeneralMvpsRepository } from "../../repositories/IGeneralMvpsRepository";

@injectable()
class ListGeneralMvpsUseCase {
    constructor(
        @inject('GeneralMvpsRepository')
        private generalMvpsRepository: IGeneralMvpsRepository
    ) {}
    async execute(): Promise<GeneralMvps[]> {
        const generalMvps = this.generalMvpsRepository.list();
        return generalMvps;
    };
};

export {ListGeneralMvpsUseCase};