import { getRepository, Repository } from "typeorm";
import { MvpsThirdRoom } from "../../entities/MvpsThirdRoom";
import { ICreateMvpsThirdRoomDTO, IMvpsThirdRoomRepository } from "../IMvpsThirdRoomRepository";


class MvpsThirdRoomRepository implements IMvpsThirdRoomRepository {
    private repository: Repository<MvpsThirdRoom>
    constructor() {
        this.repository = getRepository(MvpsThirdRoom)
    };
    async create({ image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind }: ICreateMvpsThirdRoomDTO): Promise<void> {
        const mvpThirdRoom = this.repository.create({
            image, breed, dark, earth, fire, ghost, holy, level, name, neutral, poison, property, quantity, undead, water, wind
        });
        await this.repository.save(mvpThirdRoom);
    }
    async findByName(name: string): Promise<MvpsThirdRoom> {
        const alreadyExists = await this.repository.findOne({ name });
        return alreadyExists;
    }
    async list(): Promise<MvpsThirdRoom[]> {
        const mvpsThirdRoom = this.repository.find();
        return mvpsThirdRoom;
    }
}

export { MvpsThirdRoomRepository };