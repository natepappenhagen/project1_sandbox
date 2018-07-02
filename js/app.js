// Make the map

let rows = [0, 0, 0, 0];
let cols = [0, 0, 0, 0];

for (let y = 0; y < rows.length; y++) {
  $(".board").append("<div></div>");

  for (let x = 0; x < cols.length; x++) {
    $(".board").append(`<div id="cell-${x}-${y}" class="cells" data="location${x},${y}">`);
  }

}


// let logEachCellWhenClicked = () => {
	$('.cells').click(function(event) {

		console.log(this.id);
		});




// console.log($('cells').hasClass(`cell-${(x+1)}-${y}`);
// console.log($('.board').hasClass(`cell-${x-1}-${y}`);
// console.log($('.board').hasClass(`cell-${x}-${y+1}`);
// console.log($('.board').hasClass(`cell-${x}-${y-1}`);




// add a button for player 1 and player 2
function player1ButtonFunction() {
  let $player1Button = $("<input class='ui-button ui-widget ui-corner-all' type='submit' value='player1' id='p1button'>");

  $player1Button.appendTo($(".button-div"));
}

function player2ButtonFunction() {
  let $player2Button = $(
    "<input class='ui-button ui-widget ui-corner-all' type='submit' value='player2' id='p2button'>"
  );
  $player2Button.appendTo($(".button-div"));
}

player1ButtonFunction();
player2ButtonFunction();




/////////////////////////////////////////////////////////////////////////////

// Probably can combine these two together. But for now... they are split.
// player 1
let checkSquaresForPlayer1 = () => {
	$('.cells').click(function(event) {
//     check
		if ($(this).hasClass('player2')) {
			return false
				}
		if ($(this).hasClass('player1') && ($("#p1button").hasClass("p1ButtonClicked"))) {
				// console.log('I am a red square for player 1 at'+this.id);
      $('.p1Coord').append(`<div>'I am a red square for player 1 at'${this.id}</div>`);
                       
				}
		})
}

//  player 2
let checkSquaresForPlayer2 = () => {
	$('.cells').click(function(event) {
		if ($(this).hasClass('player2') && ($("#p2button").hasClass("p2ButtonClicked"))) {
	//			console.log('I am a blue square for player 2'+this.id);
      $('.p2Coord').append(`<div>'I am a blue square for player 2 at'${this.id}</div>`);
				}
		})
}
////// button listener
let button1Listener = function() {
	$("#p1button").click(function(event) {
	 $("#p1button").addClass("p1ButtonClicked");
	 // to make sure only player 1 has the board
	 	 $("#p2button").removeClass("p2ButtonClicked")
	})
}
button1Listener();

let button2Listener = function() {
	$("#p2button").click(function(event) {
	 $("#p2button").addClass("p2ButtonClicked");
	 // to make sure only player 2 has the board
	 $("#p1button").removeClass("p1ButtonClicked")
	})
}
button2Listener();
// //////////////////////////////////////////////////////////////////////

let player1ClickRed = function() {

    $(".cells").click(function(event) {
    	if ($("#p1button").hasClass("p1ButtonClicked")) {
    		 $(event.target).css("background-color", "red");
     		 $(event.target).addClass("player1");
    	}
    });
    checkSquaresForPlayer1();
}
player1ClickRed();


// when 'player2 button' is clicked.. any square clicked will be blue
let player2ClickBlue = function() {

    $(".cells").click(function(event) {
    	if ($("#p2button").hasClass("p2ButtonClicked")) {
    		 $(event.target).css("background-color", "blue");
     		 $(event.target).addClass("player2");
    	}
    });
    checkSquaresForPlayer2();
}
player2ClickBlue();





































