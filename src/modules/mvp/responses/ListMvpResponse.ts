import { Either } from "@shared/either";
import { MvpListNotFoundException } from "../domain/Mvp/MvpListNotFoundException";
import { Mvp } from "../infra/typeorm/entities/Mvp";

export type ListMvpResponse = Promise<Either<MvpListNotFoundException, Mvp[]>>;