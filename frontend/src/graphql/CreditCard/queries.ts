import { gql, DocumentNode } from '@apollo/client';

export function queryCreditCard(): DocumentNode {
	return gql`
		query queryCreditCard($input: CreditCardValidate!) {
			getCreditCard(input: $input) {
				isValid
			}
		}
	`;
}
