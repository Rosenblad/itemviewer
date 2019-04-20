import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'item-ui/IconButton';
import DeleteIcon from 'item-ui/DeleteIcon';

const ListItemActions = props => (
	<IconButton onClick={props.onDeleteClick}>
		<DeleteIcon />
	</IconButton>
);

ListItemActions.propTypes = {
	onDeleteClick: PropTypes.func.isRequired,
};

export default ListItemActions;
