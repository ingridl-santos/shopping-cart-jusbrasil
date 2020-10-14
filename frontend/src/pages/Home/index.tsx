import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { GetAllProducts } from '../../graphql/Product/request';
import { formatCurrency } from '../../utils/currencyFormat';
import { Details, ProductList } from './styles';

interface CurrencyFormattedProduct {
	id: string;
	title: string;
	image: string;
	description: string;
	price: number;
	quantity: number;
	priceFormatted: string;
}

function Home() {
	const data = GetAllProducts('id, title, image, description, price, quantity');
	const productsReceived: CurrencyFormattedProduct[] = data.map(product => ({
		...product,
		priceFormatted: formatCurrency(product.price),
	}));
	const [products, setProducts] = useState<CurrencyFormattedProduct[]>();

	useEffect(() => {
		setProducts(productsReceived);
	}, [data]);

	return (
		<>
			<Header />
			<ProductList>
				{!!products &&
					products.map(product => (
						<li key={product.id}>
							<Details to={`product/${product.id}`}>
								<img src={product.image} alt={product.title} />
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
						</li>
					))}
			</ProductList>
		</>
	);
}

export default Home;
