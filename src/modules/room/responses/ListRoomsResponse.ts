import { Room } from "@modules/room/infra/typeorm/entities/Room";



export type ListRoomsResponse = Promise<Room[]>;
