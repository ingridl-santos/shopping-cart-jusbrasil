import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export function mutationCreateOrder(): DocumentNode {
	return gql`
		mutation createOrder($input: OrderInput!) {
			createOrder(input: $input) {
				id
			}
		}
	`;
}
