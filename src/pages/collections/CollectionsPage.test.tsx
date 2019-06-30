import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Route } from 'react-router';

import RootProviders from '../../RootProviders';
import configureStore from '../../state/store/configureStore';

import CollectionsPage from './CollectionsPage';

function renderWithProviders(component: JSX.Element) {
  const store = configureStore();
  return {
    ...render(<RootProviders store={store}>{component}</RootProviders>),
    store,
  };
}

function renderRoute() {
  return {
    ...renderWithProviders(
      <Route exact path="/" component={CollectionsPage} />,
    ),
  };
}

describe('CollectionsPage', () => {
  it('renders', () => {
    const wrapper = renderWithProviders(<CollectionsPage />);

    expect(wrapper).toBeDefined();
  });

  it('creates a new collection', () => {
    const wrapper = renderRoute();

    const input = wrapper.getByTestId(
      'create-collection-input',
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'new collection' } });

    expect(input.value).toBe('new collection');

    const submit = wrapper.getByText('Create');

    fireEvent.click(submit);

    expect(wrapper.getByText('new collection')).toBeDefined();
  });
});
