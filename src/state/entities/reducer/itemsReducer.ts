import { ItemsEntity } from '../types';
import { normalize } from '../../reducerUtils';
import { LOAD_DATA_SUCCESS, LoadDataSuccessAction } from '../../types';

import { initialState } from './index';

export default function itemsReducer(
  state: ItemsEntity = initialState,
  action: LoadDataSuccessAction,
): ItemsEntity {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return normalize(action.items);
    default:
      return state;
  }
}
