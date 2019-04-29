import React from 'react';
import { storiesOf } from '@storybook/react';
// @ts-ignore
import IconButton from 'item-ui/IconButton';
// @ts-ignore
import DeleteIcon from 'item-ui/DeleteIcon';

// @ts-ignore
const ListItemActions = props => (
	<IconButton onClick={props.onDeleteClick}>
		<DeleteIcon />
	</IconButton>
);

const stories = storiesOf('Item UI', module);

stories.add('IconButton', () => <ListItemActions />);
