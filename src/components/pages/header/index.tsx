
const Header = () => {
  return (
    <div className="w-[100%] h-[10vh] bg-transparent flex justify-center">
        <div className="w-[90%] h-full flex">
          <span className="w-[30%] flex items-center">
          <p>InvestifyEdge</p>
          </span>
          <span className=" w-[70%] flex gap-[70px] items-center text-white text-[14px] ">
            <p className="cursor-pointer hover:text-[#364a63]">Home</p>
            <p className="cursor-pointer hover:text-[#364a63]">Company</p>
            <p className="cursor-pointer hover:text-[#364a63]">Services</p>
            <p className="cursor-pointer hover:text-[#364a63]">Career</p>
            <p className="cursor-pointer hover:text-[#364a63]">Contact</p>
            <button className="border h-[40px] w-[120px] border-[#364a63] hover:bg-[#364a63] hover:text-white ">Login</button>
          </span>
        </div>
    </div>
  )
}

export default Header