import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiLogOut } from "react-icons/bi";
import { FaLock, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiProfit } from "react-icons/gi";
const SideBar = () => {
    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('client/token')
        navigate('/')
    }
    return (
        <div className="w-full h-full">
            <div className="w-full flex flex-col gap-[30px]">
                <img src="/BigLogo.png" alt="logo" className="w-[200px]" />
                <div className="w-full flex flex-col gap-[40px]">
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
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard/deposit')}>
                            <HiMiniUserGroup />
                            <p>Our Packages</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <HiMiniUserGroup />
                            <p>Withdrawals</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <GiProfit />
                            <p>Profit History</p>
                        </span>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center gap-[25px] ">
                        <p className="w-[90%] text-[13px]">SETTINGS</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard')}>
                            <FaUser />
                            <p>Profile</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/dashboard/affiliate')}>
                            <FiSettings />
                            <p>Withdrawal Gateway</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => navigate('/affilliate')}>
                            <FaLock />
                            <p>Password</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={handleLogout}>
                            <BiLogOut />
                            <p>Log out</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar