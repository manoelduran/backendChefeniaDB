import { MapsRepositoryInMemory } from "@modules/map/repositories/in-memory/MapsRepositoryInMemory";
import { left, right } from "@shared/either";
import { ListMapsService } from "@modules/map/services/ListMaps/ListMapsService";
import { CreateMapService } from "@modules/map/services/CreateMap/CreateMapService";



let mapsRepositoryInMemory: MapsRepositoryInMemory;
let listMapsService: ListMapsService;
let createMapService: CreateMapService;

describe('List Mvps', () => {
    beforeAll(() => {
        mapsRepositoryInMemory = new MapsRepositoryInMemory();
        createMapService = new CreateMapService(mapsRepositoryInMemory);
        listMapsService = new ListMapsService(mapsRepositoryInMemory);
    });

    it('Should not be able to list Rooms', async () => {
        const maps = await listMapsService.execute();
        expect(maps).toHaveLength(0)
    });
    it('Should be able to list Rooms', async () => {
        const newMap = {
            name: 'Sala 1'
        };
        await createMapService.execute(newMap);
        const newMap2 = {
            name: 'Sala 2'
        };
        await createMapService.execute(newMap2);

        const maps = await listMapsService.execute();

        console.log('roomsOrError', maps)
        expect(maps).toHaveLength(2)
    })


})