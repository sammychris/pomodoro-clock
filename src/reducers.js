const initialValue = {
  sessionStart: false,
  breakStart: false,
  sessionValue: 25,
  breakValue: 5,
  defaultValue: true,
  sessionTimer: 1500,
  breakTimer: 300,
  start: false,
};

// type actionType = {
//   type: string;
//   payload: number | boolean | string;
// };

export const reducers = (state = initialValue, action = {}) => {
  switch (action.type) {
    case "DEFAULT_VALUE":
      return { ...state, defaultValue: action.payload };
    case "START":
      return { ...state, start: action.payload };
    case "SESSION_START":
      return { ...state, sessionStart: action.payload };
    case "SESSION_VALUE":
      return { ...state, sessionValue: action.payload };
    case "SESSION_TIMER":
      return { ...state, sessionTimer: action.payload };
    case "BREAK_START":
      return { ...state, breakStart: action.payload };
    case "BREAK_VALUE":
      return { ...state, breakValue: action.payload };
    case "BREAK_TIMER":
      return { ...state, breakTimer: action.payload };
    default:
      return state;
  }
};
