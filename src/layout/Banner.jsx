import { useRef } from "react";

import SearchButton from "../baseUI/Button/SearchButton";
import SearchInput from "../baseUI/Input/SearchInput";

const Banner = () => {
  const searchInputRef = useRef();

  const handleSearch = () => {
    alert(`You typed ${searchInputRef.current.value}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="h-[300px] bg-cover bg-hero-pattern  py-5 ">
      <div className="py-10 px-10 flex flex-col gap-10">
        <div className="text-white">
          <h2 className="font-bold text-5xl">Welcome.</h2>
          <h3 className="font-semibold text-[2em] leading-1">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>

        <div className="relative">
          <SearchInput ref={searchInputRef} onKeyDown={handleKeyDown} />
          <div className="absolute top-0 right-0">
            <SearchButton onClick={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
