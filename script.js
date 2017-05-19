 var init = functon(){
   var sec = document.getElementById('sec');
   var min = document.getElementById('min');
   var min = document.getElementById('min');
   var hour = document.getElementById('hour');

   var time;

   functon intervalHandler() {
     time = new Date();
     sec.innrHTML = time.getSeconds();
     min.innrHTML = time.getMinutes();
     hour.innrHTML = time.getHours();
   }
   intervalHandler()

 };

document.addEventListener('DOMContentLoaded', init);
