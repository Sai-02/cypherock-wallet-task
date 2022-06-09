import tickIcon from "../../assets/tickIcon.svg"
import icon from "../../assets/icon.svg";
import protectedIcon from "../../assets/protectedIcon.svg"
const WalletHeader = () => {
    return (
        <div className="flex justify-end gap-[40px]">
            <div className="flex items-center ">
                <div className="flex gap-[11px] items-center text-[#F5CEA3]">
                    <img src={tickIcon} />
                    Synchronized
                </div>
            </div>
            <div className="flex gap-4">
                <div className="p-[10px] bg-[#1A212B] rounded cursor-pointer">
                    <img src={icon} alt="" />
                </div>
                <div className="py-[10px] px-[13px] bg-[#1A212B] rounded cursor-pointer">
                    <img src={protectedIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WalletHeader