import { CreateMvpRoomSchedule } from "./schedules/CreateMvpRoomSchedule";


export default function initialize(): void {
    const createMvpRoomSchedule = new CreateMvpRoomSchedule()
    console.log('createMvpRoomSchedule', createMvpRoomSchedule)
    createMvpRoomSchedule.initialize();

}