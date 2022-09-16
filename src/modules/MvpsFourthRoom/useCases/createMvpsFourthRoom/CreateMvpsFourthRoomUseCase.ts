import { ICreateMvpsFourthRoomDTO, IMvpsFourthRoomRepository } from "@modules/MvpsFourthRoom/repositories/IMvpsFourthRoomRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

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