import React from "react";
import { CgProfile } from "react-icons/cg";
import ColorPicker from "./ColorPicker";
import Profile from "./Profile";

const ThemePicker = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",
        }}
      >
        <h1>Themes</h1>
        <div>
          <div
            style={{
              width: "100px",
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h3>XYZ</h3>
            <CgProfile />
          </div>
        </div>
      </div>
      <div
        style={{
          background: "lightgray",
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "20px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>Apply a skin to your profile</h1>
        <div>
          <button
            style={{
              marginRight: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "10px",
            }}
          >
            +Custom
          </button>
          <button
            style={{
              marginRight: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "10px",
              background: "black",
              color: "white",
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <ColorPicker />
        <Profile />
      </div>
    </div>
  );
};

export default ThemePicker;
