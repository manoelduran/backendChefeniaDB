import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { CreateRoomResponse } from "@modules/room/responses/CreateRoomResponse";
import { CreateRoomService } from "@modules/room/services/CreateRoom/CreateRoomService";
import { Service } from "@shared/domain/Service";
import { right } from "@shared/either";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class MapController extends BaseController {
    constructor() {
        super();
    };

    async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createRoomService = container.resolve<Service<CreateRoomDTO, CreateRoomResponse>>(CreateRoomService);
        const newRoomOrError = await createRoomService.execute(body);
        if(newRoomOrError.isLeft()) {
            return this.getError(newRoomOrError.value);
        }
        return this.created(newRoomOrError.value);
    }
}

export { MapController };