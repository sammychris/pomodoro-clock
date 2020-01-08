import React from "react";

const PlayPauseReset = ({
  start,
  defaultValue,
  sessionOperation,
  breakOperation,
  reset,
}) => {
  return (
    <div id="play-reset">
      <div
        id="start-pause"
        onClick={defaultValue ? sessionOperation : breakOperation}
      >
        <i
          id="start_stop"
          className={start ? "fa fa-pause fa-2x" : "fa fa-play fa-2x"}
        ></i>
      </div>
      <div id="restart" onClick={reset}>
        <i id="reset" className="fa fa-refresh fa-2x"></i>
      </div>
    </div>
  );
};

export default PlayPauseReset;
