import { combineReducers } from 'redux';
import { HIDE_ITEM } from './actions';

const hidden = (state = [], action) => {
	switch (action.type) {
		case HIDE_ITEM: return [ ...state, action.id ];
		default: return state;
	}
}

export default combineReducers({
	hidden,
});
