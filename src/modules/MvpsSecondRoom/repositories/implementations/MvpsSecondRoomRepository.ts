import { getRepository, Repository } from "typeorm";
import { ICreateMvpsSecondRoomDTO, IMvpsSecondRoomRepository } from "@modules/MvpsSecondRoom/repositories/IMvpsSecondRoomRepository";
import { MvpsSecondRoom } from "@modules/MvpsSecondRoom/entities/MvpsSecondRoom";

class MvpsSecondRoomRepository implements IMvpsSecondRoomRepository {
    private repository: Repository<MvpsSecondRoom>
    constructor() {
        this.repository = getRepository(MvpsSecondRoom)
    };
    async create({ image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind }: ICreateMvpsSecondRoomDTO): Promise<void> {
        const mvpSecondRoom = this.repository.create({
            image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind
        });
        await this.repository.save(mvpSecondRoom);
    }
    async findByName(name: string): Promise<MvpsSecondRoom> {
        const alreadyExists = await this.repository.findOne({ name });
        return alreadyExists;
    }
    async list(): Promise<MvpsSecondRoom[]> {
        const mvpsSecondRoom = this.repository.find();
        return mvpsSecondRoom;
    }
}

export { MvpsSecondRoomRepository };