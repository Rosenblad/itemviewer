export const SET_VISIBLE_ITEMS = 'SET_VISIBLE_ITEMS';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export interface SearchState {
  visibleItems: string[];
}

export interface Option {
  value: string;
  label: string;
}

export type Options = Option[];

export interface SetVisibileItemsAction {
  type: typeof SET_VISIBLE_ITEMS;
  ids: string[];
}

export interface SetSearchQueryAction {
  type: typeof SET_SEARCH_QUERY;
  query: string;
}

export type SearchActions = SetVisibileItemsAction | SetSearchQueryAction;
