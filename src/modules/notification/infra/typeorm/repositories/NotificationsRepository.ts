import { getRepository, Repository } from "typeorm";
import { Either, left, right, } from "@shared/either";
import { Notification } from '@modules/notification/infra/typeorm/entities/Notification';
import { CreateNotificationDTO } from "@modules/notification/dtos/CreateNotificationDTO";
import { NotificationNotFoundException } from "@modules/notification/domain/exceptions/NotificationNotFoundException";
import { INotificationsRepository } from "@modules/notification/repositories/INotificationsRepository";



class NotificationsRepository implements INotificationsRepository {
    private ormRepository: Repository<Notification>;
    constructor() {
        this.ormRepository = getRepository(Notification);
    };
    async findById(id: string): Promise<Either<NotificationNotFoundException, Notification>> {
        const notificationsOrError = await this.ormRepository.findOne(id);
        if (!notificationsOrError) {
            return left(new NotificationNotFoundException())
        };
        return right(notificationsOrError);
    };
    async create(data: CreateNotificationDTO): Promise<Notification> {
        const newNotification = this.ormRepository.create(data);
        await this.ormRepository.save(newNotification)
        return newNotification;
    };
    async list(): Promise<Notification[]> {
        const notifications = await this.ormRepository.find();
        return notifications;
    };
};

export { NotificationsRepository };