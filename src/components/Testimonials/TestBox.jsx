import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as solidStar,
  faStarHalfStroke as halfStar,
} from "@fortawesome/free-solid-svg-icons";

const TestBox = ({ image, name, rate }) => {
  return (
    <div className="box">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <span className="title">Full Stack Developer</span>
      <div className="rate">
        {[...Array(Math.floor(rate)).keys()].map((id) => (
          <FontAwesomeIcon key={id} icon={solidStar} className="icon filled" />
        ))}
        {rate - Math.floor(rate) > 0 && (
          <FontAwesomeIcon icon={halfStar} className="icon filled" />
        )}
        {[...Array(5 - Math.ceil(rate)).keys()].map((id) => (
          <FontAwesomeIcon key={id} icon={regularStar} className="icon" />
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
        reiciendis voluptatum, amet est natus quaerat ducimus
      </p>
    </div>
  );
};

export default TestBox;
