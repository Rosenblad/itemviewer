interface Normalized {
  byId: {};
  allIds: string[];
}

export function normalize(entities: []): Normalized {
  const byId = {};
  const allIds: string[] = [];

  if (!entities) return { byId, allIds };

  entities.forEach(
    (e: { id: string }): void => {
      byId[e.id] = e;
      allIds.push(e.id);
    },
  );

  return {
    byId,
    allIds,
  };
}

export function updateObject(oldObject: {}, newValues: {}): {} {
  return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(
  array: [],
  itemId: string,
  updateItemCallback: (item: {}) => {},
): {}[] {
  const updatedItems = array.map(
    (item: { id: string }): {} => {
      if (item.id !== itemId) {
        return item;
      }

      const updatedItem = updateItemCallback(item);
      return updatedItem;
    },
  );

  return updatedItems;
}

export function removeItemInObject(object: {}, deleteKey: string): {} {
  return Object.keys(object)
    .filter((key): boolean => key !== deleteKey)
    .reduce((result, current): {} => {
      return Object.assign({}, result, { [current]: object[current] });
    }, {});
}

export function removeItemInArray(
  array: { id: string }[],
  itemId: string,
): { id: string }[] {
  const updatedItems: { id: string }[] = array.filter(
    (item: { id: string }): boolean => {
      if (item.id !== itemId) {
        return true;
      }

      return false;
    },
  );

  return updatedItems;
}
