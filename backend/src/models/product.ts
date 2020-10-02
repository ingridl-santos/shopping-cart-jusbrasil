import { Field, Int, Float, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('product')
export default class Product extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	image: string;

	@Field()
	@Column()
	description: string;

	@Field(() => Float)
	@Column('real')
	price: number;

	@Field(() => Int)
	@Column('integer')
	quantity: number;
}
