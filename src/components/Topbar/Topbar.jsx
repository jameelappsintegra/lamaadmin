import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span>Logo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <div className="topIconBag">2</div>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <div className="topIconBag">2</div>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
