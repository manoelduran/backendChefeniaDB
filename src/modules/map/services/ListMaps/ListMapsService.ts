import { IMapsRepository } from "@modules/map/repositories/IMapsRepository";
import { ListMapsResponse } from "@modules/map/responses/ListMapsResponse";
import { inject, injectable } from "tsyringe";

@injectable()
class ListMapsService {
    constructor(
        @inject("MapsRepository")
        private mapsRepository: IMapsRepository
    ) { }
    async execute(): ListMapsResponse {
        const maps = await this.mapsRepository.list();
        return maps;
    };
};

export { ListMapsService };