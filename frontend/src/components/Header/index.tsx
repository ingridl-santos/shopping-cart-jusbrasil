import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';
import { ApplicationState } from '../../store/Reducers/rootReducer';
import logo from '../../assets/logo.png';
import cartImg from '../../assets/cart.svg';
import { formatCurrency } from '../../utils/currencyFormat';

function Header() {
	const shoppingCart = useSelector((state: ApplicationState) => state.cart);

	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="JusBrasil Shopping Cart" />
			</Link>

			<Cart to="/cart">
				<p>{formatCurrency(shoppingCart.totalAmount)}</p>
				<img src={cartImg} alt="Carrinho de Compras" />
				<span>{shoppingCart.totalItems || 0}</span>
			</Cart>
		</Container>
	);
}

export default Header;
