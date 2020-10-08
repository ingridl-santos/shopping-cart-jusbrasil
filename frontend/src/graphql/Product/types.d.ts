export interface Product {
	id: string;
	title: string;
	image: string;
	description: string;
	price: number;
	quantity: number;
}

export interface varsProduct {
	id: string;
}

export interface getDataOfProduct {
	getProduct: Product;
}

export interface getDataOfAllProducts {
	getAllProducts: [Product];
}

export interface updateProductUnitQuantity {
	id: string;
	quantity: number;
}

export interface updateProductQuantity {
	input: updateProductUnitQuantity[];
}
