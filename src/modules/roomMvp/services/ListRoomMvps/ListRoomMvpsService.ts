import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { ListRoomMvpsResponse } from "@modules/roomMvp/responses/ListRoomMvpsResponse";
import { inject, injectable } from "tsyringe";

@injectable()
class ListRoomMvpsService {
    constructor(
        @inject("RoomMvpsRepository")
        private roomMvpsRepository: IRoomMvpsRepository
    ) { }
    async execute(): ListRoomMvpsResponse {
        const roomMvps = await this.roomMvpsRepository.list();
        return roomMvps;
    };
};

export { ListRoomMvpsService };