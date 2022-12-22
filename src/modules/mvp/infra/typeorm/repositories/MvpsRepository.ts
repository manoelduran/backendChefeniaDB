import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { getRepository, Repository } from "typeorm";
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either, left, right } from "@shared/either";
import { MvpListNotFoundException } from "@modules/mvp/domain/Mvp/MvpListNotFoundException";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";


class MvpsRepository implements IMvpsRepository {
    private ormRepository: Repository<Mvp>;
    constructor() {
        this.ormRepository = getRepository(Mvp);
    };

    async findById(id: string): Promise<Either<MvpNotFoundException, Mvp>> {
        console.log('mvp_id', id)
        const mvpOrError = await this.ormRepository.findOne({where: {id}, relations: ['timer']});
        if (!mvpOrError) {
            return left(new MvpNotFoundException())
        };
        return right(mvpOrError);
    };
    async findByName(name: string): Promise<Either<MvpNotFoundException, Mvp>> {
        const mvpOrError = await this.ormRepository.findOne({ where: {name}, relations: ['timer'] });
        if (!mvpOrError) {
            return left(new MvpNotFoundException())
        };
        return right(mvpOrError);
    };
    async create(data: CreateMvpDTO): Promise<Mvp> {
        const newMvp = this.ormRepository.create(data);
        await this.ormRepository.save(newMvp)
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