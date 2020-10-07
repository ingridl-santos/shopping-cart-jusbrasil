import { Field, Float, InputType, Int } from 'type-graphql';

@InputType()
export class ProductInput {
	@Field()
	title: string;

	@Field()
	image: string;

	@Field()
	description: string;

	@Field(() => Float)
	price: number;

	@Field(() => Int)
	quantity: number;
}

@InputType()
export class UpdateProductInput {
	@Field(() => String, { nullable: true })
	title?: string;

	@Field(() => String, { nullable: true })
	image?: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => Float, { nullable: true })
	price?: number;

	@Field(() => Int, { nullable: true })
	quantity?: number;
}

@InputType()
export class DecrementQuantityInput {
	@Field()
	id: string;

	@Field(() => Int)
	quantity: number;
}
