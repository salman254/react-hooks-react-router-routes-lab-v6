// src/__tests__/Actors.test.jsx
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Actors from '../pages/Actors';

const actors = [
  { id: 1, name: 'Actor 1', movies: ['Movie 1', 'Movie 2'] },
  { id: 2, name: 'Actor 2', movies: ['Movie 3'] },
];

const routes = [
  {
    path: '/actors',
    element: <Actors actors={actors} />,
  },
];

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/actors'],
  });
  render(<RouterProvider router={router} />);
  const h1 = screen.getByText(/Actors Page/);
  expect(h1).toBeInTheDocument();
});