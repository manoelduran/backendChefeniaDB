import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { ListRoomMvpByRoomIdDTO } from "@modules/roomMvp/dtos/ListRoomMvpByRoomIdDTO";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { ListRoomMvpsByRoomIdResponse } from "@modules/roomMvp/responses/ListRoomMvpsByRoomIdResponse";
import { left } from "@shared/either";

import { inject, injectable } from "tsyringe";

@injectable()
class ListMvpsByRoomIdService {
    constructor(
        @inject("RoomMvpsRepository")
        private roomMvpsRepository: IRoomMvpsRepository,
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository
    ) { }
    async execute({room_id}: ListRoomMvpByRoomIdDTO): ListRoomMvpsByRoomIdResponse {
        const roomOrError = await this.roomsRepository.findById(room_id);
        if(roomOrError.isLeft()){
            return left(roomOrError.value)
        }
        const roomMvps = await this.roomMvpsRepository.findByRoomId(roomOrError.value.id);
        return roomMvps;
    };
};

export { ListMvpsByRoomIdService };