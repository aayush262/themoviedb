import { useState, useLayoutEffect } from "react";

const Switch = ({ items, onToggle }) => {
  const [isToggled, setToggle] = useState(false);
  const [item1Width, setItem1Width] = useState();
  const [item2Width, setItem2Width] = useState();

  useLayoutEffect(() => {
    setItem1Width(document.getElementById(items[0]).offsetWidth);
    setItem2Width(document.getElementById(items[1]).offsetWidth);
  }, [items]);

  const activeText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]";

  const handleSwitch = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  onToggle(isToggled ? items[1] : items[0]);

  return (
    <div className="hover:cursor-pointer border-solid border-tmdbDarkBlue h-8 items-center rounded-[30px] border-[1px] flex font-semibold relative z-[1] ">
      <div
        id={items[0]}
        onClick={handleSwitch}
        className={`py-1 px-5 h-8 rounded-[30px] transition ease-in-out   ${
          isToggled || activeText
        }`}
      >
        {items[0]}
      </div>
      <div
        id={items[1]}
        onClick={handleSwitch}
        className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && activeText}`}
      >
        {items[1]}
      </div>
      <div
        className={`py-1 px-5 h-8 rounded-[30px] bg-tmdbDarkBlue absolute z-[-1] transition-all ease-in duration-150`}
        style={
          isToggled
            ? {
                width: `${item2Width + 2}px`,
                left: `${item1Width}px`,
              }
            : { width: `${item1Width}px`, left: "0" }
        }
      ></div>
    </div>
  );
};

export default Switch;
