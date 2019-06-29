import { createSelector } from 'reselect';
import { AppState } from '../types';
import { EntitiesState } from './types';
import { Collection } from '../collectionviewer/types';
import { Item } from '../itemviewer/types';

export function getEntities(state: AppState): EntitiesState {
  return state.entities;
}

/**
 * Get entities
 */

export const getCollectionsEntity = createSelector(
  [getEntities],
  (entities): EntitiesState['collections'] => entities.collections,
);

export const getItemsEntity = createSelector(
  [getEntities],
  (entities): EntitiesState['items'] => entities.items,
);

export const getCollectionItemsEntity = createSelector(
  [getEntities],
  (entities): EntitiesState['collectionItems'] => entities.collectionItems,
);

/**
 * Get entities by ID
 */

export const getCollectionById = (
  state: AppState,
  collectionId: string,
): Collection | false => {
  if (!collectionId) return false;

  return getCollectionsEntity(state).byId[collectionId];
};

export const getCollectionItemsByCollectionId = (
  state: AppState,
  collectionId: string,
): Item[] | [] => {
  if (!collectionId) return [];

  const collectionItemsById = getCollectionItemsEntity(state).byId;

  const collectionItem = Object.values(collectionItemsById).find(
    (collectionItemTemp): boolean =>
      collectionItemTemp.collectionId === collectionId,
  );

  if (!collectionItem) return [];

  const { itemIds } = collectionItem;

  const itemsById = getItemsEntity(state).byId;

  return itemIds.map((id: string): Item => itemsById[id]);
};

/**
 * Get denormalized entites
 */

export const getItems = createSelector(
  [getItemsEntity],
  (entity): Item[] => {
    const { byId, allIds } = entity;

    return allIds.map((id: string): Item => byId[id]);
  },
);
