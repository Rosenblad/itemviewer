import {
  CollectionViewerActionTypes,
  Collection,
  ADD_COLLECTION,
  REMOVE_COLLECTION,
  ADD_ITEMS_TO_COLLECTION,
} from './types';

export function addCollection(
  collection: Collection,
): CollectionViewerActionTypes {
  return {
    type: ADD_COLLECTION,
    collection,
  };
}

export function removeCollection(
  id: Collection['id'],
): CollectionViewerActionTypes {
  return {
    type: REMOVE_COLLECTION,
    id,
  };
}

export function addItemsToCollection(
  collectionId: Collection['id'],
  items: Collection['items'],
): CollectionViewerActionTypes {
  return {
    type: ADD_ITEMS_TO_COLLECTION,
    collectionId,
    items,
  };
}
