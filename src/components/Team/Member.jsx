import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Member = ({ image, name }) => {
  return (
    <div className="box">
      <div className="data">
        <img src={image} alt="" />
        <div className="social">
          <a href="#team" title="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="#team" title="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="#team" title="Linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
          <a href="#team" title="Youtube">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
        </div>
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>Simple Short Description</p>
      </div>
    </div>
  );
};

export default Member;
