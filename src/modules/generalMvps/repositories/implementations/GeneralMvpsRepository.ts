import { getRepository, Repository } from "typeorm";
import {IGeneralMvpsRepository} from "@modules/generalMvps/repositories/IGeneralMvpsRepository";
import { GeneralMvps } from "@modules/generalMvps/entities/GeneralMvps";


class GeneralMvpsRepository implements IGeneralMvpsRepository {
    private repository: Repository<GeneralMvps>
    constructor() {
        this.repository = getRepository(GeneralMvps);
    };
    async create({ image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind }: GeneralMvps): Promise<void> {
        const generalMvp = this.repository.create({
            breed,
            dark,
            earth,
            fire,
            ghost,
            holy,
            image,
            level,
            name,
            neutral,
            poison,
            property,
            quantity,
            undead,
            water,
            wind
        });
        await this.repository.save(generalMvp);
    }
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