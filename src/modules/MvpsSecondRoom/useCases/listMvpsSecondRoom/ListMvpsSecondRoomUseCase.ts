import { inject, injectable } from "tsyringe";
import { MvpsSecondRoom } from "../../entities/MvpsSecondRoom";
import { IMvpsSecondRoomRepository } from "../../repositories/IMvpsSecondRoomRepository";

@injectable()
class ListMvpsSecondRoomUseCase {
    constructor(
        @inject('MvpsSecondRoomRepository')
        private mvpsSecondRoomRepository: IMvpsSecondRoomRepository
    ) { }
    async execute(): Promise<MvpsSecondRoom[]> {
        const mvpsSecondRoom = await this.mvpsSecondRoomRepository.list();
        return mvpsSecondRoom;
    };
}

export { ListMvpsSecondRoomUseCase };