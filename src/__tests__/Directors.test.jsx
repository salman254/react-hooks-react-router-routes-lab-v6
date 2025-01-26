// src/__tests__/Directors.test.jsx
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Directors from '../pages/Directors';

const directors = [
  { id: 1, name: 'Director 1', movies: ['Movie 1', 'Movie 2'] },
  { id: 2, name: 'Director 2', movies: ['Movie 3'] },
];

const routes = [
  {
    path: '/directors',
    element: <Directors directors={directors} />,
  },
];

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors'],
  });
  render(<RouterProvider router={router} />);
  const h1 = screen.getByText(/Directors Page/);
  expect(h1).toBeInTheDocument();
});