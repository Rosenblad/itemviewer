export interface Normalized<T> {
  byId: {
    [id: string]: T;
  };
  allIds: readonly string[];
}

export function normalize<T extends { id: string }>(
  entities: T[] | T,
): Normalized<T> {
  const byId = {};
  const allIds: string[] = [];

  if (!entities) return { byId, allIds };

  const entitiesArr = Array.isArray(entities) ? entities : [entities];

  entitiesArr.forEach(
    (e: T): void => {
      byId[e.id] = e;
      allIds.push(e.id);
    },
  );

  return {
    byId,
    allIds,
  };
}

export function merge<T>(n1: Normalized<T>, n2: Normalized<T>): Normalized<T> {
  return {
    byId: { ...n1.byId, ...n2.byId },
    allIds: [...n1.allIds, ...n2.allIds],
  };
}

export function updateObject<T, K>(oldObject: T, newValues: K): T & K {
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

export function removeItemInArray<T extends { id: string }>(
  array: T[],
  itemId: string,
): T[] {
  const updatedItems: T[] = array.filter(
    (item: T): boolean => {
      if (item.id !== itemId) {
        return true;
      }

      return false;
    },
  );

  return updatedItems;
}
