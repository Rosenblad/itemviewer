export function updateObject(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}

// export function updateItemInObject(object, updateKey, updateItemCallback) {
// 	updateObject()
// 	Object.keys(object).map(itemKey => {
// 		if (itemKey === itemId) {
// 			updateObject()
// 		}
// 	})
// }

export function updateItemInArray(array, itemId, updateItemCallback) {
	const updatedItems = array.map((item) => {
		if (item.id !== itemId) {
			return item;
		}

		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
}

export function removeItemInObejct(object, deleteKey) {
	return Object.keys(object)
		.filter(key => key !== deleteKey)
		.reduce((result, current) => {
			// eslint-disable-next-line
			result[current] = object[current];
			return result;
		}, {});
}

export function removeItemInArray(array, itemId) {
	const updatedItems = array.filter((item) => {
		if (item.id !== itemId) {
			return true;
		}

		return false;
	});

	return updatedItems;
}
