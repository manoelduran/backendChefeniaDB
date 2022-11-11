import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { IMvpsRepository } from '@modules/mvp/repositories/IMvpsRepository';




class MvpsRepositoryInMemory implements IMvpsRepository {
    mvps: Mvp[] = [];
    findByName(name: string): Promise<Mvp> {
        throw new Error('Method not implemented.');
    }
    create(data: CreateMvpsDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }
    list(): Promise<Mvp[]> {
        throw new Error('Method not implemented.');
    }

};

export { MvpsRepositoryInMemory };