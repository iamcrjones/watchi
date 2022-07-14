import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders basic empty template', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
