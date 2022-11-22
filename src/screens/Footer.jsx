import React from "react";
import "../footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="leftSideFooter">
        <p>2022 All rights reserved</p>
      </div>
      <div className="middleFutter">
        {[
          { url: "#gallery", screen: "GALLERY" },
          { url: "#roadmap", screen: "ROADMAP" },
          { url: "#team", screen: "TEAM" },
          { url: "#faq", screen: "FAQ" },
        ].map((item, key) => (
          <a href={item.url} key={key}>
            {item.screen}{" "}
          </a>
        ))}
      </div>
      <div className="rightSideFooter">
        <TwitterIcon />
      </div>
    </div>
  );
};
