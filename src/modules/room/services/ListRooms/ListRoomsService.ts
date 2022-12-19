import { RoomsNotFoundException } from "@modules/room/domain/Room/RoomsNotFoundException";
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { ListRoomsResponse } from "@modules/room/responses/ListRoomsResponse";
import { left, right } from "@shared/either";
import { inject, injectable } from "tsyringe";

@injectable()
class ListRoomsService {
    constructor(
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository
    ) { }
    async execute(): ListRoomsResponse {
        const roomsOrError = await this.roomsRepository.list();
        if (roomsOrError.isLeft()) {
            return left(new RoomsNotFoundException());
        };
        return right(roomsOrError.value);
    };
};

export { ListRoomsService };