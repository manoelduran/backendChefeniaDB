import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("notifications")
class Notification {
    @PrimaryColumn({type: 'uuid'})
    id?: string;

    @Column({nullable: false})
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        };
    };

};

export { Notification };