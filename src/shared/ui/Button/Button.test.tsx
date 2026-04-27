import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('render button with test', () => {
  render(<Button>Clik me</Button>);
  expect(screen.getByText('Clik me')).toBeInTheDocument();
});
