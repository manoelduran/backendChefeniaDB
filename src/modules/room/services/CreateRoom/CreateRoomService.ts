import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";
import { CreateRoomResponse } from "@modules/room/responses/CreateRoomResponse";
import { inject, injectable } from "tsyringe";
import { left, right } from "@shared/either";
import { RoomAlreadyExistsException } from "@modules/room/domain/Room/RoomAlreadyExistsException";

@injectable()
class CreateRoomService {
    constructor(
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository
    ) { }
    async execute({ name }: CreateRoomDTO): CreateRoomResponse {
        const RoomAlreadyExistsOrError = await this.roomsRepository.findByName(name);
        if (RoomAlreadyExistsOrError.isRight()) {
            return left(new RoomAlreadyExistsException())
        }
        const newRoom = await this.roomsRepository.create({ name });
        return right(newRoom);
    };
};

export { CreateRoomService };