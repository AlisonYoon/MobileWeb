$(document).ready(function(){
	$('#nav-icon3').toggle(function(){
		$(this).addClass('open');
		$('.navBox').css('display','block');
		//$("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
	}, function(){
		$(this).removeClass('open');
		$('.navBox').css('display','none');
		//$("body").css({ overflow: '' }).unbind('touchmove');
	});

	
	
});