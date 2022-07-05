const SearchButton = (props) => {
  return (
    <button
      {...props}
      className="h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue"
    >
      Search
    </button>
  );
};

export default SearchButton;
