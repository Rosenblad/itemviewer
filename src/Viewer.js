import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './Viewer.css';
import wishlist from './parser/dist/wishlist.json';
import { hideItem } from './actions';
import { connect } from 'react-redux';

const items = wishlist.map(item => ({
	title: item.title,
	subtitle: item.subtitle,
	image: item.image,
	discount: item.discount,
	price: item.price,
	discountedPrice: item.discountedPrice,
	url: item.src,
}));

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

Viewer.defaultProps = {
	items,
};

export default connect(
	state => ({
		items: state.items,
	}),
	{ hideItem }
)(Viewer);