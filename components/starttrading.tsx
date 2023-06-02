import type { NextPage } from "next";

const Starttrading: NextPage = () => {
  return (
    <div className="absolute top-[215.94rem] left-[7.5rem] rounded-3xl [background:linear-gradient(141.25deg,_#7ebba2,_#133629)] shadow-[1px_8px_16px_rgba(0,_0,_0,_0.16),_0px_0px_4px_rgba(35,_30,_16,_0.04)] w-[75rem] h-[28.75rem] overflow-hidden text-left text-[1.5rem] text-dark-green font-karla">
      <img
        className="absolute top-[1.44rem] left-[52.56rem] w-[11rem] h-[31.06rem] object-cover"
        alt=""
        src="/rectangle-18@2x.png"
      />
      <img
        className="absolute top-[9.19rem] left-[44.06rem] w-[11rem] h-[31.06rem] object-cover"
        alt=""
        src="/rectangle-17@2x.png"
      />
      <img
        className="absolute top-[6rem] left-[62.44rem] w-[11rem] h-[31.06rem] object-cover"
        alt=""
        src="/rectangle-19@2x.png"
      />
      <img
        className="absolute top-[12.31rem] left-[45.5rem] w-[8.25rem] h-[15.19rem] opacity-[0.5]"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[8.59rem] left-[51.71rem] w-[13.43rem] h-[13.03rem] opacity-[0.5]"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute top-[13.53rem] left-[55.6rem] w-[14.76rem] h-[11.49rem] opacity-[0.5]"
        alt=""
        src="/vector2.svg"
      />
      <div className="absolute top-[calc(50%_-_130px)] left-[40.81rem] rounded-3xl bg-antiquewhite shadow-[1px_8px_16px_rgba(0,_0,_0,_0.16),_0px_0px_4px_rgba(35,_30,_16,_0.04)] w-[32.19rem] h-[16.31rem] flex flex-col py-[2rem] px-[1.5rem] box-border items-start justify-center gap-[2rem]">
        <div className="flex flex-row items-center justify-center gap-[0.5rem]">
          <img
            className="relative w-[2.42rem] h-[2.69rem]"
            alt=""
            src="/group-141.svg"
          />
          <b className="relative tracking-[-0.08em] leading-[120%]">Omika</b>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1rem] text-[1.13rem] text-darkslategray-200">
          <div className="flex flex-row items-start justify-start gap-[14.56rem]">
            <div className="relative tracking-[-0.02em] leading-[120%] font-medium">
              Total Volume
            </div>
            <b className="relative tracking-[-0.02em] leading-[120%] text-dark-green">
              $1,360,395,856
            </b>
          </div>
          <div className="flex flex-row items-center justify-start gap-[13.75rem]">
            <div className="relative tracking-[-0.02em] leading-[120%] font-medium">
              Total Value Locked
            </div>
            <b className="relative tracking-[-0.02em] leading-[120%] text-dark-green">
              $10,426,428
            </b>
          </div>
          <div className="flex flex-row items-center justify-start gap-[18.69rem]">
            <div className="relative tracking-[-0.02em] leading-[120%] font-medium">
              Total Fees
            </div>
            <b className="relative tracking-[-0.02em] leading-[120%] text-dark-green">
              $2,411,847
            </b>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_126px)] left-[2.5rem] flex flex-col items-start justify-center gap-[3rem] text-[2.5rem] text-white font-lora">
        <div className="flex flex-col items-start justify-center gap-[1rem]">
          <b className="relative tracking-[-0.02em] leading-[120%] inline-block w-[32.75rem]">
            Connect Seamlessly on Your Network of Choice
          </b>
          <div className="relative text-[1.5rem] tracking-[-0.02em] leading-[150%] font-medium font-karla">
            Omika is currently live on MIK
          </div>
        </div>
        <div className="rounded-md [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#dd7143] w-[10.13rem] flex flex-row py-[1.25rem] px-[2rem] box-border items-center justify-center text-[1rem] font-karla">
          <div className="relative tracking-[-0.02em] leading-[100%] font-medium">
            Start Trading
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starttrading;
