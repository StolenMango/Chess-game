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
        {image && <img src={image} alt="chess piece"></img>}
      </div>
    );
  } else {
    return (
      <div className="axis-tile bright-tile">
        {image && <img src={image} alt="chess piece"></img>}
      </div>
    );
  }
}
