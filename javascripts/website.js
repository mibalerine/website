$(window).on("load", function (e) {
	$('.loader').addClass('fade').css('opacity', 0.0);
	$('#wrapper').addClass('fade').css('opacity', 1.0);
})

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 18 || n < 6) {
	  // If time is after 6PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	} else {
	  // Else use ‘day’ theme
	  document.body.className = "day";
	  document.getElementById("bg").src="images/bg-day.jpeg";
	}
});