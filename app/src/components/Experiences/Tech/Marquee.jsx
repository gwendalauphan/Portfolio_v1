import Marquee from "react-fast-marquee";

const MarqueeCards = ({ children, direction }) => {
  return (
    <Marquee
      direction={direction}
      gradient={true}
      gradientWidth={"250px"}
      gradientColor="rgba(5, 8, 22, 1)"
      speed={30}
      pauseOnHover={true}
      autoFill={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
