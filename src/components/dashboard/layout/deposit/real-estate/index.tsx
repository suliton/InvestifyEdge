import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const RealEstate = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full flex items-center justify-center mt-[30px] mb-[30px] verflow-auto">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard')} >
                    <BsArrowLeftShort />
                    <p>Deposit</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Real Estate Plans</p>
                <p className="w-[70%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    You can choose to invest in any plan . Kindly note that tax and all related fees has been added
                    automatically to the minimum investment amount. You do not have to bother about paying them separately.
                </p>
                <div className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[20px] max-[650px]:w-[100%] p-[20px]">
                    <p>Select Plan:</p>
                    <div className="w-[100%] flex flex-col gap-[25px] ">
                        <div className="w-full  border-b border-b-[lightgrey] flex flex-col gap-[20px]">
                            <span className="flex items-center gap-[5px]">
                                <input type="radio" name="" id="" />
                                <p className="text-[#8492a6]">BASIC</p>
                            </span>
                            <p className="text-[12px] text-[#8492a6]">Profit 1.5% weekly For 1 Months <br /> Minimum Deposit 5000 ; Maximum Deposit 10000 </p>
                        </div>
                        <div className="w-full  border-b border-b-[lightgrey] flex flex-col gap-[20px]">
                            <span className="flex items-center gap-[5px]">
                                <input type="radio" name="" id="" />
                                <p className="text-[#8492a6]">PLATINUM</p>
                            </span>
                            <p className="text-[12px] text-[#8492a6]">Profit 5% weekly For 1 Months <br /> Minimum Deposit 100000 ; Maximum Deposit 10000000</p>
                        </div>
                        <div className="w-full  border-b border-b-[lightgrey] flex flex-col gap-[20px]">
                            <span className="flex items-center gap-[5px]">
                                <input type="radio" name="" id="" />
                                <p className="text-[#8492a6]">SILVER</p>
                            </span>
                            <p className="text-[12px] text-[#8492a6]">Profit 53% weekly For 31 Days <br /> Minimum Deposit 5000 ; Maximum Deposit 49999</p>
                        </div>
                        <div className="w-full  border-b border-b-[lightgrey] flex flex-col gap-[20px]">
                            <span className="flex items-center gap-[5px]">
                                <input type="radio" name="" id="" />
                                <p className="text-[#8492a6]"> GOLD</p>
                            </span>
                            <p className="text-[12px] text-[#8492a6]">Profit 58.5% weekly For 31 Days <br /> Minimum Deposit 50000 ; Maximum Deposit 99999</p>
                        </div>
                    </div>
                    <div className="w-[100%] mt-[30px] flex flex-col gap-[10px]">
                        <label>
                            Enter Amount
                        </label>
                        <input type="number" placeholder="Enter Amount" className="w-[80%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none" />
                    </div>
                    <div className="w-[100%] flex flex-col gap-[20px]">
                        <p>Choose Payment Method from the list below</p>
                        <div className="w-full flex flex-wrap gap-[10px]">
                            <span className="w-[200px] h-[80px] flex items-center justify-center gap-[30px] bg-white shadow-lg rounded-[8px] cursor-pointer">
                                <p>BITCOIN</p>
                                <input type="checkbox" name="" id="" className="cursor-pointer" />
                            </span>
                            <span className="w-[200px] h-[80px] flex items-center justify-center gap-[30px] bg-white shadow-lg rounded-[8px] cursor-pointer">
                                <p>ETHERIUM</p>
                                <input type="checkbox" name="" id="" className="cursor-pointer" />
                            </span>
                            <span className="w-[200px] h-[80px] flex items-center justify-center gap-[30px] bg-white shadow-lg rounded-[8px] cursor-pointer">
                                <p>USDT</p>
                                <input type="checkbox" name="" id="" className="cursor-pointer" />
                            </span>
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <button className="w-[60%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]">Proceed to Payment </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealEstate