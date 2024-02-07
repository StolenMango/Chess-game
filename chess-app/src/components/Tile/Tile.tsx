import React from "react";
import "./Tile.css";

interface Props {
  image?: string;
  number: number;
}

export default function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="axis-tile dark-tile">
        <div
          className="chess-piece"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        {/* {image && <img src={image} alt="chess piece"></img>} */}
      </div>
    );
  } else {
    return (
      <div className="axis-tile bright-tile">
        <div
          className="chess-piece"
          style={{ backgroundImage: `url(${image})` }} //this whole line is to fix being able to drag a picture into the browser
        ></div>
        {/* {image && <img src={image} alt="chess piece"></img>} */}
      </div>
    );
  }
}
