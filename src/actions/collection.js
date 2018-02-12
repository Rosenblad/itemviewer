export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export function createCollection(collection) {
	return {
		type: CREATE_COLLECTION,
		collection: {
			id: collection.id,
			items: collection.items || [],
			...collection
		},
	};
};

export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export function deleteCollection(id) {
	return {
		type: DELETE_COLLECTION,
		id,
	};
};

export const ADD_ITEMS_TO_COLLECTION = 'ADD_ITEMS_TO_COLLECTION';
export function addItemsToCollection(collectionId, items) {
	return {
		type: ADD_ITEMS_TO_COLLECTION,
		collectionId,
		items,
	};
};