import React from "react";
import "./Tile.css";

interface Props {
  number: number;
}

export default function Tile({ number }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="axis-tile dark-tile">
        <img src="assets/pawn_b.png" alt="pawn"></img>
      </div>
    );
  } else {
    return <div className="axis-tile bright-tile"></div>;
  }
}
