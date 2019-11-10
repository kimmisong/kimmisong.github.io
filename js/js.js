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
 })
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
 $('article:not(#w1)').hide();
 var W_page = function(rl){
  if(rl == 'r'){
    if(wn == 4){
      wn = 4;
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

var imgchange = function(){
  var windowWidth = $( window ).width();
  if(windowWidth < 767) {
    $('#w2 img').attr('src','./image/m_sp.png');
    $('#w3 img').attr('src','./image/m_watch.png');
    $('#w4 img').attr('src','./image/m_sg.png');
    $('#info img').attr('src','./image/m_my.jpg');
  } else {
    $('#w2 img').attr('src','./image/sp.png');
    $('#w3 img').attr('src','./image/watch.png');
    $('#w4 img').attr('src','./image/sg.png');
    $('#info img').attr('src','./image/my.jpg');
    $('.img img').on('mousemove',function(e){
      $('.go').css({"top":e.pageY+10+"px","left":e.pageX+"px"})
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

}) 
history.pushState(null, null, location.href);

window.onpopstate = function(event) {

  window.history.go(-2)
};

// 모바일 탭 일때 화면조정
// 뒤로가기문제
// 모바일 위아래 여백조정
// 모바일 웬디,고구마 노? 시계,놀이터 모바일조정...?
