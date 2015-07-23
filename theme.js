/* BLUE THEME */
var theme = 1;
$(document).ready(function() {
	$('.title').click(function() {
		if(theme == 0) {
			$('body').css('background-color': 'rgb(0,71,143)');
			$('#menu').css('background-color': 'rgb(0,71,143)');
			$('.nav li:hover').css('background-color': 'rgba(0,0,0,0.15)');
			$('.nav li a:link, .nav li a:visited').css('color': 'white');
			$('.selected').css('background-color': 'rgba(0,0,0,0.15)');
			$('#response').css('background-color': 'rgb(0,71,143)');
			$('#response input, #response button, #response select').css('background-color': 'rgba(255,255,255,0.5)');
			$('#response input[type=text]:focus').css('background-color': 'rgba(255,255,255,0.8)');
			$('::-webkit-input-placeholder').css('color': 'rgba(61,87,113,1)');
			$('::-moz-input-placeholder').css('color': 'rgba(61,87,113,1)');
			$('#response button').css('color': 'rgba(61,87,113,1)');
			$('#response button[type=button]:hover, #response button[type=button]:focus').css({'background-color': 'rgba(255,255,255,0.8)', 'color': 'black'});
			$('#response button[type=button]:active').css({'background-color': 'rgba(255,255,255,0.7)', 'color': 'rgba(61,87,113,1)'});
			theme = 1;
		};
		if(theme == 1) {
			$('body').css('background-color': 'rgba(0,0,0,0.6)');
			$('#menu').css('background-color': 'rgba(0,0,0,0.6)');
			$('.nav li:hover').css('background-color': 'rgba(0,0,0,0.3)');
			$('.nav li a:link, .nav li a:visited').css('color': 'white');
			$('.selected').css('background-color': 'rgba(0,0,0,0.3)');
			$('#response').css('background-color': 'rgba(0,0,0,0.5)');
			$('#response input, #response button, #response select').css('background-color': 'rgba(255,255,255,0.5)');
			$('#response input[type=text]:focus').css('background-color': 'rgba(255,255,255,0.8)');
			$('::-webkit-input-placeholder').css('color': 'rgba(0,0,0,0.7)');
			$('::-moz-input-placeholder').css('color': 'rgba(0,0,0,0.7)');
			$('#response button').css('color': 'rgba(0,0,0,0.7)');
			$('#response button[type=button]:hover, #response button[type=button]:focus').css({'background-color': 'rgba(255,255,255,0.8)', 'color': 'black'});
			$('#response button[type=button]:active').css({'background-color': 'rgba(255,255,255,0.7)', 'color': 'rgba(61,87,113,1)'});
			theme = 0;
		};
	});
});