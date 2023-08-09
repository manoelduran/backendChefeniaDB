import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { Room } from '@modules/room/infra/typeorm/entities/Room';

@Entity("roommvps")
class RoomMvp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ type: 'uuid', nullable: false })
    mvp_id: string;
    @Column({ type: 'uuid', nullable: false })
    room_id: string;
    @ManyToOne(() => Mvp, mvp => mvp.id)
    @JoinColumn({ name: 'mvp_id' })
    mvp?: Mvp;
    @ManyToOne(() => Room, room => room.id)
    @JoinColumn({ name: 'room_id' })
    room?: Room;
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at?: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        };
    };

};

export { RoomMvp };