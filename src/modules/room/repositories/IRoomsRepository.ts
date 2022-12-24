import { Either } from "@shared/either";
import { RoomAlreadyExistsException } from "@modules/room/domain/Room/RoomAlreadyExistsException";
import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { Room } from "@modules/room/infra/typeorm/entities/Room";

interface IRoomsRepository {
    create(data: CreateRoomDTO): Promise<Room>;
    findByName(name: string): Promise<Either<RoomAlreadyExistsException, Room>>;
    list(): Promise<Room[]>;
};

export { IRoomsRepository };