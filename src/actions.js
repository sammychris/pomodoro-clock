export const setDefaultValue = (value) => ({
  type: "DEFAULT_VALUE",
  payload: value,
});

export const setStart = (value) => ({
  type: "START",
  payload: value,
});

export const setSessionStart = (value) => {
  return {
    type: "SESSION_START",
    payload: value,
  };
};

export const setSessionValue = (value) => ({
  type: "SESSION_VALUE",
  payload: value,
});

export const setSessionTimer = (value) => ({
  type: "SESSION_TIMER",
  payload: value,
});

export const setBreakStart = (value) => ({
  type: "BREAK_START",
  payload: value,
});

export const setBreakValue = (value) => ({
  type: "BREAK_VALUE",
  payload: value,
});

export const setBreakTimer = (value) => ({
  type: "BREAK_TIMER",
  payload: value,
});
