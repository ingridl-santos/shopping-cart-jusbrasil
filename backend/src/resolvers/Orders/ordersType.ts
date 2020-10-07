import { Field, InputType } from 'type-graphql';

@InputType()
export default class OrderInput {
	@Field()
	products: string;
}
