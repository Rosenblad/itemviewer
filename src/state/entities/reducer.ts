import { combineReducers } from 'redux';
import { normalize } from '../reducerUtils';
import { CollectionsEntity, ItemsEntity, CollectionItemsEntity } from './types';
import { LOAD_DATA_SUCCESS } from '../types';

const initialState = {
  byId: {},
  allIds: [],
};

const collectionsReducer = (
  state = initialState,
  action: any,
): CollectionsEntity => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collections);
    default:
      return state;
  }
};

const itemsReducer = (state = initialState, action: any): ItemsEntity => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.items);
    default:
      return state;
  }
};

const collectionItemsReducer = (
  state = initialState,
  action: any,
): CollectionItemsEntity => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collectionItems);
    default:
      return state;
  }
};

export default combineReducers({
  collections: collectionsReducer,
  items: itemsReducer,
  collectionItems: collectionItemsReducer,
});
