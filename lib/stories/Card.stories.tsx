import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from '../src/Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description for the card component.',
    imageUrl: 'https://picsum.photos/384/200',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card Without Image',
    description: 'This card does not have an image.',
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Card With Children',
    description: 'This card has additional content as children.',
    children: (
      <div>
        <p>This is custom content inside the card.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    ),
  },
};

export const CompleteExample: Story = {
  args: {
    title: 'Complete Example',
    description: 'This card showcases all features together.',
    imageUrl: 'https://picsum.photos/384/200',
    children: (
      <div>
        <p>Custom content with image and description.</p>
        <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
          Learn more
        </a>
      </div>
    ),
  },
};
