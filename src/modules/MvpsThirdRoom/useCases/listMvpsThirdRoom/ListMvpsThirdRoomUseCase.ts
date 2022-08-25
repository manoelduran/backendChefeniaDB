import { inject, injectable } from "tsyringe";
import { MvpsThirdRoom } from "../../entities/MvpsThirdRoom";
import { IMvpsThirdRoomRepository } from "../../repositories/IMvpsThirdRoomRepository";


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