import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';
import { userSignup } from "../../../api/mutation";
import toast from "react-hot-toast";
import { IErrorResponse } from "../../../interface";


const CreateAccount = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');

    const { mutate, isLoading } = useMutation(userSignup, {
        onSuccess: async () => {
            navigate('/verify');
        },
        onError: (err: IErrorResponse) => {
            toast.error(err.response.data.message);
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const userData = {
            firstName,
            lastName,
            email,
            password,
            referralCode
        };

        mutate(userData);
    };

    return (
        <div className="w-full flex items-center justify-center bg-[#364a63] overflow-scroll ">
            <div className="w-[40%] p-[20px] bg-white flex justify-center items-center flex-col max-[650px]:w-[100%] gap-4 overflow-scroll ">
                <span className="w-[100%]">
                    <p className="text-[26px]">Become a Member</p>
                    <p className="text-[16px]">Complete the form to become a investifyEdge  member</p>
                </span>
                <form className="w-[100%] flex flex-col gap-[10px]" onSubmit={handleSubmit}>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Email Address</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Referral Code</label>
                        <input
                            type="text"
                            value={referralCode}
                            onChange={(e) => setReferralCode(e.target.value)}
                            placeholder="Referral Code"
                            className="w-[100%] h-[50px] p-[10px] border border-[lightgrey]  outline-none"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <button
                            type="submit"
                            className="w-[100%] h-[50px] p-[10px] bg-[#364a63] text-white rounded-[4px]"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </span>
                </form>
                <span className="w-full flex gap-1 items-center justify-center">
                    <p>Already have an account?</p>
                    <p className="text-[#364a63] cursor-pointer text-[14px]" onClick={()=> navigate('/login')}>Login</p>
                </span>
            </div>
        </div>
    );
};

export default CreateAccount;
