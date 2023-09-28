
import MarqueeCards from "./Marquee";
import { technologies } from "../../../constants";

const Tech = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col ">


          <MarqueeCards direction="left">
              {technologies.map((technology) => (
                  <div className='w-20 h-20 image_wrapper'>
                      <img src={technology.icon} alt="" />
                  </div>
                        ))}
          </MarqueeCards>

          
          <MarqueeCards direction="right">
          {technologies.map((technology) => (
                  <div className='w-20 h-20 image_wrapper'>
                      <img src={technology.icon} alt="" />
                  </div>
                        ))}
          </MarqueeCards>


      </div>
    </div>
  );
};

export default Tech;