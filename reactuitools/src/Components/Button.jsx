import React, { useContext } from "react";
import { AppContext } from "../Context/AppProvider";


function Button(props) {
  let theme = useContext(AppContext);
  return (
    <>
      <h1 className="text-center mb-3">useContext Hooks Use</h1>
      <div
        className="p-5 fs-1 text-center"
        style={{...theme.appTheme }}
      >
        {props.label}
      </div>
      <button className="btn btn-dark text-info" onClick={theme.setDark}>
        DARK
      </button>
      <button className="btn btn-info m-3" onClick={theme.setLight}>
        LIGHT
      </button>
    </>
  );
}

export default Button;
