import React from "react";
import { TbArrowsSort } from "react-icons/tb";

const SortButton = () => {
  return (
    <div>
      <button>
        <div className="flex gap-2 border-2 border-[#f4f4f4] rounded-sm p-2 text-gray-500 hover:border-gray-300">
          Sort
          <div className="flex justify-center items-center">
            <TbArrowsSort size={18} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default SortButton;
