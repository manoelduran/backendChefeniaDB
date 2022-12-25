import { CreateMapDTO } from "@modules/map/dtos/CreateMapDTO";
import { CreateMapResponse } from "@modules/map/responses/CreateMapResponse";
import { ListMapsResponse } from "@modules/map/responses/ListMapsResponse";
import { CreateMapService } from "@modules/map/services/CreateMap/CreateMapService";
import { ListMapsService } from "@modules/map/services/ListMaps/ListMapsService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class MapController extends BaseController {
    constructor() {
        super();
    };

    async list(): Promise<HttpResponse> {
        const listMapService = container.resolve<Service<any, ListMapsResponse>>(ListMapsService);
        const maps = await listMapService.execute();
        return this.ok(maps);
    } 
    async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createMapService = container.resolve<Service<CreateMapDTO, CreateMapResponse>>(CreateMapService);
        const newMapOrError = await createMapService.execute(body);
        if (newMapOrError.isLeft()) {
            return this.getError(newMapOrError.value);
        }
        return this.created(newMapOrError.value);
    }
}

export { MapController };