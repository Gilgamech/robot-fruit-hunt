// C:\Dropbox\repos\www\robot-fruit-hunt\mybot.js Build: 1 2017-01-29T11:39:45     






// 1 : 56 : if _returnval <> 0_   return returnval _; // end if returnval


//board 267487
//  # --> X
//  | 0,0 1,0 2,0
//  v 0,1 1,1 2,1 
//  Y 0,2 1,2 2,2
// 
function new_game() {
}

function make_move() {
	var board = get_board();
	var TargetX = 0;
	var TargetY = 0;
	var mywidth = get_my_x();
	var myheight = get_my_y();
	var widthdir = WEST;
	var heightdir = NORTH;
	var BoardHeight = (HEIGHT - 1);
	var BoardWidth = (WIDTH - 1);

	trace("Current location: " + mywidth + ", " + myheight);
	trace("Board size: " + BoardWidth + ", " + BoardHeight);

   // we found an item! take it!
   if (board[mywidth][myheight] > 0) {
		trace("Taking item " + board[mywidth][myheight] + " at: " + mywidth + ", " + myheight);
		return TAKE;
   };

//BoardHeight // (AKA y)
//BoardWidth // (AKA x)
// Look around us for more items to take.
// Direct looking.
for (HeightY = 0; HeightY <= BoardHeight; HeightY++) { 
		var mhpY = myheight + HeightY;
		var mhmY = myheight - HeightY;
	for (WidthX = 0; WidthX <= BoardWidth; WidthX++) { 
		var mwpX = mywidth + WidthX;
		var mwmX = mywidth - WidthX;
			
			TargetX = mwpX;
			TargetY = mhpY;
			widthdir = EAST;
			heightdir = SOUTH;
			if ( TargetX >= 0 && TargetX <= BoardWidth 
			&& TargetY >= 0 && TargetY <= BoardHeight ){ 
				trace("Scanning location - X: " + TargetX + ", Y: " + TargetY);
				var fruittype = board[TargetX][TargetY];
				if (fruittype > 0) {
					//If the location has a piece of fruit, and the Width increment (distance there) is higher, go sideways, otherwise the Height increment is higher so go vertical.
					if (WidthX > HeightY) {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " - Moving " + widthdir);
						
						if (get_my_item_count(fruittype) !== undefined) {
							get_my_item_count(fruittype)
						}; //end if get_my_item_count
						
						return widthdir;
					} else {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " Moving " + heightdir);
						return heightdir;
					}; //end if WidthX
			   }; //end if fruittype
			}; // end if TargetX
			
			TargetX = mwmX;
			TargetY = mhpY;
			widthdir = WEST;
			heightdir = SOUTH;
			if ( TargetX >= 0 && TargetX <= BoardWidth 
			&& TargetY >= 0 && TargetY <= BoardHeight ){ 
				trace("Scanning location - X: " + TargetX + ", Y: " + TargetY);
				var fruittype = board[TargetX][TargetY];
				if (fruittype > 0) { 
					if (WidthX > HeightY) {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " - Moving " + widthdir);
						return widthdir;
					} else {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " Moving " + heightdir);
						return heightdir;
					}; //end if WidthX
			   }; //end if fruittype
			}; // end if TargetX
			
			TargetX = mwpX;
			TargetY = mhmY;
			widthdir = EAST;
			heightdir = NORTH;
			if ( TargetX >= 0 && TargetX <= BoardWidth 
			&& TargetY >= 0 && TargetY <= BoardHeight ){ 
				trace("Scanning location - X: "  + TargetX + ", Y: " + TargetY);
				var fruittype = board[TargetX][TargetY];
				if (fruittype > 0) { 
					if (WidthX > HeightY) {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " - Moving " + widthdir);
						return widthdir;
					} else {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " Moving " + heightdir);
						return heightdir;
					}; //end if WidthX
			   }; //end if fruittype
			}; // end if TargetX
			
			TargetX = mwmX;
			TargetY = mhmY;
			widthdir = WEST;
			heightdir = NORTH;
			if ( TargetX >= 0 && TargetX <= BoardWidth 
			&& TargetY >= 0 && TargetY <= BoardHeight ){ 
				trace("Scanning location - X: " + TargetX + ", Y: " + TargetY);
				var fruittype = board[TargetX][TargetY];
				if (fruittype > 0) { 
					if (WidthX > HeightY) {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " - Moving " + widthdir);
						return widthdir;
					} else {
						trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " Moving " + heightdir);
						return heightdir;
					}; //end if WidthX
			   }; //end if fruittype
			}; // end if TargetX
	}; //end for BoardWidth
}; //end for BoardHeight
	
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("                                             ")
trace("Error: failed to locate fruit!")
trace("E        f       d t       a      ru  !")
trace("Error: failed to locate fruit!")
trace("E        f       d t       a      ru  !")
trace("Error: f       d t       ate fru  !")
trace("                                             ")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")
trace("Error: failed to locate fruit!")

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

function locate_and_move(TargetX,TargetY,widthdir,heightdir) {
	// Takes the search target X and target Y, the width direction number and height direction number. 
	// Outputs the correct direction number to get you closer to fruit. 
	// (A fruit, but sometimes not the closest, need to work on that.)
	var board = get_board();
	var widthdir = WEST;
	var heightdir = NORTH;
	var BoardHeight = (HEIGHT - 1);
	var BoardWidth = (WIDTH - 1);
	
	if ( TargetX >= 0 && TargetX <= BoardWidth 
	&& TargetY >= 0 && TargetY <= BoardHeight ){ 
		trace("Scanning X: " + TargetX + ", Y: " + TargetY);
		var fruittype = board[TargetX][TargetY];
		if (fruittype > 0) { 
			if (WidthX > HeightY) {

				if (get_my_item_count(fruittype) !== undefined) {
					get_my_item_count(fruittype)
				}; //end if get_my_item_count

				trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " - Moving " + widthdir);
				return widthdir;
			} else {
				trace("Item " + fruittype + " located at " + TargetX + ", " + TargetY + " - " +heightdir + "" + widthdir + " Moving " + heightdir);
				return heightdir;
			}; //end if WidthX
	   }; //end if fruittype
	}; // end if TargetX

}; //end locate_and_move
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
