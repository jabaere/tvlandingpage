import React from "react";
import headGifUrl from "../assets/HEAD-GIF.gif";
import TwitterIcon from "@mui/icons-material/Twitter";
export const FirstScreen = () => {
  return (
    <div className="firstScreenContainer">
      <div className="firstScreenLeftSide">
        <h1>TV KILLS</h1>
        <p className="fisstScreenYeld">
          Earth has been taken over by secret invaders who control the media and
          corporations.
          <br />
          Humanity's only connection to their past lives comes from extreme
          escapism.
        </p>
        <div className="button">Twitter<span style={{padding:'0.3rem'}}><TwitterIcon/></span></div>
      </div>
      <div className="headerImageContainer">
        <img className="headerGif" src={headGifUrl} />
      </div>
    </div>
  );
};
