import { useState, useEffect } from "react";
import MovieCard from "./MoveCard";

const Movies = [
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    name: "The Boys and notdasdheboud",
    date: "July 15,2019",
    imageUrl:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
];

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(Movies);
  }, []);

  return (
    <>
      <div className="flex overflow-x-auto pb-5 px-5">
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
      </div>
    </>
  );
}

export default MovieList;
