import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CollectionViewerContainer from './containers/CollectionViewerContainer';
import CollectionView from './views/CollectionView';

function App(props): JSX.Element {
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
