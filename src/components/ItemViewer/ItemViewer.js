import React from 'react';
import PropTypes from 'prop-types';

import ListItems from './ListItems';
import './Viewer.css';

class ItemViewer extends React.Component {
	render() {
		const {
			items,
			onDelete,
			onHide,
			toolbar,
			hidden,
		} = this.props;

		return (
			<div className="Viewer">
				{toolbar}
				<ListItems
					items={items}
					onDelete={onDelete}
					onHide={onHide}
					hidden={hidden} />
			</div>
		);
	}
}

ItemViewer.propTypes = {
	items: PropTypes.array,
	onDelete: PropTypes.func.isRequired,
	onHide: PropTypes.func.isRequired,
	toolbar: PropTypes.node,
	hidden: PropTypes.array,
};

ItemViewer.defaultProps = {
	toolbar: null,
};

export default ItemViewer;
