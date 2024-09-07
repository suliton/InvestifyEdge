import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dropdown
  const handleDropdownHover = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <div
      className={`w-[100%] h-[10vh] flex justify-center fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#111D29]' : 'bg-transparent'
      }`}
    >
      <div className="w-[90%] h-full flex items-center">
        <span className="w-[30%] flex items-center">
          <p className={`text-white ${isScrolled ? 'text-white' : ''}`}>InvestifyEdge</p>
        </span>
        <span className="w-[70%] flex gap-[70px] items-center text-white text-[14px] max-[650px]:hidden">
          <p className="cursor-pointer hover:text-[#364a63]">Home</p>
          <p className="cursor-pointer hover:text-[#364a63]">Company</p>
          
          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover(true)}
          >
            <p className="cursor-pointer hover:text-[#364a63]">Services</p>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg rounded-md">
                <ul className="text-black" onMouseLeave={() => handleDropdownHover(false)}>
                  <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer">Real Estate</li>
                  <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer">Retirement</li>
                  <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer">Cryptocurrency</li>
                  <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer">NFTs</li>
                  <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer">Stocks & ETFs</li>
                  <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer">Foreign Exchange</li>
                </ul>
              </div>
            )}
          </div>

          <p className="cursor-pointer hover:text-[#364a63]">Career</p>
          <p className="cursor-pointer hover:text-[#364a63]">Contact</p>
          <button className="border h-[40px] w-[120px] border-[#364a63] hover:bg-[#364a63] hover:text-white">
            Login
          </button>
        </span>
      </div>
    </div>
  );
};

export default Header;
