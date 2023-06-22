import type { NextPage } from "next";
import Impact from "../components/impact";
import Dexmetric from "../components/dexmetric";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Starttrading from "../components/starttrading";
import Omikavault from "../components/omikavault";
import Hero from "../components/hero";

const LandingPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <Nav />
       <Hero />
      <Impact />
      <Dexmetric />
      <Omikavault />
      <Starttrading />
     
      <Footer />
    
    
{/*      
      <img
        className="absolute top-[4.38rem] left-[calc(50%_-_444px)] w-[55.44rem] h-[55.5rem]"
        alt=""
        src="/animation.svg"
      /> */}
    </div>
  );
};

export default LandingPage;
