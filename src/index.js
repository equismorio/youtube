import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals"; // NOT NEEDED
// import "bootstrap/dist/css/bootstrap.css";
// import "./components/general.css";
// import "./components/header.css";
// import "./general.css";
// import "./header.css";
// import "./sidebar.css";
// import "./video.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // NOT NEEDED
