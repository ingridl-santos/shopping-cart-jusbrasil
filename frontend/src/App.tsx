import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store/index';
import GlobalStyle from './styles/global';
import './config/reactotronConfig';

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
				<GlobalStyle />
			</Provider>
		</>
	);
}

export default App;
