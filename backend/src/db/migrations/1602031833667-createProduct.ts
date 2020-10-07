import {MigrationInterface, QueryRunner} from "typeorm";

export class createProduct1602031833667 implements MigrationInterface {
    name = 'createProduct1602031833667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "image" varchar NOT NULL, "description" varchar NOT NULL, "price" real NOT NULL, "quantity" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
