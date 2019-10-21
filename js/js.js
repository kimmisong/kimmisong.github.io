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
    if(wn == 5){
      wn = 5;
    }else{
      wn = wn + 1;
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
}) 

// 브라우저 뒤로가기 버튼 해결
// work 페이지 버튼
// _버튼 클릭시 효과는..... 생각해볼것!
// work 소원 동영상(유투브) 연동
// 모바일 탭 일때 화면조정
// 크로스브라우져? 확인 후 보안할것
