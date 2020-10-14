import produce from 'immer';
import { ActionTypes, StateOfCart } from './types';

const initialState: StateOfCart = {
	products: [],
	totalAmount: 0,
	totalItems: 0,
};

function cart(
	state: StateOfCart = initialState,
	action: ActionTypes,
): StateOfCart {
	switch (action.type) {
		case '@cart/ADD':
			return produce(state, (draft: StateOfCart) => {
				const productIndex = draft.products.findIndex(
					product => product.product.id === action.product.id,
				);
				const { product } = action;

				if (
					productIndex >= 0 &&
					draft.products[productIndex].amount !== undefined
				) {
					draft.products[productIndex].amount += action.amount;
					draft.products[productIndex].subTotal =
						draft.products[productIndex].amount *
						draft.products[productIndex].product.price;

					draft.totalAmount +=
						action.amount * draft.products[productIndex].product.price;
					draft.totalItems += action.amount;
				} else {
					draft.products.push({
						product,
						amount: action.amount,
						subTotal: product.price * action.amount,
					});
					draft.totalItems += action.amount;
					draft.totalAmount += action.amount * action.product.price;
				}
			});
		case '@cart/REMOVE': {
			return produce(state, (draft: StateOfCart) => {
				const productIndex = draft.products.findIndex(
					product => product.product.id === action.id,
				);

				if (productIndex >= 0) {
					const { amount } = draft.products[productIndex];
					draft.totalAmount -=
						amount * draft.products[productIndex].product.price;
					draft.products.splice(productIndex, 1);
					draft.totalItems -= amount;
				}
			});
		}
		case '@cart/INCREMENT_AMOUNT': {
			if (action.amount <= 0) {
				return state;
			}

			return produce(state, (draft: StateOfCart) => {
				const productIndex = draft.products.findIndex(
					product => product.product.id === action.id,
				);

				if (productIndex >= 0) {
					draft.products[productIndex].amount += action.amount;
					draft.products[productIndex].subTotal +=
						action.amount * draft.products[productIndex].product.price;
					draft.totalAmount +=
						action.amount * draft.products[productIndex].product.price;
					draft.totalItems += action.amount;
				}
			});
		}

		case '@cart/DECREMENT_AMOUNT': {
			return produce(state, (draft: StateOfCart) => {
				const productIndex = draft.products.findIndex(
					product => product.product.id === action.id,
				);

				if (productIndex >= 0) {
					draft.products[productIndex].amount -= action.amount;
					draft.totalItems -= action.amount;
					draft.totalAmount -=
						action.amount * draft.products[productIndex].product.price;
					draft.products[productIndex].subTotal -=
						action.amount * draft.products[productIndex].product.price;
				}
			});
		}

		case '@cart/REMOVE_ALL': {
			return produce(state, (draft: StateOfCart) => {
				draft.products = [];
				draft.totalItems = 0;
				draft.totalAmount = 0;
			});
		}
		default:
			return state;
	}
}

export default cart;
