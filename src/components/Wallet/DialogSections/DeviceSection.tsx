import React from 'react'
import arrowIcon from "../../../assets/arrowIcon.svg";
import checkGrayIcon from "../../../assets/tickGrayIcon.png"
const DeviceSection = () => {
    return (
        <div className="mt-[80px] px-6">
            <p className="pl-12 text-[#B1B1B1]">Follow the instruction on device</p>

            {/* single chocie */}
            <div className="mt-4">
                <div className="bg-[#212427] flex py-3 px-5 items-center gap-3 ">
                    <img src={arrowIcon} alt="" />
                    <div className="text-[#A4A9D6] text-[14px]">Select the Wallet On device</div>
                    <div className="grow flex justify-end">
                        <img src={checkGrayIcon} />
                    </div>
                </div>
            </div>
            {/* End of single choice */}

            {/* single chocie */}
            <div className="mt-4">
                <div className="bg-[#212427] flex py-3 px-5 items-center gap-3 ">
                    <img src={arrowIcon} alt="" />
                    <div className="text-[#A4A9D6] text-[14px]">Select the Coin on device</div>
                    <div className="grow flex justify-end">
                        <img src={checkGrayIcon} />
                    </div>
                </div>
            </div>
            {/* End of single choice */}

            {/* single chocie */}
            <div className="mt-4">
                <div className="bg-[#212427] flex py-3 px-5 items-center gap-3 ">
                    <img src={arrowIcon} alt="" />
                    <div className="text-[#A4A9D6] text-[14px]">Tap 1 card of any 4 Cards</div>
                    <div className="grow flex justify-end">
                        <img src={checkGrayIcon} />
                    </div>
                </div>
            </div>
            {/* End of single choice */}

        </div>

    )
}

export default DeviceSection