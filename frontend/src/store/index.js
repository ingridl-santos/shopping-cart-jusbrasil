import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';
import reactotron from '../config/reactotronConfig';

const store = createStore(rootReducer, reactotron.createEnhancer());

export default store;
