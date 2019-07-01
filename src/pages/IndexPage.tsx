import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import CollectionsPage from './collections/CollectionsPage';
import CollectionView from '../views/CollectionView';
import ApiBrowserPage from './api-browser';

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Collections</Link>
        </li>
      </ul>
      <Route exact path="/" component={CollectionsPage} />
      <Route path="/collection/:collectionId" component={CollectionView} />
      <Route path="/api-browser" component={ApiBrowserPage} />
    </div>
  );
}
