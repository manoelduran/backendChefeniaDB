import { getRepository, Repository } from "typeorm";
import { Either, left, right, } from "@shared/either";
import { Map } from '@modules/map/infra/typeorm/entities/Map';
import { CreateMapDTO } from "@modules/map/dtos/CreateMapDTO";
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
    async create(data: CreateMapDTO): Promise<Map> {
        const newMap = this.ormRepository.create(data);
        await this.ormRepository.save(newMap)
        return newMap;
    };
    async list(): Promise<Map[]> {
        const maps = await this.ormRepository.find();
        return maps;
    };
};

export { MapsRepository };