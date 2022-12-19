

import { getRepository, Repository } from "typeorm";
import { Either, left, right,  } from "@shared/either";
import {Room} from '@modules/room/infra/typeorm/entities/Room';
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { RoomsNotFoundException } from "@modules/room/domain/Room/RoomsNotFoundException";



class RoomsRepository implements IRoomsRepository {
    private ormRepository: Repository<Room>;
    constructor() {
        this.ormRepository = getRepository(Room);
    };
    async findByName(name: string): Promise<Either<RoomNotFoundException, Room>> {
        const roomOrError = await this.ormRepository.findOne({ name });
        if (!roomOrError) {
            return left(new RoomNotFoundException())
        };
        return right(roomOrError);
    };
    async create(data: CreateRoomDTO): Promise<Room> {
        const newRoom = this.ormRepository.create(data);
        await this.ormRepository.save(newRoom)
        return newRoom;
    };
    async list(): Promise<Either<RoomsNotFoundException, Room[]>> {
        const listOrError = await this.ormRepository.find();
        if (listOrError.length === 0) {
            return left(new RoomNotFoundException());
        };
        return right(listOrError);
    };
};

export { RoomsRepository };