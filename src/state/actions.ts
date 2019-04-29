export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
// @ts-ignore
export function loadDataSuccess({ collections, items, collectionItems }) {
  return {
    type: LOAD_DATA_SUCCESS,
    collections,
    items,
    collectionItems,
  };
}
