import * as React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';
import { Store } from 'redux';
import { BrowserRouter } from 'react-router-dom';

export interface RootProvidersProps {
  children: JSX.Element;
  store: Store<{}>;
}

export default function RootProviders({
  children,
  store,
}: RootProvidersProps): JSX.Element {
  return (
    <ReactReduxProvider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </ReactReduxProvider>
  );
}
