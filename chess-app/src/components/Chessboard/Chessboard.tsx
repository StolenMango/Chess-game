import Tile from "../Tile/Tile";
import React from "react";
import { useRef, useState } from "react";
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

pieces.push({ image: "assets/rook_b.png", x: 0, y: 7 });
pieces.push({ image: "assets/rook_b.png", x: 7, y: 7 });
pieces.push({ image: "assets/knight_b.png", x: 1, y: 7 });
pieces.push({ image: "assets/knight_b.png", x: 6, y: 7 });
pieces.push({ image: "assets/bishop_b.png", x: 2, y: 7 });
pieces.push({ image: "assets/bishop_b.png", x: 5, y: 7 });
pieces.push({ image: "assets/queen_b.png", x: 4, y: 7 });
pieces.push({ image: "assets/king_b.png", x: 3, y: 7 });

pieces.push({ image: "assets/rook_w.png", x: 0, y: 0 });
pieces.push({ image: "assets/rook_w.png", x: 7, y: 0 });
pieces.push({ image: "assets/knight_w.png", x: 1, y: 0 });
pieces.push({ image: "assets/knight_w.png", x: 6, y: 0 });
pieces.push({ image: "assets/bishop_w.png", x: 2, y: 0 });
pieces.push({ image: "assets/bishop_w.png", x: 5, y: 0 });
pieces.push({ image: "assets/queen_w.png", x: 4, y: 0 });
pieces.push({ image: "assets/king_w.png", x: 3, y: 0 });
pieces.push({ image: "assets/pawn_b.png", x: 0, y: 6 });

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/pawn_b.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/pawn_w.png", x: i, y: 1 });
}

//create 2 for loops to render the board, one loop within the other loop
// don't forget to make a new array for it
export default function Chessboard() {
  const chessboardRef = useRef(null);

  // save the grabbed piece in a variable to fix pieces moving on hover
  let activePiece: HTMLElement | null = null;

  function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("chess-piece")) {
      console.log(element);

      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }

  function movePiece(e: React.MouseEvent) {
    // the image of the piece is not moving with the cursor so at some point we will be targeting the tile instead
    // of the piece. I will try to fix using the grab piece logic.
    if (activePiece) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;
    }
  }

  function dropPiece(e: React.MouseEvent) {
    // check if active piece, otherwise you don't want this to do anything
    if (activePiece) {
      activePiece = null;
    }
  }

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
      board.push(<Tile key={`${l},${i}`} image={image} number={number}></Tile>);
    }
  }
  return (
    <div
      id="chessboard"
      ref={chessboardRef}
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
    >
      {board}
    </div>
  );
}
