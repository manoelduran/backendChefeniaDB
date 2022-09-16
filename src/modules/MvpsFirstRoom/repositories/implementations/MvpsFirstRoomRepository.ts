import { getRepository, Repository } from "typeorm";
import {ICreateMvpsFirstRoomDTO, IMvpsFirstRoomRepository} from "@modules/MvpsFirstRoom/repositories/IMvpsFirstRoomRepository";
import { MvpsFirstRoom } from "@modules/MvpsFirstRoom/entities/MvpsFirstRoom";

class MvpsFirstRoomRepository implements IMvpsFirstRoomRepository {
    private repository: Repository<MvpsFirstRoom>
    constructor() {
        this.repository = getRepository(MvpsFirstRoom)
    };
    async create({ image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind }: ICreateMvpsFirstRoomDTO): Promise<void> {
        const mvpFirstRoom = this.repository.create({
            image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind
        });
        await this.repository.save(mvpFirstRoom);
    }
    async findByName(name: string): Promise<MvpsFirstRoom> {
        const alreadyExists = await this.repository.findOne({ name });
        return alreadyExists;
    }
    async list(): Promise<MvpsFirstRoom[]> {
        const mvpsFirstRoom = this.repository.find();
        return mvpsFirstRoom;
    }
}

export { MvpsFirstRoomRepository };