import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Toggle from "react-styled-toggle";

const ToggleSwitch = ({ isEnabled, onToggleChange }) => {
  const location = useLocation();

  const handleToggle = () => {
    onToggleChange(!isEnabled);
  };

  // Utilisez un effet pour réinitialiser le Toggle Switch lorsque la location (route) change
  useEffect(() => {
    onToggleChange(false);
  }, [location]);

  return (
    <div className="toggle-switch">
      <Toggle
        onChange={handleToggle}
        backgroundColorChecked="#2c008b"
        checked={isEnabled}
        activeLabel="ON"
        inactiveLabel="OFF"
        sliderWidth={25}
        sliderHeight={24}
        width={60}
        height={31}
      />
    </div>
  );
};

export default ToggleSwitch;
