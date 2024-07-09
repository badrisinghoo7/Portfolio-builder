import React from "react";
import { MdSchedule } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { SiTinyletter } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
const Sidebar = () => {
  return (
    <div style={{ background: "lightgray", height: "100vh", width: "200px" }}>
      <div style={{ textAlign: "center" }}>Logo Here</div>

      <div>
        <div>Menu</div>
        <div style={{ padding: "10%" }}>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <CiHome />
            <div style={{ marginLeft: "10px" }}>Home</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <MdSchedule />
            <div style={{ marginLeft: "10px" }}>Schedule</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <SiTinyletter />
            <div style={{ marginLeft: "10px" }}>Reccomendation</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <IoAnalyticsSharp />
            <div style={{ marginLeft: "10px" }}>Analytics</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <CgProfile />
            <div style={{ marginLeft: "10px" }}>Profile</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <MdForwardToInbox />
            <div style={{ marginLeft: "10px" }}>Inbox</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <PiTelevisionSimpleBold />
            <div style={{ marginLeft: "10px", cursor: "pointer" }}>Theme</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
