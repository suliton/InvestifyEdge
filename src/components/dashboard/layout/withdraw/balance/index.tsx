import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Balance = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[40px] flex items-center justify-center">
      <div className="w-[90%] flex flex-col gap-[20px]">
        <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard')}>
          <BsArrowLeftShort />
          <p>Deposit</p>
        </span>
        <p className="text-[32px] text-[#364a63]">Withdraw Balance</p>
        <div className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[40px] max-[650px]:w-[100%] p-[20px]">
          <p className="w-[80%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
            Withdrawals takes less than 24hrs to be authorised and completed.
          </p>
          <span className="w-[100%] flex flex-col gap-[10px]">
            <label>Enter Amount to withdraw($)</label>
            <input
              type="text"
              placeholder="Amount"
              className="w-[100%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
            />
          </span>
          <span className="w-[100%] flex flex-col gap-[10px]">
            <label> Enter Wallet Address</label>
            <input
              type="text"
              placeholder="Wallet Address"
              className="w-[100%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
            />
            <p className="w-[80%] leading-normal text-[12px] text-[#8492A6] max-[650px]:w-[100%]">Please enter the correct wallet address to recieve your funds.</p>
          </span>
          <div className="w-[100%]">
            <button
              className="w-[100%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance