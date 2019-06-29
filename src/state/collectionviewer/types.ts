import { Item } from '../itemviewer/types';

export interface CollectionItem {
  collectionId: string;
  itemIds: readonly string[];
}

export interface Collection {
  id: string;
  name: string;
  items?: Item[];
}

export type Collections = Collection[];
export type CollectionViewerState = Collections;

export const ADD_COLLECTION = 'ADD_COLLECTION';
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';
export const ADD_ITEMS_TO_COLLECTION = 'ADD_ITEMS_TO_COLLECTION';

export interface AddCollectionAction {
  type: typeof ADD_COLLECTION;
  collection: Collection;
}

export interface RemoveCollectionAction {
  type: typeof REMOVE_COLLECTION;
  id: Collection['id'];
}

export interface AddItemsToCollectionAction {
  type: typeof ADD_ITEMS_TO_COLLECTION;
  collectionId: Collection['id'];
  items: Collection['items'];
}

export type CollectionViewerActionTypes =
  | AddCollectionAction
  | RemoveCollectionAction
  | AddItemsToCollectionAction;
