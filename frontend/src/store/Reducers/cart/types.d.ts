import { Product } from '../../../graphql/Product/types';

export const ADD_TO_CART = '@cart/ADD';

export interface AddToCart {
	type: typeof ADD_TO_CART;
	product: Product;
	amount: number;
}

export const REMOVE_FROM_CART = '@cart/REMOVE';

export interface RemoveFromCart {
	type: typeof REMOVE_FROM_CART;
	id: string;
}

export const DECREMENT_AMOUNT = '@cart/DECREMENT_AMOUNT';

export interface DecrementAmountFromCart {
	type: typeof DECREMENT_AMOUNT;
	id: string;
	amount: number;
}

export const INCREMENT_AMOUNT = '@cart/INCREMENT_AMOUNT';

export interface IncrementAmountInCart {
	type: typeof INCREMENT_AMOUNT;
	id: string;
	amount: number;
}

export const REMOVE_ALL = '@cart/REMOVE_ALL';

export interface RemoveAllFromCart {
	type: typeof REMOVE_ALL;
}

export type ActionTypes =
	| AddToCart
	| RemoveFromCart
	| IncrementAmountInCart
	| DecrementAmountFromCart
	| RemoveAllFromCart;

export interface ProductInCart {
	product: Product;
	amount: number;
	subTotal: number;
}

export interface StateOfCart {
	products: ProductInCart[];
	totalAmount: number;
	totalItems: number;
}
