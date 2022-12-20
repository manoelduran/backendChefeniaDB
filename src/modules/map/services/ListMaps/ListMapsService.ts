
import { MapsNotFoundException } from "@modules/map/domain/Map/MapsNotFoundException";
import { IMapsRepository } from "@modules/map/repositories/IMapsRepository";
import { ListMapsResponse } from "@modules/map/responses/ListMapsResponse";
import { left, right } from "@shared/either";
import { inject, injectable } from "tsyringe";

@injectable()
class ListMapsService {
    constructor(
        @inject("MapsRepository")
        private mapsRepository: IMapsRepository
    ) { }
    async execute(): ListMapsResponse {
        const mapsOrError = await this.mapsRepository.list();
        if (mapsOrError.isLeft()) {
            return left(new MapsNotFoundException());
        };
        return right(mapsOrError.value);
    };
};

export { ListMapsService };