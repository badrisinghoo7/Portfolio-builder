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
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ marginLeft: "30px" }}>Themes</h1>
        <div>
          <div
            style={{
              width: "150px",
              marginBottom: "20px",
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "10px",
              background: "lightgray",
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
          justifyContent: "space-between",
          marginLeft: "20px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "20px", marginLeft: "100px" }}>
          Apply a skin to your profile
        </h1>
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
