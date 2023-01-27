import { getRepository, Repository } from "typeorm";
import { Either, left, right, } from "@shared/either";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { RoomMvp } from "@modules/roomMvp/infra/typeorm/entities/RoomMvp";
import { RoomMvpNotFoundException } from "@modules/roomMvp/domain/exceptions/RoomMvpNotFoundException";



class RoomMvpsRepository implements IRoomMvpsRepository {
    private ormRepository: Repository<RoomMvp>;
    constructor() {
        this.ormRepository = getRepository(RoomMvp);
    }

    async create(data: CreateRoomMvpDTO): Promise<RoomMvp> {
        const newRoomMvp = this.ormRepository.create(data);
        await this.ormRepository.save(newRoomMvp)
        return newRoomMvp;
    }
    async findByRoomMvpId(id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>> {
        const roomMvpsOrError = await this.ormRepository.findOne(id);
        if (!roomMvpsOrError) {
            return left(new RoomMvpNotFoundException())
        };
        return right(roomMvpsOrError);

    }
    async findByMvpAndRoomIds(mvp_id: string, room_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>> {
        const roomMvpsOrError = await this.ormRepository.findOne({
            where: {
                mvp_id,
                room_id
            }
        });
        if (!roomMvpsOrError) {
            return left(new RoomMvpNotFoundException())
        };
        return right(roomMvpsOrError);

    }
    async findByMvpId(mvp_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp>> {
        const roomMvpsOrError = await this.ormRepository.findOne({ mvp_id });
        if (!roomMvpsOrError) {
            return left(new RoomMvpNotFoundException())
        };
        return right(roomMvpsOrError);

    }
    async findByRoomId(room_id: string): Promise<Either<RoomMvpNotFoundException, RoomMvp[]>> {
        const roomMvpsOrError = await this.ormRepository.find({ room_id });
        if (!roomMvpsOrError) {
            return left(new RoomMvpNotFoundException())
        };
        return right(roomMvpsOrError);
    }
    async list(): Promise<RoomMvp[]> {
        const roomMvps = await this.ormRepository.find();
        return roomMvps;
    };
};

export { RoomMvpsRepository };