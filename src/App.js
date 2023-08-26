import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import LoginPage from "./Components/LoginPage";
import ProgressPage from "./Components/ProgressPage";
import DownLoadPage from "./Components/DownloadPage";

function App() {
  //  Instead of connecting the component with redux and using mapStateToProps and mapDispatchToProps.
  //  We can simply get and dispatch our data by using useDispatch and useSelector.
  //  Here mapDispatchToProps is similar to useSelector. and mapDispatchToProps is similar to useDispatch.

  const { landingPage, ProgressPages, downloadPage } = useSelector(
    (state) => state.ValidationData
  );

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="title">This is a simple Example of Redux Tool Kit.</div>

      {landingPage && (
        <div className="loginPage">
          <LoginPage />
        </div>
      )}

      {ProgressPages && (
        <div className="ProgressPage">
          <ProgressPage />
        </div>
      )}

      {downloadPage && (
        <div className="DownLoadPage">
          <DownLoadPage />
        </div>
      )}
    </div>
  );
}

export default App;
