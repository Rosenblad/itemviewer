import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from 'item-ui/IconButton';
import DeleteIcon from 'item-ui/DeleteIcon';

const ListItemActions = props => (
	<IconButton onClick={props.onDeleteClick}>
		<DeleteIcon />
	</IconButton>
);

const stories = storiesOf('Item UI', module);

stories.add('IconButton', () => <ListItemActions />);
