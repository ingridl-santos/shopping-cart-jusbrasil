import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrder1602031952669 implements MigrationInterface {
    name = 'createOrder1602031952669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" varchar PRIMARY KEY NOT NULL, "products" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "product" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "image" varchar NOT NULL, "description" varchar NOT NULL, "price" real NOT NULL, "quantity" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
