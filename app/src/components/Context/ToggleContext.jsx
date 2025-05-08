import { ToggleContext } from "./ToggleContextDefinition";

export const ToggleProvider = ({ children, value }) => (
  <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
);
