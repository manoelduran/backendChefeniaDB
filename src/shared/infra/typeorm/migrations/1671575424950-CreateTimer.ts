import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTimer1671575424950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "timers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,

                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "mvp_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "time",
                        type: "integer",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "expired_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FKMvp",
                        referencedTableName: "mvps",
                        referencedColumnNames: ["id"],
                        columnNames: ["mvp_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("timers");
    };

};
