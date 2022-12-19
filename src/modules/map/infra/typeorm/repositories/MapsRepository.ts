import { getRepository, Repository } from "typeorm";
import { Either, left, right,  } from "@shared/either";
import {Map} from '@modules/map/infra/typeorm/entities/Map';
import { MapsNotFoundException } from "@modules/map/domain/Map/MapsNotFoundException";
import { CreateRoomDTO } from "@modules/room/dtos/CreateRoomDTO";
import { IMapsRepository } from "@modules/map/repositories/IMapsRepository";
import { MapNotFoundException } from "@modules/map/domain/exceptions/MapNotFoundException";



class MapsRepository implements IMapsRepository {
    private ormRepository: Repository<Map>;
    constructor() {
        this.ormRepository = getRepository(Map);
    };
    async findByName(name: string): Promise<Either<MapNotFoundException, Map>> {
        const mapOrError = await this.ormRepository.findOne({ name });
        if (!mapOrError) {
            return left(new MapNotFoundException())
        };
        return right(mapOrError);
    };
    async create(data: CreateRoomDTO): Promise<Map> {
        const newMap = this.ormRepository.create(data);
        await this.ormRepository.save(newMap)
        return newMap;
    };
    async list(): Promise<Either<MapsNotFoundException, Map[]>> {
        const mapsOrError = await this.ormRepository.find();
        if (mapsOrError.length === 0) {
            return left(new MapsNotFoundException());
        };
        return right(mapsOrError);
    };
};

export { MapsRepository };