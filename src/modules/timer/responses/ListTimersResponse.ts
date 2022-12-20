import { Either } from "@shared/either";
import { TimersNotFoundException } from "../domain/Timer/TimersNotFoundException";
import { Timer } from "../infra/typeorm/entities/Timer";




export type ListTimersResponse = Promise<
    Either<
        TimersNotFoundException,
        Timer[]
    >
>;
