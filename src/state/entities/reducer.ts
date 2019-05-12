import { combineReducers } from 'redux';
import { normalize } from '../reducerUtils';
import { CollectionsEntity, ItemsEntity, CollectionItemsEntity } from './types';
import { LOAD_DATA_SUCCESS, LoadDataSuccessAction } from '../types';

const initialState = {
  byId: {},
  allIds: [],
};

function collectionsReducer(
  state: CollectionsEntity = initialState,
  action: LoadDataSuccessAction,
): CollectionsEntity {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collections);
    default:
      return state;
  }
}

function itemsReducer(
  state: ItemsEntity = initialState,
  action: LoadDataSuccessAction,
): ItemsEntity {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.items);
    default:
      return state;
  }
}

function collectionItemsReducer(
  state: CollectionItemsEntity = initialState,
  action: LoadDataSuccessAction,
): CollectionItemsEntity {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collectionItems);
    default:
      return state;
  }
}

export default combineReducers({
  collections: collectionsReducer,
  items: itemsReducer,
  collectionItems: collectionItemsReducer,
});
