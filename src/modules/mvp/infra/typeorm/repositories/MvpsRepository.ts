import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { getRepository, Not, Repository } from "typeorm";
import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { Either, left, right } from "@shared/either";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";


class MvpsRepository implements IMvpsRepository {
    private ormRepository: Repository<Mvp>;
    constructor() {
        this.ormRepository = getRepository(Mvp);
    }
    async findByGeneral(): Promise<Mvp[]> {
        const mvps = await this.ormRepository.find({
            where: {
                is_general: Not(false)
            }
        })
        return mvps;
    }
    async findByIds(ids: string[]): Promise<Mvp[]> {
        const mvps = await this.ormRepository.findByIds(ids)
        return mvps;
    }

    async save(mvp: Mvp): Promise<Mvp> {
        await this.ormRepository.save(mvp);
        return mvp;
    }
    async findById(id: string): Promise<Either<MvpNotFoundException, Mvp>> {
        const mvpOrError = await this.ormRepository.findOne({ where: { id }, relations: ['timer'] });
        if (!mvpOrError) {
            return left(new MvpNotFoundException())
        };
        return right(mvpOrError);
    };
    async findByName(name: string): Promise<Either<MvpNotFoundException, Mvp>> {
        const mvpOrError = await this.ormRepository.findOne({ where: { name }, relations: ['timer'] });
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
    async list(): Promise<Mvp[]> {
        const mvps = await this.ormRepository.find();
        return mvps;
    };
};

export { MvpsRepository };