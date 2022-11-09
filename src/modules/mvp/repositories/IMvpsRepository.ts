import {Mvp} from "@modules/mvp/infra/typeorm/entities/Mvp";
import {CreateMvpDTO} from "@modules/mvp/dtos/CreateMvpDTO";
interface IMvpsRepository {
    findByName(name: string): Promise<Mvp>;
    create(data: CreateMvpDTO): Promise<Mvp>;
    list(): Promise<Mvp[]>;
};

export { IMvpsRepository };
