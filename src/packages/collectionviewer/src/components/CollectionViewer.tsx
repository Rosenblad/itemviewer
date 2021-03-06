import React, { FormEvent, SyntheticEvent } from 'react';
import styled from 'styled-components';

import List from './List';
import ListItem from './ListItem';
import CreateCollection from './CreateCollection';
import { Collection } from '../../../../state/collectionviewer/types';

const Heading = styled.h1`
  margin: 0 32px 16px;
  padding-top: 16px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 300;
`;

export interface CollectionViewerProps {
  collections?: Collection[];
  name: string;
  onDelete: (event: React.MouseEvent, id: string) => void;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export default function CollectionViewer({
  name,
  collections,
  onDelete,
  onSubmit,
  onChange,
}: CollectionViewerProps): JSX.Element {
  return (
    <div>
      <Heading>Choose a collection to view</Heading>
      <List style={{ marginBottom: 16 }}>
        {collections &&
          collections.map(
            (collection: { id: string; name: string }): JSX.Element => (
              <ListItem
                key={collection.id}
                onDeleteClick={onDelete}
                {...collection}
              />
            ),
          )}
      </List>
      <CreateCollection value={name} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}
