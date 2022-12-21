import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Timer } from '@modules/timer/infra/typeorm/entities/Timer';


@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    email: string;

    @OneToMany(() => Timer, ({user}) => user)
    timer: Timer[];

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    job: string;

    @Column()
    phone: string;

    @Column()
    avatar?: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
            this.updated_at = new Date();
        };
    };
};

export { User };