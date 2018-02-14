import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideItem, deleteItem } from 'actions/item';
import CloseIcon from './Close';
import DeleteIcon from './Delete';
import './Actions.css';

class Actions extends React.Component {
	handleCloseClick = (event) => {
		this.props.hideItem(this.props.id);

		if (this.props.onCloseClick) {
			this.props.onCloseClick(event);
		}
	};

	handleDeleteClick = (event) => {
		this.props.deleteItem(this.props.id);

		if (this.props.onDeleteClick) {
			this.props.onDeleteClick(event);
		}
	};

	render() {
		return (
			<div className="actions">
				<div className="delete" onClick={this.handleDeleteClick}>
					<DeleteIcon />
				</div>
				<div className="close" onClick={this.handleCloseClick}>
					<CloseIcon />
				</div>
			</div>
		);
	}
}

Actions.propTypes = {
	id: PropTypes.string.isRequired,
	onCloseClick: PropTypes.func,
	onDeleteClick: PropTypes.func,
	hideItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
};

export default connect(
	null,
	{
		hideItem,
		deleteItem,
	},
)(Actions);
