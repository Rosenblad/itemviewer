import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import ItemViewer from 'components/ItemViewer';
import { hideItem, deleteItem } from './actions';
import { getHidden } from './selectors';

class ItemViewerContainer extends React.Component {

	handleHide = (id) => {
		this.props.hideItem(id);

		forceCheck();
	}

	handleDelete = (id) => {
		this.props.deleteItem(id);

		forceCheck();
	}

	render() {
		const {
			items,
			deleteItem,
			hideItem,
			hidden,
			...other
		} = this.props;

		return (
			<ItemViewer
				items={items}
				onDelete={this.handleDelete}
				onHide={this.handleHide}
				hidden={hidden}
				{...other} />
		);
	}
}

ItemViewerContainer.propTypes = {
	items: PropTypes.array,
	hideItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
	hidden: PropTypes.array,
};

ItemViewerContainer.defaultProps = {
	items: [],
};

const Connected = connect(
	state => ({
		hidden: getHidden(state),
	}),
	{ hideItem, deleteItem },
)(ItemViewerContainer);


export default Connected;
