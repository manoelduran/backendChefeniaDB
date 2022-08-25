import { MvpsSecondRoom } from "../entities/MvpsSecondRoom";


export interface ICreateMvpsSecondRoomDTO {
    name: string,
    quantity: number,
    image: string,
    property: string,
    breed: string,
    level: number,
    neutral: number,
    water: number,
    earth: number,
    fire: number,
    wind: number,
    poison: number,
    holy: number,
    dark: number,
    ghost: number,
    undead: number,
}

interface IMvpsSecondRoomRepository {
    findByName(name: string): Promise<MvpsSecondRoom>;
    create(data: ICreateMvpsSecondRoomDTO): Promise<void>;
    list(): Promise<MvpsSecondRoom[]>;
};

export { IMvpsSecondRoomRepository };