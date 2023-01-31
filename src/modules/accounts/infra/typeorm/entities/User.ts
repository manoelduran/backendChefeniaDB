import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Timer } from '@modules/timer/infra/typeorm/entities/Timer';
import { Expose } from 'class-transformer';
import uploadConfig from '@config/upload';

@Entity("users")
class User {
    @PrimaryColumn({ type: 'uuid' })
    id?: string;

    @Column()
    email: string;

    @OneToMany(() => Timer, (timer) => timer.user)
    timers: Timer[];

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    job: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    avatar?: string;

    @Expose({ name: 'avatar_url' })
    getAvatarUrl(): string {
        if (!this.avatar) {
            return null;
        }

        switch (uploadConfig.driver) {
            case 's3':
                return `${uploadConfig.config.aws.uri}/${this.avatar}`;
            case 'local':
                return `${process.env.APP_API_URL}/files/${this.avatar}`;
            default:
                return null;
        }
    }
    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
            this.updated_at = new Date();
        };
    };
};

export { User };