import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

import "./Videos.css";

import image1 from "../../assets/images/video-preview.jpg";
import image2 from "../../assets/images/team-06.png";
import image3 from "../../assets/images/cat-03.jpg";
import image4 from "../../assets/images/cat-04.jpg";
import image5 from "../../assets/images/cat-06.jpg";
import image6 from "../../assets/images/cat-02.jpg";
import image7 from "../../assets/images/cat-01.jpg";

const videos = [
  {
    name: "How To Create Sub Domain",
    duration: "05:18",
    poster: image1,
  },
  {
    name: "Playing With The DNS",
    duration: "03:18",
    poster: image2,
  },
  {
    name: "Everything About The Virtual Hosts",
    duration: "05:25",
    poster: image3,
  },
  {
    name: "How To Monitor Your Website",
    duration: "04:16",
    poster: image4,
  },
  {
    name: "Uncharted Beating The Last Boss",
    duration: "07:48",
    poster: image5,
  },
  {
    name: "Ys Oath In Felghana Overview",
    duration: "03:12",
    poster: image6,
  },
  {
    name: "Ys Series All Games Ending",
    duration: "08:10",
    poster: image7,
  },
];

const Videos = () => {
  const [curVideo, setCurVideo] = useState(videos[0]);

  return (
    <div className="videos" id="videos">
      <h2 className="main-title">Top Videos</h2>
      <div className="container">
        <div className="holder">
          <div className="list">
            <div className="top">
              Top Videos
              <FontAwesomeIcon icon={faRandom} className="icon" />
            </div>
            <ul>
              {videos.map((video, id) => (
                <li
                  key={id}
                  onClick={(e) => setCurVideo((oldVideo) => video)}
                  className={curVideo.name === video.name ? "active" : ""}
                >
                  {video.name}
                  <span>{video.duration}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="preview">
            <img src={curVideo.poster} alt="" />
            <div className="info">{curVideo.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
