import { createSelector } from 'reselect';
import { getItems } from 'state/entities/selectors';

export const getAutocompleteData = createSelector(
	[ getItems ],
	(items) => {
		return items.map(item => ({ 
			value: item.title, 
			label: item.title,
		}))
	}
);