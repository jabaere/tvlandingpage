import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
export const Roadmap = () => {
  return (
    <div
      className="roadmapContainer"
      data-aos="zoom-in-up"
      id="roadmap"
    >
      <h1
        className="aos-animate galleryTitle"
        data-aos="zoom-in-up"
        id="roadmap"
      >
        Roadmap
      </h1>

      <div style={{ marginTop: "5rem", position: "relative" }}>
        <div className="wall"></div>
        <div className="missions">
          <div
            className="mission"
            data-aos="fade-right"
            data-aos-duration="1600"
          >
            <div className="missionContent">
              <h1 className="missionTitle">Twitter Launch</h1>
              <p>Launching the Tvkill’s tv into the twitter space</p>
            </div>
          </div>
          <div className="hidden"></div>
          <div className="hidden"></div>
          <div
            className="mission"
            data-aos="fade-left"
            data-aos-duration="1700"
          >
            <div className="missionContent">
              <h1 className="missionTitle">Community building</h1>
              <p>
                Building a strong organic Tvkills community in the CNFT Space.
              </p>
            </div>
          </div>

          <div
            className="mission"
            data-aos="fade-right"
            data-aos-duration="1800"
          >
            <div className="missionContent">
              <h1 className="missionTitle">Showlist</h1>
              <p>
                Our very own version of whitelist which is given to the
                supporters and for the giveaway winners in different activities.
              </p>
            </div>
          </div>
          <div className="hidden"></div>
          <div className="hidden"></div>
          <div
            className="mission"
            data-aos="fade-left"
            data-aos-duration="1900"
          >
            <div className="missionContent">
              <h1 className="missionTitle">Cultpass</h1>
              <p>
                Cultpass is our way of Honouring the hardcore supporters by
                inviting them to our TV CULT. Holding Cultpass gives you special
                benefits and exclusive access.
              </p>
            </div>
          </div>
          <div
            className="mission"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="missionContent">
              <h1 className="missionTitle">Website</h1>
              <p>Revealing the official website of TVKills.</p>
            </div>
          </div>
          <div className="hidden"></div>
          <div className="hidden"></div>
          <div
            className="mission"
            data-aos="fade-left"
            data-aos-duration="2100"
          >
            <div className="missionContent">
              <h1 className="missionTitle">Discord launch</h1>
              <p>The official launch of TVKills discord server.</p>
            </div>
          </div>
          <div className="hidden"></div>
          <div className="hidden"></div>
          <div
            className="mission"
            data-aos="fade-right"
            data-aos-duration="2200"
          >
            <div className="missionContent">
              <h1 className="missionTitle">TVKills Mint</h1>
              <p>Big day the official minting of TVKills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
