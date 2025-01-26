// src/__tests__/Movie.test.jsx
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Movie from '../pages/Movie';

const movies = [
  { id: 1, title: 'Movie 1', time: '1h 30m', genres: ['Action', 'Adventure'] },
  { id: 2, title: 'Movie 2', time: '2h', genres: ['Comedy'] },
];

const routes = [
  {
    path: '/movie/:id',
    element: <Movie movies={movies} />,
  },
];

test('renders the Movie component on route "/movie/:id"', () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
  });
  render(<RouterProvider router={router} />);
  const h1 = screen.getByText(/Movie 1/);
  expect(h1).toBeInTheDocument();
});