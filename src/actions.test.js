import * as actions from "./actions";

it("should set default value", () => {
  const value = true;
  const expectedAction = {
    type: "DEFAULT_VALUE",
    payload: value,
  };
  expect(actions.setDefaultValue(value)).toEqual(expectedAction);
});

it("handles SESSION_START", () => {
  const value = true;
  const expectedAction = {
    type: "SESSION_START",
    payload: value,
  };
  expect(actions.setSessionStart(value)).toEqual(expectedAction);
});

it("handles SESSION_VALUE", () => {
  const value = 20;
  const expectedAction = {
    type: "SESSION_VALUE",
    payload: value,
  };
  expect(actions.setSessionValue(value)).toEqual(expectedAction);
});

it("handles SESSION_TIMER", () => {
  const value = 540;
  const expectedAction = {
    type: "SESSION_TIMER",
    payload: value,
  };
  expect(actions.setSessionTimer(value)).toEqual(expectedAction);
});


it("handles BREAK_START", () => {
  const value = false;
  const expectedAction = {
    type: "BREAK_START",
    payload: value,
  };
  expect(actions.setBreakStart(value)).toEqual(expectedAction);
});

it("handles BREAK_VALUE", () => {
  const value = 540;
  const expectedAction = {
    type: "BREAK_VALUE",
    payload: value,
  };
  expect(actions.setBreakValue(value)).toEqual(expectedAction);
});

it("handles BREAK_TIMER", () => {
  const value = 900;
  const expectedAction = {
    type: "BREAK_TIMER",
    payload: value,
  };
  expect(actions.setBreakTimer(value)).toEqual(expectedAction);
});
