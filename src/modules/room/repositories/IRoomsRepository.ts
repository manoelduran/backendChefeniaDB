
import { Either } from "@shared/either";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { RoomAlreadyExistsException } from "@modules/room/domain/Room/RoomAlreadyExistsException";
import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { Room } from "@modules/room/infra/typeorm/entities/Room";

interface IRoomsRepository {
    create(data: CreateRoomDTO): Promise<Room>;
    findByName(name: string): Promise<Either<RoomAlreadyExistsException, Room>>;
    list(): Promise<Either<RoomNotFoundException, Room[]>>;
};

export { IRoomsRepository };