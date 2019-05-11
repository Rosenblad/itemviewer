import { createSelector } from 'reselect';
import { getCollectionsEntity } from '../entities/selectors';
import { Collections } from './types';
import { CollectionsEntity } from '../entities/types';

export const getCollections = createSelector(
  [getCollectionsEntity],
  (collections: CollectionsEntity): Collections =>
    Object.values(collections.byId),
);
