import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export function queryGetProduct(query: string): DocumentNode {
	return gql`
		query ProductQuery($id: string) {
			getProduct(id: $id) {
				${query}
			}
		}
	`;
}

export function queryGetAllProducts(query: string): DocumentNode {
	return gql`
		query {
			getAllProducts {
				${query}
			}
		}
	`;
}

export function mutationDecrementProductQuantity(): DocumentNode {
	return gql`
		mutation updateProduct($input: [DecrementProductQuantity!]!) {
			decrementProductQuantity(input: $input) {
				id
			}
		}
	`;
}
