import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./Footer.css";
import image1 from "../../assets/images/gallery-01.png";
import image2 from "../../assets/images/gallery-02.png";
import image3 from "../../assets/images/gallery-03.jpg";
import image4 from "../../assets/images/gallery-04.png";
import image5 from "../../assets/images/gallery-05.jpg";
import image6 from "../../assets/images/gallery-06.png";

const images = [image1, image2, image3, image4, image5, image6];

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="box">
          <h3>AHG</h3>
          <ul className="social">
            <li>
              <a href="#footer" className="facebook">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </a>
            </li>
            <li>
              <a href="#footer" className="twitter">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
            </li>
            <li>
              <a href="#footer" className="youtube">
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </a>
            </li>
          </ul>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <a href="#footer">
                <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                Important Link 1
              </a>
            </li>
            <li>
              <a href="#footer">
                <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                Important Link 2
              </a>
            </li>
            <li>
              <a href="#footer">
                <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                Important Link 3
              </a>
            </li>
            <li>
              <a href="#footer">
                <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                Important Link 4
              </a>
            </li>
            <li>
              <a href="#footer">
                <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                Important Link 5
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <div className="info">Egypt, El Beheira, Itay Al Barud</div>
          </div>
          <div className="line">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <div className="info">
              Business Hours: From 08:00 EST To 16:00 EST
            </div>
          </div>
          <div className="line">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
            <div className="info">
              <span>+20123456789</span>
              <span>+20115554433</span>
            </div>
          </div>
        </div>
        <div className="box footer-gallery">
          {images.map((image, id) => (
            <img key={id} src={image} alt="" />
          ))}
        </div>
      </div>
      <div className="copyright">
        Made By <span>Amr Hassan</span>
      </div>
    </footer>
  );
};

export default Footer;
