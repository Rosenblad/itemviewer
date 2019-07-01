import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import SearchContainer from '../../containers/SearchContainer';
import ItemsPage from '../../pages/items/ItemsPage';
import { getCollectionItemsByCollectionId } from '../../state/entities/selectors';
import Collection404 from './Collection404';
import { AppState } from '../../state/types';
import { Item } from '../../state/itemviewer/types';

export default function CollectionView({
  match: {
    params: { collectionId },
  },
}: RouteComponentProps<{ collectionId: string }>): JSX.Element {
  const items = useSelector((state: AppState): Item[] | [] =>
    getCollectionItemsByCollectionId(state, collectionId),
  );

  if (items.length > 0) {
    return <ItemsPage items={items} toolbar={<SearchContainer />} />;
  }

  return <Collection404 />;
}
