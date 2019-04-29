import { createSelector } from 'reselect';
import { getCollectionsEntity } from '../../../state/entities/selectors';

export const getCollections = createSelector(
  [getCollectionsEntity],
  collections => Object.values(collections.byId),
);
