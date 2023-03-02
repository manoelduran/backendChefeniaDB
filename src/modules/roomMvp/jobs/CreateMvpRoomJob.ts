import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { IMvpsRepository } from '@modules/mvp/repositories/IMvpsRepository';
import { Room } from '@modules/room/infra/typeorm/entities/Room';
import { IRoomsRepository } from '@modules/room/repositories/IRoomsRepository';
import cron from 'node-cron'
import { inject, injectable } from 'tsyringe';
import { RoomMvp } from '../infra/typeorm/entities/RoomMvp';
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
                let roomMvp1 = { room_id: 'dfef20f7-2d37-44a3-b2e0-09e7702940b7' } as RoomMvp
                let roomMvp2 = { room_id: '2135c124-99f8-484a-a8ee-9813cbe3ebfd' } as RoomMvp
                let roomMvp3 = { room_id: '6a3804c5-7b30-42b9-8a8d-74e10188c9f8' } as RoomMvp
                let roomMvp4 = { room_id: 'e3051e8c-8fa4-4497-b5e6-ffd003d65e61' } as RoomMvp
                const mvps = await this.mvpsRepository.findByGeneral();
                const rooms = await this.roomsRepository.list();
                const mvp = mvps.forEach(async mvp => {
                    roomMvp1 = {
                        ...roomMvp1,
                        mvp_id: mvp.id
                    }
                    roomMvp2 = {
                        ...roomMvp2,
                        mvp_id: mvp.id
                    }
                    roomMvp3 = {
                        ...roomMvp3,
                        mvp_id: mvp.id
                    }
                    roomMvp4 = {
                        ...roomMvp4,
                        mvp_id: mvp.id
                    }
                    this.associateRoomMvp(roomMvp1)
                    this.associateRoomMvp(roomMvp2)
                    this.associateRoomMvp(roomMvp3)
                    this.associateRoomMvp(roomMvp4)
                })

            },
            {
                scheduled: true,
                timezone: 'Etc/UTC',
            },
        )
    }
    private async associateRoomMvp(roomMvp: RoomMvp): Promise<void> {
        await this.roomMvpsRepository.create(roomMvp)
    }

}

export default CreateMvpRoomJob;