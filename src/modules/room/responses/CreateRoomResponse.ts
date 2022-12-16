import { Either } from "@shared/either";
import { RoomAlreadyExistsException } from "@modules/room/domain/Room/RoomAlreadyExistsException";
import { Room } from "@modules/room/infra/typeorm/entities/Room";



export type CreateRoomResponse = Promise<
  Either<
    RoomAlreadyExistsException,
    Room
  >
>;
