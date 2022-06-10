import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import modalCloseIcon from "../../assets/modalCloseIcon.svg";
import DeviceSection from "./DialogSections/DeviceSection";
import tickYellowIcon from "../../assets/tickYellowIcon.png";
import VerificationSection from "./DialogSections/VerificationSection";
interface DialogProps {
    shouldOpenDialog: boolean,
    setShouldOpenDialog: (a: boolean) => void
}
const RecieveDialog = (props: DialogProps) => {
    const [index, setIndex] = useState(1);
    const changeIndex = (val: number) => {
        setIndex(val);
    };
    const closeDialog = (val: boolean) => {
        props.setShouldOpenDialog(val);
    }
    return (
        <Dialog
            open={props.shouldOpenDialog}
            BackdropProps={{ style: { backgroundColor: "transparent" } }}
            hideBackdrop={true}
            PaperProps={{
                style: {
                    boxShadow: "none",
                    background: "#13161A",
                    display: "flex",
                    justifyContent: "center",
                    height: "90vh",
                    maxHeight: "700px"
                },
            }}
            fullWidth={true}
        >
            <div className="p-[37px] bg-[#13161A] rounded w-full h-full">
                <div className="relative">
                    <h1 className="text-[white] text-center text-[22px]">Recieve</h1>
                    <div className="absolute right-0 top-0 bottom-0 m-auto flex items-center">
                        <img src={modalCloseIcon} alt="" className="cursor-pointer" onClick={() => { closeDialog(false) }} />
                    </div>
                </div>
                <div className="mt-7 grid justify-center gap-3">
                    <div className="flex gap-[143px] justify-between relative">
                        <div
                            className={`bg-[#13161A] z-10 justify-self-center  p-1 rounded-full cursor-pointer ${index == 1 ? " border border-[#E19A4C]" : ""
                                }`}
                            onClick={() => {
                                changeIndex(1);
                            }}
                        >
                            <span
                                className={`text-[#A0A0A4]  w-[23px] h-[23px] text-sm flex items-center  justify-center border border-[#707070] rounded-[50%] ${index == 1 ? "bg-[#E19A4C] text-[#131619]" : ""
                                    } ${index > 1 ? "bg-[#E0B36A]" : ""}`}
                            >
                                {index > 1 ? <img src={tickYellowIcon} /> : 1}
                            </span>
                        </div>
                        <div
                            className={`bg-[#13161A] z-10 justify-self-center p-1 rounded-full cursor-pointer ${index == 2 ? " border border-[#E19A4C]" : ""
                                }`}
                            onClick={() => {
                                changeIndex(2);
                            }}
                        >
                            <span
                                className={`text-[#A0A0A4] w-[23px] h-[23px] text-sm flex items-center  justify-center border border-[#707070] rounded-[50%] ${index == 2 ? "bg-[#E19A4C] text-[#131619]" : ""
                                    } ${index > 2 ? "bg-[#E0B36A]" : ""}`}
                            >
                                {index > 2 ? <img src={tickYellowIcon} /> : 2}
                            </span>
                        </div>
                        <div
                            className={`bg-[#13161A] z-10 justify-self-center p-1 rounded-full cursor-pointer ${index == 3 ? " border border-[#E19A4C]" : ""
                                }`}
                            onClick={() => {
                                changeIndex(3);
                            }}
                        >
                            <span
                                className={`text-[#A0A0A4] w-[23px] h-[23px] text-sm flex items-center  justify-center border border-[#707070] rounded-[50%] ${index == 3 ? "bg-[#E19A4C] text-[#131619]" : ""
                                    } ${index > 3 ? "bg-[#E0B36A]" : ""}`}
                            >
                                3
                            </span>
                        </div>
                        <div className="absolute text-white top-0 bottom-0 flex items-center max-w-full">
                            <hr className="bg-[#707070] max-w-full w-[400px] h-[0.5px]" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-[#13161A] justify-self-center">
                            <span
                                className={`text-[#A0A0A4] text-sm flex items-center  justify-center ${index == 1 ? "text-[#E19A4C]" : ""
                                    } ${index > 1 ? "text-[#C78D4E]" : ""} `}
                            >
                                Device
                            </span>
                        </div>
                        <div className="bg-[#13161A] justify-self-center">
                            <span
                                className={`text-[#A0A0A4] text-sm flex items-center  justify-center  ${index == 2 ? "text-[#E19A4C]" : ""
                                    } ${index > 2 ? "text-[#C78D4E]" : ""} `}
                            >
                                Verification
                            </span>
                        </div>{" "}
                        <div className="bg-[#13161A] justify-self-center">
                            <span
                                className={`text-[#A0A0A4] text-sm flex items-center  justify-center  ${index == 3 ? "text-[#E19A4C]" : ""
                                    } ${index > 3 ? "text-[#C78D4E]" : ""} `}
                            >
                                Recieve
                            </span>
                        </div>
                    </div>
                </div>
                {index == 1 ? <DeviceSection /> : null}
                {index == 2 ? <VerificationSection /> : null}
            </div>
        </Dialog>
    );
};

export default RecieveDialog;
