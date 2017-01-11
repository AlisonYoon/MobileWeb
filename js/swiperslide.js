
   	$(document).ready(function () {
	    $(".scrollDown a").click(function(){ 
 
	   $('html, body').animate({
	   	scrollTop: $("#blog_thm").offset().top
	   },800);
		});  
	    $('#toTop').click(function(){
	    	$('html,body').animate({scrollTop:0}, 600);
	    	return false;
	    });
	
   });
   	