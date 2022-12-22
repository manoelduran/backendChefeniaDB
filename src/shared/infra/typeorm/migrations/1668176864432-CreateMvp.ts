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
                        type: "integer"
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
                        type: "integer"
                    },
                    {
                        name: "neutral",
                        type: "integer",
                    },
                    {
                        name: "water",
                        type: "integer",
                    },
                    {
                        name: "earth",
                        type: "integer",
                    },
                    {
                        name: "fire",
                        type: "integer",
                    },
                    {
                        name: "wind",
                        type: "integer",
                    },
                    {
                        name: "poison",
                        type: "integer",
                    },
                    {
                        name: "holy",
                        type: "integer",
                    },
                    {
                        name: "dark",
                        type: "integer",
                    },
                    {
                        name: "ghost",
                        type: "integer",
                    },
                    {
                        name: "undead",
                        type: "integer",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mvps");
    }

}
