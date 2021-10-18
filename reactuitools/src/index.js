import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import AppProvider from './Context/AppProvider';
// import AppContexProvider from './Context/UseReduser/AppContex';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppProvider> */}
      {/* <AppContexProvider> */}
      <App />
      {/* </AppContexProvider> */}
      {/* </AppProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
