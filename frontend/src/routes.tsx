import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import DetailProduct from './pages/DetailProduct';
import Home from './pages/Home';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} />
				<Route path="/product/:id" component={DetailProduct} exact />
				<Route path="/checkout" component={Checkout} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
