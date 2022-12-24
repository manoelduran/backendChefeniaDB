import { Either, left, right, } from "@shared/either";
import { IMapsRepository } from "../IMapsRepository";
import { Map } from "@modules/map/infra/typeorm/entities/Map";
import { CreateMapDTO } from "@modules/map/dtos/CreateMapDTO";
import { MapNotFoundException } from "@modules/map/domain/exceptions/MapNotFoundException";




class MapsRepositoryInMemory implements IMapsRepository {
    private maps: Map[]
    constructor() {
        this.maps = [];
    };
    async findByName(name: string): Promise<Either<MapNotFoundException, Map>> {
        const mapOrError = this.maps.find(map => map.name === name);
        if (!mapOrError) {
            return left(new MapNotFoundException())
        };
        return right(mapOrError);
    };
    async create(data: CreateMapDTO): Promise<Map> {
        const newMap = new Map();
        Object.assign(newMap, data);
        this.maps.push(newMap);
        return newMap;
    };
    async list(): Promise<Map[]> {
        const maps = this.maps;
        return maps;
    };
};

export { MapsRepositoryInMemory };