import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
  StackedCarouselSlideProps,
} from "react-stacked-center-carousel";

import Fab from "@mui/material/Fab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../Carusel.css";
import "aos/dist/aos.css";
import { galleryData } from "../api/api";

const TwitchExample = () => {
  const ref = React.useRef<StackedCarousel>();
  return (
    <div className="twitch " id="galery">
      <h1
        className="galleryTitle text-center text-4xl font-newton aos-init"
        data-aos="zoom-in-up"
      >
        Gallery
      </h1>
      <div
        style={{ width: "100%", position: "relative", display: "flex" }}
        className="aos-init"
        data-aos="zoom-out"
      >
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={350}
                carouselWidth={width}
                data={galleryData}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
        <Fab
          className="twitch-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="twitch-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default TwitchExample;

export const Slide = React.memo(function (props: StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
  const [loadDelay, setLoadDelay] = React.useState<any>();
  const [removeDelay, setRemoveDelay] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay);
      setLoadDelay(setTimeout(() => setLoaded(true), 1000));
    } else {
      clearTimeout(loadDelay);
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000));
    }
  }, [isCenterSlide]);

  React.useEffect(() => () => {
    clearTimeout(removeDelay);
    clearTimeout(loadDelay);
  });

  const { cover } = data[dataIndex];

  return (
    <div className="twitch-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide && loaded ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
        <img className="cover-image fill" src={cover} />
      </div>
      {loaded && <img className="cover-image fill" src={cover} />}
    </div>
  );
});
