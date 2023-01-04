import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceBox = ({ title, iconName }) => {
  return (
    <div className="box">
      <FontAwesomeIcon icon={iconName} className="icon" />
      <h3>{title}</h3>
      <div className="info">
        <a href="#services">Details</a>
      </div>
    </div>
  );
};

export default ServiceBox;
