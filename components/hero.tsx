import type { NextPage } from "next";
import Lottie from "lottie-react";
import animationData from "./herobg.json"
const Hero: NextPage = () => {
 
  return (
    <div  className="flex flex-col  mt-60 items-center justify-center gap-8 text-center text-53xl sm:text-53xl md:text-53xl lg:text-53xl xl:text-53xl text-dark-green font-lora">
    <Lottie animationData={animationData} loop={true} style={{ position: 'absolute', zIndex: -1 }} />
    <div className="flex flex-col items-center justify-center gap-4">
        <b className="self-stretch relative tracking-[-0.02em] leading-[120%]">
            <p className="m-0" style={{ background: 'linear-gradient(141.25deg, #7ebba2, #133629)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Decentralized
            </p>
            <p className="m-0" style={{ background: 'linear-gradient(141.25deg, #7ebba2, #133629)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Perpetual Exchange
            </p>
        </b>

        <div className="relative text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg tracking-[-0.02em] leading-[160%] font-medium font-karla inline-block w-full sm:w-80 md:w-96 lg:w-96 xl:w-96">
            Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 50x
            leverage directly from your wallet
        </div>
    </div>
    <div style={{background: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), #dd7143'}} className="rounded-md w-36 sm:w-48 md:w-64 lg:w-64 xl:w-64 flex flex-row py-2 sm:py-3 md:py-4 lg:py-4 xl:py-4 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 box-border items-center justify-center text-left text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl text-white font-karla">
        <div className="relative tracking-[-0.02em] leading-[100%] font-medium">
            Start Trading
        </div>
    </div>
</div>

  );
};

export default Hero;
