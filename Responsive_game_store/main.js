var imgarray = ["https://drive.google.com/uc?id=1bCLWBOlBTLQ73LXUYGMTs7T3vjv4y0Sj",
"https://drive.google.com/uc?id=1f67oDBljUe9UnTJWyezdjd46uCMr-Ybv",
                "https://drive.google.com/uc?id=1tmUkE3g_joZEYjQliqwlVkNgAQ7d4HtO"]
var currentImg = 0;
var n = imgarray.length;
function nextImg(){
  if(currentImg < n - 1){
  currentImg = currentImg + 1;

  document.getElementById("image").src=imgarray[currentImg];

}
  else{ document.getElementById("image").src=imgarray[0];
    currentImg = 0;

  }
}
function prevImage(){
  if(currentImg > 0){
  currentImg = currentImg - 1;
  document.getElementById("image").src=imgarray[currentImg];
}
  else{
 document.getElementById("image").src=imgarray[n-1];
    currentImg = n-1;
  }
}

function scrolll(x){
  if(x==0){
    $('#gamelist').animate({ scrollLeft:'0'},"slow");
  }
 else{
   $('#gamelist').animate({scrollLeft:'300'},"slow");
  }
}

 function scrol(x){
  if(x==0){
    $('#gamelist2').animate({ scrollLeft:'0'},"slow");
  }
 else{
   $('#gamelist2').animate({scrollLeft:'300'},"slow");
  }
}

$(document).ready(function(){
  setInterval("nextImg()",5000);

 $(".hamburg").click(function(){
   $(".sidebar").slideToggle()

 })
   $(window).resize(function(){
     if($(window).width() > 700){
    $(".sidebar").slideDown();
  }
  })

  $(window).resize(function(){
    if($(window).width() < 700){
      $(".sidebar").slideUp();
    }
  })
})