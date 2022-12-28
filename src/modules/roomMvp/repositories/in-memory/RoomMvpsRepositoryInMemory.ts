import { Either, left, right, } from "@shared/either";
import { RoomNotFoundException } from "@modules/room/domain/exceptions/RoomNotFoundException";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { RoomMvp } from "@modules/roomMvp/infra/typeorm/entities/RoomMvp";
import { MvpNotFoundException } from "@modules/mvp/domain/exceptions/MvpNotFoundException";
import { RoomMvpNotFoundException } from "@modules/roomMvp/domain/exceptions/RoomMvpNotFoundException";
import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";



class RoomMvpsRepositoryInMemory implements IRoomMvpsRepository {
    private roomMvps: RoomMvp[];
    constructor() {
        this.roomMvps = [];
    };
    async create(data: CreateRoomMvpDTO): Promise<RoomMvp> {
        throw new Error("Method not implemented.");
    };
    async findByMvpId(id: string): Promise<Either<MvpNotFoundException | RoomMvpNotFoundException, RoomMvp | RoomMvp[]>> {
        throw new Error("Method not implemented.");
    };
    async findByRoomId(id: string): Promise<Either<RoomMvpNotFoundException | RoomNotFoundException, RoomMvp[]>> {
        throw new Error("Method not implemented.");
    };
    async list(): Promise<RoomMvp[]> {
        throw new Error("Method not implemented.");
    };
};

export { RoomMvpsRepositoryInMemory };