import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";
import { CreateRoomMvpResponse } from "@modules/roomMvp/responses/CreateRoomMvpResponse";
import { right, left } from "@shared/either";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateRoomMvpService {
    constructor(
        @inject("RoomMvpsRepository")
        private roomMvpsRepository: IRoomMvpsRepository,
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository,

    ) { }
    async execute({ mvp_id, room_id }: CreateRoomMvpDTO): CreateRoomMvpResponse {
        const mvpsAlreadyExistsOrError = await this.mvpsRepository.findById(mvp_id);
        if (mvpsAlreadyExistsOrError.isLeft()) {
            return left(mvpsAlreadyExistsOrError.value)
        }
        const roomsAlreadyExistsOrError = await this.roomsRepository.findById(room_id);
        if (roomsAlreadyExistsOrError.isLeft()) {
            return left(roomsAlreadyExistsOrError.value)
        }
        if (mvpsAlreadyExistsOrError && roomsAlreadyExistsOrError) {
            const newRoomMvp = await this.roomMvpsRepository.create({
                mvp_id,
                room_id
            });
            return right(newRoomMvp);
        }
    }
}

export { CreateRoomMvpService };