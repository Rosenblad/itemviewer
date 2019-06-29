import { CollectionsEntity } from '../types';
import { LOAD_DATA_SUCCESS, LoadDataSuccessAction } from '../../types';
import { normalize, merge } from '../../reducerUtils';
import {
  ADD_COLLECTION,
  AddCollectionAction,
} from '../../collectionviewer/types';

import { initialState } from './index';

export default function collectionsReducer(
  state: CollectionsEntity = initialState,
  action: LoadDataSuccessAction | AddCollectionAction,
): CollectionsEntity {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collections);
    case ADD_COLLECTION:
      return merge(state, normalize(action.collection));
    default:
      return state;
  }
}
