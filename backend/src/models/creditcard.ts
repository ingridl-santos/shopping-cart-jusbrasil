import { ObjectType, Field } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('credit_card')
export default class CreditCard extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	number: string;

	@Field()
	@Column()
	expiration: string;

	@Field()
	@Column()
	cvv: string;

	@Field()
	@Column()
	isValid: boolean;
}
