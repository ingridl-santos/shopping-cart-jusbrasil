import { Field, InputType, InputType } from 'type-graphql';

@InputType()
export class CreditCardInput {
	@Field()
	name: string;

	@Field()
	number: string;

	@Field()
	expiration: string;

	@Field()
	cvv: string;

	@Field(() => Boolean)
	isValid: boolean;
}

@InputType()
export class UpdateCreditCard {
	@Field(() => String, { nullable: true })
	name: string;

	@Field(() => String, { nullable: true })
	number: string;

	@Field(() => String, { nullable: true })
	expiration: string;

	@Field(() => String, { nullable: true })
	cvv: string;

	@Field(() => Boolean, { nullable: true })
	isValid: boolean;
}
