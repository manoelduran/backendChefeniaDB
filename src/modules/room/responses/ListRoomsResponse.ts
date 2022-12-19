import { Either } from "@shared/either";
import { RoomsNotFoundException } from "@modules/room/domain/Room/RoomsNotFoundException";
import { Room } from "@modules/room/infra/typeorm/entities/Room";



export type ListRoomsResponse = Promise<
    Either<
        RoomsNotFoundException,
        Room[]
    >
>;
