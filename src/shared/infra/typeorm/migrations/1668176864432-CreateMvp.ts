import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMvp1668176864432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "mvps",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "quantity",
                        type: "int"
                    },
                    {
                        name: "image",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "property",
                        type: "varchar"
                    },
                    {
                        name: "respawn",
                        type: "varchar"
                    },
                    {
                        name: "breed",
                        type: "varchar"
                    },
                    {
                        name: "level",
                        type: "int"
                    },
                    {
                        name: "neutral",
                        type: "int",
                    },
                    {
                        name: "water",
                        type: "int",
                    },
                    {
                        name: "earth",
                        type: "int",
                    },
                    {
                        name: "fire",
                        type: "int",
                    },
                    {
                        name: "wind",
                        type: "int",
                    },
                    {
                        name: "poison",
                        type: "int",
                    },
                    {
                        name: "holy",
                        type: "int",
                    },
                    {
                        name: "dark",
                        type: "int",
                    },
                    {
                        name: "ghost",
                        type: "int",
                    },
                    {
                        name: "undead",
                        type: "int",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}