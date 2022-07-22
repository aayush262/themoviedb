import { useState, useEffect } from "react";

import tmdb from "../../api/tmdb";
import Blur from "../../baseUI/Blur";
import MovieCard from "./MoveCard";
import { request } from "../../util/request";

function MovieList({ item }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await tmdb.get(request[item]);
      setMovies(data.results);
    };

    fetchData();
  }, [item]);

  return (
    <>
      <div className="flex overflow-x-auto pb-5 px-5 pr-12">
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
        <div className="absolute top-0 right-0 h-full ">
          <Blur />
        </div>
      </div>
    </>
  );
}

export default MovieList;
