import React from 'react';
import { storiesOf } from '@storybook/react';
// @ts-ignore
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello button</Button>
  ));
