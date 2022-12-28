import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import "./Landing.css";
import landingImage from "../../assets/images/landing-image.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>Welcome, To My World</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        <div className="image">
          <img src={landingImage} alt="" />
        </div>
      </div>
      <a href="#articles" className="go-down">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="icon" />
      </a>
    </div>
  );
};

export default Landing;
