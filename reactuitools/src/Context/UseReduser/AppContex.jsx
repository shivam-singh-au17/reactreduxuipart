import React, { createContext, useReducer } from "react";

const initstate = {
    counter: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case "decrement": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

export const AppContext = createContext();

const AppContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContexProvider;
