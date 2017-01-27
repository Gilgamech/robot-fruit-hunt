//board 267487
function new_game() {
}

function make_move() {
   var board = get_board();
	console.log("Current location: " + [get_my_x()] + ", " + [get_my_y()]);

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0) {
		console.log("Taking item at: " + [get_my_x()] + ", " + [get_my_y()]);
		return TAKE;
   };

//board.length // (Width AKA x)
//board[1].length // (Heigh AKA y)
for (j = 0; j < board[1].length; j++) { 
	for (i = 0; i < board.length; i++) { 
	   // Look around us for more items to take.
		if ([get_my_y() + j] < board[1].length) {
			if (board[get_my_x()][get_my_y() + j] > 0) {
				console.log("Item located at " + [get_my_x()] + ", " + [get_my_y()+ j]);
				return SOUTH;
		   }; //end if y+j
	   }; //end if y+j > board[1].length
		if ([get_my_y() - j] > 0) {
			if (board[get_my_x()][get_my_y() - j] > 0) { 
				console.log("Item located at " + [get_my_x()] + ", " + [get_my_y()] -j);
				return NORTH;
		   }; //end if y- j
	   }; //end if y-j > board[1].length
		if ([get_my_x() + i] < board.length) {
			if (board[get_my_x() + i][get_my_y()] > 0) {
				console.log("Item located at " + [get_my_x() + i] + ", " + [get_my_y()]);
				return EAST;
		   }; //end if x+i
	   }; //end if x+i > board.length
		if ([get_my_x() - i] > 0) {
			if (board[get_my_x() - i][get_my_y()] > 0) {
				console.log("Item located at " + [get_my_x() - i] + ", " + [get_my_y()]);
				return WEST;
		   }; //end if x-i
	   }; //end if x-i > board.length
	}; //end for board.length
}; //end for board[1].length

	
	//Otherwise, move randomly.
   var rand = (Math.random() * 4);
   if (rand < 1) { 
		console.log("Rand North");
	   return NORTH;
   };
   if (rand < 2) {
		console.log("Rand South");
	   return SOUTH;
   };	
	if (rand < 3) { 
		console.log("Rand East");
	   return EAST;
   };	
	if (rand < 4) {
		console.log("Rand West");
		return WEST;
   };	
   // }; //end if rand

	console.log("Default");
	console.log(rand);

	return PASS;
}

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}


// WIDTH = <width of game board>
// HEIGHT = <height of game board>

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
// function trace(string)

// Implement this function, and return either
// NORTH, EAST, SOUTH, WEST, or TAKE.
// function make_move()

// Optionally implement this function. It will be called
// at the start of the game.
// function new_game()