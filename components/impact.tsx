import type { NextPage } from "next";

const Impact: NextPage = () => {
  return (
    <div className=" mt-[15.5rem] left-0 lg:left-[calc(50%_-_720px)] w-full lg:w-auto bg-dark-green flex flex-col py-20 px-6 lg:px-[7.5rem] items-center justify-center gap-3 lg:gap-[3rem] text-center text-[2.5rem] lg:text-[2.5rem] text-white font-lora">
      <b className="relative tracking-[-0.02em] leading-[120%]">
        Unveiling Our Impact
      </b>
      <div className="w-full flex flex-wrap justify-center lg:flex-nowrap items-center justify-between lg:justify-center gap-3 lg:gap-[0.63rem] text-sm md:text-left font-karla">
        <div className="flex-grow w-full md:w-[14.5rem] flex flex-col py-2 px-3 md:px-[1.5rem] items-start justify-center gap-[1.5rem] border-r border-solid border-white lg:border-r-[1px]">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/layers-3-layers.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Trading Volume
            </div>
            <b className="relative text-lg md:text-[1.5rem] tracking-[-0.02em]">
              $1,502,775,162
            </b>
          </div>
        </div>
        <div className="flex-grow w-full md:w-[14.5rem] flex flex-col py-2 px-3 md:px-[1.5rem] items-start justify-center gap-[1.5rem] border-r border-solid border-white lg:border-r-[1px]">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/locklocked.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Value Locked
            </div>
            <b className="relative text-lg md:text-[1.5rem] tracking-[-0.02em]">
              $13,972,683
            </b>
          </div>
        </div>
        <div className="flex-grow w-full md:w-[14.5rem] flex flex-col py-2 px-3 md:px-[1.5rem] items-start justify-center gap-[1.5rem] border-r border-solid border-white lg:border-r-[1px]">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/currencydollar.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Fees
            </div>
            <b className="relative text-lg md:text-[1.5rem] tracking-[-0.02em]">
              $2,741,098
            </b>
          </div>
        </div>
        <div className="flex-grow w-full md:w-[14.5rem] flex flex-col py-2 px-3 md:px-[1.5rem] items-start justify-center gap-[1.5rem] border-r border-solid border-white lg:border-r-[1px]">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/walllet-wallet.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Open Interest
            </div>
            <b className="relative text-lg md:text-[1.5rem] tracking-[-0.02em]">
              $423,410
            </b>
          </div>
        </div>
        <div className="flex-grow w-full md:w-[14.5rem] flex flex-col py-2 px-3 md:px-[1.5rem] items-start justify-center gap-[1.5rem]">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/useruser.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Users
            </div>
            <b className="relative text-lg md:text-[1.5rem] tracking-[-0.02em]">29,215</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
