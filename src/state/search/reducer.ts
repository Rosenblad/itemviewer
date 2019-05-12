import { updateObject } from '../reducerUtils';
import {
  SET_VISIBLE_ITEMS,
  SetVisibileItemsAction,
  SearchState,
} from './types';

const initialState: SearchState = {
  visibleItems: [],
};

function setVisibleItems(
  state: SearchState,
  action: SetVisibileItemsAction,
): SearchState {
  return updateObject(state, { visibleItems: action.ids });
}

export default function searchReducer(
  state = initialState,
  action: SetVisibileItemsAction,
): SearchState {
  switch (action.type) {
    case SET_VISIBLE_ITEMS:
      return setVisibleItems(state, action);
    default:
      return state;
  }
}
