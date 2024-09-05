
const AirDropBanner = () => {
    return (
        <div className="w-full h-[300px]">
            <div className="w-full h-full bg-[url('./workplace.jpg')] bg-cover bg-center bg-no-repeat relative box-border flex items-center justify-center flex-col">
                <div className="absolute inset-0 bg-black  opacity-40"></div>
                <div className="w-[90%] z-20 flex items-center justify-center flex-col gap-[20px]">
                    <p className="text-white text-[20px] font-semibold max-[650px]:text-[15px]">SERVER AIRDROP ACTIVE</p>
                    <p className="text-[40px] text-white max-[650px]:text-[25px] text-center">Register now to claim your Airdrops. Offer Ends Soon</p>
                    <button className="p-[10px] w-[200px] bg-[#E93C05] border-none">Claim Airdrops</button>
                </div>
            </div>
        </div>
    )
}

export default AirDropBanner