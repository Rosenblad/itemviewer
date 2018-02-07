import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './Viewer.css';
import { hideItem } from './actions/itemActions';
import { connect } from 'react-redux';

class Viewer extends React.Component {

	handleCloseClick = (event, id) => {
		event.preventDefault();

		this.props.hideItem(id);
	}

	render() {
		const {
			items,
		} = this.props;

		return (
			<div className="Viewer">
				{items.map((item, i) => 
					<Item 
						key={item.id} 
						{...item} 
						onCloseClick={this.handleCloseClick} />
				)}
			</div>
		);
	}
}

Viewer.propTypes = {
	items: PropTypes.array,
	hideItem: PropTypes.func,
};

export default connect(
	state => ({
		items: state.items,
	}),
	{ hideItem }
)(Viewer);