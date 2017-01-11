$(document).ready(function(){

var ind;
var cnt=0;
	$('.post1').click(function(){
		$('.previouspost').css('display','block');
		$('.nextpost').css('display','block');
            var sizeh=$('.postcontent div').height();
            ind=$(this).parent().index();
            cnt=ind+1;
            
           $('#wrap').css('height',sizeh);
            $('#wrap').css('overflow','hidden');
        if(ind==0){
             $('.postcontent .postcontent1').css('display','block');
              $('.previouspost').hide();
        }
        if(ind==1){
             $('.postcontent .postcontent2').css('display','block');

        }
        if(ind==2){
             $('.postcontent .postcontent3').css('display','block');
             	$('.nextpost').hide();
        }

     });
	
     $('.previouspost').click(function(){
     	cnt--;
        
           $('.postcontent div').hide();
         $('.postcontent .postcontent'+ (cnt)).css('display','block');


         if(cnt==1){
            $(this).hide();
         }else{
         	$('.nextpost').show();
         }

     });
    
     $('.nextpost').click(function(){

         cnt++; 
        $('.postcontent div').hide();
         $('.postcontent .postcontent'+ (cnt)).css('display','block');


         if(cnt==3){
         	$(this).hide();
         

         }else{
         	 $('.previouspost').show();
         }
     });
});