import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  addCount,
  subCount,
} from "../../AllState/ReduxIntroduction/actionCreators";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const action = bindActionCreators({ addCount, subCount }, dispatch);

  return (
    <div className="container mt-5  w-25 text-center">
      <h1>Counter App</h1>
      <div className="p-5 bg-success h1 fw-bold">{counter}</div>
      {/* <button
          className="btn btn-info m-2 fw-bold"
          onClick={() => {
            dispatch(addCount(1));
          }}
        >
          [+]
        </button>
        <button
          className="btn btn-primary m-2  fw-bold"
          onClick={() => {
            dispatch(subCount(1));
          }}
        >
          [-]
        </button> */}
      <button
        className="btn btn-info m-2 fw-bold"
        onClick={() => {
          action.addCount(1);
        }}
      >
        {" "}
        [+]
      </button>
      <button
        className="btn btn-primary m-2  fw-bold"
        onClick={() => {
          action.subCount(1);
        }}
      >
        [-]
      </button>
    </div>
  );
};

export default Counter;
