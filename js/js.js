jQuery(document).ready(function ($) {
 var sech = [];
 $('.a_work').on('click',function(){
   sech = $(this).data("lr");
   page('work');
 });
 $('.a_info').on('click',function(){
    sech = $(this).data("lr");
    page('info');
 });
 $('.a_main').on('click',function(){
   sech = $(this).data("lr");
   page('main');
 });
 
 $('.prev').on('click',function(){
   W_page('l');
 })
 $('.next').on('click',function(){
   W_page('r');
 });
 var page = function(a){
   if(sech == 1){
    $('.t, .tr').remove();
      $('section:visible').before('<div class ="t pls"></div>');
      setTimeout(function(){
         $('section:visible').hide();
         $('section#' + a).show();
         $('.t').addClass('ple');   
      },1000)  
   }else{
     $('.tr, .t').remove();
      $('section:visible').before('<div class ="tr prs"></div>');
      setTimeout(function(){
         $('section:visible').hide();
         $('section#' + a).show();
         $('.tr').addClass('pre');
      },1000)
   };
 }

 var wn = 1;
 $('article:not(#w_i1)').hide();
 var W_page = function(rl){
  if(rl == 'r'){
    if(wn == 11){
      wn = 11;
    }else{
      wn = wn + 1;
      // W_img();
      $('article').hide();
      $('#w'+wn).show();
    }
  }else{
    if(wn == 1){
      wn = 1;
    }else{
      wn = wn - 1;
      $('article').hide();
      $('#w'+wn).show();
    }
  }
 }
//콘텐츠 이미지 확대
$('.c_img img').on('click',function(){
  var path = $(this).attr('id')
  showImage(path);
});//end click event

function showImage(fileCallPath){
    
    $(".bigPictureWrapper").css({"display":"flex","overflow-y":"scroll"}).show();
    
    $(".bigPicture")
    .html("<img src='./contents/"+fileCallPath+".jpg'>")
    .fadeIn(100);
    
  }//end fileCallPath
  
$(".bigPictureWrapper").on("click", function(e){
    $(".bigPicture").fadeOut(100);
    setTimeout(function(){
      $('.bigPictureWrapper').hide();
    }, 100);
  });//end bigWrapperClick event


var imgchange = function(){
  var windowWidth = $( window ).width();
  if(windowWidth < 767) {
    $('#w2 img').attr('src','./image/m_sp.png');
    $('#w3 img').attr('src','./image/m_watch.png');
    $('#w4 img').attr('src','./image/m_sg.png');
    $('#info img').attr('src','./image/m_my.jpg');
    $('#w1 .img a, #w2 .img a').on('click',function(e){
      e.preventDefault();
    })
  } else {
    $('#w2 img').attr('src','./image/sp.png');
    $('#w3 img').attr('src','./image/watch.png');
    $('#w4 img').attr('src','./image/sg.png');
    $('#info img').attr('src','./image/my.jpg');
    $('.img img').on('mousemove',function(e){
      $('.go').css({"top":e.pageY+10+"px","left":e.pageX+"px"});
    });
    $('.img img').on('mouseenter',function(e){
      $('.go').css({"top":e.pageY+10+"px","left":e.pageX+"px"});
      $('.go').stop().fadeIn(50);
    });
    $('.img img').on('mouseleave',function(){
      $('.go').stop().fadeOut(50);
    });
  };
};

imgchange()
$(window).resize(function() {
  imgchange()
});
});

// 모바일 탭 일때 화면조정
// 모바일 위아래 여백조정
// 대표이미지설정