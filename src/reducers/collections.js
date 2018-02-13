import * as types from 'actions/collection';
import * as utils from './utils';

function addCollection(state, action) {
	return state.concat(action.collection);
}

function deleteCollection(state, action) {
	return utils.removeItemInArray(state, action.id);
}

function addItemsToCollection(state, action) {
	return state.map((collection) => {
		if (collection.id === action.collectionId) {
			return utils.updateObject(collection, { items: action.items });
		}

		return collection;
	});
}

export default function collectionsReducer(state = [], action) {
	switch (action.type) {
		case types.CREATE_COLLECTION: return addCollection(state, action);
		case types.DELETE_COLLECTION: return deleteCollection(state, action);
		case types.ADD_ITEMS_TO_COLLECTION: return addItemsToCollection(state, action);
		default: return state;
	}
}
