import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMap1671461949794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "maps",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("maps")
    }

}
