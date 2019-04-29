import React from 'react';
import { storiesOf } from '@storybook/react';
// @ts-ignore
import { ListItemActions } from 'collectionviewer';

const stories = storiesOf('Collection Viewer', module);

stories.add('ListItemActions', () => <ListItemActions />);
