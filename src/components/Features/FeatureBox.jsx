import React, { useState } from "react";

const FeatureBox = ({ image, title, color }) => {
  const [boxHover, setBoxHover] = useState(false);

  const styles = {
    link: {
      color: boxHover ? "white" : `${color}`,
      borderColor: `${color}`,
      backgroundImage: `linear-gradient(to right, ${color} 50%, white 50%)`,
    },
    background: {
      backgroundColor: `${color}`,
    },
  };

  return (
    <div
      className="box"
      onMouseEnter={() => setBoxHover((hover) => true)}
      onMouseLeave={() => setBoxHover((hover) => false)}
    >
      <div className="img-holder">
        <div className="before" style={styles.background} />
        <img src={image} alt="" />
      </div>
      <h2>
        {title}
        <div className="after" style={styles.background} />
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic
        veniam eligendi minima
      </p>
      <a href="#features" style={styles.link}>
        More
      </a>
    </div>
  );
};

export default FeatureBox;
