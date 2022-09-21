import React from "react";
import "../styles/VideoCard.css";

const playButton = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M14.9 39.95V7.75l25.25 16.1Z" />
  </svg>
);
const VideoCard = ({name, image, url}) => {
  return (
    <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
      <a href={url}>
        {playButton}
      </a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
