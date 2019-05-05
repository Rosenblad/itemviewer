import { ItemViewerActions, ADD_ITEMS, DELETE_ITEM, HIDE_ITEM } from './types';

export function deleteItem(id: string): ItemViewerActions {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export function hideItem(id: string): ItemViewerActions {
  return {
    type: HIDE_ITEM,
    id,
  };
}

export function addItems(items: []): ItemViewerActions {
  return {
    type: ADD_ITEMS,
    items,
  };
}
