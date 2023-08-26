import React, { memo } from "react";
import ButtonsComponent from "./MyButton";
const DownLoadPage = () => {
  const handleRemove = () => {
    const result = window.confirm("Are you sure you want to remove your file?");
    if (result) {
      window.location.reload();
    }
  };
  return (
    <>
      <div className="downloadHead">
        <div className="downLoadTitle">This is a DownLoad Page</div>

        <div className="downloadButtons">
          <div className="downloadFile">
            <button
              style={{
                width: "150px",
                height: "35px",
                backgroundColor: "Green",
                color: "white",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                letterSpacing: "2px",
              }}
              onClick={() => {
                alert(
                  "Your File has been downloaded and now you can remove it."
                );
              }}
            >
              DownLoad
            </button>
          </div>

          <div className="removeFile">
            <button
              style={{
                width: "150px",
                height: "35px",
                backgroundColor: "Red",
                color: "white",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                letterSpacing: "2px",
              }}
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
        <div
          style={{
            display: "block",
            color: "brown",
            margin: "auto",
            fontSize: "20px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Now you can download and remove your file .
        </div>
        <hr />
        <ButtonsComponent />
      </div>
    </>
  );
};
export default memo(DownLoadPage);
