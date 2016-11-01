$(document).ready(function(){
	$("#img").click(function(){
            $('#box').fadeIn('500');
			$('#cover').fadeTo("500",0.6);
    });
    $("#imgtwo").click(function(){
            $('#boxtwo').fadeIn('500');
			$('#cover').fadeTo("500",0.6);
    });
    $("#imgthree").click(function(){
            $('#boxthree').fadeIn('500');
            $('#cover').fadeTo("500",0.6);
    });
    $("#imgtop").click(function(){
            $('#boxfour').fadeIn('500');
            $('#cover').fadeTo("500",0.6);
    });
    $("#imgbottom").click(function(){
            $('#boxfive').fadeIn('500');
            $('#cover').fadeTo("500",0.6);
        //when you click "x" the cover will fade on//
    });
    $("#cover").click(function(){
            $('#cover, #box, #boxtwo, #boxthree, #boxfour, #boxfive').fadeOut('500');
    });
    $("#cover").click(function(){
            $('#cover, #box, #boxtwo, #boxthree, #boxfour, #boxfive').fadeOut('500');
        //clicking again will fade out of cover//
         });
   $("body").keydown(function(key){
         if ( key.which == 27 ) {
            $('#cover, #box, #boxtwo, #boxthree, #boxfour, #boxfive').fadeOut('500');
             //this is to say you can press escape to close the shadowbox//
        }
    });
   
});

//pretty much everything here is relative to the shadowbox effect I have on the images//