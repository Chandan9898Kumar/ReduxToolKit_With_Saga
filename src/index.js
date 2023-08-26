import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));


// The component "Provider" is a React element exported from react-redux package that takes 
// the App component as child and takes the store configuration as prop named store.

// The idea is that the store will be accessible in every component inside the application. 
// But… what if we move the Provider element inside the App component ? 
// In this case, all components can use the redux store except the App component. 
// Because it’s not considered one of the “children” for the Provider component. 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
