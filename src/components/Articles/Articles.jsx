import "./Articles.css";
import ArticleBox from "./ArticleBox";
import cat1 from "../../assets/images/cat-01.jpg";
import cat2 from "../../assets/images/cat-02.jpg";
import cat3 from "../../assets/images/cat-03.jpg";
import cat4 from "../../assets/images/cat-04.jpg";
import cat5 from "../../assets/images/cat-05.jpg";
import cat6 from "../../assets/images/cat-06.jpg";
import cat7 from "../../assets/images/cat-07.jpg";
import cat8 from "../../assets/images/cat-08.jpg";

const images = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];

const Articles = () => {
  return (
    <div className="articles" id="articles">
      <h2 className="main-title">Articles</h2>
      <div className="container">
        {images.map((img, id) => (
          <ArticleBox key={id} image={img} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
