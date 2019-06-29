import { combineReducers } from 'redux';

import collectionsReducer from './collectionsReducer';
import itemsReducer from './itemsReducer';
import collectionItemsReducer from './collectionItemsReducer';

export const initialState = {
  byId: {},
  allIds: [],
};

export default combineReducers({
  collections: collectionsReducer,
  items: itemsReducer,
  collectionItems: collectionItemsReducer,
});
