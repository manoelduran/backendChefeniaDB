import { Either } from "@shared/either";
import { RoomMvpAlreadyExistsException } from "../domain/RoomMvp/RoomMvpAlreadyExistsException";
import { RoomMvp } from "../infra/typeorm/entities/RoomMvp";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";



export type CreateRoomMvpResponse = Promise<
  Either<
    RoomMvpAlreadyExistsException | MvpNotFoundException | RoomNotFoundException,
    RoomMvp
  >
>;
