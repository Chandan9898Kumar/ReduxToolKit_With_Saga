import React, { memo } from "react";
import ButtonsComponent from "./MyButton";
import { useDispatch } from "react-redux";
import { sagaActions } from "../ReduxSlice/CreateSlice";
const ProgressPage = () => {
  const dispatch = useDispatch();

  const stopSession = () => {
    dispatch(sagaActions.stopSessionRecording());
  };

  return (
    <>
      <div className="ProgressHead">
        <div className="ProgressTitle">This is a Progress Page</div>
        <div className="waitText">
          <div style={{ margin: "auto", marginTop: "30px" }}>
            Please Wait while your session is downloaded.
          </div>
        </div>
        <hr />
        <ButtonsComponent label={"progress"} onClick={stopSession} />
        <div style={{ marginTop: "10px" }}>.</div>
      </div>
    </>
  );
};
export default memo(ProgressPage);
