import React from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";

const MainContent = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Overview />
    </div>
  );
};

export default MainContent;
