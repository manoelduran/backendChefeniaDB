import { getRepository, Repository } from "typeorm";
import { Either, left, right, } from "@shared/either";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { RoomMvp } from "@modules/roomMvp/infra/typeorm/entities/RoomMvp";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { RoomMvpNotFoundException } from "@modules/roomMvp/domain/exceptions/RoomMvpNotFoundException";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";



class RoomMvpsRepository implements IRoomMvpsRepository {
    private ormRepository: Repository<RoomMvp>;
    constructor() {
        this.ormRepository = getRepository(RoomMvp);
    }
    async create(data: CreateRoomMvpDTO): Promise<RoomMvp> {
        throw new Error("Method not implemented.");
    }
    async findByMvpId(id: string): Promise<Either<MvpNotFoundException | RoomMvpNotFoundException, RoomMvp | RoomMvp[]>> {
        throw new Error("Method not implemented.");
    }
    async findByRoomId(id: string): Promise<Either<RoomNotFoundException | RoomMvpNotFoundException, RoomMvp[]>> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<RoomMvp[]> {
        throw new Error("Method not implemented.");
    }
    ;
};

export { RoomMvpsRepository };