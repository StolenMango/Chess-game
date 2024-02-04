import Tile from "../Tile/Tile";
import React from "react";
import "./Chessboard.css";
// the 2 axis of the board
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
//create 2 for loops to render the board, one loop within the other loop
// don't forget to make a new array for it
export default function chessboard() {
  let board = [];
  for (let l = verticalAxis.length - 1; l >= 0; l--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      //
      const number = i + l + 2; // vertical starts at 0 so we want to add 1, same for horizontal hence the +2
      board.push(<Tile image="./assets/pawn_b.png" number={number}></Tile>);
      // if (number % 2 === 0) {
      //   board.push(<Tile />);
      // } else {
      //   board.push(<Tile />);
      // }
    }
  }
  return <div id="chessboard">{board}</div>;
}
