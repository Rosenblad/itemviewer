import { removeItemInArray, updateObject } from 'state/reducerUtils';
import { ADD_COLLECTION, REMOVE_COLLECTION, ADD_ITEMS_TO_COLLECTION } from './actions';

function addCollection(state, action) {
	return state.concat(action.collection);
}

function removeCollection(state, action) {
	return removeItemInArray(state, action.id);
}

function addItemsToCollection(state, action) {
	return state.map((collection) => {
		if (collection.id === action.collectionId) {
			return updateObject(collection, { items: action.items });
		}

		return collection;
	});
}

export default function collectionsReducer(state = [], action) {
	switch (action.type) {
		case ADD_COLLECTION: return addCollection(state, action);
		case REMOVE_COLLECTION: return removeCollection(state, action);
		case ADD_ITEMS_TO_COLLECTION: return addItemsToCollection(state, action);
		default: return state;
	}
}
