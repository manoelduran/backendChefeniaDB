import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRoomMvp1672263876772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "roommvps",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "mvp_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "room_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKMvp",
                        columnNames: ["mvp_id"],
                        referencedTableName: "mvps",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FKRoom",
                        referencedTableName: "rooms",
                        referencedColumnNames: ["id"],
                        columnNames: ["room_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roommvps");
    };

};
