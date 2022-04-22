import React from "react";
import "./BackgroundVideo.scss";
import { PropTypes } from "prop-types";

BackgroundVideo.propTypes = {};

function BackgroundVideo({ videoList }) {
  return (
    <div>
      <div className="background">
        <div className="background-video">
          <video loop muted autoPlay className="video">
            <source
              src={videoList[0].src}
              className={videoList[0].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[0].src}
              className={videoList[0].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[1].src}
              className={videoList[1].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[2].src}
              className={videoList[2].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[3].src}
              className={videoList[3].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[4].src}
              className={videoList[4].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[5].src}
              className={videoList[5].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[6].src}
              className={videoList[6].name}
              type="video/mp4"
            />
          </video>

          <video loop muted autoPlay className="video">
            <source
              src={videoList[7].src}
              className={videoList[7].name}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default BackgroundVideo;
