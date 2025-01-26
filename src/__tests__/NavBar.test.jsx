// src/__tests__/NavBar.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders a Home <NavLink>', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/Home/);
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.tagName).toBe('A');
  expect(homeLink.getAttribute('href')).toBe('/');
});

test('renders an Actors <NavLink>', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const actorsLink = screen.getByText(/Actors/);
  expect(actorsLink).toBeInTheDocument();
  expect(actorsLink.tagName).toBe('A');
  expect(actorsLink.getAttribute('href')).toBe('/actors');
});

test('renders a Directors <NavLink>', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const directorsLink = screen.getByText(/Directors/);
  expect(directorsLink).toBeInTheDocument();
  expect(directorsLink.tagName).toBe('A');
  expect(directorsLink.getAttribute('href')).toBe('/directors');
});