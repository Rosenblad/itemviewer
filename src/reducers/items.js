import * as types from 'actions/item';
// import { CREATE_COLLECTION } from 'actions/collection';
import * as utils from './utils';

// function addItem(state, item) {
// 	return utils.updateObject(state, item);
// }

function addItems(state, items) {
	return utils.updateObject(state, items);
}

function deleteItem(state, action) {
	return utils.removeItemInObejct(state, action.id);
}

function hideItem(state, action) {
	return utils.updateObject(state, {
		[action.id]: {
			...state[action.id],
			hidden: !state[action.id].hidden,
		},
	});
}

export default function itemsReducer(state = {}, action) {
	switch (action.type) {
		case types.HIDE_ITEM: return hideItem(state, action);
		case types.DELETE_ITEM: return deleteItem(state, action);
		case types.ADD_ITEMS: return addItems(state, action.items);
			// case CREATE_COLLECTION: return addItems(state, action.collection.items);
		default: return state;
	}
}
