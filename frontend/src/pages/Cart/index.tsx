import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/currencyFormat';
import { GetAllProducts } from '../../graphql/Product/request';
import { ApplicationState } from '../../store/Reducers/rootReducer';
import { ProductInCart } from '../../store/Reducers/cart/types';
import {
	decrementAmount,
	incrementAmount,
	removeFromCart,
} from '../../store/Reducers/cart/actions';
import { Container, TableProduct, TableTotal } from './styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

function Cart() {
	const cart = useSelector((state: ApplicationState) => state.cart);
	const dispatch = useDispatch();

	const productsQuantity = GetAllProducts('id, quantity');

	function increaseAmount(productInCart: ProductInCart) {
		const products = productsQuantity.find(
			product => product.id === productInCart.product.id,
		);

		if (products && productInCart.amount + 1 <= products.quantity) {
			dispatch(incrementAmount(productInCart.product.id, 1));
		} else {
			toast.error('Não há estoque disponível para a quantidade solicitada!', {
				autoClose: 500,
				toastId: '1',
			});
		}
	}

	function decreaseAmount(productInCart: ProductInCart) {
		if (productInCart.amount - 1 >= 1) {
			dispatch(decrementAmount(productInCart.product.id, 1));
		}
	}

	function handleRemoveProduct(id: string) {
		dispatch(removeFromCart(id));
	}

	return (
		<Container>
			<TableProduct>
				<thead>
					<tr>
						<th />
						<th>Descrição</th>
						<th>Quantidade</th>
						<th>Subtotal</th>
					</tr>
				</thead>

				<tbody>
					{cart &&
						cart.products &&
						cart.products.map(products => (
							<tr key={products.product.id}>
								<td>
									<Link to={`/product/${products.product.id}`}>
										<img
											src={products.product.image}
											alt={products.product.title}
										/>
									</Link>
								</td>
								<td>
									<div>
										<button
											type="button"
											onClick={() => decreaseAmount(products)}
										>
											<RemoveIcon />
										</button>
										<input type="number" value={products.amount} readOnly />
										<button
											type="button"
											onClick={() => increaseAmount(products)}
										>
											<AddIcon />
										</button>
									</div>
								</td>
								<td>
									<button
										type="button"
										onClick={() => handleRemoveProduct(products.product.id)}
									>
										<RemoveShoppingCartIcon />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</TableProduct>

			<TableTotal>
				<table>
					<thead>
						<tr>
							<thead>Total</thead>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div>{cart.totalItems} Produto(s)</div>
								<div>{formatCurrency(cart.totalAmount)}</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Frete</div>
								<div>R$ 19,90</div>
							</td>
						</tr>
					</tbody>
				</table>
				<footer>
					<div>Total</div>
					<div>{formatCurrency(cart.totalAmount + 19.9)}</div>
				</footer>
				<div>
					<Link to="/checkout">
						<button type="button">
							<span>Checkout</span>
						</button>
					</Link>
				</div>
			</TableTotal>
		</Container>
	);
}

export default Cart;
