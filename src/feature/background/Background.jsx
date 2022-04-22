import React from "react";
import exteriorDay from "../../assets/Video/Exterior+-+Day.mp4";
import eDayRainy from "../../assets/Video/Exterior+-+Rainy+Day.mp4";
import exteriorNight from "../../assets/Video/Exterior+-+Night.mp4";
import eNightRainy from "../../assets/Video/Exterior+-+Rainy+Night.mp4";
import interiorDay from "../../assets/Video/Interior+-+Sunny+Day.mp4";
import iDayRainy from "../../assets/Video/Interior+-+Rainy+Day.mp4";
import interiorNight from "../../assets/Video/Interior+-+Night.mp4";
import iNightRainy from "../../assets/Video/Interior+-+Rainy+Night.mp4";

import BackgroundVideo from "./BackgroundVideo/BackgroundVideo";

Background.propTypes = {};

const videoList = [
  {
    id: 1,
    name: "exteriorDay",
    src: exteriorDay,
  },
  {
    id: 2,
    name: "eDayRainy",
    src: eDayRainy,
  },
  {
    id: 3,
    name: "exteriorNight",
    src: exteriorNight,
  },
  {
    id: 4,
    name: "eNightRainy",
    src: eNightRainy,
  },
  {
    id: 5,
    name: "interiorDay",
    src: interiorDay,
  },
  {
    id: 6,
    name: "iDayRainy",
    src: iDayRainy,
  },
  {
    id: 7,
    name: "interiorNight",
    src: interiorNight,
  },
  {
    id: 8,
    name: "iNightRainy",
    src: iNightRainy,
  },
];

function Background() {
  return (
    <div>
      <p>12323</p>
      <BackgroundVideo videoList={videoList} />
    </div>
  );
}

export default Background;
