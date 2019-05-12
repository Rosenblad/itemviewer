import { SET_VISIBLE_ITEMS, SET_SEARCH_QUERY, SearchActions } from './types';

export function setVisibleItems({ ids }: { ids: string[] }): SearchActions {
  return {
    type: SET_VISIBLE_ITEMS,
    ids,
  };
}

export function setSearchQuery({ query }: { query: string }): SearchActions {
  return {
    type: SET_SEARCH_QUERY,
    query,
  };
}
