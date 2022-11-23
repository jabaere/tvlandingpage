import React, { useState, useEffect, useRef } from "react";
import "../card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TwitterIcon from "@mui/icons-material/Twitter";
export const TeamCard = ({
  picture,
  name,
  position,
  twitLink,
  cardIndex,
  length,
}) => {
  const [animation, setAnimaton] = useState();
  const indexRef = useRef();

  //set different animation to first and last elements in array
  useEffect(() => {
    if (indexRef.current) {
      if (+indexRef.current.id === 0) {
        setAnimaton("fade-left");
      }
      if (+indexRef.current.id === length - 1) {
        setAnimaton("fade-right");
      }
    }
  }, [animation]);
  return (
    <div
      className="card aos-init"
      data-aos={animation || "zoom-out"}
      id={cardIndex}
      ref={indexRef}
    >
      <div className="cardPictureContainer">
        <img src={picture} className="cardPicture" />
      </div>
      <div className="cardContent">
        <h1>{name}</h1>
        <h3>{position}</h3>
        <div className="cardTwitButton">
          <a href={twitLink}>
            <TwitterIcon style={{color:'black',marginBottom:'0.5rem'}}/>
          </a>
        </div>
      </div>
    </div>
  );
};
