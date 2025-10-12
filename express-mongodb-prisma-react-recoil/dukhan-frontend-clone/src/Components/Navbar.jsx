import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-sm pl-5 pr-5 pt-4 pb-4 gap-10 ">
      <div className="flex justify-center items-center gap-2 ">
        <div className="hidden md:block text-xl font-semibold">Payouts</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 hidden md:block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
        <div className="text-gray-400 hidden md:block">How it works sadads</div>
      </div>
      <div className="relative text-[#c4c3c3] flex-1 min-w-0  max-w-2xl">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
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
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="py-2 text-sm text-[#c4c3c3] bg-[#f4f4f4] rounded-md pl-10 w-full focus:outline-none focus:bg-white focus:text-gray-900 p-50"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      {/* <div>Search Bar</div> */}
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full bg-[#ececec] p-2">
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </button>
        </div>
        <div className="w-10 h-10 rounded-full p-2 bg-[#ececec] flex justify-center items-center">
          <button className="cursor-pointer">
            <FaCaretDown className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
