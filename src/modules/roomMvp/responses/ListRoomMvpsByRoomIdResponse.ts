import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { Either } from "@shared/either";
import { RoomMvpNotFoundException } from "../domain/exceptions/RoomMvpNotFoundException";



export type ListRoomMvpsByRoomIdResponse = Promise<Either<RoomNotFoundException | RoomMvpNotFoundException, Mvp[]>>;
