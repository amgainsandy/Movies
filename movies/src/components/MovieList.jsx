import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State to track errors
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
        );
        const data = await response.json();
        setMovies(data.results); // Set the fetched movies
        setLoading(false); // Stop loading
      } catch (err) {
        console.error(err);
        setError(err); // Set the error state to the actual error object
        setLoading(false); // Stop loading
      }
    };

    fetchMovies();
  }, []);

  console.log(movies);

  if (loading) return <p>Loading movies...</p>; // Show a loading state
  if (error) {
    if (error instanceof Error) {
      return <p>Error: {error.message}</p>; // Show an error message
    } else {
      return <p>Unknown error</p>; // Show a generic error message
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MovieList;