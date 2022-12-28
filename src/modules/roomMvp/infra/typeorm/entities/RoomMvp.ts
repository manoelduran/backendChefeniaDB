import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("roommvps")
class RoomMvp {
    @PrimaryColumn({type: 'uuid'})
    id?: string;

    @Column()
    mvp_id: string;
    
    @Column()
    room_id: string;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        };
    };

};

export { RoomMvp };