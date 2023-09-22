import { createContext } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children, value }) => (
  <ToggleContext.Provider value={value}>
    {children}
  </ToggleContext.Provider>
);

