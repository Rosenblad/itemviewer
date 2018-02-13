import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';

function getDebugSessionKey() {
	const matches = window.location.href.match(/[?&]debug_session([^&]+)\b/);

	return matches && matches.length > 0 ? matches[1] : null;
}

const createStoreWithMiddleware = compose(
	persistState(getDebugSessionKey()),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers/index').default;

			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
