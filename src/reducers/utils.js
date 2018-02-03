export function updateObject(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
	const updatedItems = array.map(item => {
		if (item.id !== itemId) {
			return item;
		}

		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
}

export function removeItemInArray(array, itemId) {
	const updatedItems = array.filter(item => {
		if (item.id !== itemId) {
			return true;
		}

		return false;
	});

	return updatedItems;
}