import { UpdateCreditCard } from './type.d';
import { key } from './../../config/config';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import {} from '../../config/config';
import sha256 from 'crypto-js/sha256';
import CreditCard from '../../models/creditcard';
import { CreditCardInput } from './type';

@Resolver()
export default class CreditCardResolver {
	@Mutation(() => CreditCard)
	async createCreditCard(
		@Arg('input', () => CreditCardInput) input: CreditCardInput
	) {
		const creditCard = await CreditCard.create({
			name: sha256(input.name.toUpperCase(), key).toString(),
			number: sha256(input.number, key).toString(),
			expiration: sha256(input.expiration, key).toString(),
			cvv: sha256(input.cvv, key).toString(),
			isValid: input.isValid,
		}).save();
		return creditCard;
	}

	@Mutation(() => CreditCard, { nullable: true })
	async updateCreditCart(
		@Arg('id') id: string,
		@Arg('input', () => UpdateCreditCard) input: UpdateCreditCard
	) {
		const creditCard = await CreditCard.findOne({ id });

		if (!creditCard) {
			return null;
		}

		let name = '';
		if (input.name) {
			name = sha256(input.name.toUpperCase(), key).toString();
		} else {
			name = creditCard.name;
		}

		const updateCreditCard = CreditCard.create({
			id: creditCard.id,
			name,
			number: sha256(input.number, key).toString(),
			expiration: sha256(input.expiration, key).toString(),
			cvv: sha256(input.cvv, key).toString(),
			isValid: input.isValid,
		});
		await updateCreditCard.save();
		return updateCreditCard;
	}

	@Mutation(() => Boolean)
	async deleteCreditCard(@Arg('id') id: string) {
		const creditCard = await CreditCard.findOne({ id });

		if (!creditCard) {
			return false;
		}
		CreditCard.delete({ id });
		return true;
	}

	@Query(() => [CreditCard])
	async getAllCreditCards() {
		return CreditCard.find();
	}
}
