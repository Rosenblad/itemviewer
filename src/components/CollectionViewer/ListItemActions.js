import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import IconButton from '../UI/IconButton';
import DeleteIcon from '../UI/DeleteIcon';

// const Actions = styled.div`
// 	background: red;
// `;

const ListItemActions = props => (
	<IconButton onClick={props.onDeleteClick}>
		<DeleteIcon />
	</IconButton>
);

ListItemActions.propTypes = {
	onDeleteClick: PropTypes.func.isRequired,
};

export default ListItemActions;
