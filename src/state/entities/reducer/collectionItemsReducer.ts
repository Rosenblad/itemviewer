import { normalize } from '../../reducerUtils';
import { CollectionItemsEntity } from '../types';
import { LOAD_DATA_SUCCESS, LoadDataSuccessAction } from '../../types';

import { initialState } from './index';

export default function collectionItemsReducer(
  state: CollectionItemsEntity = initialState,
  action: LoadDataSuccessAction,
): CollectionItemsEntity {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.collectionItems);
    default:
      return state;
  }
}
