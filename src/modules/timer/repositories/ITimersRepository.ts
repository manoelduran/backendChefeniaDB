import { CreateTimerDTO } from "@modules/timer/dtos/CreateTimerDTO";
import { TimersNotFoundException } from "@modules/timer/domain/Timer/TimersNotFoundException";
import { TimerNotFoundException } from "@modules/timer/domain/exceptions/TimerNotFoundException";
import { Either } from "@shared/either";
import { Timer } from "@modules/timer/infra/typeorm/entities/Timer";


interface ITimersRepository {
    create(data: CreateTimerDTO): Promise<Timer>;
    findById(id: string): Promise<Either<TimerNotFoundException, Timer>>;
    findByUserIds(user_ids: string[]): Promise<Timer[]>;
    list(): Promise<Either<TimersNotFoundException, Timer[]>>;
};

export { ITimersRepository };