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
    }

    async create(data: CreateRoomMvpDTO): Promise<RoomMvp> {
        const newRoom = new RoomMvp();
        Object.assign(newRoom, data);
        this.roomMvps.push(newRoom);
        return newRoom;
    };
    async findByRoomMvpId(id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>> {
        const foundRoomMvp = this.roomMvps.find(roomMvp => roomMvp.id === id)
        if (!foundRoomMvp) {
            return left(new RoomMvpNotFoundException())
        };
        return right(foundRoomMvp);
    }
    async findByMvpId(mvp_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp | RoomMvp[]>> {
        const foundRoomMvp = this.roomMvps.filter(roomMvp => roomMvp.mvp_id === mvp_id)
        if (!foundRoomMvp) {
            return left(new RoomMvpNotFoundException())
        };
        return right(foundRoomMvp);
    };
    async findByRoomId(room_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp | RoomMvp[]>> {
        const foundRoomMvp = this.roomMvps.filter(roomMvp => roomMvp.room_id === room_id)
        if (!foundRoomMvp) {
            return left(new RoomMvpNotFoundException())
        };
        return right(foundRoomMvp);
    };
    async list(): Promise<RoomMvp[]> {
        const foundRoomMvp = this.roomMvps;
        return foundRoomMvp;
    };
};

export { RoomMvpsRepositoryInMemory };