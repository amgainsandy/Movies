import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("error fetching products:", error));
  }, []);
  console.log(movies);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Movies 
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <div key={movie.id} className="group relative">
              <img
                alt={movie.Title}
                src={movie.Poster}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={movie.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.Title}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{movie.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">
                 Runtime: {movie.Runtime}
                 Year: {movie.Year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;