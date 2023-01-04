import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MegaMenu = ({ megaIcons, start }) => {
  return (
    <ul className="links">
      {megaIcons.map((megaIcon, id) => (
        <li key={id + start}>
          <a href={`#${megaIcon.section}`}>
            <FontAwesomeIcon icon={megaIcon.icon} className="icon" />
            {megaIcon.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MegaMenu;
