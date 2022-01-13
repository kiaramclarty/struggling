import React from "react";
import "../App.css";

function CardImage(props) {
  const background = props.island.image;
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <img src={props.island.image} alt="island" />
    </div>
  );
}
//props.island.image
export default CardImage;
