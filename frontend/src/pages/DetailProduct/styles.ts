import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 30px;
	display: flex;
	flex: row;
	justify-content: space-between;
	color: #595050;

	img {
		width: 844px;
		height: 694px;
	}

	div {
		margin-left: 20px;

		header {
			font-size: 36px;
			font-weight: 800;

			span {
				margin-top: 16px;
				font-size: 48px;
				font-weight: 400;
			}
			p {
				font: 18px Work Sans;
				font-weight: 100;
				margin: 10px 0 0 5px;
			}
		}

		div {
			display: flex;
			margin: 10px 0px 40px 5px;
			font-size: 18px;
			justify-content: left;
			align-items: center;

			input {
				border: 1px solid #ddd;
				border-radius: 4px;
				color: #666;
				padding: 6px;
				width: 50px;
			}
			button {
				background: none;
				border: 0;
				padding: 6px;
			}

			strong {
				font-size: 18px;
				font-weight: bold;
			}
		}

		footer {
			display: flex;
			flex-direction: column;

			strong {
				font-size: 36px;
				font-weight: 800;
				text-align: center;
				margin-bottom: 20px;
			}
			button {
				background: #8cbf1c;
				color: #fff;
				border: 0;
				border-radius: 4px;
				overflow: hidden;
				margin-top: auto;
				width: 456px;
				height: 50px;
				align-self: center;
				text-align: center;
				transition: background 0.2s;
				margin-bottom: 30px;
			}

			span {
				margin-bottom: 30px;
			}
		}
	}
`;
