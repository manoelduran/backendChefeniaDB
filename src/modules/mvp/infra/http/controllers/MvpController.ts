import { CreateMvpDTO } from "@modules/mvp/dtos/CreateMvpDTO";
import { CreateMvpResponse } from "@modules/mvp/responses/CreateMvpResponse";
import { ListMvpResponse } from "@modules/mvp/responses/ListMvpResponse";
import { CreateMvpService } from "@modules/mvp/services/CreateMvp/CreateMvpService";
import { ListMvpsService } from "@modules/mvp/services/ListMvps/ListMvpsService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";

export class MvpController extends BaseController {
    constructor() {
        super();
    };
    public async list(): Promise<HttpResponse> {
        const listMvpsService = container.resolve<Service<any, ListMvpResponse>>(ListMvpsService);
        const mvps = await listMvpsService.execute();
        return this.ok(mvps);
    };

    public async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createMvpService = container.resolve<Service<CreateMvpDTO, CreateMvpResponse>>(CreateMvpService);
        const mvpOrError = await createMvpService.execute(body);

        if (mvpOrError.isLeft()) {
            return this.getError(mvpOrError.value);
        };

        return this.created(mvpOrError.value);
    };
}