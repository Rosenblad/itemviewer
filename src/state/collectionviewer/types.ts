import { Entity } from '../entities/types';

export interface Collection {
  id: string;
  name: string;
  items?: Entity[];
}

export type CollectionViewerState = Collection[];

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
