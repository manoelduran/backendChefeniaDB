import { Either } from "@shared/either";
import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { Room } from "@modules/room/infra/typeorm/entities/Room";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";

interface IRoomsRepository {
    create(data: CreateRoomDTO): Promise<Room>;
    findByName(name: string): Promise<Either<RoomNotFoundException, Room>>;
    list(): Promise<Room[]>;
};

export { IRoomsRepository };