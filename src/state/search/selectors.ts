import { createSelector } from 'reselect';
import { getItems } from '../entities/selectors';

export interface AutoCompleteData {
  value: string;
  label: string;
}

export const getAutocompleteData = createSelector(
  [getItems],
  (items): AutoCompleteData[] => {
    return items.map(
      (item): AutoCompleteData => ({
        value: item.title,
        label: item.title,
      }),
    );
  },
);
