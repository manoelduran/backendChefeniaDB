import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("mvpsfourthroom")
class MvpsFourthRoom {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    image?: string;

    @Column()
    property: string;

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
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        };
    };

};

export { MvpsFourthRoom };