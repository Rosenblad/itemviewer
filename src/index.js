import React from 'react';
import ReactDOM from 'react-dom';
import { createCollection } from './actions';
import App from './App';
import configureStore from './store/configureStore';
import { loadState, saveState } from './libs/storage';
import wishlist from './parser/dist/wishlist.json';
import './index.css';

// const persistedState = loadState();
// const store = configureStore(persistedState);

const store = configureStore();

store.dispatch(createCollection({ items: wishlist }));

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
	<App store={store} />, document.getElementById('root')
);