import React from "react";
import DisplayTimer from "../components/DisplayTimer";
import PlayPauseReset from "../components/PlayPauseReset";
import TimeController from "../components/TimeController";
import useMainPage from "./useMainPage";

const MainPage = (props) => {
  const { timer, tBreak, tSession } = useMainPage({ ...props });

  timer.startCountDown();

  return (
    <div id="pomodoro">
      <div id="main-title">Pomodoro Clock</div>
      <TimeController
        incrementBreak={tBreak.increment}
        decrementBreak={tBreak.decrement}
        incrementSession={tSession.increment}
        decrementSession={tSession.decrement}
        breakValue={tBreak.value}
        sessionValue={tSession.value}
      />
      <DisplayTimer
        display={timer.minuteSeconds(timer.display)}
        text={timer.defaultValue ? "Session" : "Break"}
      />

      <PlayPauseReset
        defaultValue={timer.defaultValue}
        sessionOperation={tSession.operation}
        breakOperation={tBreak.operation}
        start={timer.start}
        reset={timer.reset}
      />
      <audio
        id="beep"
        preload="auto"
        src="https://goo.gl/65cBl1"
        ref={timer.audioBeep}
      />
    </div>
  );
};

export default MainPage;
