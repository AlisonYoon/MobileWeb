
   	$(document).ready(function () {
	   $('.submitbtn').click(function(){

    var email = document.getElementById('youremail');

//alert(email.value);

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    	
   $('.alert').css('display','block');
    email.focus;
    return false;
 } else {
 	 
 	$('.emailDialog').css('opacity',1);
 	$('.close').click(function(){
 		$('.emailDialog').css('opacity',0);
 	});
 }
});
		  
   });
   	