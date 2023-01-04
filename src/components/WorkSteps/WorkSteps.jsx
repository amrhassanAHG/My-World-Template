import "./WorkSteps.css";

import workImage from "../../assets/images/work-steps.png";
import image1 from "../../assets/images/work-steps-1.png";
import image2 from "../../assets/images/work-steps-2.png";
import image3 from "../../assets/images/work-steps-3.png";

const stepsData = [
  {
    image: image1,
    title: "Business Analysis",
  },
  {
    image: image2,
    title: "Architecture",
  },
  {
    image: image3,
    title: "Developement",
  },
];

const WorkSteps = () => {
  return (
    <div className="work-steps" id="work-steps">
      <h2 className="main-title">HOW IT WORKS ?</h2>
      <div className="container">
        <img src={workImage} alt="" className="image" />
        <div className="info">
          {stepsData.map((step, id) => (
            <div className="box" key={id}>
              <img src={step.image} alt="" />
              <div className="text">
                <h3>{step.title}</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
