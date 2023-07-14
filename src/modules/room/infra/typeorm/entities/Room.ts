import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';

@Entity("rooms")
class Room {
    @PrimaryColumn()
    id?: string;
    @ManyToMany(() => Mvp, mvp => mvp.rooms)
    @JoinTable({
        name: 'roommvps',
        joinColumn: {
          name: 'room_id',
          referencedColumnName: 'id',
        }
      })
    mvps?: Mvp[]
    @Column()
    name: string;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        };
    };

};

export { Room };