import { MvpAlreadyExistsException } from "@modules/mvp/domain/Mvp/MvpAlreadyExistsException";
import { MvpsRepositoryInMemory } from "@modules/mvp/repositories/in-memory/MvpsRepositoryInMemory";
import { CreateMvpService } from "./CreateMvpService";


let mvpsRepositoryInMemory: MvpsRepositoryInMemory;
let createMvpService: CreateMvpService;

describe("Create Mvp", () => {
    beforeAll(() => {
        mvpsRepositoryInMemory = new MvpsRepositoryInMemory();
        createMvpService = new CreateMvpService(mvpsRepositoryInMemory);
    });
    it("Should be able to create a Mvp", async () => {
        const newMvp = {
            name: 'Novo Mvp',
            quantity: 30,
            property: 'Fogo',
            respawn: 'moc_dung_02',
            breed: 'Fire',
            level: 120,
            neutral: 20,
            water: 30,
            earth: 40,
            fire: 25,
            wind: 33,
            poison: 22,
            holy: 35,
            dark: 40,
            ghost: 70,
            undead: 80
        };
        const createdMvp = await createMvpService.execute(newMvp);
        console.log('createdMvp', createdMvp)
        expect(createdMvp.value).toHaveProperty("id");
    });
    it("Should not be able to create a Mvp with the same name", async () => {
        const newMvp1 = {
            name: 'Novo Mvp',
            quantity: 30,
            property: 'Fogo',
            respawn: 'moc_dung_02',
            breed: 'Fire',
            level: 120,
            neutral: 20,
            water: 30,
            earth: 40,
            fire: 25,
            wind: 33,
            poison: 22,
            holy: 35,
            dark: 40,
            ghost: 70,
            undead: 80
        };
        await createMvpService.execute(newMvp1);
        const newMvp2 = {
            name: 'Novo Mvp',
            quantity: 30,
            property: 'Fogo',
            respawn: 'moc_dung_02',
            breed: 'Fire',
            level: 120,
            neutral: 20,
            water: 30,
            earth: 40,
            fire: 25,
            wind: 33,
            poison: 22,
            holy: 35,
            dark: 40,
            ghost: 70,
            undead: 80
        };
       const createdMvp = await createMvpService.execute(newMvp2);
       console.log("ALOHA", new MvpAlreadyExistsException())
        expect(createdMvp.value).toEqual(new MvpAlreadyExistsException());
    })
});