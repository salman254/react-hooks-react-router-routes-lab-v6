// src/pages/Home.jsx
import React from 'react';
import MovieCard from '../components/MovieCard';

function Home({ movies = [] }) { // Default to an empty array
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;