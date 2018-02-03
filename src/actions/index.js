import uuid from 'uuid';

export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export function createCollection(collection) {
	return {
		type: CREATE_COLLECTION,
		collection: {
			id: uuid.v4(),
			items: collection.items,
			...collection
		}
	};
};

export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export function deleteCollection(id) {
	return {
		type: DELETE_COLLECTION,
		id,
	}
};

export const HIDE_ITEM = 'HIDE_ITEM';
export function hideItem(id) {
	return {
		type: HIDE_ITEM,
		id,
	};
};

export const DELETE_ITEM = 'DELETE_ITEM';
export function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		id,
	};
};