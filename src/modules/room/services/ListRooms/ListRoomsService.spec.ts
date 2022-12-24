import { RoomsRepositoryInMemory } from "@modules/room/repositories/in-memory/RoomsRepositoryInMemory";
import { CreateRoomService } from "@modules/room/services/CreateRoom/CreateRoomService";
import { ListRoomsService } from "@modules/room/services/ListRooms/ListRoomsService";


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
        const rooms = await listRoomsService.execute();
        expect(rooms).toHaveLength(0);
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

        const rooms = await listRoomsService.execute();

        console.log('roomsOrError', rooms);
        expect(rooms).toHaveLength(2);
    });
});