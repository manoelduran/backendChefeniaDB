import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("rooms")
class Room {
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

export { Room };