import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ArticleBox = ({ image }) => {
  return (
    <div className="box">
      <img src={image} alt="" />
      <div className="content">
        <h3>Test Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit
        </p>
      </div>
      <div className="info">
        <a href="#articles">Read More</a>
        <FontAwesomeIcon icon={faLongArrowAltRight} className="icon" />
      </div>
    </div>
  );
};

export default ArticleBox;
