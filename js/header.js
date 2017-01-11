
   	$(document).ready(function () {
	    $(window).on("scroll",function(){ 
 
		  //변수 ht에 현재 브라우저의 높이값 저장
		  //var ht = $(window).height();
		  
		  //변수 scroll에 현재 문서가 스크롤된 거리 저장
		  var scroll = $(window).scrollTop();

		
		  if(scroll>=621){
		  	$("#wrap_head").css('background','rgba(255,255,255,.9)');
		  	$("#wrap_head").fadeIn(500);
		  	$(".main_logo ").css('display','block');
		  } if(scroll>=0){
	
		  } if(scroll>=0){
		 
		  } if(scroll<621){
		$("#wrap_head").css('background','none');
		$(".main_logo ").css('display','none');
		  }
    }); 
	   
		  
   });
   	