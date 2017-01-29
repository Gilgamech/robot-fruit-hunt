//board 267487
function new_game() {
}

function make_move() {
	var board = get_board();
	var TargetX = 0;
	var TargetY = 0;
	var mywidth = get_my_x();
	var myheight = get_my_y();
	trace("Current location: " + [mywidth] + ", " + [myheight]);

	BoardHeight = (HEIGHT - 1);
	BoardWidth = (WIDTH - 1);
   // we found an item! take it!
   if (board[mywidth][myheight] > 0) {
		trace("Taking item at: " + [mywidth] + ", " + [myheight]);
		return TAKE;
   };

//BoardHeight // (AKA y)
//BoardWidth // (AKA x)
// Look around us for more items to take.
// Direct looking.
for (HeightY = 0; HeightY <= BoardHeight; HeightY++) { 
		var mwpY = myheight + HeightY;
		var mwmY = myheight - HeightY;
	for (WidthX = 0; WidthX <= BoardWidth; WidthX++) { 
			var mwpX = mywidth + WidthX;
			var mwmX = mywidth - WidthX;
			
			if ( mwpX > 0 && mwpX < BoardWidth 
			&& mwpY > 0 && mwpY < BoardHeight ){ 
				trace("Scanning location - mwpX: " + mwpX + ", mwpY: " + mwpY);
				if (board[mwpX][mwpY] > 0) {
				//	TargetX = mwpX;
				//	TargetY = mwpY;
					if (WidthX > HeightY) {
					trace("Item " + board[mwpX][mwpY] + " located at " + mwpX + ", " + mwpY + " - Northeast - Moving East");
						return EAST;
					} else {
					trace("Item " + board[mwpX][mwpY] + " located at " + mwpX + ", " + mwpY + " - Northeast - Moving North");
						return NORTH;
					}; 
			   }; //end if y+y
			};
			if ( mwmX > 0 && mwmX < BoardWidth 
			&& mwpY > 0 && mwpY < BoardHeight ){ 
				trace("Scanning location - mwmX: " + mwmX + ", mwpY: " + mwpY);
				if (board[mwmX][mwpY] > 0) { 
					if (WidthX > HeightY) {
					trace("Item " + board[mwmX][mwpY] + " located at " + mwmX + ", " + mwpY+ " - Northwest - Moving West");
						return WEST;
					} else {
					trace("Item " + board[mwmX][mwpY] + " located at " + mwmX + ", " + mwpY+ " - Northwest - Moving North");
						return NORTH;
					}; 
			   }; //end if y- HeightY
			};
			if ( mwpX > 0 && mwpX < BoardWidth 
			&& mwmY > 0 && mwmY < BoardHeight ){ 
				trace("Scanning location - mwpX: "  + mwpX + ", mwmY: " + mwmY);
				if (board[mwpX][mwmY] > 0) {
				//	TargetX = mwpX;
				//	TargetY = mwpY;
					if (WidthX > HeightY) {
						trace("Item " + board[mwpX][mwmY] + " located at " + mwpX + ", " + mwmY + " - Southeast - Moving East");
						return EAST;
					} else {
						trace("Item " + board[mwpX][mwmY] + " located at " + mwpX + ", " + mwmY + " - Southeast - Moving South");
						return SOUTH;
					}; 
			   }; //end if y+y
			};
			if ( mwmX > 0 && mwmX < BoardWidth 
			&& mwmY > 0 && mwmY < BoardHeight ){ 
				trace("Scanning location - mwmX: " + mwmX + ", mwmY: " + mwmY);
				if (board[mwmX][mwmY] > 0) { 
					if (WidthX > HeightY) {
						trace("Item " + board[mwmX][mwmY] + " located at " + mwmX + ", " + mwmY+ " - Southwest - Moving West");
						return WEST;
					} else {
						trace("Item " + board[mwmX][mwmY] + " located at " + mwmX + ", " + mwmY+ " - Southwest - Moving South");
						return SOUTH;
					}; 
			   }; //end if y- HeightY
			};
	}; //end for BoardWidth
trace("No fruit along row " + myheight);
}; //end for BoardHeight
 trace("No fruit along column " + mywidth);
	
	//Otherwise, move randomly.
   var rand = (Math.random() * 4);
   if (rand < 1) { 
		trace("Rand North");
	   return NORTH;
   }; //end if rand 
   if (rand < 2) {
		trace("Rand South");
	   return SOUTH;
   }; //end if rand 
	if (rand < 3) { 
		trace("Rand East");
	   return EAST;
   }; //end if rand 
	if (rand < 4) {
		trace("Rand West");
		return WEST;
   }; //end if rand 

	trace("Default");
	trace(rand);

	return PASS;
} //end make_move 

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}


// BoardWidth = <width of game board>
// BoardHeight = <height of game board>

// Returns the current board.
// It's an array of arrays, so 
//  board = get_board();
//  field = board[x,y];
// can be used to get a position.
// function get_board()

// Current position of your bot.
// function get_my_x()
// function get_my_y()

// Current position of your opponent.
// function get_opponent_x()
// function get_opponent_y()

// EAST = <constant used to represent going right>
// NORTH = <constant used to represent going up>
// WEST = <constant used to represent going left>
// SOUTH = <constant used to represent going south>
// TAKE = <constant used to represent taking a piece of fruit if it exists on the cell>
// PASS = <constant used to represent passing the turn>

// (Deprecated) For a given field (board[x,y]), if there's a fruit at
// that position, return the index of that fruit (starting with 1),
// or false if there's no fruit there. This is a convenience
// function that checks whether field>0.
// function has_item(field)

// Return the number of different fruit types. Each fruit type might
// be on the board multiple times (use get_total_item_count(type))
// to query how often). Your goal is to have the most fruit as
// many categories as possible.
// function get_number_of_item_types()

// Returns the number of fruits you or your opponent have.
// E.g. if get_my_item_count(1) returns 3, you have 3 pieces
// of the fruit 1.
// function get_my_item_count(type)
// function get_opponent_item_count(type)

// Returns the total number of fruits available for a given
// category. E.g. if get_total_item_count(2) returns 5,
// a total of 5 fruits of type 2 exists on the board and
// the players inventories.
// function get_total_item_count(type)

// Print out a line of text, for debugging. This text will
// be visible to the author of the bot in the game replays
// and in the compile logs.
// Notice: Unlike in browsers, this function only works for strings.  
// (Note that strings longer than 1024 characters won't be displayed,
//  also the total limit of log output you can generate is 16k)
// trace(string)

// Implement this function, and return either
// NORTH, EAST, SOUTH, WEST, or TAKE.
// function make_move()

// Optionally implement this function. It will be called
// at the start of the game.
// function new_game()