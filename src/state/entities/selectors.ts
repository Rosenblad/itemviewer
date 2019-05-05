import { createSelector } from 'reselect';
import { AppState } from '../types';
import { EntitiesState } from './types';

const getEntities = (state: AppState): EntitiesState => state.entities;

/**
 * Get entities
 */

export const getCollectionsEntity = createSelector(
  [getEntities],
  entities => entities.collections,
);

export const getItemsEntity = createSelector(
  [getEntities],
  entities => entities.items,
);

export const getCollectionItemsEntity = createSelector(
  [getEntities],
  entities => entities.collectionItems,
);

/**
 * Get entities by ID
 */

export const getCollectionById = (state, collectionId) => {
  if (!collectionId) return false;

  return getCollectionsEntity(state).byId[collectionId];
};

export const getCollectionItemsByCollectionId = (state, collectionId) => {
  if (!collectionId) return [];

  const { itemIds } = Object.values(getCollectionItemsEntity(state).byId).find(
    cI => cI.collectionId === collectionId,
  );

  const itemEntities = getItemsEntity(state).byId;

  return itemIds.map(id => itemEntities[id]);
};

/**
 * Get denormalized entites
 */

export const getItems = createSelector(
  [getItemsEntity],
  entity => {
    const { byId, allIds } = entity;

    return allIds.map(id => byId[id]);
  },
);
