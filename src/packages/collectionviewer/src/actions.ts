export const ADD_COLLECTION = 'ADD_COLLECTION';
// @ts-ignore
export function addCollection(collection) {
  return {
    type: ADD_COLLECTION,
    collection,
  };
}

export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';
// @ts-ignore
export function removeCollection(id) {
  return {
    type: REMOVE_COLLECTION,
    id,
  };
}

export const ADD_ITEMS_TO_COLLECTION = 'ADD_ITEMS_TO_COLLECTION';
// @ts-ignore
export function addItemsToCollection(collectionId, items) {
  return {
    type: ADD_ITEMS_TO_COLLECTION,
    collectionId,
    items,
  };
}
