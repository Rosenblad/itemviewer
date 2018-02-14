import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

import { createCollection } from 'actions/collection';
import { addItems } from 'actions/item';
import App from 'App';
import configureStore from 'store/configureStore';
// import { loadState, saveState } from 'libs/storage';
import { saveState } from 'libs/storage';
import items from 'data/zalando.json';
import 'index.css';

// const persistedState = loadState();
// const store = configureStore(persistedState);

const store = configureStore();

const itemIds = items.map(item => item.id);

const collectionId = uuid.v4();

store.dispatch(createCollection({
	id: collectionId,
	name: 'Zalando',
	items: itemIds,
}));

const normalizedItems = {};
// eslint-disable-next-line no-return-assign
items.map(item => normalizedItems[item.id] = item);

store.dispatch(addItems(normalizedItems));

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
