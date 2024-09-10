import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-[100vh] flex items-center justify-center bg-[#364a63]">
            <div className="w-[30%] h-[60vh] bg-white flex justify-center items-center flex-col">
                <span>
                    <p className="font-semibold text-[20px]">Welcome back to InvestifyEdge</p>
                </span>
                <form className="w-full flex flex-col gap-[20px] p-[20px] ">
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label></label>
                        <input type="text" placeholder="Email" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey] rounded-[4px] outline-none" />
                    </span>
                    <span>
                        <label></label>
                        <input type="text" placeholder="Password" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey] rounded-[4px] outline-none" />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <button className="w-[100%] h-[50px] p-[10px] bg-[#364a63] text-white rounded-[4px]">Login</button>
                    </span>
                </form>
                <span className="w-full flex gap-1 items-center justify-center">
                    <p>Don't have an account?</p>
                    <p className="text-[#364a63] cursor-pointer text-[14px]" onClick={()=> navigate('/signup')}>Create Account</p>
                </span>
                <p className="text-[12px] cursor-pointer hover:text-[red] ">Forgot Password</p>
            </div>
        </div>
    )
}

export default Login