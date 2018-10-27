export function normalize(entities) {
	if (!entities) return false;

	const byId = {};
	const allIds = [];

	entities.forEach(e => {
		byId[e.id] = e;
		allIds.push(e.id);
	});

	return {
		byId,
		allIds,
	};
}

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

function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        };    
    });
}

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

export function removeItemInObject(object, deleteKey) {
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

function insertItem(array, action) {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ]
}

function removeItem(array, action) {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
}

function insertItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
}

function removeItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 1);
    return newArray;
}

function removeItem(array, action) {
    return array.filter( (item, index) => index !== action.index);
}