import { Either } from "@shared/either";
import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { RoomMvp } from "@modules/roomMvp/infra/typeorm/entities/RoomMvp";
import { RoomMvpNotFoundException } from "@modules/roomMvp/domain/exceptions/RoomMvpNotFoundException";

interface IRoomMvpsRepository {
    create(data: CreateRoomMvpDTO): Promise<RoomMvp>;
    findByMvpId(mvp_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>>;
    findByRoomMvpId(id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>>
    findByMvpAndRoomIds(mvp_id: string, room_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>>
    findByRoomId(room_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>>;
    list(): Promise<RoomMvp[]>;
};

export { IRoomMvpsRepository };