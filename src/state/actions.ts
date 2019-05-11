import { LOAD_DATA_SUCCESS, LoadDataSuccessAction } from './types';
import { Entity } from './entities/types';

interface Props {
  collections: {
    id: string;
    name: string;
  }[];
  items: Entity[];
  collectionItems: {
    id: string;
    collectionId: string;
    itemIds: string[];
  }[];
}

export function loadDataSuccess({
  collections,
  items,
  collectionItems,
}: Props): LoadDataSuccessAction {
  return {
    type: LOAD_DATA_SUCCESS,
    collections,
    items,
    collectionItems,
  };
}
