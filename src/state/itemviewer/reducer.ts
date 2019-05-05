import { combineReducers } from 'redux';
import { HIDE_ITEM } from './types';

const hidden = (state = [], action: any) => {
  switch (action.type) {
    case HIDE_ITEM:
      return [...state, action.id];
    default:
      return state;
  }
};

export default combineReducers({
  hidden,
});
