import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import IconButton from '../../../item-ui/src/IconButton';
// @ts-ignore
import DeleteIcon from '../../../item-ui/src/DeleteIcon';

// @ts-ignore
const ListItemActions = props => (
  <IconButton onClick={props.onDeleteClick}>
    <DeleteIcon />
  </IconButton>
);

ListItemActions.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
};

export default ListItemActions;
