import React from "react";

const NextPayout = () => {
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  return (
    // Card fills its grid cell
    <div className="h-full rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl ">
      <div className="flex-1 bg-[#3977b7] text-white p-5 hover:bg-[#295889]">
        <div className="flex items-center gap-2">
          <span className="font-light">Next Payout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 opacity-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        <div className="mt-4 flex items-start justify-between">
          <div className="text-2xl sm:text-3xl font-semibold">$2,321.23</div>
          <button className="flex items-center gap-1 underline cursor-pointer">
            <span>23 Order(s)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-[#295889] text-white px-5 py-2 text-sm">
        <div className="flex justify-between">
          <span>Next Payment Date:</span>
          <span>Today, {formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default NextPayout;
