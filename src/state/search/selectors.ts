import { createSelector } from 'reselect';
import { getItems } from '../entities/selectors';
import { ItemEntity } from '../entities/types';

export interface AutoCompleteData {
  value: string;
  label: string;
}

export const getAutocompleteData = createSelector(
  [getItems],
  (items: ItemEntity[]): AutoCompleteData[] => {
    return items.map(
      (item: ItemEntity): AutoCompleteData => ({
        value: item.title,
        label: item.title,
      }),
    );
  },
);
