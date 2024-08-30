import { useNavigate } from "react-router-dom";
import TickerTap from "./Ticker-Tape"
import { IoCloudDownloadOutline, IoCloudUploadOutline } from "react-icons/io5";
import TradingViewWidget from "./TrandingViewWiddget";

const Overview = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-[100%]  flex flex-col items-center overflow-auto">
            <div className="mt-[20px] w-[95%]">
                <TickerTap />
            </div>
            <div className="w-[95%] flex flex-wrap items-center p-[10px] max-[650px]:gap-[20px] max-[650px]:p-[0px] mb-[20px]">
                <div className="w-[65%] max-[650px]:w-[100%]">
                    <p className="text-[30px]">Dashboard</p>
                    <p>Welcome Anthony!, what would you like to do today?</p>
                </div>
                <div className="w-[35%] flex items-center justify-end gap-[10px] max-[650px]:w-[100%] max-[650px]:justify-start">
                    <button
                        onClick={() => navigate('/deposit')}
                        className="w-[100px] h-[40px] border text-[13px] flex items-center rounded-[4px] justify-center gap-[5px] "
                    >
                        Deposit <IoCloudDownloadOutline />
                    </button>
                    <button
                        onClick={() => navigate('/withdraw')}
                        className="w-[100px] h-[40px] bg-[#182536] text-white rounded-[4px] text-[13px] flex items-center justify-center gap-[5px]"
                    >
                        Withdraw <IoCloudUploadOutline />
                    </button>
                </div>
            </div>
            <div className="w-[95%] flex flex-wrap  gap-[10px] justify-center mb-[20px]">
                <div className="w-[49%] h-[120px] bg-white flex rounded-[5px] p-[10px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Account Balance</p>
                        <p className="text-[32px] font-medium text-[#364a63]">$0.00</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
                <div className="w-[49%] h-[120px] bg-white  rounded-[5px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Total Deposit</p>
                        <p className="text-[32px] font-medium text-[#364a63]">$0.00</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
                <div className="w-[49%] h-[120px] bg-white  rounded-[5px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Total Withdrawals</p>
                        <p className="text-[32px] font-medium text-[#364a63]">$0.00</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
                <div className="w-[49%] h-[120px] bg-white  rounded-[5px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Accumulated Interest</p>
                        <p className="text-[32px] font-medium text-[#364a63]">$0.00</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>

            </div>
            <div className="w-[95%] flex gap-[20px] flex-col items-center justify-center bg-white p-[10px]">
                <span className="w-[95%]">
                    <p className="w-[95%] text-[18px] font-medium text-[#364a63]">Market Price</p>
                    <p className="w-[95%] text-[14px] text-[#364a63]">Live market prices as seen on trading view</p>
                </span>
                <TradingViewWidget />
            </div>
        </div>
    )
}

export default Overview 