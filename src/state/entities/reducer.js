import { combineReducers } from 'redux';
import { HIDE_ITEM } from 'containers/ItemViewerContainer/actions';
import { LOAD_DATA_SUCCESS } from '../actions';
import { removeItemInObject, normalize } from '../reducerUtils';

const initialState = {
	byId: {},
	allIds: [],
};

// function hideItem(state, action) {
// 	const { id } = action;

// 	return {
// 		byId: removeItemInObject(state.byId, id),
// 		allIds: state.allIds.filter(c => c !== id),
// 	};
// }

const collectionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_SUCCESS: return normalize(action.collections);
		default: return state;
	}
};

const itemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_SUCCESS: return normalize(action.items);
		// case HIDE_ITEM: return hideItem(state, action);
		default: return state;
	}
};

const collectionItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_SUCCESS: return normalize(action.collectionItems);
		default: return state;
	}
};

export default combineReducers({
	collections: collectionsReducer,
	items: itemsReducer,
	collectionItems: collectionItemsReducer,
});