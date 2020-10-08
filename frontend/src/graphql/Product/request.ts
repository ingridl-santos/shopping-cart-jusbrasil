import {
	Product,
	varsProduct,
	getDataOfAllProducts,
	getDataOfProduct,
} from './types.d';
import { useQuery } from '@apollo/client';
import { queryGetAllProducts, queryGetProduct } from './queries';

export function getProduct(id: string, query: string): Product | null {
	const { data } = useQuery<getDataOfProduct, varsProduct>(
		queryGetProduct(query),
		{ variables: { id } },
	);

	if (!data) {
		return null;
	}
	return data.getProduct;
}

export function getAllProducts(query: string): Product[] {
	const { data } = useQuery<getDataOfAllProducts, varsProduct>(
		queryGetAllProducts(query),
	);

	if (!data) {
		return [];
	}
	return data.getAllProducts;
}
