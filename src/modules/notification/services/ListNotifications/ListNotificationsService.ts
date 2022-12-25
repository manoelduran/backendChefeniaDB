import { INotificationsRepository } from "@modules/notification/repositories/INotificationsRepository";
import { ListNotificationsResponse } from "@modules/notification/responses/ListNotificationsResponse";
import { inject, injectable } from "tsyringe";

@injectable()
class ListNotificationsService {
    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository
    ) { }
    async execute(): ListNotificationsResponse {
        const notifications = await this.notificationsRepository.list();
        return notifications;
    };
};

export { ListNotificationsService };