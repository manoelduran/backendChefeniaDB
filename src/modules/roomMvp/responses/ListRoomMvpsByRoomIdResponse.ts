import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { Either } from "@shared/either";
import { RoomMvpNotFoundException } from "../domain/exceptions/RoomMvpNotFoundException";
import { RoomMvp } from "../infra/typeorm/entities/RoomMvp";



export type ListRoomMvpsByRoomIdResponse = Promise<Either<RoomNotFoundException | RoomMvpNotFoundException, RoomMvp[]>>;
