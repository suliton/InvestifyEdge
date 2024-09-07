import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background color when scrolling down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-[100%] h-[10vh] flex justify-center fixed top-0 z-10030 transition-colors duration-300 ${
        isScrolled ? 'bg-[#111D29]' : 'bg-transparent'
      }`}
    >
      <div className="w-[90%] h-full flex items-center">
        <span className="w-[30%] flex items-center">
          <p className={`text-white ${isScrolled ? 'text-white' : ''}`}>InvestifyEdge</p>
        </span>
        <span className=" w-[70%] flex gap-[70px] items-center text-white text-[14px] max-[650px]:hidden">
          <p className="cursor-pointer hover:text-[#364a63]">Home</p>
          <p className="cursor-pointer hover:text-[#364a63]">Company</p>
          <p className="cursor-pointer hover:text-[#364a63]">Services</p>
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
