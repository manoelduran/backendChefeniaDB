import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { MvpsRepositoryInMemory } from "@modules/mvp/repositories/in-memory/MvpsRepositoryInMemory";
import { ListMvpsService } from '@modules/mvp/services/ListMvps/ListMvpsService';
import { left, right } from "@shared/either";
import { CreateMvpService } from "../CreateMvp/CreateMvpService";


let mvpsRepositoryInMemory: MvpsRepositoryInMemory;
let listMvpsService: ListMvpsService;
let createMvpService: CreateMvpService;

describe('List Mvps', () => {
    beforeAll(() => {
        mvpsRepositoryInMemory = new MvpsRepositoryInMemory();
        createMvpService = new CreateMvpService(mvpsRepositoryInMemory);
        listMvpsService = new ListMvpsService(mvpsRepositoryInMemory);
    });
    it('Should be able to list Mvps', async () => {
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
        await createMvpService.execute(newMvp);

        const newMvp2 = {
            name: 'Novo Mvp 2',
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
        await createMvpService.execute(newMvp2);

        const mvpsOrError = await listMvpsService.execute();
        if (mvpsOrError.isLeft()) {
            throw left(mvpsOrError.value)
        }


        expect(mvpsOrError.value).toHaveLength(2)
    })
})