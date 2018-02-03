import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Viewer from './Viewer';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

class App extends React.Component {
  render() {
  	const { store } = this.props;

    return (
    	<Provider store={store}>
    		<div>
					<Viewer />
					<DevTools />
				</div>
			</Provider>
    );
  }
}

App.propTypes = {
	store: PropTypes.object,
};

export default hot(module)(App);
