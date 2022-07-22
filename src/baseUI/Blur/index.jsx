import { memo } from "react";

const Blur = memo(() => {
  console.log("hello i am blur component");
  return (
    <div className="w-16 h-full bg-gradient-to-r from-white/[0%] to-white/[100%]"></div>
  );
});

export default Blur;
