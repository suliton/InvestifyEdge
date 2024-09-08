import { FaChartPie, FaMoneyBill, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import 'animate.css';
import bgImage from '../../../assets/bgimage.jpg'
const HeroPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] max-[650px]:w-[100%]  bg-cover bg-center bg-no-repeat relative flex justify-center " style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="w-full h-full relative max-[650px]:w-[100%] bg-[#0000007a] z-10">
          <div className="w-[100%] h-[90vh] flex items-center flex-col justify-center">
            <h1 className="text-[50px] w-[90%] text-white font-bold max-w-[1000px] text-center
              max-[650px]:text-[40px]">
              International <br /> Private Equity <br /> Company
            </h1>
            <div className="w-[90%] h-[100px] flex items-center justify-center">
              <motion.button
                className="p-[20px] bg-[#364a63] text-white text-[18px] max-[768px]:text-[16px] max-[650px]:text-[14px]"
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                Start Membership Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] bg-white shadow-lg flex justify-center max-[650px]:flex-col max-[650px]:h-auto max-[650px]:p-[20px] overflow-hidden">
        <div className="w-[90%] h-full flex justify-center items-center gap-[20px] max-[650px]:gap-[50px] max-[650px]:flex-col">
          <motion.div
            className="flex w-[35%] items-center gap-[20px] max-[650px]:w-full"
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            <FaUser className="text-[50px] text-[#364a63] max-[650px]:text-[40px]" />
            <span className="w-[80%]">
              <p className="text-[25px] font-semibold text-[#364a63] max-[650px]:text-[20px]">Membership Registration</p>
              <p className="text-[12px] max-[650px]:text-[10px]">First you need to become a member of investifyEdge by registering.</p>
            </span>
          </motion.div>

          <motion.div
            className="flex w-[35%] items-center gap-[20px] max-[650px]:w-full"
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaChartPie className="text-[50px] text-[#364a63] max-[650px]:text-[40px]" />
            <span className="w-[80%]">
              <p className="text-[25px] font-semibold text-[#364a63] max-[650px]:text-[20px]">Choose Plan</p>
              <p className="text-[12px] max-[650px]:text-[10px]">Select any of our unique financial earning plans that best works for you.</p>
            </span>
          </motion.div>

          <motion.div
            className="flex w-[35%] items-center gap-[20px] max-[650px]:w-full"
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaMoneyBill className="text-[50px] text-[#364a63] max-[650px]:text-[40px]" />
            <span className="w-[80%]">
              <p className="text-[25px] font-semibold text-[#364a63] max-[650px]:text-[20px]">Passive Income</p>
              <p className="text-[12px] max-[650px]:text-[10px]">Start earning passively and get paid immediately you request for a withdrawal.</p>
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
