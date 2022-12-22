import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either } from "@shared/either";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { MvpListNotFoundException } from "../domain/Mvp/MvpListNotFoundException";
import { MvpAlreadyExistsException } from "../domain/Mvp/MvpAlreadyExistsException";
import { MvpNotFoundException } from "../domain/exceptions/MvpNotFoundException";
interface IMvpsRepository {
    create(data: CreateMvpDTO): Promise<Mvp>;
    findByName(name: string): Promise<Either<MvpNotFoundException, Mvp>>;
    findById(id: string): Promise<Either<MvpNotFoundException, Mvp>>;
    list(): Promise<Either<MvpListNotFoundException, Mvp[]>>;
};

export { IMvpsRepository };
