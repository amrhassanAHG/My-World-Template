import {
  faComments,
  faUser,
  faBuilding,
  faCheckCircle,
  faClipboard,
  faCalendar,
  faPlayCircle,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import { faServer, faPercent } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import MegaMenu from "./MegaMenu";
import megaMenuImage from "../../assets/images/megamenu.png";

const megaIcons1 = [
  {
    name: "Testimonials",
    section: "testimonials",
    icon: faComments,
  },
  {
    name: "Team Members",
    section: "team",
    icon: faUser,
  },
  {
    name: "Services",
    section: "services",
    icon: faBuilding,
  },
  {
    name: "Our Skills",
    section: "our-skills",
    icon: faCheckCircle,
  },
  {
    name: "How It Works",
    section: "work-steps",
    icon: faClipboard,
  },
];
const megaIcons2 = [
  {
    name: "Events",
    section: "events",
    icon: faCalendar,
  },
  {
    name: "Pricing Plans",
    section: "pricing",
    icon: faServer,
  },
  {
    name: "Top Videos",
    section: "video",
    icon: faPlayCircle,
  },
  {
    name: "Stats",
    section: "stats",
    icon: faChartBar,
  },
  {
    name: "Request A Discount",
    section: "discount",
    icon: faPercent,
  },
];

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <a href="#" className="logo">
          Amr<span>Hassan</span>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">Other Links</a>
              <div className="mega-menu">
                <div className="image">
                  <img src={megaMenuImage} alt="" />
                </div>
                <MegaMenu megaIcons={megaIcons1} start={0} />
                <MegaMenu megaIcons={megaIcons2} start={5} />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
