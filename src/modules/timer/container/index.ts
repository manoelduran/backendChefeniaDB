import { container } from "tsyringe";
import { ITimersRepository } from "@modules/timer/repositories/ITimersRepository";
import { TimersRepository } from "../infra/typeorm/repositories/TimersRepository";




container.registerSingleton<ITimersRepository>(
    "TimersRepository",
    TimersRepository
)