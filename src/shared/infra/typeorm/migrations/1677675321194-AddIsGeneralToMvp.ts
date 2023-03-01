import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddIsGeneralToMvp1677675321194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'mvps',
            new TableColumn({
                name: 'is_general',
                type: 'boolean',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn(
            'mvps', 'is_general'
        )
    }

}
