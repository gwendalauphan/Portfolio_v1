import { createContext } from 'react';

export const ProgressContext = createContext({
  scrollPercentage: 0,
  setScrollPercentage: () => {}
});
