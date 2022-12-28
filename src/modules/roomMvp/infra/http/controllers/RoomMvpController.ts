import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class RoomMvpController extends BaseController {
    constructor() {
        super();
    };

    async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createRoomMvpService = container.resolve<Service<CreateRoomMvpDTO, CreateRoomMvpResponse>>(CreateRoomMvpService);
        const newRoomMvpOrError = await createRoomMvpService.execute(body);
        if (newRoomMvpOrError.isLeft()) {
            return this.getError(newRoomMvpOrError.value);
        }
        return this.created(newRoomMvpOrError.value);
    };
    async list(): Promise<HttpResponse> {
        const listRoomMvpsService = container.resolve<Service<any, ListRoomMvpsResponse>>(ListRoomMvpsService);
        const roomMvps = await listRoomMvpsService.execute();

        return this.ok(roomMvps);
    };
};

export { RoomMvpController };