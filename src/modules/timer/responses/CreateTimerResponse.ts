import { UserNotFoundException } from "@modules/accounts/domain/exceptions/UserNotFoundException";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { Either } from "@shared/either";
import { Timer } from "../infra/typeorm/entities/Timer";



export type CreateTimerResponse = Promise<
  Either<
    UserNotFoundException | MvpNotFoundException,
    Timer
  >
>;
