import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either } from "@shared/either";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { MvpNotFoundException } from "../domain/exceptions/MvpNotFoundException";
interface IMvpsRepository {
    create(data: CreateMvpDTO): Promise<Mvp>;
    findByName(name: string): Promise<Either<MvpNotFoundException, Mvp>>;
    findById(id: string): Promise<Either<MvpNotFoundException, Mvp>>;
    findByIds(ids: string[]): Promise<Mvp[]>;
    findByGeneral(): Promise<Mvp[]>;
    list(): Promise<Mvp[]> ;
    save(mvp: Mvp): Promise<Mvp>;
};

export { IMvpsRepository };
