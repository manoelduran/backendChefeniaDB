import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { getRepository, Repository } from "typeorm";
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either, left, right } from "@shared/either";
import { MvpAlreadyExistsException } from "@modules/mvp/domain/Mvp/MvpAlreadyExistsException";
import { MvpListNotFoundException } from "@modules/mvp/domain/Mvp/MvpListNotFoundException";


class MvpsRepository implements IMvpsRepository {
    private ormRepository: Repository<Mvp>;
    constructor() {
        this.ormRepository = getRepository(Mvp);
    };
    async findByName(name: string): Promise<Either<MvpAlreadyExistsException, Mvp>> {
        const mvpOrError = await this.ormRepository.findOne({ name });
        if (!mvpOrError) {
            return left(new MvpAlreadyExistsException())
        };
        return right(mvpOrError);
    };
    async create(data: CreateMvpDTO): Promise<Mvp> {
        const newMvp = this.ormRepository.create(data);
        return newMvp;
    };
    async list(): Promise<Either<MvpListNotFoundException, Mvp[]>> {
        const listOrError = await this.ormRepository.find();
        if (listOrError.length === 0) {
            return left(new MvpListNotFoundException());
        };
        return right(listOrError);
    };
};

export { MvpsRepository };