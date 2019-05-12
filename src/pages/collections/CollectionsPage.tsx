import React, { useState, FormEvent, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid';

import { Collections } from '../../state/collectionviewer/types';
import CollectionViewer from '../../packages/collectionviewer/src/components/CollectionViewer';
import { getCollections } from '../../state/collectionviewer/selectors';
import {
  addCollection,
  removeCollection,
} from '../../state/collectionviewer/actions';
import { AppState } from '../../state/types';

function CollectionsPage(): JSX.Element {
  const [name, setName] = useState('');
  const collections = useSelector(
    (state: AppState): Collections => getCollections(state),
  );
  const dispatch = useDispatch();

  const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    dispatch(
      addCollection({
        id: uuid.v4(),
        name,
      }),
    );
  };

  function handleDeleteClick(_event: React.MouseEvent, id: string): void {
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

export default CollectionsPage;
