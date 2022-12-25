import { container } from "tsyringe";
import { NotificationsRepository } from "@modules/notification/infra/typeorm/repositories/NotificationsRepository";
import { INotificationsRepository } from "@modules/notification/repositories/INotificationsRepository";




container.registerSingleton<INotificationsRepository>(
    "NotificationsRepository",
    NotificationsRepository
)