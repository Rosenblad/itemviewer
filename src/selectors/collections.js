export const collectionsSelector = state => state.collections;

export const itemsByCollectionId = (state, collectionId) => {
	if (!collectionId) return [];

	const collection = state.collections
		.find(c => c.id === collectionId);

	if (!collection) return [];

	return collection.items.map(id => state.items[id]);
};
