import React from "react";

const Navbar = () => {
  return (
    <nav className="col-span-3 pl-[60px] pt-[52px] bg-[#1E2328] flex flex-col">
      <ul className="text-[#E7E7E7] flex flex-col gap-[30px]">
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">
          <div className="">Wallet</div>
          <div className="text-[#C78D4E] text-[13px] p-[10px]">Wallet 1</div>
          <div className="px-[10px]">
            <button className="text-sm border-[0.5px] border-dashed border-[#616161] py-[4px] px-[9px] rounded-[30px] text-[#616161]">
              + add wallet
            </button>
          </div>
        </li>
        <li className="cursor-pointer">Last Transactions</li>
        <li className="cursor-pointer">Tutorials</li>
        <li className="cursor-pointer">Setting</li>
      </ul>
      <div className="grow flex items-end py-[41px]">
        <button className="px-[25px] py-[8px] bg-[#785B3C] text-[#F5CEA3] rounded text-center">
          Support
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
