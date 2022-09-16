import { MvpsSecondRoom } from "@modules/MvpsSecondRoom/entities/MvpsSecondRoom";
import { IMvpsSecondRoomRepository } from "@modules/MvpsSecondRoom/repositories/IMvpsSecondRoomRepository";
import { inject, injectable } from "tsyringe";

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