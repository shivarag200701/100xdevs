import React from "react";

const SearchBar = () => {
  return (
    <div className="relative p-10">
      <span className="absolute inset-y-0 flex items-center pl-3">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-400"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="text"
        className="border-2 border-[#f4f4f4] rounded-md pl-10 py-2 "
      />
    </div>
  );
};

export default SearchBar;
