import React from "react";

const DisplayTimer = ({ text, display }) => {
  return (
    <div id="display">
      <div id="timer-label">{text}</div>
      <div id="time-left">{display}</div>
    </div>
  );
};

export default DisplayTimer;
