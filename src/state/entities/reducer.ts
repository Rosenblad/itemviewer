import { combineReducers } from 'redux';
import { normalize } from '../reducerUtils';
import { LOAD_DATA_SUCCESS, EntitiesState } from './types';

const initialState: EntitiesState = {
  byId: {},
  allIds: [],
};

const collectionsReducer = (
  state = initialState,
  action: any,
): EntitiesState => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collections);
    default:
      return state;
  }
};

const itemsReducer = (state = initialState, action: any): EntitiesState => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.items);
    default:
      return state;
  }
};

const collectionItemsReducer = (state = initialState, action: any) => {
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
