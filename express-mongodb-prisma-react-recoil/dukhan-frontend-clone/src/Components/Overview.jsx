import React from "react";
import NextPayout from "./NextPayout";
import RevenueCard from "./RevenueCard";
import DropDown from "./DropDown";

const Overview = () => {
  return (
    <div className="p-10 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="text-xl font-medium">Overview</div>
        <DropDown />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <NextPayout />
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,912.90"}
          orderCount={"13"}
        />
        <RevenueCard title={"Amount Processed"} amount={"23,92,312.90"} />
        <div className="mt-5 text-2xl font-medium">
          Transactions | This Month
        </div>
      </div>
    </div>
  );
};

export default Overview;
