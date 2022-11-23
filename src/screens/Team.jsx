import React from "react";
import { TeamCard } from "../components/teamCard";
import "../card.css";
import "aos/dist/aos.css";
import { teamData } from "../api/api";
export const Team = () => {
  return (
    <div className="cardContainer" id="team">
      <div>
        <h1 data-aos="zoom-in-up" className="teamTitle">
          Team
        </h1>
      </div>
      <div className="cardct-10">
        {teamData.map((item, index) => {
          return (
            <TeamCard
              picture={item.picture}
              name={item.name}
              position={item.position}
              twitLink={item.twitLink}
              key={index}
              cardIndex={index}
              length={teamData.length}
            />
          );
        })}
      </div>
    </div>
  );
};
