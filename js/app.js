// Make the map

let rows = [0, 0, 0, 0, 0, 0];
let cols = [0, 0, 0, 0, 0, 0];



for (let y = 0; y < rows.length; y++) {
	$(".board").append("<div></div>");

	for (let x = 0; x < cols.length; x++) {
		$(".board").append(`<div id="cell-${x}-${y}" class="cells" data-x="${x}" data-y="${y}">`);
	}


}

// sets up random first board

let randomStart = () => {

	let player1Random = () => {
	let divLengthX = $(".cells").length;

	let random = Math.floor( Math.random() * divLengthX );
	$(".cells").eq(random).addClass("player1");
	};

	let player2Random = () => {
	let divLengthY = $(".cells").length;

	let random = Math.floor( Math.random() * divLengthY );
	$(".cells").eq(random).addClass("player2");
	};

player1Random();
player2Random();
}

/////////////////////////////////////////////////////////////////////////////

$('.cells').click(function (event) {
//	only allow moves to cells that have the class can-move
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

////// button listener
$("#p1button").click(function (event) {
	//clears cells from other player
	$('.cells').removeClass('can-move');
	$("#p1button").addClass("p1ButtonClicked btn-danger").removeClass('btn-secondary');
	// to make sure only player 1 has the board
	$("#p2button").removeClass("p2ButtonClicked btn-primary").addClass("btn-secondary");
	showFairMoves("player1");

});

$("#p2button").click(function (event) {
	// clears cells from other player
	$('.cells').removeClass('can-move');
	$("#p2button").addClass("p2ButtonClicked btn-primary").removeClass('btn-secondary');
	// to make sure only player 2 has the board
	$("#p1button").removeClass("p1ButtonClicked btn-danger").addClass("btn-secondary");
	showFairMoves("player2");
});



// starts game
randomStart();
