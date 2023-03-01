import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { IMvpsRepository } from '@modules/mvp/repositories/IMvpsRepository';
import { Room } from '@modules/room/infra/typeorm/entities/Room';
import { IRoomsRepository } from '@modules/room/repositories/IRoomsRepository';
import cron from 'node-cron'
import { inject, injectable } from 'tsyringe';
import { IRoomMvpsRepository } from '../repositories/IRoomMvpsRepository';

@injectable()
class CreateMvpRoomJob {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository,
        @inject("RoomMvpsRepository")
        private roomMvpsRepository: IRoomMvpsRepository
    ) { }
    public async execute(): Promise<void> {
        cron.schedule('* * * * *',
            async () => {
                const mvps = await this.mvpsRepository.findByGeneral();
                const rooms = await this.roomsRepository.list();
                await associateRoomMvp()
            },
            {
                scheduled: true,
                timezone: 'Etc/UTC',
            },
        )
    }
    private async associateRoomMvp(mvp: Mvp, room: Room): Promise<boolean> {
        const associatedMvp = await this.roomMvpsRepository.create({
            mvp_id: mvp.id,
            room_id: room.id
        })
        if (associatedMvp) {
            return false;
        }

        const expirationDate = addDays(appointment?.appointment_date, 1);

        if (!appointment.cancelled_at && isAfter(getCurrentDay(), expirationDate)) {
            return false;
        }

        return true;
    }

}

export default CreateMvpRoomJob;