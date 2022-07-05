import { forwardRef } from "react";

const SearchInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Search for a movie, tv show, person......"
      className="w-full h-11 rounded-[8rem] border-none outline-none px-5 py-3 text-black/50 placeholder:text-slate-600 text-[1.1rem] leading-10"
      {...props}
    />
  );
});

export default SearchInput;
