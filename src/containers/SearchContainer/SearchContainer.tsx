import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../components/Search';
import { getAutocompleteData, AutoCompleteData } from './selectors';
import { setVisibleItems } from './actions';
import { AppState } from '../../state/types';

export default function SearchContainer(): JSX.Element {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: AppState): AutoCompleteData[] => getAutocompleteData(state),
  );

  const handleChange = (ids: string[]): void => {
    dispatch(setVisibleItems({ ids }));
  };

  return <Search items={items} onChange={handleChange} />;
}
