import { RoomsRepositoryInMemory } from "@modules/room/repositories/in-memory/RoomsRepositoryInMemory";
import { left, right } from "@shared/either";
import { CreateRoomService } from "@modules/room/services/CreateRoom/CreateRoomService";
import { ListRoomsService } from "@modules/room/services/ListRooms/ListRoomsService";
import { RoomsNotFoundException } from "@modules/room/domain/Room/RoomsNotFoundException";
import { AppError } from "@shared/errors/AppError";


let roomsRepositoryInMemory: RoomsRepositoryInMemory;
let listRoomsService: ListRoomsService;
let createRoomService: CreateRoomService;

describe('List Mvps', () => {
    beforeAll(() => {
        roomsRepositoryInMemory = new RoomsRepositoryInMemory();
        createRoomService = new CreateRoomService(roomsRepositoryInMemory);
        listRoomsService = new ListRoomsService(roomsRepositoryInMemory);
    });

    it('Should not be able to list Rooms', async () => {
        const roomsOrError = await listRoomsService.execute();
        console.log('roomsOrError', roomsOrError.value)
        expect(roomsOrError.isRight()).toBe(false)
    });
    it('Should be able to list Rooms', async () => {
        const newRoom = {
            name: 'Sala 1'
        };
        await createRoomService.execute(newRoom);
        const newRoom2 = {
            name: 'Sala 2'
        };
        await createRoomService.execute(newRoom2);

        const roomsOrError = await listRoomsService.execute();
        if (roomsOrError.isLeft()) {
            return left(roomsOrError.value)
        }

        console.log('roomsOrError', roomsOrError)
        expect(right(roomsOrError.value).value).toHaveLength(2)
    })


})