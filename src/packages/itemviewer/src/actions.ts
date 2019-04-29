export const DELETE_ITEM = 'DELETE_ITEM';
// @ts-ignore
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export const HIDE_ITEM = 'HIDE_ITEM';
// @ts-ignore
export function hideItem(id) {
  return {
    type: HIDE_ITEM,
    id,
  };
}

export const ADD_ITEMS = 'ADD_ITEMS';
// @ts-ignore
export function addItems(items) {
  return {
    type: ADD_ITEMS,
    items,
  };
}
