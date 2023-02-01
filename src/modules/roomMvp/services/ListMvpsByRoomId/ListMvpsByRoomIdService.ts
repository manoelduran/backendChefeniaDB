import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { ListRoomMvpByRoomIdDTO } from "@modules/roomMvp/dtos/ListRoomMvpByRoomIdDTO";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { ListRoomMvpsByRoomIdResponse } from "@modules/roomMvp/responses/ListRoomMvpsByRoomIdResponse";
import { left, right } from "@shared/either";

import { inject, injectable } from "tsyringe";

@injectable()
class ListMvpsByRoomIdService {
    constructor(
        @inject("RoomMvpsRepository")
        private roomMvpsRepository: IRoomMvpsRepository,
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository,
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
    ) { }
    async execute({ room_id }: ListRoomMvpByRoomIdDTO): ListRoomMvpsByRoomIdResponse {
        const roomOrError = await this.roomsRepository.findById(room_id);
        if (roomOrError.isLeft()) {
            return left(roomOrError.value)
        }
        const roomMvpsOrError = await this.roomMvpsRepository.findByRoomId(roomOrError.value.id);
        if (roomMvpsOrError.isLeft()) {
            return left(roomMvpsOrError.value)
        }
        const mvps = await this.mvpsRepository.findByIds(roomMvpsOrError.value.map(roomMvps => roomMvps.mvp_id))
        return right(mvps);
    };
};

export { ListMvpsByRoomIdService };