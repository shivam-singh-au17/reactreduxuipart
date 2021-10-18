import React, { useState, createContext } from "react";

const theme = {
  dark: {
    color: "#0DCAF0",
    background: "#121212",
    border: "5px solid #0DCAF0",
  },
  light: {
    color: "#121212",
    background: "#0DCAF0",
    border: "5px solid #121212",
  },
};

export const AppContext = createContext();

function AppProvider(props) {
  const [appTheme, setAppTheme] = useState(theme.light);

  const setDark = () => setAppTheme(theme.dark);
  const setLight = () => setAppTheme(theme.light);
  return (
    <AppContext.Provider value={{ appTheme, setDark, setLight }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
