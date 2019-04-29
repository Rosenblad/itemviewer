export function normalize(entities: any) {
  if (!entities) return false;

  const byId = {};
  const allIds: any = [];

  entities.forEach((e: any) => {
    byId[e.id] = e;
    allIds.push(e.id);
  });

  return {
    byId,
    allIds,
  };
}

export function updateObject(oldObject: {}, newValues: {}) {
  return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(
  array: [],
  itemId: any,
  updateItemCallback: any,
) {
  const updatedItems = array.map((item: any) => {
    if (item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export function removeItemInObject(object: any, deleteKey: any) {
  return Object.keys(object)
    .filter(key => key !== deleteKey)
    .reduce((result, current) => {
      // eslint-disable-next-line
			result[current] = object[current];
      return result;
    }, {});
}

export function removeItemInArray(array: [], itemId: any) {
  const updatedItems = array.filter((item: any) => {
    if (item.id !== itemId) {
      return true;
    }

    return false;
  });

  return updatedItems;
}
