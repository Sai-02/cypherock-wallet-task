import React from "react";

const RecieveSection = () => {
  return (
    <div className="mt-[50px] grid">
      <div className="px-[70px]">
        <p className="text-[#B1B1B1] text-sm">Coin Address</p>
      </div>
      <div className="flex justify-center mt-4">
        <div className=" flex gap-4 bg-[#363A3E] rounded-[10px] pl-[40px] pr-[20px] items-center">
          <span className="text-[#E19A4C] text-[22px] text-center  py-[20px]  ">
            25BKJNKNLJL58fjkdhfk26dnfds15
          </span>
          <span className="">
            <button className="p-2 rounded bg-[#53595f] text-[#F5CEA3]">
              Copy
            </button>
          </span>
        </div>
      </div>
      <div className="mt-6 px-[50px]">
        <p className="text-[#8484F1]">! address verified</p>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button className="border border-[#8484F1] text-[#8484F1] py-1 px-4 rounded-sm">
          Re-verify
        </button>
      </div>
    </div>
  );
};

export default RecieveSection;
