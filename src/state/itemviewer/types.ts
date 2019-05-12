export type Hidden = string[] | [];

export interface ItemViewerState {
  hidden?: Hidden;
}

export const HIDE_ITEM = 'HIDE_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

export interface DeleteItem {
  type: typeof DELETE_ITEM;
  id: string;
}

export interface HideItem {
  type: typeof HIDE_ITEM;
  id: string;
}

export interface AddItems {
  type: typeof ADD_ITEMS;
  items: string[];
}

export type ItemViewerActions = DeleteItem | HideItem | AddItems;
