import { createContext } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children, value }) => (
  <ProgressContext.Provider value={value}>
    {children}
  </ProgressContext.Provider>
);


