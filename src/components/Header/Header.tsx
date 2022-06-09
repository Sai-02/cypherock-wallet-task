import logo from "../../assets/logo.png"
import closeIcon from "../../assets/close.svg";
import minimizeIcon from "../../assets/minimizePic.svg";
import maximizeIcon from "../../assets/maximizePic.svg";
const Header = () => {
    return (
        <header className="bg-[#1A1F26] px-[30px] py-[21px] flex items-center">
            <div className="">
                <img src={logo} />
            </div>
            <div className="grow flex justify-end gap-6">
                <img src={minimizeIcon} alt="" className='cursor-pointer' />
                <img src={maximizeIcon} alt="" className='cursor-pointer' />
                <img src={closeIcon} alt="" className='cursor-pointer' />
            </div>
        </header>
    )
}

export default Header