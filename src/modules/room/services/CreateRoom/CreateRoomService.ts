import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { CreateRoomResponse } from "@modules/room/responses/CreateRoomResponse";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateRoomService {
    constructor(
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository
    ) { }
    async execute(): CreateRoomResponse {
        return
    }
}

export { CreateRoomService }