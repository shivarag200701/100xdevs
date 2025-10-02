import React from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";
import PillButton from "./PillButton";
import SearchBar from "./SearchBar";

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
      <SearchBar />
    </div>
  );
};

export default MainContent;
