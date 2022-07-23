import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestComponent } from './TestComponent';

describe('TestComponent', () => {
  it('renders "test-component" string', () => {
    render(<TestComponent />);
    expect(screen.getByText('test-component')).toBeInTheDocument();
  });
});
