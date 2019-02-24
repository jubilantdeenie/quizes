
	
// select color input //
var color = $('#colorPicker').val(); 
	
// Select size input */
let canvas = $("#pixelCanvas");
	

/* When size is submitted by the user, call makeGrid() */
	
	$('#sizePicker').submit(function(event) {
		event.preventDefault();
		let width = $('#inputWeight').val();
		let height = $('#inputHeight').val();

	makeGrid(width, height);
 });
	
// When size is submitted by the user, call makeGrid() 

 function makeGrid(width, height) {

		for (r = 0; r < height; r++) {
		canvas.append('<tr></tr>');
	}
	
		var rows = $("tr");

		for  (c = 0; c < width; c++) {
		rows.append('<td></td>');
		
	  console.log("makeGrid is working.");
	}
}


// Updates colorPicker value	
canvas.change(function() {
		color = $('#colorPicker').val();
		
	console.log(color);
});


// Add or remove color to cell
canvas.on("click", "td", function() {
		$(this).css('background-color', color);
	
	if($(this).hasClass('clicked')) {
		$(this).removeAttr('style');
		$(this).removeClass('clicked');
		} else {
		$(this).css("background-color", color);
		$(this).addClass('clicked');
		
	console.log("Add and remove color is working.");
		}

	console.log('working');
});


// Listen for mouse down, up and over for continuous paint 
let mouseGoDown = false;
	canvas.on('mousedown', function(event) {
		event.preventDefault();
		mouseGoDown = event.which === 1 ? true : false;
});

canvas.on('mouseup', function() {
	mouseGoDown = false;
});

canvas.on("mouseover", "td", function() {
	if (mouseGoDown) {($(this).css('background-color', color));
		$(this).addClass('clicked');
	}; 

	console.log('Continuous color is working.'); 
});

// Jump down page when grid size is submitted.

function jumpToGrid() {
	var elmnt = document.getElementById("sizePicker");
	elmnt.scrollIntoView();
	
	console.log('Jump down page is working.');
}


	