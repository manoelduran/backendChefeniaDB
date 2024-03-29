import { Either, left, right, } from "@shared/either";
import { Room } from '@modules/room/infra/typeorm/entities/Room';
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";



class RoomsRepositoryInMemory implements IRoomsRepository {
    private rooms: Room[]
    constructor() {
        this.rooms = [];
    }

    async findById(id: string): Promise<Either<RoomNotFoundException, Room>> {
        const roomOrError = this.rooms.find(room => room.id === id);
        if (!roomOrError) {
            return left(new RoomNotFoundException())
        };
        return right(roomOrError);
    }
    async findByName(name: string): Promise<Either<RoomNotFoundException, Room>> {
        const roomOrError = this.rooms.find(room => room.name === name);
        if (!roomOrError) {
            return left(new RoomNotFoundException())
        };
        return right(roomOrError);
    };
    async create(data: CreateRoomDTO): Promise<Room> {
        const newRoom = new Room();
        Object.assign(newRoom, data);
        this.rooms.push(newRoom);
        return newRoom;
    };
    async list(): Promise<Room[]> {
        const rooms = this.rooms;

        return rooms;
    };
};

export { RoomsRepositoryInMemory };