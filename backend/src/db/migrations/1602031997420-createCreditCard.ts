import {MigrationInterface, QueryRunner} from "typeorm";

export class createCreditCard1602031997420 implements MigrationInterface {
    name = 'createCreditCard1602031997420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "credit_card" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "number" varchar NOT NULL, "expiration" varchar NOT NULL, "cvv" varchar NOT NULL, "isValid" boolean NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "order" ("id" varchar PRIMARY KEY NOT NULL, "products" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "product" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "image" varchar NOT NULL, "description" varchar NOT NULL, "price" real NOT NULL, "quantity" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "credit_card"`);
    }

}
