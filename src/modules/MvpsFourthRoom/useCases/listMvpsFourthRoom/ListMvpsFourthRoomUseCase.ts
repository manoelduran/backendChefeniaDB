import { inject, injectable } from "tsyringe";
import { MvpsFourthRoom } from "../../entities/MvpsFourthRoom";
import { IMvpsFourthRoomRepository } from "../../repositories/IMvpsFourthRoomRepository";

@injectable()
class ListMvpsFourthRoomUseCase {
    constructor(
        @inject('MvpsFourthRoomRepository')
        private mvpsFourthRoomRepository: IMvpsFourthRoomRepository
    ) { }
    async execute(): Promise<MvpsFourthRoom[]> {
        const mvpsFourthRoom = await this.mvpsFourthRoomRepository.list();
        return mvpsFourthRoom;
    };
}

export { ListMvpsFourthRoomUseCase };