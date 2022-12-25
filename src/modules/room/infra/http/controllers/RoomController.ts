import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { CreateRoomResponse } from "@modules/room/responses/CreateRoomResponse";
import { ListRoomsResponse } from "@modules/room/responses/ListRoomsResponse";
import { CreateRoomService } from "@modules/room/services/CreateRoom/CreateRoomService";
import { ListRoomsService } from "@modules/room/services/ListRooms/ListRoomsService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class RoomController extends BaseController {
    constructor() {
        super();
    };

    async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createRoomService = container.resolve<Service<CreateRoomDTO, CreateRoomResponse>>(CreateRoomService);
        const newRoomOrError = await createRoomService.execute(body);
        if (newRoomOrError.isLeft()) {
            return this.getError(newRoomOrError.value);
        }
        return this.created(newRoomOrError.value);
    };
    async list(): Promise<HttpResponse> {
        const listRoomService = container.resolve<Service<any, ListRoomsResponse>>(ListRoomsService);
        const rooms = await listRoomService.execute();

        return this.ok(rooms);
    };
};

export { RoomController };