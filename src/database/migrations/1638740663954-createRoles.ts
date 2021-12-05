import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createRoles1638740663954 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'roles',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('roles')
	}
}
