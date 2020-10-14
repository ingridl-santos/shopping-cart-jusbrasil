import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import DetailProduct from './pages/DetailProduct';
import Home from './pages/Home';

function Routes() {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/cart" component={Cart} />
			<Route path="/checkout" component={Checkout} />
			<Route path="/product/:id" component={DetailProduct} exact />
		</Switch>
	);
}

export default Routes;
