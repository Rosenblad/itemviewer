import { createStore, Store } from 'redux';
import rootReducer from '../rootReducer';
import { AppState } from '../types';

export default function configureStore(initialState?: AppState): Store {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(
      '../rootReducer',
      (): void => {
        // eslint-disable-next-line global-require
        const nextReducer = require('../rootReducer').default;

        store.replaceReducer(nextReducer);
      },
    );
  }

  return store;
}
