import { MvpsThirdRoom } from "@modules/MvpsThirdRoom/entities/MvpsThirdRoom";
import { IMvpsThirdRoomRepository } from "@modules/MvpsThirdRoom/repositories/IMvpsThirdRoomRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListMvpsThirdRoomUseCase {
    constructor(
        @inject('MvpsThirdRoomRepository')
        private mvpsThirdRoomRepository: IMvpsThirdRoomRepository
    ) { }
    async execute(): Promise<MvpsThirdRoom[]> {
        const mvpsThirdRoom = await this.mvpsThirdRoomRepository.list();
        return mvpsThirdRoom;
    };
}

export { ListMvpsThirdRoomUseCase };