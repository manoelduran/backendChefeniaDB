import { CreateTimerDTO } from "@modules/timer/dtos/CreateTimerDTO";
import { CreateTimerResponse } from "@modules/timer/responses/CreateTimerResponse";
import { ListTimersResponse } from "@modules/timer/responses/ListTimersResponse";
import { CreateTimerService } from "@modules/timer/services/CreateTimer/CreateTimerService";
import { ListTimersService } from "@modules/timer/services/ListTimers/ListTimersService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class TimerController extends BaseController {
    constructor() {
        super();
    };
    async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createTimerService = container.resolve<Service<CreateTimerDTO, CreateTimerResponse>>(CreateTimerService);
        const newTimerOrError = await createTimerService.execute(body);
        if (newTimerOrError.isLeft()) {
            return this.getError(newTimerOrError.value);
        }
        return this.created(newTimerOrError.value);
    };
    async list(): Promise<HttpResponse> {
        const listTimerService = container.resolve<Service<any, ListTimersResponse>>(ListTimersService);
        const timers = await listTimerService.execute();
        return this.ok(timers);
    }
};

export { TimerController };