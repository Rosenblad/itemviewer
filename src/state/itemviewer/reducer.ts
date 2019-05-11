import { combineReducers } from 'redux';
import { HIDE_ITEM, ItemViewerState, HideItem } from './types';

function hidden(
  state: ItemViewerState['hidden'] = [],
  action: HideItem,
): ItemViewerState['hidden'] {
  switch (action.type) {
    case HIDE_ITEM:
      return [...state, action.id];
    default:
      return state;
  }
}

export default combineReducers({
  hidden,
});
