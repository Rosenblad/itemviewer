import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';

import CollectionViewer from '../../components/CollectionViewer';
import { getCollections } from './selectors';
import { addCollection, removeCollection } from './actions';

class CollectionViewerContainer extends React.Component {
	state = {
		name: '',
	};

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.addCollection({
			id: uuid.v4(),
			name: this.state.name,
		});
	}

	handleDeleteClick(e, id) {
		this.props.removeCollection(id);
	}

	render() {
		const { collections } = this.props;

		return (
			<CollectionViewer
				collections={collections}
				name={this.state.name}
				onDelete={this.handleDeleteClick}
				onSubmit={this.handleSubmit}
				onChange={this.handleChange} />
		);
	}
}

CollectionViewerContainer.propTypes = {
	collections: PropTypes.array.isRequired,
	addCollection: PropTypes.func.isRequired,
	removeCollection: PropTypes.func.isRequired,
};

const Connected = connect(
	state => ({
		collections: getCollections(state),
	}),
	{
		addCollection,
		removeCollection,
	},
)(CollectionViewerContainer);

export default Connected;
