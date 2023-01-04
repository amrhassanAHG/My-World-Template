import "./Features.css";
import FeatureBox from "./FeatureBox";

import image1 from "../../assets/images/features-01.jpg";
import image2 from "../../assets/images/features-02.jpg";
import image3 from "../../assets/images/features-03.jpg";

const FeaturesImages = [
  {
    image: image1,
    title: "Quality",
    color: "#f44036",
  },
  {
    image: image2,
    title: "Time",
    color: "#009688",
  },
  {
    image: image3,
    title: "Passion",
    color: "#03a9f4",
  },
];

const Features = () => {
  return (
    <div className="features" id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        {FeaturesImages.map((feature, id) => (
          <FeatureBox
            key={id}
            image={feature.image}
            title={feature.title}
            color={feature.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
