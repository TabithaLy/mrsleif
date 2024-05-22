import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/For posts older than 2023, visit Mrs. Leif's Original Blog/i);
  expect(linkElement).toBeInTheDocument();
});