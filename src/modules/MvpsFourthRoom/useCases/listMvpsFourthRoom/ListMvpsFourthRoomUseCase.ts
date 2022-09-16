import { MvpsFourthRoom } from "@modules/MvpsFourthRoom/entities/MvpsFourthRoom";
import { IMvpsFourthRoomRepository } from "@modules/MvpsFourthRoom/repositories/IMvpsFourthRoomRepository";
import { inject, injectable } from "tsyringe";

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