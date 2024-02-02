import React from "react";
import "./Chessboard.css";
// the 2 axis of the board
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
//create 2 for loops to render the board, one loop within the other loop
// don't forget to make a new array for it
export default function chessboard() {
  let board = [];

  // on the vertical axis we want to start from the end of the array
  // here I spent a long time trying to figure out what was wrong, as per the axis image, I was rendering the "a" row, but I needed it to render it throught the "8" row. So I swapped l and i around.
  for (let l = verticalAxis.length - 1; l >= 0; l--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      board.push(
        <span key={`${horizontalAxis[i]}${verticalAxis[l]}`}>
          [{horizontalAxis[i]}
          {verticalAxis[l]}]
        </span>
      );
    }
  }
  return <div id="chessboard">{board}</div>;
}
