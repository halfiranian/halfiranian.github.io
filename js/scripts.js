$(document).ready(function(){
	
$(function () {
$('#tweet').click(function(){
   $('#tweet').text(""); 
});

$('#submit').click(function (){
	var tweettext = $('#tweet').val();
	tweettext = rfc3986EncodeURIComponent(tweettext); // encodes text for urls etc
	var tweetlink = 'https://twitter.com/intent/tweet?text=' + tweettext;
   // window.open(tweetlink, 'tweetlink', '_blank');
	$('#result').text(tweetlink);
	$('#result').append("<p><a href='" + tweetlink + "' target='_blank'>test link</a></p>");
	copyToClipboard(tweetlink);

	return false;
});
    
 $('#tweet').keyup(function () { // this does the countdown I copy/pasted from somewhere else so I can't take credit for slick code
  var max = 140;
  var len = $(this).val().length;
  if (len >= max) {
    $('#charNum').text(' you have reached the limit');
  } else {
    var char = max - len;
    $('#charNum').text(char + ' characters left');
  }
});
    
function rfc3986EncodeURIComponent (str) {  
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);  
}

function copyToClipboard (text) {
  window.prompt ("Copy to clipboard: Ctrl+C or mac equiv, Enter", text);
}
    
});
	
	
	
});