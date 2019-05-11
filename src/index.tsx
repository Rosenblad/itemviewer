import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import { Store } from 'redux';

// import { createCollection } from 'state/actions/collection';
// import { addItems } from 'state/actions/item';
import App from './App';
import configureStore from './state/store/configureStore';
// import { loadState, saveState } from 'libs/storage';
import { saveState } from './state/libs/localStorage';
import { loadDataSuccess } from './state/actions';
import items from './state/data/zalando';
import './index.css';
import { ItemEntity } from './state/entities/types';
import { AppState } from './state/types';

// const persistedState = loadState();
// const store = configureStore(persistedState);

const store: Store<AppState> = configureStore();

const collectionId = '96388d7e-b578-490a-a7e3-4228a7f08446';

const collections = [
  {
    id: collectionId,
    name: 'Zalando',
  },
];

const collectionItems = [
  {
    id: uuid.v4(),
    collectionId,
    itemIds: items.map((item: ItemEntity): string => item.id),
  },
];

const data = {
  collections,
  items,
  collectionItems,
};

store.dispatch(loadDataSuccess(data));

// should use lodash throttle or similar
store.subscribe(
  (): void => {
    saveState(store.getState());
  },
);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
