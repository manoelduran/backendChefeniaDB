import { MvpsFirstRoom } from "../entities/MvpsFirstRoom";


export interface ICreateMvpsFirstRoomDTO {
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

interface IMvpsFirstRoomRepository {
    findByName(name: string): Promise<MvpsFirstRoom>;
    create(data: ICreateMvpsFirstRoomDTO): Promise<void>;
    list(): Promise<MvpsFirstRoom[]>;
};

export { IMvpsFirstRoomRepository };