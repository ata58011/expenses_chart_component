import React from "react";

const MyBalance = () => {
  return (
    <div className="bg-red w-128 h-24		flex justify-between items-center rounded-2xl	px-8 font-dmsans">
      <div id="right-part" className="text-white flex flex-col  gap-y-2">
        <h4> My Balance</h4>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <div class="flex">
        <div class="w-16 h-16 border rounded-full z-10	"></div>
        <div class="w-16 h-16 bg-darkbrown rounded-full -ml-8"></div>
      </div>
    </div>
  );
};

export default MyBalance;
