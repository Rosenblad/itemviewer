import { removeItemInArray, updateObject } from '../reducerUtils';
import {
  ADD_COLLECTION,
  REMOVE_COLLECTION,
  ADD_ITEMS_TO_COLLECTION,
  CollectionViewerState,
  AddCollectionAction,
  Collection,
  AddItemsToCollectionAction,
  RemoveCollectionAction,
} from './types';

function addCollection(
  state: CollectionViewerState,
  action: AddCollectionAction,
): CollectionViewerState {
  return state.concat(action.collection);
}

function removeCollection(
  state: CollectionViewerState,
  action: RemoveCollectionAction,
): CollectionViewerState {
  return removeItemInArray(state, action.id);
}

function addItemsToCollection(
  state: CollectionViewerState,
  action: AddItemsToCollectionAction,
): CollectionViewerState {
  return state.map(
    (collection: any): Collection => {
      if (collection.id === action.collectionId) {
        return updateObject(collection, { items: action.items });
      }

      return collection;
    },
  );
}

export default function collectionsReducer(
  state: CollectionViewerState = [],
  action: any,
): CollectionViewerState {
  switch (action.type) {
    case ADD_COLLECTION:
      return addCollection(state, action);
    case REMOVE_COLLECTION:
      return removeCollection(state, action);
    case ADD_ITEMS_TO_COLLECTION:
      return addItemsToCollection(state, action);
    default:
      return state;
  }
}
