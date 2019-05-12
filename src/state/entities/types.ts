import { Collection } from '../collectionviewer/types';

export interface Item {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  discountedPrice: string;
  src: string;
}

export type CollectionEntity = Collection;
export type ItemEntity = Item;

export interface ById {
  [id: string]: ItemEntity;
}

// eslint-disable-next-line @typescript-eslint/array-type
export type AllIds = ReadonlyArray<string>;

export interface CollectionItem {
  collectionId: string;
  itemIds: AllIds;
}

export interface ItemsById {
  [id: string]: ItemEntity;
}

export interface ItemsEntity {
  byId: ItemsById;
  allIds: AllIds;
}

export interface CollectionsById {
  [id: string]: CollectionEntity;
}

export interface CollectionsEntity {
  byId: CollectionsById;
  allIds: AllIds;
}

export interface CollectionItemsById {
  [id: string]: CollectionItem;
}

export interface CollectionItemsEntity {
  byId: CollectionItemsById;
  allIds: AllIds;
}

export interface EntitiesState {
  collections: CollectionsEntity;
  items: ItemsEntity;
  collectionItems: CollectionItemsEntity;
}
