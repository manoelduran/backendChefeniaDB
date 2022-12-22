import { TimerNotFoundException } from "@modules/timer/domain/exceptions/TimerNotFoundException";
import { TimersNotFoundException } from "@modules/timer/domain/Timer/TimersNotFoundException";
import { CreateTimerDTO } from "@modules/timer/dtos/CreateTimerDTO";
import { ITimersRepository } from "@modules/timer/repositories/ITimersRepository";
import { Either, left, right } from "@shared/either";
import { Timer } from "@modules/timer/infra/typeorm/entities/Timer";
import { getRepository, Repository } from "typeorm";


class TimersRepository implements ITimersRepository {
    private ormRepository: Repository<Timer>;
    constructor() {
        this.ormRepository = getRepository(Timer);
    };
    async create(data: CreateTimerDTO): Promise<Timer> {
        console.log('data', data)
        const newTimer = this.ormRepository.create(data);
        await this.ormRepository.save(newTimer)
        return newTimer;
    }
    async findById(id: string): Promise<Either<TimerNotFoundException, Timer>> {
        const foundTimerOrError = await this.ormRepository.findOne(id);
        if (!foundTimerOrError) {
            return left(new TimerNotFoundException())
        };
        return right(foundTimerOrError);
    };
    public async findByUserIds(user_ids: string[]): Promise<Timer[]> {
        const foudTimers = await this.ormRepository.find({where: user_ids});
        return foudTimers;
    };
    async list(): Promise<Either<TimersNotFoundException, Timer[]>> {
        const timersOrError = await this.ormRepository.find();
        if (!timersOrError) {
            return left(new TimersNotFoundException())
        };
        return right(timersOrError);
    };
};

export { TimersRepository };