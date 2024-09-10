
const CreateAccount = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center bg-[#364a63]">
            <div className="w-[40%] p-[20px] bg-white flex justify-center items-center flex-col max-[650px]:w-[100%] gap-4 ">
                <span className="w-[90%]">
                    <p className="text-[26px]">Become a Member</p>
                    <p className="text-[16px]">Complete the form to become a theinvestifyglobe member</p>
                </span>
                <form className="w-[100%] flex flex-col gap-[10px] ">
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none" />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none" />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Email Address</label>
                        <input type="text" placeholder="Email" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none" />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Password</label>
                        <input type="text" placeholder="Password" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none" />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Referral Code</label>
                        <input type="text" placeholder="Referral Code" className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none" />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <button className="w-[100%] h-[50px] p-[10px] bg-[#364a63] text-white rounded-[4px]">Create Account</button>
                    </span>
                </form>
                <span className="w-full flex gap-1 items-center justify-center">
                    <p>Already have an account?</p>
                    <p className="text-[#364a63] cursor-pointer text-[14px]">Login</p>
                </span>
            </div>
        </div>
    )
}

export default CreateAccount