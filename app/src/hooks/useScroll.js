import { useContext } from "react";
import ScrollContext from "../components/Context/ScrollContext";

export const useScroll = () => {
  return useContext(ScrollContext);
};
