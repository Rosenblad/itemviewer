import { createSelector } from 'reselect';
import { AppState } from '../types';
import {
  EntitiesState,
  CollectionsEntity,
  ItemsEntity,
  CollectionItemsEntity,
  CollectionEntity,
  CollectionItem,
  ItemsById,
  ItemEntity,
  CollectionItemsById,
} from './types';

export function getEntities(state: AppState): EntitiesState {
  return state.entities;
}

/**
 * Get entities
 */

export const getCollectionsEntity = createSelector(
  [getEntities],
  (entities: EntitiesState): CollectionsEntity => entities.collections,
);

export const getItemsEntity = createSelector(
  [getEntities],
  (entities: EntitiesState): ItemsEntity => entities.items,
);

export const getCollectionItemsEntity = createSelector(
  [getEntities],
  (entities: EntitiesState): CollectionItemsEntity => entities.collectionItems,
);

/**
 * Get entities by ID
 */

export const getCollectionById = (
  state: AppState,
  collectionId: string,
): CollectionEntity | false => {
  if (!collectionId) return false;

  return getCollectionsEntity(state).byId[collectionId];
};

export const getCollectionItemsByCollectionId = (
  state: AppState,
  collectionId: string,
): ItemEntity[] | [] => {
  if (!collectionId) return [];

  const collectionItemsById: CollectionItemsById = getCollectionItemsEntity(
    state,
  ).byId;

  const collectionItem = Object.values(collectionItemsById).find(
    (collectionItemTemp: CollectionItem): boolean =>
      collectionItemTemp.collectionId === collectionId,
  );

  if (!collectionItem) return [];

  const { itemIds } = collectionItem;

  const itemsById: ItemsById = getItemsEntity(state).byId;

  return itemIds.map((id: string): ItemEntity => itemsById[id]);
};

/**
 * Get denormalized entites
 */

export const getItems = createSelector(
  [getItemsEntity],
  (entity: ItemsEntity): ItemEntity[] => {
    const { byId, allIds } = entity;

    return allIds.map((id: string): ItemEntity => byId[id]);
  },
);
