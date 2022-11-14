import { container } from "tsyringe";
import { MvpsRepository } from "../infra/typeorm/repositories/MvpsRepository";
import { IMvpsRepository } from "../repositories/IMvpsRepository";



container.registerSingleton<IMvpsRepository>(
    "MvpsRepository",
    MvpsRepository
)