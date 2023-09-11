import { render, screen } from '@testing-library/react';
import App from './App';
import { it, expect } from 'vitest';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
