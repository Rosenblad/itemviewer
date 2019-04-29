import { createSelector } from 'reselect';

// @ts-ignore
const getEntities = state => state.entities;

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

// @ts-ignore
export const getCollectionById = (state, collectionId) => {
  if (!collectionId) return false;

  return getCollectionsEntity(state).byId[collectionId];
};

// @ts-ignore
export const getCollectionItemsByCollectionId = (state, collectionId) => {
  if (!collectionId) return [];

  // @ts-ignore
  const { itemIds } = Object.values(getCollectionItemsEntity(state).byId).find(
    cI => cI.collectionId === collectionId,
  );

  const itemEntities = getItemsEntity(state).byId;

  // @ts-ignore
  return itemIds.map(id => itemEntities[id]);
};

/**
 * Get denormalized entites
 */

export const getItems = createSelector(
  [getItemsEntity],
  entity => {
    const { byId, allIds } = entity;

    // @ts-ignore
    return allIds.map(id => byId[id]);
  },
);
