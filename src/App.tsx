import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CollectionViewerContainer from './packages/collectionviewer/src/CollectionViewerContainer';
import CollectionView from './views/CollectionView';

// @ts-ignore
function App(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Collections</Link>
            </li>
          </ul>

          <Route exact path="/" component={CollectionViewerContainer} />
          <Route path="/collection/:collectionId" component={CollectionView} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
