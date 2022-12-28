import { Either } from "@shared/either";
import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { RoomMvp } from "@modules/roomMvp/infra/typeorm/entities/RoomMvp";
import { RoomMvpNotFoundException } from "@modules/roomMvp/domain/exceptions/RoomMvpNotFoundException";

interface IRoomMvpsRepository {
    create(data: CreateRoomMvpDTO): Promise<RoomMvp>;
    findByMvpId(id: string): Promise<Either<MvpNotFoundException | RoomMvpNotFoundException, RoomMvp | RoomMvp[]>>;
    findByRoomId(id: string): Promise<Either<RoomNotFoundException | RoomMvpNotFoundException, RoomMvp[]>>;
    list(): Promise<RoomMvp[]>;
};

export { IRoomMvpsRepository };