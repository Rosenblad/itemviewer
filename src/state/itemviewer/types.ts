export interface ItemViewerState {
  hidden?: [];
}

export const HIDE_ITEM = 'HIDE_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

interface DeleteItem {
  type: typeof DELETE_ITEM;
  id: string;
}

interface HideItem {
  type: typeof HIDE_ITEM;
  id: string;
}

interface AddItems {
  type: typeof ADD_ITEMS;
  items: string[];
}

export type ItemViewerActions = DeleteItem | HideItem | AddItems;
