import { inject, injectable } from "tsyringe";
import { CreateNotificationDTO } from "@modules/notification/dtos/CreateNotificationDTO";
import { CreateNotificationResponse } from "@modules/notification/responses/CreateNotificationResponse";
import { INotificationsRepository } from "@modules/notification/repositories/INotificationsRepository";

@injectable()
class CreateNotificationService {
    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository
    ) { }
    async execute({ message }: CreateNotificationDTO): CreateNotificationResponse {
        const newNotification = await this.notificationsRepository.create({ message });
        return newNotification;
    };
};

export { CreateNotificationService };