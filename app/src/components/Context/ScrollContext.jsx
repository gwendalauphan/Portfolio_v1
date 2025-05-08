import { createContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ hasScrolled, setHasScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
