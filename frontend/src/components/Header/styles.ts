import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	width: 100vw;
	margin: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #252035;

	img {
		margin: 2px 0px 2px 8px;
	}
`;

export const Cart = styled(Link)`
	display: flex;
	align-items: center;
	margin-right: 20px;
	text-decoration: none;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.7;
	}

	span {
		width: 10px;
		font: 12px 'Roboto', sans-serif;
		font-weight: bold;
		margin-right: 50px;
		margin-bottom: 25px;
		color: #ffffff;
	}

	img {
		margin: 0px 5px 0px 5px;
	}

	p {
		margin-top: 20px;
		font-size: 12px;
		font-style: 'Roboto', sans-serif;
		font-weight: bold;
		color: #ffffff;
	}
`;
