import { BsArrowLeftShort } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import Table from "../../../utils/Table";

const Affliate = () => {
  const navigate = useNavigate()
  const columns = ["Client Name", "Ref Level", "Parent", "Client Status", "Date Registered"] as unknown as Array<keyof typeof referrals[0]>;

  const referrals = [
    {
      "Client Name": "John Doe",
      "Ref Level": "Level 1",
      "Parent": "Parent 1",
      "Client Status": "Active",
      "Date Registered": "2024-08-01",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center mt-[50px]">
      <div className="w-[90%] flex flex-col gap-[20px] ">
        <span className="w-[100%] flex items-center" onClick={() => navigate('/dashboard')} >
          <BsArrowLeftShort />
          <p>Dashboard</p>
        </span>
        <p className="text-[32px] text-[#364a63]">Referral</p>
        <p className="w-[60%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">Grow your theinvestifyglobe network by inviting your friends and family to join you.</p>

        <Table columns={columns} data={referrals}/>
      </div>
    </div>
  )
}

export default Affliate