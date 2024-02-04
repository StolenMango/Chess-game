import React from "react";
import "./Tile.css";

interface Props {
  number: number;
}

export default function Tile({ number }: Props) {
  if (number % 2 === 0) {
    return <div className="dark-tile"></div>;
  } else {
    return <div className="bright-tile"></div>;
  }
}
