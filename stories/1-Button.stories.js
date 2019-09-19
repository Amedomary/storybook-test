import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Sq } from '../src/App';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Amedomary</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const normal = () => (
  <Sq
    title="number one"
  />
)