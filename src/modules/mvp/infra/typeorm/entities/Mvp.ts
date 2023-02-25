import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { Timer } from '@modules/timer/infra/typeorm/entities/Timer';
import { Expose } from 'class-transformer';
import uploadConfig from '@config/upload';
@Entity("mvps")
class Mvp {
    @PrimaryColumn({ type: 'uuid' })
    id?: string;

    @Column()
    name: string;

    @OneToOne(() => Timer, (timer) => timer.mvp)
    timer: Timer;

    @Column()
    quantity: number;

    @Column({ nullable: true })
    image?: string;

    @Column()
    property: string;

    @Column({ nullable: true })
    respawn?: string;

    @Column()
    breed: string;

    @Column()
    level: number;

    @Column()
    neutral: number;

    @Column()
    water: number;

    @Column()
    earth: number;

    @Column()
    fire: number;

    @Column()
    wind: number;

    @Column()
    poison: number;

    @Column()
    holy: number;

    @Column()
    dark: number;

    @Column()
    ghost: number;

    @Column()
    undead: number;
    @Expose({ name: 'mvp_url' })
    getMvpImage(): string {
        if (!this.image) {
            return null;
        }

        switch (uploadConfig.driver) {
            case 's3':
                return `${uploadConfig.config.aws.uri}/${this.image}`;
            case 'local':
                return `${process.env.APP_API_URL}/files/${this.image}`;
            default:
                return null;
        }
    }
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        };
    };

};

export { Mvp };