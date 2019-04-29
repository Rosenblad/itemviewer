import { createStore } from 'redux';
import rootReducer from '../rootReducer';

export default function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
