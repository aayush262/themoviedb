const CircularProgress = ({ percent }) => {
  const track = {
    high: "#204529",
    medium: "#423d0f",
    low: "#571435",
    none: "#666666",
  };

  const bar = {
    high: "#21d07a",
    medium: "#d2d531",
    low: "#db2360",
    none: "#d4d4d4",
  };

  const getRange = (rating) => {
    if (rating >= 70) return "high";
    if (rating >= 40) return "medium";
    if (rating > 0) return "low";
    return "none";
  };

  return (
    <div className="w-[38px] h-[38px] rounded-full bg-black flex justify-center items-center text-white relative">
      <svg
        width={"34px"}
        height={"34px"}
        viewBox="0 0 100 100"
        className="rotate-[-90deg]"
      >
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          className="scale-[0.95]"
          strokeWidth={6}
          strokeDasharray={Math.PI * 100}
          strokeDashoffset={0}
          stroke={track[getRange(percent)]}
        />
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          className="scale-[0.95]"
          strokeWidth={6}
          strokeDasharray={Math.PI * 100}
          strokeDashoffset={Math.PI * (100 - percent)}
          strokeLinecap="round"
          stroke={bar[getRange(percent)]}
        />
      </svg>
      <div className="absolute font-semibold">
        {percent || "NR"}{" "}
        <span className="absolute text-[4px] top-[5px]">%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
