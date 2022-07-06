function MovieCard({ imageUrl, name, date }) {
  return (
    <>
      <div className="flex flex-col gap-2 pl-5">
        <img
          className="rounded-md shadow-md h-[225px] w-[150px]"
          src={imageUrl}
          alt={name}
        />

        <div className="flex flex-col px-3 w-[150px]">
          <h1 className="font-bold">{name}</h1>
          <h2 className="font-normal text-slate-500">{date}</h2>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
