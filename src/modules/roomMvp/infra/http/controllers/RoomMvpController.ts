import { CreateRoomMvpDTO } from "@modules/roomMvp/dtos/CreateRoomMvpDTO";
import { ListRoomMvpByRoomIdDTO } from "@modules/roomMvp/dtos/ListRoomMvpByRoomIdDTO";
import { CreateRoomMvpResponse } from "@modules/roomMvp/responses/CreateRoomMvpResponse";
import { ListRoomMvpsByRoomIdResponse } from "@modules/roomMvp/responses/ListRoomMvpsByRoomIdResponse";
import { ListRoomMvpsResponse } from "@modules/roomMvp/responses/ListRoomMvpsResponse";
import AutomateGeneralMvpInRoomMvp from "@modules/roomMvp/services/AutomateGeneralMvpInRoomMvp/AutomateGeneralMvpInRoomMvp";
import { CreateRoomMvpService } from "@modules/roomMvp/services/CreateRoomMvp/CreateRomMvpService";
import { ListMvpsByRoomIdService } from "@modules/roomMvp/services/ListMvpsByRoomId/ListMvpsByRoomIdService";
import { ListRoomMvpsService } from "@modules/roomMvp/services/ListRoomMvps/ListRoomMvpsService";
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
    async listByRoomId(): Promise<HttpResponse> {
        const { room_id } = this.request.params;
        const listRoomMvpsByRoomId = container.resolve<Service<ListRoomMvpByRoomIdDTO, ListRoomMvpsByRoomIdResponse>>(ListMvpsByRoomIdService);
        const roomMvpsOrError = await listRoomMvpsByRoomId.execute({ room_id });
        if (roomMvpsOrError.isLeft()) {
            return this.getError(roomMvpsOrError.value);
        }
        return this.ok(roomMvpsOrError.value);
    };
    async automate(): Promise<HttpResponse> {
        const automateGeneralMvpInRoomMvp = container.resolve<Service<any, void>>(AutomateGeneralMvpInRoomMvp);
        await automateGeneralMvpInRoomMvp.execute();
        return this.noContent();
    };
};

export { RoomMvpController };