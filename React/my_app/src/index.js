import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorHandler from "./Component/Life_Cycle_Methods/Error_Handling/errorHandling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorHandler>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorHandler>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
