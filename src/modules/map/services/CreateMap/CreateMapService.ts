import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { CreateRoomResponse } from "@modules/room/responses/CreateRoomResponse";
import { inject, injectable } from "tsyringe";
import { left, right } from "@shared/either";
import { MapAlreadyExistsException } from "@modules/map/domain/Map/MapAlreadyExistsException";
import { IMapsRepository } from "@modules/map/repositories/IMapsRepository";

@injectable()
class CreateMapService {
    constructor(
        @inject("MapsRepository")
        private mapsRepository: IMapsRepository
    ) { }
    async execute({ name }: CreateRoomDTO): CreateRoomResponse {
        const MapAlreadyExistsOrError = await this.mapsRepository.findByName(name);
        if (MapAlreadyExistsOrError.isRight()) {
            return left(new MapAlreadyExistsException())
        }
        const newMap = await this.mapsRepository.create({ name });
        return right(newMap);
    };
};

export { CreateMapService };