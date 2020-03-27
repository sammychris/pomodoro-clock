import { reducers } from "./reducers";

let initialValues;

beforeEach(() => {
  initialValues = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
});

it("expect to the default values", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
  expect(reducers(undefined, {})).toEqual(expectedValue);
});

it("change the DEFAULT_VALUE to false", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: false,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
  expect(
    reducers(initialValues, { type: "DEFAULT_VALUE", payload: false })
  ).toEqual(expectedValue);
});

it("change the START to true", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: true,
  };
  expect(reducers(initialValues, { type: "START", payload: true })).toEqual(
    expectedValue
  );
});

it("change the SESSION_START to true", () => {
  const expectedValue = {
    sessionStart: true,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
  expect(
    reducers(initialValues, { type: "SESSION_START", payload: true })
  ).toEqual(expectedValue);
});

it("change the SESSION_VALUE to 700", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 700,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
  expect(
    reducers(initialValues, { type: "SESSION_VALUE", payload: 700 })
  ).toEqual(expectedValue);
});

it("change the SESSION_TIMER to 4000", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 4000,
    breakTimer: 300,
    start: false,
  };
  expect(
    reducers(initialValues, { type: "SESSION_TIMER", payload: 4000 })
  ).toEqual(expectedValue);
});

it("change the BREAK_START to true", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: true,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
  expect(
    reducers(initialValues, { type: "BREAK_START", payload: true })
  ).toEqual(expectedValue);
});

it("change the BREAK_VALUE to true", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 1,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 300,
    start: false,
  };
  expect(reducers(initialValues, { type: "BREAK_VALUE", payload: 1 })).toEqual(
    expectedValue
  );
});

it("change the BREAK_TIMER to true", () => {
  const expectedValue = {
    sessionStart: false,
    breakStart: false,
    sessionValue: 25,
    breakValue: 5,
    defaultValue: true,
    sessionTimer: 1500,
    breakTimer: 1000,
    start: false,
  };
  expect(
    reducers(initialValues, { type: "BREAK_TIMER", payload: 1000 })
  ).toEqual(expectedValue);
});
