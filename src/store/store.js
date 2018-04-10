import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import isMobile from '../utils/isMobile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  isMobile: isMobile()
};

const store = createStore(rootReducer, initialState, composeEnhancers());
const { dispatch, getState } = store;

export { store, dispatch, getState };
