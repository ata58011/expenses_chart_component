import React, { useState } from "react";

const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const SpendingChart = () => {
  const [showAmounts, setShowAmounts] = useState(
    Array(chartData.length).fill(false)
  );

  const handleClick = (index) => {
    setShowAmounts((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div className="w-128 rounded-2xl bg-white p-8 flex flex-col gap-y-12">
      <h1 className="text-3xl">Spending - Last 7 days</h1>
      <div>
        <ul className="chart flex gap-x-4 justify-center items-center">
          {chartData.map((data, index) => (
            <li key={data.day} className="flex flex-col gap-y-1">
              <span
                className={`spend-amount inline-block p-1 rounded-sm bg-darkbrown text-white ${
                  showAmounts[index] ? "block" : "hidden"
                }`}
              >
                ${data.amount}
              </span>
              <div
                className="chart inline-block bg-red w-10 h-10 rounded"
                onClick={() => handleClick(index)}
              ></div>
              <h6 className="text-mediumbrown inline-block">{data.day}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpendingChart;
