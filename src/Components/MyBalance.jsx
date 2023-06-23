import React from "react";

const MyBalance = () => {
  return (
    <div className="bg-red w-128 h-24		flex justify-between items-center rounded-2xl	px-8 font-dmsans">
      <div id="right-part" className="text-white flex flex-col  gap-y-2">
        <h4> My Balance</h4>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <div id="inside-circles ">
        <span className="inline-block w-12	h-12 border rounded-full"></span>
        <span className="inline-block w-12	h-12 border rounded-full pr-2 bg-darkbrown border-darkbrown "></span>
      </div>
    </div>
  );
};

export default MyBalance;
