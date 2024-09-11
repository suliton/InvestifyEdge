import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { HiMiniUserGroup } from "react-icons/hi2";
const SideBar = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-full">
            <div className="w-full flex flex-col gap-[30px]">
                <img src="/BigLogo.png" alt="logo" className="w-[200px]" />
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="w-full h-[80%] flex flex-col items-center gap-4">
                        <p className="w-[90%] text-[13px]">MEMBER ACCOUNT</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard')}>
                            <RiDashboardFill />
                            <p>Dashboard</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard/affiliate')}>
                            <HiMiniUserGroup />
                            <p>Affilliate</p>
                        </span>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center gap-[25px] ">
                        <p className="w-[90%] text-[13px]">FINANCE</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard')}>
                            <RiDashboardFill />
                            <p>Deposits</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard/affiliate')}>
                            <HiMiniUserGroup />
                            <p>Investment Plan</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <HiMiniUserGroup />
                            <p>Withdrawals</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <HiMiniUserGroup />
                            <p>Profit History</p>
                        </span>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center gap-[25px] ">
                        <p className="w-[90%] text-[13px]">SETTINGS</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard')}>
                            <RiDashboardFill />
                            <p>Profile</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard/affiliate')}>
                            <HiMiniUserGroup />
                            <p>Withdrawal Gateway</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <HiMiniUserGroup />
                            <p>Password</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <HiMiniUserGroup />
                            <p>Login</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar