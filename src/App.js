import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import CollectionViewerContainer from './containers/CollectionViewerContainer';
import CollectionView from './views/CollectionView';

class App extends React.Component {
	render() {
		const { store } = this.props;

		return (
			<Provider store={store}>
				<Router>
					<div>
						<ul>
							<li><Link to="/">Collections</Link></li>
						</ul>

						<Route
							exact
							path="/"
							component={CollectionViewerContainer} />
						<Route
							path="/collection/:collectionId"
							component={CollectionView} />

					</div>
				</Router>
			</Provider>
		);
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired,
};

export default hot(module)(App);
