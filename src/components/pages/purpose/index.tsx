import { motion } from "framer-motion";
const Purpose = () => {
    return (
        <div className="w-full mt-[50px] flex items-center justify-center ">
            <div className="w-[90%] flex justify-between">
                <motion.div
                    className="flex flex-col w-[30%] font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[14px] font-light">Our Purpose</p>
                    <p className="text-[50px]">Our common Purpose is Creating opportunities to rise.</p>
                </motion.div>
                <div className="flex w-[60%]">
                    <div className="flex flex-col w-[50%] gap-[20px]">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[300px] h-[400px] shadow-lg bg-white ">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src="./explore.jpg" alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[20px] font-bold ">Explore With Us</p>
                                <p className="text-center text-[12px]">Seize the opportunity to grow your capital in the cryptocurrency market by copying the trades of top preforming traders in our investment programme</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[300px] h-[400px] shadow-lg bg-white ">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src="./frequency.jpg" alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[20px] font-bold ">Explore With Us</p>
                                <p className="text-center text-[12px]">Seize the opportunity to grow your capital in the cryptocurrency market by copying the trades of top preforming traders in our investment programme</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col w-[50%] gap-[20px] mt-[40px]">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[300px] h-[400px] shadow-lg bg-white ">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src="./bgimage.jpg" alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[20px] font-bold ">Explore With Us</p>
                                <p className="text-center text-[12px]">Seize the opportunity to grow your capital in the cryptocurrency market by copying the trades of top preforming traders in our investment programme</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[300px] h-[400px] shadow-lg bg-white ">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src="./wealth.jpg" alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[20px] font-bold ">Explore With Us</p>
                                <p className="text-center text-[12px]">Seize the opportunity to grow your capital in the cryptocurrency market by copying the trades of top preforming traders in our investment programme</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purpose