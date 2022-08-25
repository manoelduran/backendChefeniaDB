import { MvpsFourthRoom } from "../entities/MvpsFourthRoom";


export interface ICreateMvpsFourthRoomDTO {
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

interface IMvpsFourthRoomRepository {
    findByName(name: string): Promise<MvpsFourthRoom>;
    create(data: ICreateMvpsFourthRoomDTO): Promise<void>;
    list(): Promise<MvpsFourthRoom[]>;
};

export { IMvpsFourthRoomRepository };