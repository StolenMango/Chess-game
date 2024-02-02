# Chess-game
A chess game made to practice react and typescript

# The Board
In regards to the board. Chess boards have 2 axis: 
One from 1-8 and one from a-h. As such I created the tiles in with these 2 axis in mind. In deciding with the colours of the tiles themselves the bottom left corner (A1) will always be black and the bottom right corner (H1) will always be white. 
THe direct opposite corners will also be a matching colour (A1 = A8 and H1 = H8). If we were to consider the a-h axis as numbers and added them up then we end up with a pattern in which even numbered tiles will be black and odd number tiles will be white. This is the logic I used to render the board.

![Coordinate-Plane-Chess-Board](https://github.com/StolenMango/Chess-game/assets/127877058/e66c5d73-9147-4930-ae73-2e21edbf9def)
