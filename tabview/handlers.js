$(document).ready(function() {
  console.log('ready');
  $('.toggle-box').click(function() {
    toggleBox();
  });
  $('#page-tab').click(function() {
  	pageTabClicked();
  })
});

function toggleBox() {
	if ($('.toggle-box').hasClass('color-scheme-1')) {
		if ($('.toggle-box').hasClass('color1')) {
			$('.toggle-box').addClass('color2');
			$('.toggle-box').removeClass('color1');
		}
		else {
			$('.toggle-box').addClass('color1');
			$('.toggle-box').removeClass('color2');
		}
	}
	else {
		if ($('.toggle-box').hasClass('color1')) {
			$('.toggle-box').addClass('color3');
			$('.toggle-box').removeClass('color1');
		}
		else {
			$('.toggle-box').addClass('color1');
			$('.toggle-box').removeClass('color3');
		}
	}
}

function pageTabClicked() {
	cssString = $('#css-editor').text();
	console.log(cssString);
	console.log(cssString.indexOf('yellow'));
	if (cssString.indexOf('yellow') != -1) {
		$('.toggle-box').addClass('color-scheme-2');
		$('.toggle-box').removeClass('color-scheme-1');
	}
	else {
		$('.toggle-box').addClass('color-scheme-1');
		$('.toggle-box').removeClass('color-scheme-2');
	}
}