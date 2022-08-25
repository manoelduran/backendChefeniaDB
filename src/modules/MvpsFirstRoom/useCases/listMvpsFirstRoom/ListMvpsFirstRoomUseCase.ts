import { inject, injectable } from "tsyringe";
import { MvpsFirstRoom } from "../../entities/MvpsFirstRoom";
import { IMvpsFirstRoomRepository } from "../../repositories/IMvpsFirstRoomRepository";

@injectable()
class ListMvpsFirstRoomUseCase {
    constructor(
        @inject('MvpsFirstRoomRepository')
        private mvpsFirstRoomRepository: IMvpsFirstRoomRepository
    ) { }
    async execute(): Promise<MvpsFirstRoom[]> {
        const mvpsFirstRoom = await this.mvpsFirstRoomRepository.list();
        return mvpsFirstRoom;
    };
}

export { ListMvpsFirstRoomUseCase };