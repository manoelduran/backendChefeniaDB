import { container } from "tsyringe";
import { RoomMvpsRepository } from "@modules/roomMvp/infra/typeorm/repositories/RoomMvpsRepository";
import { IRoomMvpsRepository } from "@modules/roomMvp/repositories/IRoomMvpsRepository";




container.registerSingleton<IRoomMvpsRepository>(
    "RoomMvpsRepository",
    RoomMvpsRepository
)