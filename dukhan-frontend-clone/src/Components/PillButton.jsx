import React from "react";

const PillButton = ({ name, count, color }) => {
  console.log(color);

  return (
    <div className="">
      <button
        className="pt-2 pb-2 pl-4 pr-4 rounded-3xl  text-white "
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-2">
          <div>{name}</div>
          <div>({count})</div>
        </div>
      </button>
    </div>
  );
};

export default PillButton;
