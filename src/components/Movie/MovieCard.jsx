import Ellipsis from "../../baseUI/ellipsis";
import CircularProgress from "../../baseUI/progress-circle";
import { getPosterUrl } from "./poster";

function MovieCard({
  poster_path,
  name,
  vote_average,
  title,
  release_date,
  first_air_date,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 pl-5">
        <div className="relative">
          <img
            className="rounded-md shadow-md h-[225px] w-[150px] "
            src={getPosterUrl(poster_path)}
            alt={name || title}
          />
          <div className="absolute bottom-[-1.2rem] left-2">
            <CircularProgress percent={vote_average * 10} />
          </div>
          <div className="absolute w-[1.4rem] h-[1.4rem] top-3 right-[10px]">
            <Ellipsis />
          </div>
        </div>

        <div className="flex flex-col px-3 pt-5 w-[150px]">
          <h1 className="font-bold hover:cursor-pointer hover:text-tmdbLightBlue">
            {name || title}
          </h1>
          <h2 className="font-normal text-slate-500">
            {first_air_date || release_date}
          </h2>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
