import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { v4 as uuidV4 } from 'uuid';
import { Mvp } from "@modules/mvp/infra/typeorm/entities/Mvp";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("timers")
class Timer {

    @PrimaryColumn({type: 'uuid'})
    id?: string;

    @Column({type: 'uuid', nullable: false})
    user_id: string;

    @ManyToOne(() => User, ({timers}) => timers)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;

    @Column({type: 'uuid', nullable: false})
    mvp_id: string;

    @OneToOne(() => Mvp, ({timer}) => timer)
    @JoinColumn({name: 'mvp_id', referencedColumnName: 'id'})
    mvp: Mvp;

    @Column()
    time: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    expired_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
            this.updated_at = new Date();
        }
    }
};

export { Timer };