import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';

import { collectionsSelector } from 'selectors/collections';
import List from './components/List';
import ListItem from './components/ListItem';
import CreateCollection from './components/CreateCollection';
import { createCollection, deleteCollection } from 'actions/collection';

const Heading = styled.h1`
  margin: 0 32px 16px;
  padding-top: 16px;
  font-size: 24px;
  color: rgba(0, 0, 0, .87);
  font-weight: 300;
`;

class CollectionViewer extends React.Component {
  state = {
  	name: '',
  };

  handleChange = (e) => {
  	this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
  	e.preventDefault();

  	this.props.createCollection({
  		id: uuid.v4(),
  		name: this.state.name,
  	});
  }

  handleDeleteClick(e, id) {
  	this.props.deleteCollection(id);
  }

  render() {
  	const { collections } = this.props;

  	return (
	<div>
		<Heading>Choose a collection to view</Heading>
		<List style={{ marginBottom: 16 }}>
			{collections.map(collection => (
				<ListItem
					key={collection.id}
					onDeleteClick={this.handleDeleteClick}
					{...collection}
          />))}
		</List>
		<CreateCollection
			value={this.state.name}
			onChange={this.handleChange}
			onSubmit={this.handleSubmit}
      />
	</div>
  	);
  }
}

CollectionViewer.propTypes = {
	collections: PropTypes.array.isRequired,
	createCollection: PropTypes.func.isRequired,
	deleteCollection: PropTypes.func.isRequired,
};

const Connected = connect(
	state => ({
		collections: collectionsSelector(state),
	}),
	{
		createCollection,
		deleteCollection,
	},
)(CollectionViewer);

export default Connected;
