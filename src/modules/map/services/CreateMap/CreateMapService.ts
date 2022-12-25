import { inject, injectable } from "tsyringe";
import { left, right } from "@shared/either";
import { MapAlreadyExistsException } from "@modules/map/domain/Map/MapAlreadyExistsException";
import { IMapsRepository } from "@modules/map/repositories/IMapsRepository";
import { CreateMapDTO } from "@modules/map/dtos/CreateMapDTO";
import { CreateMapResponse } from "@modules/map/responses/CreateMapResponse";

@injectable()
class CreateMapService {
    constructor(
        @inject("MapsRepository")
        private mapsRepository: IMapsRepository
    ) { }
    async execute({ name }: CreateMapDTO): CreateMapResponse {
        const MapAlreadyExistsOrError = await this.mapsRepository.findByName(name);
        if (MapAlreadyExistsOrError.isRight()) {
            return left(new MapAlreadyExistsException())
        }
        const newMap = await this.mapsRepository.create({ name });
        return right(newMap);
    };
};

export { CreateMapService };