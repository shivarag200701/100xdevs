import React from "react";

const Table = () => {
  return (
    <div className="relative overflow-x-auto px-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#f4f4f4] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              Refund Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">Apple Macbook Pro</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">Apple Macbook Pro</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">Apple Macbook Pro</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
