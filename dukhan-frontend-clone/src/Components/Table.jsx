import React from "react";

const data = [
  {
    id: 1,
    orderId: "12345",
    status: "Successful",
    transactionId: "txn_12345",
    refundDate: "2023-10-01",
    amount: "$100.00",
  },
  {
    id: 2,
    orderId: "12346",
    status: "Processing",
    transactionId: "txn_12346",
    refundDate: "2023-10-02",
    amount: "$150.00",
  },
  {
    id: 3,
    orderId: "12347",
    status: "Failed",
    transactionId: "txn_12347",
    refundDate: "2023-10-03",
    amount: "$200.00",
  },
];

const colour = {
  Successful: "bg-green-500",
  Processing: "bg-yellow-500",
  Failed: "bg-red-500",
};

const Table = () => {
  console.log(colour["Successful"]);
  console.log(colour);

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
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <td className="px-6 py-4">{item.orderId}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <div className=" flex justify-center items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${colour[item.status]}`}
                    ></div>
                  </div>
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4">{item.transactionId}</td>
              <td className="px-6 py-4">{item.refundDate}</td>
              <td className="px-6 py-4">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
