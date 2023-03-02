import CreateMvpRoomJob from "@modules/roomMvp/jobs/CreateMvpRoomJob";
import { container } from "tsyringe";


export class CreateMvpRoomSchedule {
    async initialize(): Promise<void> {
        const associateMvpRoom = container.resolve(CreateMvpRoomJob)
        await associateMvpRoom.execute()
    }
}