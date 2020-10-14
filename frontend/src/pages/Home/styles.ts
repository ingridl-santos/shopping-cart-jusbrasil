import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Details = styled(Link)`
	display: flex;
	flex-direction: column;
	color: #4d4646;
	text-decoration: none;
`;

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	list-style: none;

	li {
		padding: 20px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		overflow-wrap: break-word;
		text-align: center;
		background: #ffffff;
	}

	img {
		width: 220px;
		height: 150px;
		align-self: center;
	}

	strong {
		font-size: 18px;
		font-weight: bold;
		margin-top: 5px;
		color: #cc1c39;
	}

	span {
		margin: 5px 0 20px;
		font-size: 14px;
		color: #000000;
	}

	button {
		width: 200px;
		height: 40px;
		margin-top: auto;
		border: 0;
		border-radius: 4px;
		overflow: hidden;
		align-self: center;
		text-align: center;
		background: #f0c14b;
		color: #ffffff;
		transition: background 0.3s;

		&:hover {
			background: #f08804;
		}
	}
`;
