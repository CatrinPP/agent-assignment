const createHandlers = (handlers) => () => ({
  DEFAULT: (state) => state,
  ...handlers,
});

const createReducer = (state, action, actionHandlers) => {
  const { type, payload } = action;
  const handlers = actionHandlers();
  const handler = handlers[type] || handlers.DEFAULT;
  return handler(state, payload);
};

export {
  createHandlers,
  createReducer,
};
