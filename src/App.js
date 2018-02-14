import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Pages from 'pages';

class App extends React.Component {
	render() {
		const { store } = this.props;

		return (
			<Provider store={store}>
				<Pages />
			</Provider>
		);
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired,
};

export default hot(module)(App);
