// Make the map

let rows = [0, 0, 0, 0];
let cols = [0, 0, 0, 0];

for (let i = rows.length; i > 0; i--) {
  $(".board").append("<div></div>");

  for (let x = 0; x < cols.length; x++) {
    $(".board").append(`<div id="cell-${i}-${x}" class="cells">`);
  }
}

// add a button for player 1 and player 2
function player1ButtonFunction() {
  let $player1Button = $(
    "<input class='ui-button ui-widget ui-corner-all' type='submit' value='player1' id='p1button'>"
  );

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
		if ($(this).hasClass('player1')) {
				console.log('I am a red square for player 1 at'+this.id);
      $('.p1Coord').append(`<div>'I am a red square for player 1 at'${this.id}</div>`);
                       
				}
		})
}

//  player 2
let checkSquaresForPlayer2 = () => {
	$('.cells').click(function(event) {
		if ($(this).hasClass('player2')) {
				console.log('I am a blue square for player 2'+this.id);
      $('.p2Coord').append(`<div>'I am a blue square for player 2 at'${this.id}</div>`);
				}
		})
}


//////////////////////////////////////////////////////////////////////

// when 'player1 button' is clicked.. any square clicked will be red
let player1ClickRed = function() {
$("#p1button").click(function(event) {
  $("#p1button").addClass("p1ButtonClicked");
//  console.log("p1ButtonClicked Class is added ");

  if ($("#p1button").hasClass("p1ButtonClicked")) {
 //   console.log("its okay");
    // another even listener to change squares according to player 1 while button is clicked"
    $(".cells").click(function(event) {
      $(event.target).css("background-color", "red");
      $(event.target).addClass("player1");
    });

    // this will check to see if whats on the board is player 1
    checkSquaresForPlayer1();
  }
});

}
player1ClickRed();




// when 'player2 button' is clicked.. any square clicked will be blue
let player2ClickBlue = function() {
$("#p2button").click(function(event) {
  $("#p2button").addClass("p2ButtonClicked");
//  console.log("p2ButtonClicked Class is added ");

  if ($("#p2button").hasClass("p2ButtonClicked")) {
//    console.log("its okay");
    // another even listener to change squares according to player 1 while button is clicked"
    $(".cells").click(function(event) {
      $(event.target).css("background-color", "blue");
      $(event.target).addClass("player2");
    });

    // this will check to see if whats on the board is player 2
    checkSquaresForPlayer2();
  }
});

}
player2ClickBlue();









