import { combineReducers } from 'redux';
import * as types from '../actions/index';
import uuid from 'uuid';

const collectionsReducer = (state = [], action) => {
	switch (action.type) {
		case types.CREATE_COLLECTION:
			return state;
		default:
			return state;
	}
}

const itemsReducer = (state = [], action) => {
	switch (action.type) {
		case types.CREATE_COLLECTION:
			return action.collection.items
				.map(item => ({
					id: uuid.v4(),
					...item,
				}));
		case types.HIDE_ITEM:
			return state.map(item => itemReducer(item, action));
		default:
			return state;
	}
}

const itemReducer = (state = {}, action) => {
	switch (action.type) {
		case types.HIDE_ITEM:
			if (state.id === action.payload.id) {
				return Object.assign({}, state, { hidden: true });
			}

			return state;
		default:
			return state;
	}
}

export default combineReducers({
	collections: collectionsReducer,
	items: itemsReducer,
});
