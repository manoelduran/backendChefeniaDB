import { MvpNotFoundException } from '@modules/mvp/domain/exceptions/MvpNotFoundException';
import { CreateMvpDTO } from '@modules/mvp/dtos/CreateMvpDTO';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { IMvpsRepository } from '@modules/mvp/repositories/IMvpsRepository';
import { Either, left, right } from '@shared/either';




class MvpsRepositoryInMemory implements IMvpsRepository {
    private mvps: Mvp[];
    constructor() {
        this.mvps = [];
    }
    async save(mvp: Mvp): Promise<Mvp> {
        return mvp;
    }
    async findByName(name: string): Promise<Either<MvpNotFoundException, Mvp>> {
        const mvp = this.mvps.find(mvp => mvp.name === name);
        if (!mvp) {
            return left(new MvpNotFoundException());
        };
        return right(mvp);
    };
    async findById(id: string): Promise<Either<MvpNotFoundException, Mvp>> {
        const mvp = this.mvps.find(mvp => mvp.id === id);
        if (!mvp) {
            return left(new MvpNotFoundException());
        };
        return right(mvp);
    };
    async create(data: CreateMvpDTO): Promise<Mvp> {
        const newMvp = new Mvp();
        Object.assign(newMvp, data);
        this.mvps.push(newMvp);
        return newMvp;
    };
    async list(): Promise<Mvp[]> {
        const mvps = this.mvps;
        return mvps;
    };

};

export { MvpsRepositoryInMemory };