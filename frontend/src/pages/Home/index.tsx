import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../graphql/Product/request';
import { formatCurrency } from '../../utils/currencyFormat';
import { Details, ProductList } from './styles';

function Home() {
	interface CurrencyFormattedProduct {
		id: string;
		title: string;
		image: string;
		description: string;
		price: number;
		quantity: number;
		priceFormatted: string;
	}

	const data = getAllProducts('id, title, image, description, price, quantity');
	const receivedProducts: CurrencyFormattedProduct[] = data.map(product => ({
		...product,
		priceFormatted: formatCurrency(product.price),
	}));
	const [products, setProducts] = useState<CurrencyFormattedProduct[]>();

	useEffect(() => {
		setProducts(receivedProducts);
	}, [data]);

	return (
		<>
			<header>Shopping Cart</header>
			<ProductList>
				{!!products &&
					products.map(product => {
						<li key={product.id}>
							<Details to={`product/${product.id}`}>
								<img src={product.image} />
								<strong>{product.title}</strong>
								<span>{product.priceFormatted}</span>
								{product.quantity > 0 ? (
									<button type="button">
										<span>Detalhes</span>
									</button>
								) : (
									'Produto Indisponível'
								)}
							</Details>
						</li>;
					})}
			</ProductList>
		</>
	);
}

export default Home;
