import useMainPage from "./useMainPage";
import { shallow } from "enzyme";
import { renderHook, act } from "@testing-library/react-hooks";
import configureStore from "redux-mock-store"; //ES6 modules
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

const middlewares = [];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const initialState = {
  sessionStart: false,
  breakStart: false,
  sessionValue: 25,
  breakValue: 5,
  defaultValue: 25,
  sessionTimer: 250,
  breakTimer: 150,
  start: false,
};

const store = mockStore(initialState);

const dispatchValues = {
  onDefaultValue: (value) => store.dispatch(setDefaultValue(value)),
  onStart: (value) => store.dispatch(setStart(value)),
  onSessionStart: (value) => store.dispatch(setSessionStart(value)),
  onSessionValue: (value) => store.dispatch(setSessionValue(value)),
  onSessionTimer: (value) => store.dispatch(setSessionTimer(value)),
  onBreakStart: (value) => store.dispatch(setBreakStart(value)),
  onBreakValue: (value) => store.dispatch(setBreakValue(value)),
  onBreakTimer: (value) => store.dispatch(setBreakTimer(value)),
};

const props = { ...store.getState(), ...dispatchValues };

const { result } = renderHook(() => useMainPage(props));

test("should increment ", () => {
  const { timer, tBreak, tSession } = result.current;
  //   act(() => {
  //     console.log(tSession.operation());
  //     console.log(tSession.increment());
  //     console.log(tSession.increment());
  //     console.log(tSession.increment());
  //   });

  //   console.log(store.getState());

  //   console.log({ tSession });
  expect(timer).toEqual({
    display: 250,
    startCountDown: expect.any(Function),
    minuteSeconds: expect.any(Function),
    defaultValue: 25,
    start: expect.any(Boolean),
    reset: expect.any(Function),
    audioBeep: { current: null },
  });

  expect(tBreak).toEqual({
    increment: expect.any(Function),
    decrement: expect.any(Function),
    operation: expect.any(Function),
    value: 5,
  });

  expect(tSession).toEqual({
    increment: expect.any(Function),
    decrement: expect.any(Function),
    operation: expect.any(Function),
    value: 25,
  });
});

describe("check for properties", () => {
  const Elements = () => {
    const mainProps = useMainPage(props);
    return <div {...mainProps} />;
  }; // since hooks can only be used inside a function component we wrap it inside one
  const container = shallow(<Elements />);

  expect(container.prop("timer")).toEqual({
    display: 250,
    startCountDown: expect.any(Function),
    minuteSeconds: expect.any(Function),
    defaultValue: 25,
    start: expect.any(Boolean),
    reset: expect.any(Function),
    audioBeep: { current: null },
  });

  // it('should have proper props for email field', () => {
  //   expect(container.prop('emailField')).toEqual({
  //     value: '',
  //     onBlur: expect.any(Function),
  //   });
  // });

  // it('should set value on email onBlur event', () => {
  //   container.prop('emailField').onBlur({
  //     target: {
  //       value: 'newemail@gmail.com',
  //     },
  //   });
  //   expect(container.prop('emailField').value).toEqual('newemail@gmail.com');
  // });

  // it('should have proper props for password field', () => { /* Check onChange and value props */ });
  // /* check other functional behavior of the component */
});
