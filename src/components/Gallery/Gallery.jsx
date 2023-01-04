import "./Gallery.css";

import gallery1 from "../../assets/images/gallery-01.png";
import gallery2 from "../../assets/images/gallery-02.png";
import gallery3 from "../../assets/images/gallery-03.jpg";
import gallery4 from "../../assets/images/gallery-04.png";
import gallery5 from "../../assets/images/gallery-05.jpg";
import gallery6 from "../../assets/images/gallery-06.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="spikes"></div>
      <h2 className="main-title">Gallery</h2>
      <div className="container">
        {galleryImages.map((image, id) => (
          <div className="box" key={id}>
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
