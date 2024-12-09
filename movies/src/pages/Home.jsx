import React from "react";
import Movies from "../components/MovieCard";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Popular Movies</h1>
      <Movies />
    </div>
  );
};

export default Home;
