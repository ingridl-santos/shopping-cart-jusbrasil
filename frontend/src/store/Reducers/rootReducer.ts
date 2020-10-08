import { combineReducers } from 'redux';
import cart from '../Reducers/cart/reducer';

const exportReducer = combineReducers({ cart });

export type ApplicationState = ReturnType<typeof exportReducer>;

export default exportReducer;
