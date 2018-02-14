import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ListItems = ({ items, onCloseClick }) => (
	<div className="ListItems">
		{items.map(item => (
			<Item
				key={item.id}
				{...item}
				onCloseClick={onCloseClick} />
		))}
	</div>
)

ListItems.propTypes = {
	items: PropTypes.array,
	onCloseClick: PropTypes.func.isRequired,
};

ListItems.defaultProps = {
	items: [],
};

export default ListItems;