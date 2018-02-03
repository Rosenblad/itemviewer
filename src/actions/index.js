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
}

export const HIDE_ITEM = 'HIDE_ITEM';
export function hideItem(id) {
	return {
		type: HIDE_ITEM,
		payload: { id },
	};
}