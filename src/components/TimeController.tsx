import React from "react";
import ButtonsController from "./ButtonsController";

const TimeController = ({
  breakValue,
  sessionValue,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
}) => {
  return (
    <div id="buttons">
      <ButtonsController
        id="break"
        title="Break Length"
        control={breakValue}
        increment={incrementBreak}
        decrement={decrementBreak}
      />
      <ButtonsController
        id="session"
        title="Session Length"
        control={sessionValue}
        increment={incrementSession}
        decrement={decrementSession}
      />
    </div>
  );
};

export default TimeController;
