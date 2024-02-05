import Tile from "../Tile/Tile";
import React from "react";
import "./Chessboard.css";
// the 2 axis of the board
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

pieces.push({ image: "assets/pawn_b.png", x: 0, y: 6 });
//create 2 for loops to render the board, one loop within the other loop
// don't forget to make a new array for it
export default function chessboard() {
  let board = [];
  for (let l = verticalAxis.length - 1; l >= 0; l--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + l + 2; // vertical starts at 0 so we want to add 1, same for horizontal hence the +2
      let image = undefined;
      //We'll need to check if there is a piece on any given tile.
      pieces.forEach((p) => {
        if (p.x === i && p.y === l) {
          image = p.image;
        }
      }); // look throuygh each element without using a variable to directly access a piece element.
      board.push(<Tile image={image} number={number}></Tile>);
    }
  }
  return <div id="chessboard">{board}</div>;
}
