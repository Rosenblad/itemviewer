import { LOAD_DATA_SUCCESS, LoadDataSuccessAction } from './types';

export function loadDataSuccess({
  collections,
  items,
  collectionItems,
}: any): LoadDataSuccessAction {
  return {
    type: LOAD_DATA_SUCCESS,
    collections,
    items,
    collectionItems,
  };
}
