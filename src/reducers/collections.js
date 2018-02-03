import * as types from '../actions/index';
import * as utils from './utils';

function addCollection(state, action) {
	return state.concat(action.collection);
}

function deleteCollection(state, action) {
	return utils.removeItemInArray(state, action.id);
}

export default function collectionsReducer(state = [], action) {
	switch (action.type) {
		case types.CREATE_COLLECTION: return addCollection(state, action);
		case types.DELETE_COLLECTION: return deleteCollection(state, action);
		default: return state;
	}
}