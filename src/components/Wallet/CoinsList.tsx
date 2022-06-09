import yearIcon from "../../assets/yearIcon.svg";
import textIcon from "../../assets/textIcon.svg";
import chevronDownIcon from "../../assets/chevronDownIcon.svg"
import SingleCoin from "./SingleCoin";

const CoinsList = () => {
    return (
        <div className="mt-[36px]">
            <div className="border border-[#161C23] py-4 px-8 flex justify-between ">
                <div className="text-[#ADABAA] text-xs">Total Coins-3 </div>
                <div className="flex gap-[68px] items-center">
                    <div className="flex gap-[6px] cursor-pointer items-center">
                        <img src={yearIcon} alt="" />
                        <span className="text-[#ADABAA] text-xs">
                            Year
                        </span>
                        <img src={chevronDownIcon} />
                    </div>
                    <div className="flex gap-[6px] cursor-pointer items-center">
                        <img src={textIcon} alt="" />
                        <span className="text-[#ADABAA] text-xs">
                            A-Z
                        </span>
                        <img src={chevronDownIcon} />
                    </div>
                </div>
            </div>
            <div className="mt-6 grid gap-[10px]">
                <SingleCoin />
                <SingleCoin />
                <SingleCoin />
                <SingleCoin />
                <SingleCoin />

            </div>
        </div>
    )
}

export default CoinsList