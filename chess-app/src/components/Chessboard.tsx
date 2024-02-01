import React from "react";
import "./Chessboard.css";
// the 2 axis of the board
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
//create 2 for loops to render the board, one loop within the other loop
// don't forget to make a new array for it
export default function chessboard() {
  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let l = 0; l < verticalAxis.length; l++) {
      board.push(
        <span key={`${horizontalAxis[i]}${verticalAxis[l]}`}>
          {horizontalAxis[i]} {verticalAxis[l]}
        </span>
      );
    }
  }
  return <div id="chessboard">{board}</div>;
}
