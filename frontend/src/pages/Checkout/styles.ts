import styled from 'styled-components';

export const Container = styled.div`
	padding: 30px;
	display: flex;
	justify-content: space-between;
`;

export const CreditCardContainer = styled.form`
	width: 60%;
	margin: 100px 0px 0px 10px;
	font-family: Work Sans;
	font-weight: bold;
	color: #595050;
	header {
		font-size: 36px;
		margin-bottom: 19px;
	}
	> div {
		display: flex;
		flex-direction: column;
		strong {
			font-size: 18px;
			margin-bottom: 10px;
		}
		input {
			border-radius: 4px;
			border: 1px solid #999999;
			height: 35px;
			margin-bottom: 40px;
			padding: 4px;
		}
		> div {
			display: flex;
			> div {
				display: flex;
				flex-direction: column;
				margin-right: 50px;
				span {
					margin-bottom: 10px;
				}
			}
		}
	}
	button {
		background: #8cbf1c;
		color: #fff;
		border: 0;
		border-radius: 10px;
		margin-top: 10px;
		width: 400px;
		height: 50px;
		text-align: center;
		transition: background 0.2s;
		font-size: 18px;
		font-weight: bold;
	}
`;
export const TotalOrders = styled.div`
	margin: 100px 10px 0px 00px;
	width: 35%;
	align-items: center;
	table {
		width: 100%;
		border-spacing: 20px;
		thead th {
			color: #595050;
			font-size: 24px;
			text-align: left;
			padding-bottom: 20px;
			border-bottom: 1px solid #ccc;
		}
		tbody {
			margin: 10px 0px 10px 0px;
			strong {
				font-size: 18px;
				font-weight: bold;
			}
			tr {
				border-bottom: 1px solid #eee;
				font: 18px Work Sans;
				padding: 20px;
				td {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
	footer {
		display: flex;
		justify-content: space-between;
		background-color: #e3e5e5;
		font: 18px Work Sans;
		font-weight: bold;
		height: 68px;
		margin-top: 27px;
		padding: 0px 5px 0px 5px;
		text-decoration: none;
		div {
			margin-top: 20px;
		}
	}
`;

export const ModalContainer = styled.div`
	position: absolute;
	width: 600px;
	height: 370px;
	background-color: #fff;
	border-radius: 10px;
	border: 0px;
	padding: 5px;
	top: 50%;
	left: 50%;
	margin: -185px 0 0 -300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;
	text-align: center;
	font: 24px Work Sans;
	img {
		width: 227px;
		height: 150px;
	}
	button {
		width: 337px;
		height: 50px;
		border: 0px;
		border-radius: 8px;
		background-color: #8cbf1c;
		margin-top: 40px;
		span {
			font: 18px Work Sans;
			font-weight: bold;
			color: #fff;
			text-align: center;
		}
	}
`;
