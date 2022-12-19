import { container } from "tsyringe";
import { MapsRepository } from "../infra/typeorm/repositories/MapsRepository";
import { IMapsRepository } from "../repositories/IMapsRepository";




container.registerSingleton<IMapsRepository>(
    "MapsRepository",
    MapsRepository
)