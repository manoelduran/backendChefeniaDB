import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { ListRoomsResponse } from "@modules/room/responses/ListRoomsResponse";
import { inject, injectable } from "tsyringe";

@injectable()
class ListRoomsService {
    constructor(
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository
    ) { }
    async execute(): ListRoomsResponse {
        const rooms = await this.roomsRepository.list();
        return rooms;
    };
};

export { ListRoomsService };