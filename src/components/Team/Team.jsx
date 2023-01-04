import Member from "./Member";
import "./Team.css";

import image1 from "../../assets/images/team-01.jpg";
import image2 from "../../assets/images/team-02.jpg";
import image3 from "../../assets/images/team-03.jpg";
import image4 from "../../assets/images/team-04.jpg";
import image5 from "../../assets/images/team-05.png";
import image6 from "../../assets/images/team-06.png";
import image7 from "../../assets/images/team-07.jpg";
import image8 from "../../assets/images/team-08.jpg";

const teamMembers = [
  {
    image: image1,
    name: "Name",
  },
  {
    image: image2,
    name: "Name",
  },
  {
    image: image3,
    name: "Name",
  },
  {
    image: image4,
    name: "Name",
  },
  {
    image: image5,
    name: "Name",
  },
  {
    image: image6,
    name: "Name",
  },
  {
    image: image7,
    name: "Name",
  },
  {
    image: image8,
    name: "Name",
  },
];

const Team = () => {
  return (
    <div className="team" id="team">
      <h2 className="main-title">Team Members</h2>
      <div className="container">
        {teamMembers.map((member, id) => (
          <Member key={id} image={member.image} name={member.name} />
        ))}
      </div>
    </div>
  );
};

export default Team;
