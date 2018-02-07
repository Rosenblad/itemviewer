import React from 'react';
import ReactDOM from 'react-dom';
import { createCollection } from './actions/collectionActions';
import App from './App';
import configureStore from './store/configureStore';
import { loadState, saveState } from './libs/storage';
import items from './data/zalando.json';
import './index.css';

// const persistedState = loadState();
// const store = configureStore(persistedState);

const store = configureStore();

store.dispatch(createCollection({ items }));

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
	<App store={store} />, document.getElementById('root')
);