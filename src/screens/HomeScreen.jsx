import Landing from "../components/Landing/Landing.jsx";
import Articles from "../components/Articles/Articles.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Features from "../components/Features/Features.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Team from "../components/Team/Team.jsx";
import Services from "../components/Services/Services.jsx";
import Skills from "../components/Skills/Skills.jsx";
import WorkSteps from "../components/WorkSteps/WorkSteps.jsx";
import Events from "../components/Events/Events.jsx";
import Pricing from "../components/Pricing/Pricing.jsx";
import Videos from "../components/Videos/Videos.jsx";
import Statistics from "../components/Statistics/Statistics.jsx";
import Discount from "../components/Discount/Discount.jsx";

const HomeScreen = () => {
  return (
    <main>
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <Skills />
      <WorkSteps />
      <Events />
      <Pricing />
      <Videos />
      <Statistics />
      <Discount />
    </main>
  );
};

export default HomeScreen;
