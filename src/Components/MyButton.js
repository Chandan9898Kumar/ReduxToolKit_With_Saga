import React, { memo } from "react";
import { useSelector } from "react-redux";
import "../App.css";

const ButtonsComponent = ({ onClick, label, ...prop }) => {
  const { landingPage, ProgressPages, downloadPage, ...props } = useSelector(
    (state) => state.ValidationData
  );

  return (
    <div className="button">
      <div>
        App name : {props.appName}
        <br />
        Request Value {props.requestValue}
        <br />
        Id : {props.id}
        <br />
        title: {props.title}
        <br />
        Client Id : {props.clientIp}
        <br />
        Selected OPtions :{props.selectedOption}
      </div>
      {!downloadPage && (
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <button
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "orange",
              color: "white",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
            }}
            type="button"
            onClick={onClick}
          >
            {label === "login"
              ? "Start recording"
              : label === "progress"
              ? "Stop recording"
              : ""}
          </button>
        </div>
      )}
    </div>
  );
};
export default memo(ButtonsComponent);
