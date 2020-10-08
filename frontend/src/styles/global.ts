import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: 0;
	}

	body {
		background: #ffffff;
	}

	#root {
		max-width: 1400px;
		margin: 0 auto;
	}

`;
