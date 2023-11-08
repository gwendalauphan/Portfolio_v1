import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ hasScrolled, setHasScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};