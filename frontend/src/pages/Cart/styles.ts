import styled from 'styled-components';

export const Container = styled.div`
	padding: 30px;
	display: flex;
	justify-content: space-between;
`;

export const TableProduct = styled.table`
	width: 65%;
	border-collapse: collapse;
	thead th {
		color: #595050;
		font-size: 24px;
		text-align: left;
		padding: 12px;
	}
	tbody tr {
		td {
			padding: 12px;
			font-family: Work Sans;
			font-size: 18px;
			align-items: center;
			border-bottom: 1px solid #ddd;
		}
	}
	img {
		height: 137px;
		width: 160px;
	}
	strong {
		color: #333;
		display: block;
	}
	span {
		margin-top: 5px;
		font-size: 18px;
		font-weight: bold;
	}
	div {
		display: flex;
		align-items: center;
		input {
			border: 1px solid #ddd;
			border-radius: 4px;
			color: #666;
			padding: 6px;
			width: 50px;
		}
	}
	button {
		background: none;
		border: 0;
		padding: 6px;
	}
`;

export const TableTotal = styled.div`
	width: 25%;
	align-items: center;
	table {
		width: 100%;
		thead th {
			color: #595050;
			font-size: 24px;
			text-align: left;
			padding: 12px;
		}
		tbody tr {
			border-bottom: 1px solid #eee;
			font: 18px Work Sans;
			td {
				display: flex;
				justify-content: space-between;
			}
		}
	}
	div {
		margin-top: 27px;
		Link {
			text-decoration: none;
		}
		button {
			width: 337px;
			height: 50px;
			border: 0px;
			border-radius: 8px;
			background-color: #8cbf1c;
			margin-left: 2px;
			span {
				font: 18px Work Sans;
				font-weight: bold;
				color: #fff;
				text-align: center;
			}
		}
	}
	footer {
		display: flex;
		justify-content: space-between;
		background-color: #e3e5e5;
		font-family: Work Sans;
		font-size: 18px;
		font-weight: bold;
		height: 68px;
		margin-top: 27px;
		padding: 0px 5px 0px 5px;
		text-decoration: none;
		align-self: center;
	}
`;
