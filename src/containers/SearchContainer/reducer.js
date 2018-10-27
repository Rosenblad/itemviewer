import { updateObject } from 'state/reducerUtils';
import { SET_VISIBLE_ITEMS } from './actions';

function setVisibleItems(state, action) {
	return updateObject(state, { visibleItems: action.ids });
}

export default function searchReducer(state, action) {
	switch (action.type) {
		case SET_VISIBLE_ITEMS: return setVisibleItems(state, action);
		default: return state;
	}
}