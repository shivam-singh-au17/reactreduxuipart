import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addCount,
  subCount,
  multiplyCount,
  divideCount,
} from "../../AllState/ReduxIntroduction/actionCreators";

const Calculater = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const handelChange = (e) => {
    setData(e.target.value);
  };

    return (
    <div className="container mt-5  w-25 text-center">
      <h1>Calculater App</h1>
      <input
        type="number"
        className="form-control my-3"
        placeholder="Enter Your Number"
        onChange={handelChange}
      />
      <div className="p-5 bg-success h1 fw-bold">{counter}</div>
      <button
        className="btn btn-info m-2 fw-bold"
        onClick={() => {
          dispatch(addCount(Number(data)));
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary m-2  fw-bold"
        onClick={() => {
          dispatch(subCount(Number(data)));
        }}
      >
        Decrement
      </button>
      <button
        className="btn btn-warning m-2 fw-bold"
        onClick={() => {
          dispatch(multiplyCount(Number(data)));
        }}
      >
        Multiply
      </button>
      <button
        className="btn btn-danger m-2  fw-bold"
        onClick={() => {
          dispatch(
            divideCount(Number(data) === 0 ? alert("Enter Atlist One Number In Input Box") : Number(data))
          );
        }}
      >
        Divide
      </button>
    </div>
  );
};

export default Calculater;
