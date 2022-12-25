import { Either, left, right, } from "@shared/either";
import { INotificationsRepository } from "@modules/notification/repositories/INotificationsRepository";
import { Notification } from "@modules/notification/infra/typeorm/entities/Notification";
import { NotificationNotFoundException } from "@modules/notification/domain/exceptions/NotificationNotFoundException";
import { CreateNotificationDTO } from "@modules/notification/dtos/CreateNotificationDTO";



class NotificationsRepositoryInMemory implements INotificationsRepository {
    private notifications: Notification[]
    constructor() {
        this.notifications = [];
    };
    async findById(id: string): Promise<Either<NotificationNotFoundException, Notification>> {
        const notificationOrError = this.notifications.find(notification => notification.id === id);
        if (!notificationOrError) {
            return left(new NotificationNotFoundException())
        };
        return right(notificationOrError);
    };
    async create(data: CreateNotificationDTO): Promise<Notification> {
        const newNotification = new Notification();
        Object.assign(newNotification, data);
        this.notifications.push(newNotification);
        return newNotification;
    };
    async list(): Promise<Notification[]> {
        const notifications = this.notifications;
        return notifications;
    };
};

export { NotificationsRepositoryInMemory };