import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Link, Redirect } from 'react-router-dom';
import Cleave from 'cleave.js/react';

import sha256 from 'crypto-js/sha256';
import { key } from '../../config/config';

import { queryCreditCard } from '../../graphql/CreditCard/queries';
import { mutationCreateOrder } from '../../graphql/Order/queries';
import { mutationDecrementProductQuantity } from '../../graphql/Product/queries';
import {
	getDataOfProduct,
	updateProductQuantity,
} from '../../graphql/Product/types';
import {
	CreditCardValidate,
	getDataOfCreditCard,
} from '../../graphql/CreditCard/types';
import { OrderInput } from '../../graphql/Order/types';

import { removeAllFromCart } from '../../store/Reducers/cart/actions';
import { ApplicationState } from '../../store/Reducers/rootReducer';

import { Modal } from '@material-ui/core';
import {
	Container,
	CreditCardContainer,
	ModalContainer,
	TotalOrders,
} from './styles';
import checkoutSuccess from '../../assets/checkout_success.svg';
import checkoutFailed from '../../assets/checkout_failed.svg';
import { formatCurrency } from '../../utils/currencyFormat';

function Checkout() {
	const cart = useSelector((state: ApplicationState) => state.cart);
	const products = cart.products.map(data => ({
		id: data.product.id,
		quantity: data.amount,
	}));
	const updateQuantityOfProductInput: updateProductQuantity = {
		input: products,
	};

	const [username, setUsername] = useState<string>('');
	const [creditCardNumber, setcreditCardNumber] = useState<string>('');
	const [cvv, setCvv] = useState<string>('');
	const [expiration, setExpiration] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	const [getCreditCart, { data }] = useLazyQuery<
		getDataOfCreditCard,
		CreditCardValidate
	>(queryCreditCard(), {
		onCompleted: () => {
			handleOpen();
		},
	});

	const dispatch = useDispatch();
	const [decreaseProductQuantity] = useMutation<
		getDataOfProduct,
		updateProductQuantity
	>(mutationDecrementProductQuantity(), {
		onCompleted: () => {
			const productsForOrder = cart.products.map(data => ({
				id: data.product.id,
				quantity: data.product.quantity,
				price: data.subTotal,
			}));
			createOrder({
				variables: { input: { products: JSON.stringify(productsForOrder) } },
			});
		},
	});

	const [createOrder] = useMutation<string, OrderInput>(mutationCreateOrder(), {
		onCompleted: () => {
			dispatch(removeAllFromCart());
			handleSuccess();
		},
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSuccess = () => {
		return <Redirect to="/" />;
	};

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		getCreditCart({
			variables: {
				input: {
					cvv: sha256(cvv, { key }).toString(),
					expiration: sha256(expiration, { key }).toString(),
					name: sha256(username.toUpperCase(), { key }).toString(),
					number: sha256(creditCardNumber.split(' ').join(''), {
						key,
					}).toString(),
				},
			},
		});
		setSubmit(!submit);
	}

	return (
		<>
			{cart.products.length === 0 && <Redirect to="/" />}
			<Modal open={open} onClose={handleClose} disableBackdropClick>
				<ModalContainer>
					{data && data.getCreditCard && data.getCreditCard.isValid ? (
						<>
							<img src={checkoutSuccess} alt="Sucesso no Checkout" />
							<p>
								Pagamento confirmado com sucesso! Obrigado pela preferência e
								Volte Sempre :D
							</p>
							<Link to="/">
								<button
									type="button"
									onClick={() =>
										decreaseProductQuantity({
											variables: updateQuantityOfProductInput,
										})
									}
								>
									<span>Voltar a loja!</span>
								</button>
							</Link>
						</>
					) : (
						<>
							<img src={checkoutFailed} alt="Erro no Checkout" />
							<p>
								Pagamento não pode ser confirmado. Por favor, confira os dados e
								tente novamente. Se o problema persistir entre em contato com a
								operadora do cartão de crédito.
							</p>
							<button type="button" onClick={() => handleClose()}>
								<span>Tentar novamente!</span>
							</button>
						</>
					)}
				</ModalContainer>
			</Modal>
			<Container>
				<CreditCardContainer onSubmit={e => handleSubmit(e)}>
					<header>Cartão de Crédito</header>
					<div>
						<strong>Nome no cartão</strong>
						<div>
							<input
								type="text"
								maxLength={60}
								minLength={4}
								autoComplete="off"
								size={50}
								required
								onChange={e => setUsername(e.target.value)}
								value={username}
								placeholder="Insira o nome conforme impresso no cartão"
							/>
						</div>

						<strong>Número do cartão</strong>
						<div>
							<Cleave
								placeholder="Insira o número do cartão"
								options={{ creditCard: true }}
								onChange={e => setcreditCardNumber(e.target.value)}
								size={50}
								maxLength={19}
								minLength={19}
								autoComplete="off"
								required
							/>
						</div>

						<div>
							<div>
								<span>Validade</span>
								<Cleave
									placeholder="Mês/Ano"
									options={{ date: true, datePattern: ['m', 'd'] }}
									onChange={e => setExpiration(e.target.value)}
								/>
							</div>
							<div>
								<span>CVV</span>
								<Cleave
									placeholder="CVV"
									options={{ blocks: [3], numericOnly: true }}
									onChange={e => setCvv(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<button type="submit">Realizar Pagamento</button>
				</CreditCardContainer>

				<TotalOrders>
					<table>
						<thead>
							<tr>
								<th>Pedido</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>Itens</strong>
								</td>
							</tr>
							{cart.products &&
								cart.products.map(data => (
									<tr key={data.product.id}>
										<td>
											<div>
												{data.amount} X {data.product.title}
											</div>
											<div>{formatCurrency(data.subTotal)}</div>
										</td>
									</tr>
								))}
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
						<div>
							{cart.products && formatCurrency(cart.totalAmount + 19.9)}
						</div>
					</footer>
				</TotalOrders>
			</Container>
		</>
	);
}

export default Checkout;
