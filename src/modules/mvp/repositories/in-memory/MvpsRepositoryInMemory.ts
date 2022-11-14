import { MvpAlreadyExistsException } from '@modules/mvp/domain/Mvp/MvpAlreadyExistsException';
import { MvpListNotFoundException } from '@modules/mvp/domain/Mvp/MvpListNotFoundException';
import { CreateMvpDTO } from '@modules/mvp/dtos/CreateMvpDTO';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { IMvpsRepository } from '@modules/mvp/repositories/IMvpsRepository';
import { Either, left, right } from '@shared/either';




class MvpsRepositoryInMemory implements IMvpsRepository {
    private mvps: Mvp[];
    constructor() {
        this.mvps = [];
    }
    async findByName(name: string): Promise<Either<MvpAlreadyExistsException, Mvp>> {
        const mvp = this.mvps.find(mvp => mvp.name === name);
        if (!mvp) {
            return left(new MvpAlreadyExistsException());
        };
        return right(mvp);
    };
    async create(data: CreateMvpDTO): Promise<Mvp> {
        const newMvp = new Mvp();
        Object.assign(newMvp, data);
        this.mvps.push(newMvp);
        return newMvp;
    }
    async list(): Promise<Either<MvpListNotFoundException, Mvp[]>> {
        const mvps = this.mvps;
        if (!mvps) {
            return left(new MvpListNotFoundException())
        }
        return right(mvps);
    }

};

export { MvpsRepositoryInMemory };