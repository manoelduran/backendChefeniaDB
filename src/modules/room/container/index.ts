import { container } from "tsyringe";
import { RoomsRepository } from '@modules/room/infra/typeorm/repositories/RoomsRepository';
import { IRoomsRepository } from "@modules/room/repositories/IRoomsRepository";



container.registerSingleton<IRoomsRepository>(
    "RoomsRepository",
    RoomsRepository
)