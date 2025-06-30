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

 $('#a_wi1').on('click',function(){
      $('article').hide();
      $('#w_i1').show();
 });
 $('#a_wv1').on('click',function(){
      $('article').hide();
      $('#w_v1').show();
      wn = 1;
      w_name = 'w_v1';
 });
  $('#a_ww1').on('click',function(){
      $('article').hide();
      $('#w_w1').show();
      wn = 1;
      w_name = 'w_w1';
 });
 //핀터레스트 구조
var masonry = function(){
    $('.masonry').masonry({
        itemSelector: 'figure',
        horizontalOrder: true,
    });
}
 var page = function(a){
   if(sech == 1){
    $('.t, .tr').remove();
      $('section:visible').before('<div class ="t pls"></div>');
      setTimeout(function(){
         $('section:visible').hide();
         $('section#' + a).show();
         $('.t').addClass('ple');   
         masonry();
      },1000)  
   }else{
     $('.tr, .t').remove();
      $('section:visible').before('<div class ="tr prs"></div>');
      setTimeout(function(){
         $('section:visible').hide();
         $('section#' + a).show();
         $('.tr').addClass('pre');
         masonry();
      },1000)
   };
 }

 var wn = 1;
 $('article:not(#w_i1)').hide();
 var W_page = function(rl){
  if(w_name == 'w_w1'){
    if(rl == 'r'){
        if(wn == 4){
          wn = 4;
        }else{
          wn = wn + 1;
          // W_img();
          $('article').hide();
          $('#w_w'+wn).show();
          console.log(w_name);
        }
      }else{
        if(wn == 1){
          wn = 1;
        }else{
          wn = wn - 1;
          $('article').hide();
          $('#w_w'+wn).show();
        }
      }
    }else{
    if(rl == 'r'){
        if(wn == 6){
          wn = 6;
        }else{
          wn = wn + 1;
          // W_img();
          $('article').hide();
          $('#w_v'+wn).show();
        }
      }else{
        if(wn == 1){
          wn = 1;
        }else{
          wn = wn - 1;
          $('article').hide();
          $('#w_v'+wn).show();
        }
      }
    }
  }


 //콘텐츠 이미지 확대
$('#w_i1 img').on('click',function(){
  var path = $(this).attr('src');
  showImage(path);
});//end click event

function showImage(path){
    
    $(".bigPictureWrapper").css({"display":"flex","overflow-y":"scroll"}).show();
    $(".bigPicture").scrollTop(0);
    $(".bigPicture")
    .html("<img src="+path+">")
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
