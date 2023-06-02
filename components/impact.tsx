import type { NextPage } from "next";

const Impact: NextPage = () => {
  return (
    <div className="absolute top-[65.5rem] left-[calc(50%_-_720px)] bg-dark-green flex flex-col py-[4rem] px-[7.5rem] items-center justify-center gap-[3rem] text-center text-[2.5rem] text-white font-lora">
      <b className="relative tracking-[-0.02em] leading-[120%]">
        Unveiling Our Impact
      </b>
      <div className="w-[75rem] flex flex-row items-center justify-center gap-[0.63rem] text-left text-[0.88rem] font-karla">
        <div className="box-border w-[14.5rem] flex flex-col py-[2rem] px-[1.5rem] items-start justify-center gap-[1.5rem] border-r-[1px] border-solid border-white">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/layers-3-layers.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Trading Volume
            </div>
            <b className="relative text-[1.5rem] tracking-[-0.02em]">
              $1, 502,775,162
            </b>
          </div>
        </div>
        <div className="box-border w-[14.5rem] flex flex-col py-[2rem] px-[1.5rem] items-start justify-center gap-[1.5rem] border-r-[1px] border-solid border-white">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/locklocked.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Value Locked
            </div>
            <b className="relative text-[1.5rem] tracking-[-0.02em]">
              $13,972,683
            </b>
          </div>
        </div>
        <div className="box-border w-[14.5rem] flex flex-col py-[2rem] px-[1.5rem] items-start justify-center gap-[1.5rem] border-r-[1px] border-solid border-white">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/currencydollar.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Fees
            </div>
            <b className="relative text-[1.5rem] tracking-[-0.02em]">
              $2,741,098
            </b>
          </div>
        </div>
        <div className="box-border w-[14.5rem] flex flex-col py-[2rem] px-[1.5rem] items-start justify-center gap-[1.5rem] border-r-[1px] border-solid border-white">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/walllet-wallet.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Open Interest
            </div>
            <b className="relative text-[1.5rem] tracking-[-0.02em]">
              $423,410
            </b>
          </div>
        </div>
        <div className="w-[14.5rem] flex flex-col py-[2rem] px-[1.5rem] box-border items-start justify-center gap-[1.5rem]">
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
            alt=""
            src="/useruser.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] font-medium">
              Total Users
            </div>
            <b className="relative text-[1.5rem] tracking-[-0.02em]">29,215</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
