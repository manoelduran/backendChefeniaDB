import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { getRepository, Repository } from "typeorm";
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";


class MvpsRepository implements IMvpsRepository {
    private repository: Repository<Mvp>
    constructor() {
        this.repository = getRepository(Mvp);
    }
    async findByName(name: string): Promise<Mvp> {
        throw new Error("Method not implemented.");
    }
    async create(data: CreateMvpDTO): Promise<Mvp> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<Mvp[]> {
        throw new Error("Method not implemented.");
    }
    ;

};

export { MvpsRepository };