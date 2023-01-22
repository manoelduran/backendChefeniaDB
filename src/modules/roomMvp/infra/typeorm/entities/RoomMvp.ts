import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';

@Entity("roommvps")
class RoomMvp {
    @PrimaryColumn({ type: 'uuid', primary: true, nullable: false })
    id?: string;

    @Column({ type: 'uuid', nullable: false })
    mvp_id: string;
    @Column({ type: 'uuid', nullable: false })
    room_id: string;
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        };
    };

};

export { RoomMvp };