export const HIDE_ITEM = 'HIDE_ITEM';
export function hideItem(id) {
	return {
		type: HIDE_ITEM,
		id,
	};
};

export const DELETE_ITEM = 'DELETE_ITEM';
export function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		id,
	};
};