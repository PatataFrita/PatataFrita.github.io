function load(){
  var flag = 0;
  var numberPictures = 12;
  var actualPicture = 12;
  var i = 0;

  $(".sub-menu").hide();
  $('.logo-photo').hide();
  $(".burger-menu").hide();
  setTimeout(function(){$('.logo-photo').fadeIn(1000);}, 1000);
  setTimeout(function(){$('.logo-photo').fadeOut(1000);}, 1000);
  
  setTimeout(function(){$(".main-picture").animate({ top: '-=660px'}, 1300);}, 1500);
  $(".main-pictureb").animate({ left: '-=860px'}, 1300);

  /*$(".video-content2").hide();
  setTimeout(function(){$(".video-content2").css({"display":"block"});}, 1900);
*/
 


  /*GALERY*/
  $(".arrow-right").animate({ left: '-=1px'}, 0);
  $(".arrow-left").animate({ left: '+=1px'}, 0);
  $(".arrow-right").hide();
  $(".arrow-left").hide();
  for(i=0; i<numberPictures; i++){
    $(".allphotos").eq(i).hide();
  }
  $(".allphotos").eq(actualPicture%numberPictures).css({"display":"inline"});
  
  $(".galeria").hover(
    function(){

            $(".arrow-left").css({"display":"inline"});

          $(".arrow-right").css({"display":"inline"});
         


    },
    function(){

          $(".arrow-right").css({"display":"none"});
          $(".arrow-left").css({"display":"none"});


    }
    );


/*
  $(".arrow-right").on('click', function(){
        $(".allphotos").eq(actualPicture%numberPictures).hide();
        actualPicture++;
        $(".allphotos").eq(actualPicture%numberPictures).css({"display":"inline"});

  });

    $(".arrow-left").on('click', function(){
        $(".allphotos").eq(actualPicture%numberPictures).hide();
        actualPicture--;
        $(".allphotos").eq(actualPicture%numberPictures).css({"display":"inline"});

  });*/


  $(".arrow-right").on('click', function(){
        
        var recorrer = actualPicture;
        var i = 0;
        for(i=0; i<numberPictures; i++){
            $(this).next().children().eq(i).css({"z-index":(recorrer%numberPictures)-500});
            recorrer++;
        }
        actualPicture++;

  });

    $(".arrow-left").on('click', function(){
        actualPicture--;
        var recorrer = actualPicture;
        var i = 0;
        for(i=0; i<numberPictures; i++){
            $(this).next().next().children().eq(i).css({"z-index":(recorrer%numberPictures)-500});
            recorrer++;
        }

  });

  
  //$(".main-picture").css("margin-top", "0px");
 // $(".content").append("<h2 style = 'color: white'>LIVE IN button1ARCO</h2>");
  
 $(".button1").hover(
    function(){

          $(this).addClass("active");


    },
    function(){

          $(this).removeClass("active");


    }
  );

  $(".button3").hover(
    function(){

          $(this).addClass("active2");


    },
    function(){

          $(this).removeClass("active2");


    }
  );
 $(".button4").click(
    function(){

          $(this).addClass("active");


    },
    function(){

          $(this).removeClass("active");


    }
  );
   $(".button5").click(
    function(){

          $(this).addClass("active3");


    },
    function(){

          $(this).removeClass("active3");


    }
  );

   $(".burger-logo").on('click', function(){

      $(this).toggleClass("shadows");
      if(flag == 0){
        $(this).parent().next().css({"display":"inline"});
        flag = 1;
      }else{
        $(this).parent().next().css({"display":"none"});
        flag = 0;
      }
      

   });
    
 /*$(".scroll").hover(
    function(){
        $(this).addClass("active");

    },
    function(){
        $(this).removeClass("active");
    }
  );*/


 $('.nav li > .sub-menu').parent().hover(function() {
  var submenu = $(this).children('.sub-menu');
  if ( $(submenu).is(':hidden') ) {
    $(submenu).slideDown(100);
    $(submenu).addClass("active")
  } else {
    $(submenu).slideUp(100);
    $(submenu).removeClass("active");
  }
});

  $('.navb li > .sub-menu').parent().click(function() {
  var submenu = $(this).children('.sub-menu');
  if ( $(submenu).is(':hidden') ) {
    $(submenu).slideDown(100);
    $(submenu).addClass("active3")
  } else {
    $(submenu).slideUp(100);
    $(submenu).removeClass("active3");
  }
});
/*
 $(".scroll").hover(
    function(){
        $(this).addClass("active");
        $(this).next().slideToggle(400);
        $(this).next().addClass("active");
    },
    function(){
        $(this).removeClass("active");
        $(this).next().hide(4400);
        $(this).next().removeClass("active");
    }
  );*/

/*ALBUM*/

  


}
$(document).ready(load);