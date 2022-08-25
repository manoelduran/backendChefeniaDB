import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { MvpsFourthRoom } from "../../entities/MvpsFourthRoom";
import { ICreateMvpsFourthRoomDTO, IMvpsFourthRoomRepository } from "../../repositories/IMvpsFourthRoomRepository";

@injectable()
class CreateMvpsFourthRoomUseCase {
    constructor(
        @inject('MvpsFourthRoomRepository')
        private mvpsFourthRoomRepository: IMvpsFourthRoomRepository
    ) { }
    async execute({
        breed,
        dark,
        earth,
        fire,
        ghost,
        holy,
        image,
        level,
        name,
        neutral,
        poison,
        property,
        quantity,
        undead,
        water,
        wind
    }: ICreateMvpsFourthRoomDTO
    ): Promise<void> {
        const alreadyExists = await this.mvpsFourthRoomRepository.findByName(name);
        if (alreadyExists) {
            throw new AppError("This Mvp is already created!");
        };
        this.mvpsFourthRoomRepository.create({
            breed,
            dark,
            earth,
            fire,
            ghost,
            holy,
            image,
            level,
            name,
            neutral,
            poison,
            property,
            quantity,
            undead,
            water,
            wind
        });
    };
};

export { CreateMvpsFourthRoomUseCase };