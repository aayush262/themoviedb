import { getPosterUrl } from "./poster";

function MovieCard({ poster_path, name, title, release_date, first_air_date }) {
  return (
    <>
      <div className="flex flex-col gap-2 pl-5">
        <img
          className="rounded-md shadow-md h-[225px] w-[150px]"
          src={getPosterUrl(poster_path)}
          alt={name || title}
        />

        <div className="flex flex-col px-3 w-[150px]">
          <h1 className="font-bold">{name || title}</h1>
          <h2 className="font-normal text-slate-500">
            {first_air_date || release_date}
          </h2>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
