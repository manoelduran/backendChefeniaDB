import { MapAlreadyExistsException } from "@modules/map/domain/Map/MapAlreadyExistsException";
import { MapsRepositoryInMemory } from "@modules/map/repositories/in-memory/MapsRepositoryInMemory";
import { CreateMapService } from "@modules/map/services/CreateMap/CreateMapService";

let mapsRepositoryInMemory: MapsRepositoryInMemory
let createRoomService: CreateMapService

describe("Create Map", () => {
    beforeAll(() => {
        mapsRepositoryInMemory = new MapsRepositoryInMemory()
        createRoomService = new CreateMapService(mapsRepositoryInMemory)
    });

    it("Should be able to create a Map", async () => {
        const newMap = {
            name: "moc_fild_02"
        }
        const createdMap = await createRoomService.execute(newMap)
        console.log('createdMap', createdMap)
        expect(createdMap.value).toHaveProperty("name", "moc_fild_02")
    });

    it("Should not be able to create a Map that already exists", async () => {
        const newMap = {
            name: "moc_fild_02"
        }
        const createdMap = await createRoomService.execute(newMap)
        console.log('createdMap', createdMap)
        const newMap2 = {
            name: "moc_fild_02"
        }
        const createdMap2 = await createRoomService.execute(newMap2)
        console.log('createdMap2', createdMap2)
        expect(createdMap2.value).toEqual(new MapAlreadyExistsException())
    })
})