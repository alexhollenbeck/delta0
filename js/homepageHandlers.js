$(document).ready(function() {
	$('.toggle-box').click(function() {
		toggleBox();
	});
	$('.toggle-box-2').click(function() {
		toggleBox2();
	});
});

function toggleBox() {
	$('.toggle-box').toggleClass('color1 color2');
}

function toggleBox2() {
	$('toggle-box-2').toggleClass('color1 color3');
}