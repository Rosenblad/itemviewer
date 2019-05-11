import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Store } from 'redux';

import RootProviders from './RootProviders';
import CollectionViewerContainer from './containers/CollectionViewerContainer';
import CollectionView from './views/CollectionView';
import { AppState } from './state/types';

export default function App({
  store,
}: {
  store: Store<AppState>;
}): JSX.Element {
  return (
    <RootProviders store={store}>
      <div>
        <ul>
          <li>
            <Link to="/">Collections</Link>
          </li>
        </ul>
        <Route exact path="/" component={CollectionViewerContainer} />
        <Route path="/collection/:collectionId" component={CollectionView} />
      </div>
    </RootProviders>
  );
}
