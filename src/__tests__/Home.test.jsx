// src/__tests__/Home.test.jsx
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

const movies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
];

const routes = [
  {
    path: '/',
    element: <Home movies={movies} />,
  },
];

test("renders 'Home Page' inside of an <h1 />", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });
  render(<RouterProvider router={router} />);
  const h1 = screen.getByText(/Home Page/);
  expect(h1).toBeInTheDocument();
});