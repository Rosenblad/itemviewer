export const SET_VISIBLE_ITEMS = 'SET_VISIBLE_ITEMS';
export function setVisibleItems({ ids }) {
	return {
		type: SET_VISIBLE_ITEMS,
		ids,
	};
}

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export function setSearchQuery({ query }) {
	return {
		type: SET_SEARCH_QUERY,
		query,
	};
}