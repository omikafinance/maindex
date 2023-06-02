import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="absolute bottom-[0rem] left-[0rem] box-border w-[90rem] flex flex-row py-[2rem] px-[10rem] items-center justify-between text-left text-[0.88rem] text-olive font-lexend-deca border-t-[1px] border-solid border-darkslategray-100">
      <div className="relative tracking-[-0.02em] leading-[120%]">
        © 2023 Omika.finance | Powered by Omika.finance
      </div>
      <div className="flex flex-row items-center justify-center gap-[1rem]">
        <img
          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/instagram-icon.svg"
        />
        <img
          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/linkedin-icon.svg"
        />
        <img
          className="relative w-[1.19rem] h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/twitter-logo.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
