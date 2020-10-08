import { Product } from '../../../graphql/Product/types';
import { ActionTypes } from './types';

export function addToCart(product: Product, amount: number): ActionTypes {
	return {
		type: '@cart/ADD',
		product,
		amount,
	};
}

export function removeFromCart(id: string): ActionTypes {
	return {
		type: '@cart/REMOVE',
		id,
	};
}

export function incrementAmount(id: string, amount: number): ActionTypes {
	return {
		type: '@cart/INCREMENT_AMOUNT',
		id,
		amount,
	};
}

export function decrementAmount(id: string, amount: number): ActionTypes {
	return {
		type: '@cart/DECREMENT_AMOUNT',
		id,
		amount,
	};
}

export function removeAllFromCart(): ActionTypes {
	return {
		type: '@cart/REMOVE_ALL',
	};
}
