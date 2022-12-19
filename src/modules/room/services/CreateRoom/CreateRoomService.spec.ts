import { RoomAlreadyExistsException } from "@modules/room/domain/Room/RoomAlreadyExistsException";
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
        expect(createdRoom.value).toHaveProperty("name", "Sala 1")
    })
    it("Should not be able to create a Room that already exists", async () => {
        const newRoom = {
            name: "Sala 1"
        }
        await createRoomService.execute(newRoom)
        const newRoom2 = {
            name: "Sala 1"
        }
        const createdRoom2 = await createRoomService.execute(newRoom2)
        expect(createdRoom2.value).toEqual(new RoomAlreadyExistsException())
    })
})