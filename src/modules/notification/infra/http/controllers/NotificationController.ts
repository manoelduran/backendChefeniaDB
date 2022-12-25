import { CreateNotificationDTO } from "@modules/notification/dtos/CreateNotificationDTO";
import { CreateNotificationResponse } from "@modules/notification/responses/CreateNotificationResponse";
import { ListNotificationsResponse } from "@modules/notification/responses/ListNotificationsResponse";
import { CreateNotificationService } from "@modules/notification/services/CreateNotification/CreateNotificationService";
import { ListNotificationsService } from "@modules/notification/services/ListNotifications/ListNotificationsService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";


class NotificationController extends BaseController {
    constructor() {
        super();
    };
    async list(): Promise<HttpResponse> {
        const listNotificationsService = container.resolve<Service<any, ListNotificationsResponse>>(ListNotificationsService);
        const notifications = await listNotificationsService.execute();
        return this.ok(notifications);
    }
    async create(): Promise<HttpResponse> {
        const { body } = this.request;
        const createNotificationService = container.resolve<Service<CreateNotificationDTO, CreateNotificationResponse>>(CreateNotificationService);
        const newNotification = await createNotificationService.execute(body);
        return this.created(newNotification);
    }
}

export { NotificationController };