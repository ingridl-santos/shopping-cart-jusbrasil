import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { GetProduct } from '../../graphql/Product/request';
import { Product } from '../../graphql/Product/types';
import { ApplicationState } from '../../store/Reducers/rootReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../store/Reducers/cart/actions';
import { Container } from './styles';
import { formatCurrency } from '../../utils/currencyFormat';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

interface ParamType {
	id: string;
}

function DetailProduct() {
	const { id } = useParams<ParamType>();
	const receivedProduct = GetProduct(
		id,
		'id, title, image, description, price, quantity',
	);
	const [product, setProducts] = useState<Product | null>();
	const [amount, setAmount] = useState<number>(0);
	const [redirect, setRedirect] = useState<boolean>(false);

	useEffect(() => {
		setProducts(receivedProduct);
	}, [receivedProduct]);

	const cart = useSelector((state: ApplicationState) => state.cart);
	const dispatch = useDispatch();

	function incrementAmount() {
		if (product) {
			const cartProduct = cart.products.find(
				data => data.product.id === product.id,
			);

			if (cartProduct && cartProduct.amount + amount + 1 <= product.quantity) {
				setAmount(amount + 1);
			} else if (!cartProduct && amount + 1 <= product.quantity) {
				setAmount(amount + 1);
			} else {
				toast.error('Não há estoque disponível para a quantidade solicitada!', {
					autoClose: 5000,
					toastId: '1',
				});
			}
		}
	}

	function decrementAmount() {
		if (amount - 1 >= 0) {
			setAmount(amount - 1);
		}
	}

	function handleAddProductToCart() {
		if (product && amount > 0) {
			dispatch(addToCart(product, amount));
			setAmount(0);
			setRedirect(true);
		}
	}

	return (
		<Container>
			{redirect && <Redirect to="/" />}
			{product && (
				<>
					<img src={product.image} />
					<div>
						<header>
							<span>{product.description}</span>
							<p>{formatCurrency(product.price)}</p>
						</header>
						<div>
							<strong>Quantidade:</strong>
							<button type="button" onClick={() => decrementAmount()}>
								<RemoveIcon />
							</button>
							<input type="number" value={amount} readOnly />
							<button type="button" onClick={() => incrementAmount()}>
								<AddIcon />
							</button>
						</div>
						<footer>
							{product.quantity > 0 ? (
								<button type="button" onClick={() => handleAddProductToCart()}>
									Adicionar ao carrinho
								</button>
							) : (
								<strong>Produto Indisponível</strong>
							)}
						</footer>
					</div>
				</>
			)}
		</Container>
	);
}

export default DetailProduct;
