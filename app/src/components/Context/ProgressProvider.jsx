import { ProgressContext } from "./ProgressContext";

export const ProgressProvider = ({ children, value }) => (
  <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
);
