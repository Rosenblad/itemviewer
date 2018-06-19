import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ListItems = ({ items, onDelete, onHide, hidden }) => (
	<div className="ListItems">
		{items.map(item => item && !hidden.includes(item.id) ? (
			<Item
				key={item.id}
				{...item}
				onHide={onHide}
				onDelete={onDelete} />
		) : null)}
	</div>
);

ListItems.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	onHide: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	hidden: PropTypes.array,
};

ListItems.defaultProps = {
	items: [],
	hidden: [],
};

export default ListItems;