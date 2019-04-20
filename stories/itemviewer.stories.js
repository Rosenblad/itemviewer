import React from 'react';
import { storiesOf } from '@storybook/react';
import { Item } from 'itemviewer';
// // import ItemViewer from 'itemviewer';

const stories = storiesOf('ItemViewer', module);

const props = {
	id: '123',
};

stories.add('Basic', () => <Item {...props} />);
