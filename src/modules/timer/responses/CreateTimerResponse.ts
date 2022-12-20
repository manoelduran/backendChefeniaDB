import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { Either } from "@shared/either";

import { TimerAlreadyExistsException } from "../domain/Timer/TimerAlreadyExistsException";
import { Timer } from "../infra/typeorm/entities/Timer";



export type CreateTimerResponse = Promise<
  Either<
    MvpNotFoundException,
    Timer
  >
>;
