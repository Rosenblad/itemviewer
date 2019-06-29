import { Collection, CollectionItem } from '../collectionviewer/types';
import { Item } from '../itemviewer/types';
import { Normalized } from '../reducerUtils';

export type ItemsEntity = Normalized<Item>;
export type CollectionsEntity = Normalized<Collection>;
export type CollectionItemsEntity = Normalized<CollectionItem>;

export interface EntitiesState {
  collections: CollectionsEntity;
  items: ItemsEntity;
  collectionItems: CollectionItemsEntity;
}
