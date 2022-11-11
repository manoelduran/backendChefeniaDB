import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { getRepository, Repository } from "typeorm";
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either, left, right } from "@shared/either";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";


class MvpsRepository implements IMvpsRepository {
    private ormRepository: Repository<Mvp>;
    constructor() {
        this.ormRepository = getRepository(Mvp);
    };
    async findByName(name: string): Promise<Either<MvpNotFoundException, Mvp>> {
        const mvpOrError = await this.ormRepository.findOne({ name });
        if (!mvpOrError) {
            return left(new MvpNotFoundException())
        };
        return right(mvpOrError);
    };
    async create(data: CreateMvpDTO): Promise<Mvp> {
        const newMvp = this.ormRepository.create(data);
        return newMvp;
    };
    async list(): Promise<Either<MvpNotFoundException, Mvp[]>> {
        const listOrError = await this.ormRepository.find();
        if (!listOrError) {
            return left(new MvpNotFoundException());
        };
        return right(listOrError);
    };
};

export { MvpsRepository };