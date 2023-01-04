import "./Pricing.css";
import PricingPlan from "./PricingPlan";

import image1 from "../../assets/images/hosting-basic.png";
import image2 from "../../assets/images/hosting-advanced.png";
import image3 from "../../assets/images/hosting-professional.png";

const plans = [
  {
    title: "Basic",
    image: image1,
    price: 15,
    limits: [10, 5, 2, 4, "Basic"],
    mostPopular: false,
  },
  {
    title: "Advanced",
    image: image2,
    price: 25,
    limits: [20, 10, 5, 8, "Advanced"],
    mostPopular: true,
  },
  {
    title: "Professional",
    image: image3,
    price: 45,
    limits: [50, 20, 10, 20, "Professional"],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">Pricing Plans</h2>
      <div className="container">
        {plans.map((plan, id) => (
          <PricingPlan
            key={id}
            title={plan.title}
            image={plan.image}
            price={plan.price}
            limits={plan.limits}
            mostPopular={plan.mostPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
