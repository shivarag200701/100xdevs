import React from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";
import PillButton from "./PillButton";

const MainContent = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Overview />
      <div className="flex gap-4">
        <PillButton name={"Refunds"} count={32} color={"#3b76b8"} />
        <PillButton name={"Payouts"} count={22} color={"#eaeaea"} />
      </div>
    </div>
  );
};

export default MainContent;
