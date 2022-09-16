import { getRepository, Repository } from "typeorm";
import {ICreateMvpsFourthRoomDTO, IMvpsFourthRoomRepository} from '@modules/MvpsFourthRoom/repositories/IMvpsFourthRoomRepository';
import { MvpsFourthRoom } from "@modules/MvpsFourthRoom/entities/MvpsFourthRoom";

class MvpsFourthRoomRepository implements IMvpsFourthRoomRepository {
    private repository: Repository<MvpsFourthRoom>
    constructor() {
        this.repository = getRepository(MvpsFourthRoom)
    };
    async create({ image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind }: ICreateMvpsFourthRoomDTO): Promise<void> {
        const mvpFourthRoom = this.repository.create({
            image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind
        });
        await this.repository.save(mvpFourthRoom);
    }
    async findByName(name: string): Promise<MvpsFourthRoom> {
        const alreadyExists = await this.repository.findOne({ name });
        return alreadyExists;
    }
    async list(): Promise<MvpsFourthRoom[]> {
        const mvpsFourthRoom = this.repository.find();
        return mvpsFourthRoom;
    }
}

export { MvpsFourthRoomRepository };