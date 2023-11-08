import React from "react";

const Indication = ({ onClose }) => (
  <div className="indication-container">
    Click me!!
    <button onClick={onClose}>✖️</button>
  </div>
);

export default Indication;
