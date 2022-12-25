import { Notification } from "@modules/notification/infra/typeorm/entities/Notification";


export type ListNotificationsResponse = Promise<Notification[]>;
