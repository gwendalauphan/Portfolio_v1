
import Marquee from "react-fast-marquee";

const MarqueeCards = ({children, direction}) => {

  return (
    <Marquee
      direction={direction}
      gradient={true}
      gradientWidth={"100px"}
      gradientColor="rgba(244, 128, 255, 0.5)"
      
      speed={30}
      pauseOnHover={true}
      autoFill={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;