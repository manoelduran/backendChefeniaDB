import { Either } from "@shared/either";
import { CreateNotificationDTO } from "@modules/notification/dtos/CreateNotificationDTO";
import { Notification } from "@modules/notification/infra/typeorm/entities/Notification";
import { NotificationNotFoundException } from "@modules/notification/domain/exceptions/NotificationNotFoundException";

interface INotificationsRepository {
    create(data: CreateNotificationDTO): Promise<Notification>;
    findById(id: string): Promise<Either<NotificationNotFoundException, Notification>>;
    list(): Promise<Notification[]>;
};

export { INotificationsRepository };