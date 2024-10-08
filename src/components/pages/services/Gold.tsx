import { motion } from 'framer-motion';
import Value from '../value';
import { useNavigate } from 'react-router-dom';

const Retirement = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-[100vh] max-[650px]:w-[100%] relative flex justify-center items-center">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/Gold.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0000007b]"></div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-[60%] bg-[#364a637b] p-[80px] flex flex-col items-center justify-center rounded-[10px] relative max-[650px]:w-[100%]"
                >
                    <div className="w-[100%] flex items-center flex-col justify-center">
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px] max-[650px]:w-full">
                            Gold
                        </h1>
                        <p className='text-white text-center max-[650px]:w-full'>
                            The technicals and intensive capital required to begin an investment in Gold is no longer necessary with investifyEdge.
                        </p>
                    </div>
                </motion.div>
            </div>

            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-1/2 max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black'>About Gold</p>
                    <h1 className="text-[40px] font-bold mb-6">Start Investing Comfortably In Gold</h1>
                    <p className="text-[16px] mb-6">
                        Of all the precious metals, gold is the most popular as an investment. Investors generally buy gold as a way of diversifying their portfolio, especially through the use of futures contracts and derivatives.
                    </p>
                    <p className="text-[16px] mb-6">
                        The gold market is subject to speculation and volatility as are other markets. Compared to other precious metals used for investment, gold has been the most effective safe haven across a number of countries. Gold is a commodity that trades based on supply and demand. The interplay between supply and demand ultimately determines what the spot price of gold is at any given time. At investifyEdge we guide you through the whole investment process from a beginner to an expert level.
                    </p>
                    <button
                        className="bg-[#354f5b] text-white px-6 py-3 rounded-full transition duration-300"
                        onClick={() => navigate('/signup')}
                    >
                        Start Membership now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/gold.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md shadow-lg"
                    />
                </div>
            </section>

            <Value />
        </>
    );
};

export default Retirement;
