import React from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";
import PillButton from "./PillButton";
import SearchBar from "./SearchBar";
import { GrDownload } from "react-icons/gr";
import SortButton from "./SortButton";

const MainContent = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Overview />
      <div className="flex gap-4 pl-10">
        <PillButton
          name={"Payouts"}
          count={22}
          color={"#eaeaea"}
          text={"#9d9d9d"}
        />
        <PillButton
          name={"Refunds"}
          count={32}
          color={"#3b76b8"}
          text={"white"}
        />
      </div>
      <div className="flex justify-between p-10">
        <SearchBar />
        <div className="flex justify-center items-center gap-4 ">
          <SortButton />
          <div className="border-2 border-[#f4f4f4] rounded-sm p-2 text-gray-500 hover:border-gray-300">
            <GrDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
