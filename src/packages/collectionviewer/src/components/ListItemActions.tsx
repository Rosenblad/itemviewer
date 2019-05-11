import * as React from 'react';
import IconButton from '../../../item-ui/src/IconButton';
import DeleteIcon from '../../../item-ui/src/DeleteIcon';

export interface ListItemActionsProps {
  onDeleteClick(): void;
}

export default function ListItemActions({
  onDeleteClick,
}: ListItemActionsProps): JSX.Element {
  return (
    <IconButton onClick={onDeleteClick}>
      <DeleteIcon />
    </IconButton>
  );
}
