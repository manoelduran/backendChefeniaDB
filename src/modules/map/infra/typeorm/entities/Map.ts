import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("maps")
class Map {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        };
    };

};

export { Map };