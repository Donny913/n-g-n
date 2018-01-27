import { createStore, compose } from 'redux';
import rootReducer from 'reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers);
const { dispatch, getState } = store;

export { store, dispatch, getState };
