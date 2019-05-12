import React from 'react';
import { Store } from 'redux';

import RootProviders from './RootProviders';
import IndexPage from './pages';

export default function App({ store }: { store: Store<{}> }): JSX.Element {
  return (
    <RootProviders store={store}>
      <IndexPage />
    </RootProviders>
  );
}
