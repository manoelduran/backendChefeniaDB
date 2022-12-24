import { TimerNotFoundException } from "@modules/timer/domain/exceptions/TimerNotFoundException";
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
            return left(new TimerNotFoundException());
        };
        return right(foundTimerOrError);
    };
    public async findByUserIds(user_id: string): Promise<Either<TimerNotFoundException, Timer[]>> {
        const foundTimerOrError = await this.ormRepository.find({ where: user_id });
        if (!foundTimerOrError) {
            return left(new TimerNotFoundException());
        };
        return right(foundTimerOrError);
    };
    async list(): Promise<Timer[]> {
        const timers = await this.ormRepository.find();

        return timers;
    };
};

export { TimersRepository };