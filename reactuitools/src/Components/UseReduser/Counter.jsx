import React, { useContext } from "react";
import { AppContext } from "../../Context/UseReduser/AppContex";

const Counter = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleAdd = () => {
    const action = {
      type: "increment",
    };
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = {
      type: "decrement",
    };
    dispatch(action);
  };

  return (
    <div className="text-center bg-dark p-5 text-light">
      <p className="display-1">Counter App</p>
      <p
        className="display-3"
        style={
          state.counter % 2 === 0
            ? {
                color: "red",
                background: "white",
                padding: "15px 0px",
                fontWeight: "600",
              }
            : {
                color: "blue",
                background: "green",
                padding: "15px 0px",
                fontWeight: "600",
              }
        }
      >
        Count Is: {state.counter}
      </p>
      <button className="btn btn-info m-2 fs-3" onClick={handleAdd}>
        ADD
      </button>
      <button className="btn btn-info m-2 fs-3" onClick={handleDecrement}>
        REDUCE
      </button>
    </div>
  );
};

export default Counter;
