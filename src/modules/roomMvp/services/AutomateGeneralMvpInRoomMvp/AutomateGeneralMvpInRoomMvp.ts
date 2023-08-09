import { IMvpsRepository } from '@modules/mvp/repositories/IMvpsRepository';
import { IRoomsRepository } from '@modules/room/repositories/IRoomsRepository';
import { RoomMvp } from '@modules/roomMvp/infra/typeorm/entities/RoomMvp';
import { IRoomMvpsRepository } from '@modules/roomMvp/repositories/IRoomMvpsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class AutomateGeneralMvpInRoomMvp {
    constructor(
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
        @inject("RoomsRepository")
        private roomsRepository: IRoomsRepository,
        @inject("RoomMvpsRepository")
        private roomMvpsRepository: IRoomMvpsRepository
    ) { }
    public async execute(): Promise<void> {
        let roomMvp1 = { room_id: 'c9bec3c1-7293-4764-97ac-28f921debc0f' } as RoomMvp
        let roomMvp2 = { room_id: '83fd5aaf-60ef-4456-8bf6-cb769943931f' } as RoomMvp
        let roomMvp3 = { room_id: '564da496-9d14-409f-b893-9ec5bedf8145' } as RoomMvp
        let roomMvp4 = { room_id: '0da4196d-9bbf-497c-9f01-db470aaedff2' } as RoomMvp
        const mvps = await this.mvpsRepository.findByGeneral();
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

    }
    private async associateRoomMvp(roomMvp: RoomMvp): Promise<void> {
        await this.roomMvpsRepository.create(roomMvp)
    }
}

export default AutomateGeneralMvpInRoomMvp;