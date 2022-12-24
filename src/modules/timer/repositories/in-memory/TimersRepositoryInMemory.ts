import { TimerNotFoundException } from "@modules/timer/domain/exceptions/TimerNotFoundException";
import { CreateTimerDTO } from "@modules/timer/dtos/CreateTimerDTO";
import { Timer } from "@modules/timer/infra/typeorm/entities/Timer";
import { ITimersRepository } from "@modules/timer/repositories/ITimersRepository";
import { Either, left, right } from "@shared/either";


class TimersRepositoryInMemory implements ITimersRepository {
    private timers: Timer[];
    constructor() {
        this.timers = [];
    }
    async create(data: CreateTimerDTO): Promise<Timer> {
        const newTimer = new Timer();
        Object.assign(newTimer, data);
        this.timers.push(newTimer);
        return newTimer;
    }
    async findById(id: string): Promise<Either<TimerNotFoundException, Timer>> {
        const foundTimerOrError = this.timers.find((timer) => timer.id === id);
        if (!foundTimerOrError) {
            return left(new TimerNotFoundException());
        };
        return right(foundTimerOrError);
    }
    async findByUserIds(user_id: string): Promise<Either<TimerNotFoundException, Timer[]>> {
        const foundTimersOrError = this.timers.filter((timer) => timer.user_id === user_id);
        if (!foundTimersOrError) {
            return left(new TimerNotFoundException());
        }
        return right(foundTimersOrError);
    }
    async list(): Promise<Timer[]> {
        const timers = this.timers;
        return timers;
    }

};

export { TimersRepositoryInMemory };