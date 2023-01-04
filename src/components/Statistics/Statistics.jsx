import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { faCode, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

import "./Statistics.css";

const stats = [
  {
    icon: faUser,
    number: 150,
    text: "Clients",
  },
  {
    icon: faCode,
    number: 135,
    text: "Projects",
  },
  {
    icon: faGlobeAsia,
    number: 50,
    text: "Countries",
  },
  {
    icon: faMoneyBillAlt,
    number: 500,
    text: "Money",
  },
];

const Statistics = () => {
  return (
    <div className="stats" id="stats">
      <h2>Our Awesome Stats</h2>
      <div className="container">
        {stats.map((stat, id) => (
          <div className="box" key={id}>
            <FontAwesomeIcon icon={stat.icon} className="icon" />
            <span className="number">{stat.number}</span>
            <span className="text">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
