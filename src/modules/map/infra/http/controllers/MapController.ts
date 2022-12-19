import { CreateMapDTO } from "@modules/map/dtos/CreateMapDTO";
import { CreateMapResponse } from "@modules/map/responses/CreateMapResponse";
import { CreateMapService } from "@modules/map/services/CreateMap/CreateMapService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class MapController extends BaseController {
    constructor() {
        super();
    };

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