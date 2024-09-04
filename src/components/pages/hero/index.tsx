import { FaChartPie, FaMoneyBill, FaUser } from "react-icons/fa";
import Header from "../header";
import { motion } from "framer-motion";
import 'animate.css';

const HeroPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[url('./bgimage.jpg')] bg-cover bg-center bg-no-repeat relative flex justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="w-full h-full relative z-10">
          <Header />
          <div className="w-[100%] h-[90vh] flex items-center flex-col justify-center">
            <h1 className="text-[50px] w-[90%] text-white font-bold">
              International <br /> Private Equity <br /> Company
            </h1>
            <div className="w-[90%] h-[100px] flex items-center">
              <motion.button
                className="p-[20px] bg-[#364a63] text-white text-[18px]"
                whileInView={{ x: [100, 0], opacity: [0, 1] }} // Animates on scroll
                transition={{ duration: 0.8 }}
              >
                Start Membership Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Section */}
      <div className="w-[100%] h-[200px] bg-white shadow-lg flex justify-center">
        <div className="w-[90%] h-[100%] flex justify-center items-center">
          <motion.div
            className="flex w-[35%] items-center gap-[20px]"
            whileInView={{ x: [-50, 0], opacity: [0, 1] }} // Animates on scroll
            transition={{ duration: 0.6 }}
          >
            <FaUser className="text-[50px] text-[#364a63]" />
            <span className="w-[80%]">
              <p className="text-[25px] font-semibold text-[#364a63]">Membership Registration</p>
              <p className="text-[12px]">First you need to become a member of investifyEdge by registering.</p>
            </span>
          </motion.div>

          <motion.div
            className="flex w-[35%] items-center gap-[20px]"
            whileInView={{ y: [50, 0], opacity: [0, 1] }} // Animates on scroll
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaChartPie className="text-[50px] text-[#364a63]" />
            <span className="w-[80%]">
              <p className="text-[25px] font-semibold text-[#364a63]">Choose Plan</p>
              <p className="text-[12px]">Select any of our unique financial earning plans that best works for you.</p>
            </span>
          </motion.div>

          <motion.div
            className="flex w-[35%] items-center gap-[20px]"
            whileInView={{ x: [50, 0], opacity: [0, 1] }} // Animates on scroll
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaMoneyBill className="text-[50px] text-[#364a63]" />
            <span className="w-[80%]">
              <p className="text-[25px] font-semibold text-[#364a63]">Passive Income</p>
              <p className="text-[12px] text-[#364a63]">Start earning passively and get paid immediately you request for a withdrawal.</p>
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
