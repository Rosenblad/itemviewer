/* eslint-disable no-underscore-dangle */
import { createStore, Store, DeepPartial } from 'redux';
import rootReducer from '../rootReducer';
import { AppState } from '../types';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace window {
  const __REDUX_DEVTOOLS_EXTENSION__: any;
  const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

export default function configureStore(
  initialState?: DeepPartial<AppState>,
): Store {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

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
