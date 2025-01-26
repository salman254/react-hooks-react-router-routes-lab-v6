// src/__tests__/index.test.jsx
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../routes';

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes.routes, {
    initialEntries: ['/'],
  });
  render(<RouterProvider router={router} />);
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes.routes, {
    initialEntries: ['/actors'],
  });
  render(<RouterProvider router={router} />);
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes.routes, {
    initialEntries: ['/directors'],
  });
  render(<RouterProvider router={router} />);
});

test('renders the Movie component on route "/movie/:id"', () => {
  const id = 1;
  const router = createMemoryRouter(routes.routes, {
    initialEntries: [`/movie/${id}`],
  });
  render(<RouterProvider router={router} />);
});

test('renders an error page when given a bad URL', () => {
  const router = createMemoryRouter(routes.routes, {
    initialEntries: ['/bad-route'],
  });
  render(<RouterProvider router={router} />);
});