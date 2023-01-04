import "./Testimonials.css";
import TestBox from "./TestBox";

import avatar1 from "../../assets/images/avatar-01.png";
import avatar2 from "../../assets/images/avatar-02.png";
import avatar3 from "../../assets/images/avatar-03.png";
import avatar4 from "../../assets/images/avatar-04.png";
import avatar5 from "../../assets/images/avatar-05.png";
import avatar6 from "../../assets/images/avatar-06.png";

const tests = [
  {
    image: avatar1,
    name: "Mohamed Farag",
    rate: 4.0,
  },
  {
    image: avatar2,
    name: "Mohamed Ibrahim",
    rate: 4.4,
  },
  {
    image: avatar3,
    name: "Shady Nabil",
    rate: 4.0,
  },
  {
    image: avatar4,
    name: "Amr Hendawy",
    rate: 5.0,
  },
  {
    image: avatar5,
    name: "Sherief Ashraf",
    rate: 3.5,
  },
  {
    image: avatar6,
    name: "Osama Mohamed",
    rate: 3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h2 className="main-title">Testimonials</h2>
      <div className="container">
        {tests.map((test, id) => (
          <TestBox
            key={id}
            image={test.image}
            name={test.name}
            rate={test.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
