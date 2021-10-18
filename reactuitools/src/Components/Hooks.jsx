import React from "react";
import { useTimeout } from "../Hooks/CustomHooks";
const Hooks = () => {
  const isReady = useTimeout(2000);
  return (
    <div className="text-center">
      <h1 className="mb-3"> Custom Hooks Use </h1>
      <div className="fs-1 bg-success p-3 text-light">
        {isReady && "Ready"} {!isReady && "Not Ready"}
      </div>
    </div>
  );
};

export default Hooks;
