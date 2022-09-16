import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    email: string;

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
    created_at?: Date;

    @CreateDateColumn()
    updated_at?: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        };
    };
};

export { User };