import bitcoinIcon from "../../assets/bitcoinIcon.svg"
import recieveIcon from "../../assets/recieveIcon.svg";
import sendIcon from "../../assets/sendIcon.svg";
import RecieveDialog from "./RecieveDialog";
const SingleCoin = () => {
    return (
        <div className="">
            <RecieveDialog />
            <div className="bg-[#161C23] pt-[19px] pb-[14px]  grid grid-cols-9 items-center">
                <div className="col-span-2 flex items-center gap-[4px] justify-self-center">
                    <img src={bitcoinIcon} alt="" />  <span className="text-[#ADABAA] text-sm ">BITCOIN</span>
                </div>
                <div className="col-span-2 text-[#ADABAA] text-sm justify-self-center">
                    BTC 0.0025600
                </div>
                <div className="col-span-2 text-[#ADABAA] text-sm justify-self-center">
                    USD 0.5268
                </div>
                <div className="flex gap-[25px] justify-self-center col-span-3">
                    <div className="flex items-center gap-[6px]">
                        <img src={recieveIcon} alt="" />
                        <span className="text-[#8484F1] text-[14px]">
                            RECIEVE
                        </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <img src={sendIcon} alt="" />
                        <span className="text-[14px] text-[#CAA276]">
                            SEND
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCoin