import React, { useState, FormEvent, SyntheticEvent } from 'react';
// @ts-ignore
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid';

import CollectionViewer from '../packages/collectionviewer/src/components/CollectionViewer';
import { getCollections } from '../state/collectionviewer/selectors';
import {
  addCollection,
  removeCollection,
} from '../state/collectionviewer/actions';
import { AppState } from '../state/types';

function CollectionViewerContainer(): JSX.Element {
  const [name, setName] = useState('');
  const collections = useSelector(
    (state: AppState): {}[] => getCollections(state),
  );
  const dispatchAddCollection = useDispatch(addCollection);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    dispatchAddCollection({
      id: uuid.v4(),
      name,
    });
  };

  function handleDeleteClick(_event: Event, id: string): void {
    removeCollection(id);
  }

  return (
    <CollectionViewer
      collections={collections}
      name={name}
      onDelete={handleDeleteClick}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

export default CollectionViewerContainer;
