import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="absolute top-[calc(50%_-_1751px)] left-[calc(50%_-_329px)] flex flex-col items-center justify-center gap-[3rem] text-center text-[4.5rem] text-dark-green font-lora">
      <div className="flex flex-col items-center justify-center gap-[1rem]">
      <b className="self-stretch relative tracking-[-0.02em] leading-[120%]">
  <p className="m-0" style={{ background: 'linear-gradient(141.25deg, #7ebba2, #133629)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
    Decentralized
  </p>
  <p className="m-0" style={{ background: 'linear-gradient(141.25deg, #7ebba2, #133629)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
    Perpetual Exchange
  </p>
</b>

        <div className="relative text-[1.13rem] tracking-[-0.02em] leading-[160%] font-medium font-karla inline-block w-[38.06rem]">
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 50x
          leverage directly from your wallet
        </div>
      </div>
      <div className="rounded-md [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#dd7143] w-[10.13rem] flex flex-row py-[1.25rem] px-[2rem] box-border items-center justify-center text-left text-[1rem] text-white font-karla">
        <div className="relative tracking-[-0.02em] leading-[100%] font-medium">
          Start Trading
        </div>
      </div>
    </div>
  );
};

export default Hero;
