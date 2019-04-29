import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from './List';
import ListItem from './ListItem';
import CreateCollection from './CreateCollection';

const Heading = styled.h1`
  margin: 0 32px 16px;
  padding-top: 16px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 300;
`;

class CollectionViewer extends React.Component {
  render() {
    // @ts-ignore
    const { collections, onDelete, onSubmit, onChange } = this.props;

    return (
      <div>
        <Heading>Choose a collection to view</Heading>
        <List style={{ marginBottom: 16 }}>
          // @ts-ignore
          {collections.map(collection => (
            <ListItem
              key={collection.id}
              onDeleteClick={onDelete}
              {...collection}
            />
          ))}
        </List>
        <CreateCollection
          // @ts-ignore
          value={this.props.name}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

// @ts-ignore
CollectionViewer.propTypes = {
  collections: PropTypes.array,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default CollectionViewer;
