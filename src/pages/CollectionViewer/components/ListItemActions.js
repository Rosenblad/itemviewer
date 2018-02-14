import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import IconButton from 'components/IconButton';
import DeleteIcon from 'components/DeleteIcon';

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
