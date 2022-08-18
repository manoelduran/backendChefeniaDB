import { getRepository, Repository } from "typeorm";
import { GeneralMvps } from "../../entities/GeneralMvp";
import { IGeneralMvpsRepository } from "../IGeneralMvpsRepository";



class GeneralMvpsRepository implements IGeneralMvpsRepository {
    private repository: Repository<GeneralMvps>
    constructor() {
        this.repository = getRepository(GeneralMvps);
    };
    async list(): Promise<GeneralMvps[]> {
        const generalMvps = await this.repository.find();
        return generalMvps;
    };
    async findByName(name: string): Promise<GeneralMvps> {
        const selectedGeneralMvp = await this.repository.findOne({ name });
        return selectedGeneralMvp;
    };
};

export { GeneralMvpsRepository };