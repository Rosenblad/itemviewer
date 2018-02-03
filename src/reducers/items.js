import * as types from '../actions/itemActions';
import { CREATE_COLLECTION } from '../actions/collectionActions';
import * as utils from './utils';

function addItem(state, item) {
	return state.concat(item);
}

function addItems(state, items) {
	return [ ...state, ...items.map(item => item)];
}

function deleteItem(state, action) {
	return utils.removeItemInArray(state, action.id);
}

function hideItem(state, action) {
	return utils.updateItemInArray(state, action.id, item => {
		return utils.updateObject(item, { hidden: !item.hidden });
	})
}

export default function itemsReducer(state = [], action) {
	switch (action.type) {
		case types.HIDE_ITEM: return hideItem(state, action);
		case types.DELETE_ITEM: return deleteItem(state, action);
		case CREATE_COLLECTION: return addItems(state, action.collection.items);
		default: return state;
	}
}