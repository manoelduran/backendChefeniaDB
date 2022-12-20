import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either } from "@shared/either";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { MvpListNotFoundException } from "../domain/Mvp/MvpListNotFoundException";
import { MvpAlreadyExistsException } from "../domain/Mvp/MvpAlreadyExistsException";
interface IMvpsRepository {
    create(data: CreateMvpDTO): Promise<Mvp>;
    findByName(name: string): Promise<Either<MvpAlreadyExistsException, Mvp>>;
    findById(id: string): Promise<Either<MvpAlreadyExistsException, Mvp>>;
    list(): Promise<Either<MvpListNotFoundException, Mvp[]>>;
};

export { IMvpsRepository };
