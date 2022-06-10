import arrowIcon from "../../../assets/arrowIcon.svg";
import checkGrayIcon from "../../../assets/tickGrayIcon.png";
const VerificationSection = () => {
  return (
    <div className="mt-[44px] px-[37px]">
      <div className="flex justify-center">
        <div className="text-[#E19A4C] text-[22px] text-center bg-[#363A3E] py-[20px] px-[40px] rounded-[10px]">
          25BKJNKNLJL58fjkdhfk26dnfds15
        </div>
      </div>
      <div className="mt-[50px]">
        <p className="text-[#B1B1B1] text-sm">Verify address on device</p>
      </div>
      <div className="mt-4">
        <div className="bg-[#212427] flex py-3 px-5 items-center gap-3 ">
          <img src={arrowIcon} alt="" />
          <div className="text-[#A4A9D6] text-[14px]">
            Please match the address to be shown in X1 Wallet
          </div>
          <div className="grow flex justify-end">
            <img src={checkGrayIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSection;
