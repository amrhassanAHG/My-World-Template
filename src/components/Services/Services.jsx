import {
  faUserShield,
  faTools,
  faMapMarkedAlt,
  faLaptopCode,
  faPalette,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import ServiceBox from "./ServiceBox";
import "./Services.css";

const services = [
  {
    title: "Security",
    iconName: faUserShield,
  },
  {
    title: "Fixing Issues",
    iconName: faTools,
  },
  {
    title: "Location",
    iconName: faMapMarkedAlt,
  },
  {
    title: "Coding",
    iconName: faLaptopCode,
  },
  {
    title: "Design",
    iconName: faPalette,
  },
  {
    title: "Marketing",
    iconName: faBullhorn,
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="main-title">Services</h2>
      <div className="container">
        {services.map((service, id) => (
          <ServiceBox
            key={id}
            title={service.title}
            iconName={service.iconName}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
