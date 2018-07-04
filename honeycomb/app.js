console.log('hello');

// Make the map

let rows = [0, 0, 0, 0, 0, 0,0,0,0,];
let cols = [0, 0, 0, 0, 0, 0,0,0,0,];



for (let y = 0; y < rows.length; y++) {
	//$("#grid").append("<div></div>");

	for (let x = 0; x < cols.length; x++) {
		$("#grid").append(`<li><div id="cell-${x}-${y}" class="hexagon" data-x="${x}" data-y="${y}"></li>`);
	}


}

// sets up random first board

let randomStart = () => {
        let divLengthX = $(".hexagon").length;

        let random = Math.floor(Math.random() * divLengthX);
        $(".hexagon").eq(random).addClass("player1");

        let divLengthY = $(".hexagon").length;

        random = Math.floor(Math.random() * divLengthY);
        $(".hexagon").eq(random).addClass("player2");
}

/////////////////////////////////////////////////////////////////////////////

$('.hexagon').click(function (event) {
//	only allow moves to hexagons that have the class can-move
	if (!$(this).hasClass('can-move')) {
		return false;
	}

	if ($("#p2button").hasClass("p2ButtonClicked")) {
		// console.log('I am a blue square for player 2'+this.id);
		$('.p2Coord').append(`<div>'I am a blue square for player 2 at '${this.id}</div>`);
		$(this).addClass("player2");
	}

	if ($("#p1button").hasClass("p1ButtonClicked")) {
		// console.log('I am a red square for player 1 at'+this.id);
		$('.p1Coord').append(`<div>'I am a red square for player 1 at '${this.id}</div>`);
		$(this).addClass("player1");
	}
});


function canAttack(playerClass) {
//magic below
	$(`.${playerClass}`).each(function () {
		if ($(this).hasClass('can-move')){
			$(this).addClass('can-attack');
		}
	})
// magic above
}

function fairMove(playerClass, x, y) {
//magic below

$(`[data-x=${x+1}][data-y=${y}]`).addClass('can-move');
$(`[data-x=${x-1}][data-y=${y}]`).addClass('can-move');
$(`[data-x=${x}][data-y=${y+1}]`).addClass('can-move');
$(`[data-x=${x}][data-y=${y-1}]`).addClass('can-move');

// magic above
}

function showFairMoves(playerClass) {
	// this jQuery selector will return all elements in the page that have the playerClass class.
	// .each iterates through the list, there is more to learn here: http://api.jquery.com/jquery.each/
	$(`.${playerClass}`).each(function () {
		// 'this' refers to an HTML element, selecting it with jQuery `$(...)` again allows us to use other jQuery operations such as .data()
		fairMove(playerClass, $(this).data('x'), $(this).data('y'));
	});
}


// battle
function battle () {

	//if a square with a class of 'can-attack' is clicked then 
	$('.can-attack').click(function (event) {

	console.log('you attacked someone');

	let randomWinner = Math.floor(Math.random() * 10) + 1

	if (randomWinner > 5) {
		$(this).removeClass('player1')
		//$(this).css("background-color","yellow")
		$(this).addClass('player2')
		$(this).addClass('p2winner')
	} else {
		$(this).removeClass('player2')
		//$(this).css("background-color","orange")
		$(this).addClass('player1')
		$(this).addClass('p1winner')
	}

	})
}


////// button listener
$("#p1button").click(function (event) {
	//clears hexagon from other player

	$('.hexagon').removeClass('p1winner')
	$('.hexagon').removeClass('p2winner')
	$('.hexagon').removeClass('can-move');
	$('.hexagon').removeClass('can-attack');


	// toggle between players
	$("#p1button").addClass("p1ButtonClicked btn-danger").removeClass('btn-secondary');
	$("#p2button").removeClass("p2ButtonClicked btn-primary").addClass("btn-secondary");

	// show the fair moves and attack moves
	showFairMoves("player1");
	canAttack("player2");
	battle();



});

$("#p2button").click(function (event) {
	// clears hexagon from other player
	$('.hexagon').removeClass('p1winner')
	$('.hexagon').removeClass('p2winner')
	$('.hexagon').removeClass('can-move');
	$('.hexagon').removeClass('can-attack');

	// toggle between players
	$("#p2button").addClass("p2ButtonClicked btn-primary").removeClass('btn-secondary');
	$("#p1button").removeClass("p1ButtonClicked btn-danger").addClass("btn-secondary");

	// show the fair moves and attack moves
	showFairMoves("player2");
	canAttack("player1");
	battle();



});



// $(`.${hexagon}`).each(function () {
// 	let player1RedSquares
// 	fairMove(playerClass, $(this).data('x'), $(this).data('y'));


// });













// starts game
randomStart();
randomStart();
