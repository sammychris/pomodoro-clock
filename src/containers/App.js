import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import MainPage from "./MainPage";

import {
  setDefaultValue,
  setStart,
  setSessionStart,
  setSessionValue,
  setSessionTimer,
  setBreakStart,
  setBreakValue,
  setBreakTimer,
} from "../actions";

const mapStateToProps = (state) => ({
  sessionStart: state.sessionStart,
  breakStart: state.breakStart,
  sessionValue: state.sessionValue,
  breakValue: state.breakValue,
  defaultValue: state.defaultValue,
  sessionTimer: state.sessionTimer,
  breakTimer: state.breakTimer,
  start: state.start,
});

const mapDispatchToProps = (dispatch) => ({
  onDefaultValue: (value) => dispatch(setDefaultValue(value)),
  onStart: (value) => dispatch(setStart(value)),
  onSessionStart: (value) => dispatch(setSessionStart(value)),
  onSessionValue: (value) => dispatch(setSessionValue(value)),
  onSessionTimer: (value) => dispatch(setSessionTimer(value)),
  onBreakStart: (value) => dispatch(setBreakStart(value)),
  onBreakValue: (value) => dispatch(setBreakValue(value)),
  onBreakTimer: (value) => dispatch(setBreakTimer(value)),
});

const App = (props) => {
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
