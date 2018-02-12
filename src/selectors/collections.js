import { createSelector } from 'reselect';

export const collectionsSelector = state => state.collections;

export const itemsByCollectionId = (state, collectionId) => {
	if (!collectionId) return [];

	const collection = state.collections
		.find(collection => collection.id === collectionId);

	if (!collection) return [];

	return collection.items.map(id => state.items[id]);
};