import { Room } from "@modules/room/infra/typeorm/entities/Room";
import { RoomsRepositoryInMemory } from "@modules/room/repositories/in-memory/RoomsRepositoryInMemory";
import { CreateRoomService } from "@modules/room/services/CreateRoom/CreateRoomService";

let roomsRepositoryInMemory: RoomsRepositoryInMemory
let createRoomService: CreateRoomService

describe("Create Room", () => {
    beforeAll(() => {
        roomsRepositoryInMemory = new RoomsRepositoryInMemory()
        createRoomService = new CreateRoomService(roomsRepositoryInMemory)
    })

    it("Should be able to create a Room", async () => {
        const newRoom = {
            name: "Sala 1"
        }
        const createdRoom = await createRoomService.execute(newRoom)
        console.log('createdRoom', createdRoom)
        expect(createdRoom.value).toHaveProperty("name", "Sala 1")
    })
})