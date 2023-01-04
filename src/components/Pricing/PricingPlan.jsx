import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingPlan = ({ title, image, price, limits, mostPopular }) => {
  return (
    <div className={`box ${mostPopular ? "popular" : ""}`}>
      {mostPopular && <div className="label">Most Popular</div>}
      <h3 className="title">{title}</h3>
      <img src={image} alt="" />
      <div className="price">
        <span className="amount">${price}</span>
        <span className="time">Per Month</span>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCheck} className="icon" />
          {limits[0]}GB HDD Space
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className="icon" />
          {limits[1]} Email Addresses
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className="icon" />
          {limits[2]} Subdomains
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className="icon" />
          {limits[3]} Databases
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className="icon" />
          {limits[4]} Support
        </li>
      </ul>
      <a href="#pricing">Choose Plan</a>
    </div>
  );
};

export default PricingPlan;
