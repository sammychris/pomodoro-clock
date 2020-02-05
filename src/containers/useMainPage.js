import { useRef } from "react";

const useMainPage = ({
  onDefaultValue,
  onStart,
  onSessionStart,
  onSessionValue,
  onSessionTimer,
  onBreakStart,
  onBreakValue,
  onBreakTimer,
  sessionStart,
  breakStart,
  sessionValue,
  breakValue,
  defaultValue,
  sessionTimer,
  breakTimer,
  start,
}) => {
  const audioBeep = useRef(null);

  const alarm = () => {
    audioBeep.current.play();
  };

  const minuteSeconds = (sec) => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  const incrementBreak = () => {
    if (!start && breakValue < 60) {
      onBreakValue(breakValue + 1);
      onBreakTimer(breakTimer + 60);
    }
  };

  const decrementBreak = () => {
    if (!start && breakValue > 1) {
      onBreakValue(breakValue - 1);
      onBreakTimer(breakTimer - 60);
    }
  };

  const incrementSession = () => {
    if (!start && sessionValue < 60) {
      console.log(onSessionValue(sessionValue + 1));
      console.log(onSessionTimer(sessionTimer + 60));
    }
  };

  const decrementSession = () => {
    if (!start && sessionValue > 1) {
      onSessionValue(sessionValue - 1);
      onSessionTimer(sessionTimer - 60);
    }
  };

  const reset = () => {
    onSessionStart(false);
    onBreakStart(false);
    onSessionValue(25);
    onBreakValue(5);
    onDefaultValue(true);
    onSessionTimer(25 * 60);
    onBreakTimer(5 * 60);
    onStart(false);
    audioBeep.current.pause();
    audioBeep.current.currentTime = 0;
  };

  const sessionOperation = () => {
    onSessionStart(!sessionStart);
    onStart(!start);
  };

  const countdown = ({
    defaultVal,
    timerStart,
    setTimerStart,
    setTimer,
    timer,
    timerValue,
    timerOperation,
  }) => {
    setTimeout(() => {
      if (!timerStart) return "";
      if (timer === 0) {
        alarm();
        onDefaultValue(defaultVal);
        setTimerStart(!timerStart);
        setTimer(timerValue * 60);
        onStart(!start);
        timerOperation();
      } else {
        setTimer(timer - 1);
      }
    }, 1000);
  };

  const startCountDown = () => {
    defaultValue
      ? countdown({
          defaultVal: false,
          timerStart: sessionStart,
          setTimerStart: onSessionStart,
          timer: sessionTimer,
          setTimer: onSessionTimer,
          timerValue: sessionValue,
          timerOperation: breakOperation,
        })
      : countdown({
          defaultVal: true,
          timerStart: breakStart,
          setTimerStart: breakStart,
          timer: breakTimer,
          setTimer: onBreakTimer,
          timerValue: breakValue,
          timerOperation: sessionOperation,
        });
  };

  const breakOperation = () => {
    onBreakStart(!breakStart);
    onStart(!start);
  };

  const display = defaultValue ? sessionTimer : breakTimer;

  return {
    timer: {
      display,
      startCountDown,
      minuteSeconds,
      defaultValue,
      start,
      reset,
      audioBeep,
    },
    tSession: {
      increment: incrementSession,
      decrement: decrementSession,
      operation: sessionOperation,
      value: sessionValue,
    },
    tBreak: {
      increment: incrementBreak,
      decrement: decrementBreak,
      operation: breakOperation,
      value: breakValue,
    },
  };
};

export default useMainPage;
