jQuery(document).ready(function ($) {
    $('#m1b').on('click',function(){
        $('#m2').hide();
        $('#m1').show();
    })
    $('#m2b').on('click',function(){
        $('#m1').hide();
        $('#m2').show();
    })
    $('#m3b').on('click',function(){
        $('#m4').hide();
        $('#m3').show();
    })
    $('#m4b').on('click',function(){
        $('#m3').hide();
        $('#m4').show();
    })
    var a = 1;
    var text_m4 = function(){
        switch(a){
        case 1 :
        $('#goods_text').text('다이아몬드 캐기 게임');
        $('#goods').attr('src','./image/goods1.png');
        break;
        case 2 :
        $('#goods_text').text('캐릭터 스티커_1');
        $('#goods').attr('src','./image/goods2.jpg');

        break;
        case 3 :
        $('#goods_text').text('캐릭터 스티커_2');
        $('#goods').attr('src','./image/goods3.jpg');
        break;
    }
    }
    $('#m4 #prev').on('click',function(){
        a = a - 1;
        if (a == 0){               
            a = 1
        }else{            
        text_m4();
        }
    })
    $('#m4 #next').on('click',function(){
        a = a + 1;
        if (a == 4){
            a = 3
        }else{
        text_m4();
        }
    })
    var i = 1;
    var text = function(){
        switch(i){
        case 1 :
        $('#event_text').html('죄를 짓고 도망쳐 숨어있는 고구마깡!<br>그들을 체포해 감옥에 넣어주세요.<br>숨어있는 장소는 5층 전체 부스. 총 5마리');
        $('#event_img').attr('src','./image/event1.png');
        break;
        case 2 :
        $('#event_text').html('사진속에 숨겨진 고구마깡 캐릭터를 찾는게임<br>3가지 주제 중에 랜덤으로 한주제를 선택<br>난이도 상중하로 구성, 제한시간은 1분!<br> 빠르게 고구마깡을 찾을수록 명예전당에 올라갈수 있다.');
        $('#event_img').attr('src','./image/event2.png');

        break;
    }
    }
   
    $('#prev').on('click',function(){
        i = i - 1;
        if (i == 0){               
            i = 1
        }else{            
        text();
        }
    })
    $('#next').on('click',function(){
        i = i + 1;
        if (i == 3){
            i = 2
        }else{
        text();
        }
    })
    $('#nb1').mouseenter(function(){
        $('nav>ul>li:nth-child(2)>span').addClass('nav_b1');
    });
    $('#nb1').mouseleave(function(){
        $('nav>ul>li:nth-child(2)>span').removeClass('nav_b1');
    })
    $('#nb2').mouseleave(function(){
        $('nav>ul>li:nth-child(3)>span').removeClass('nav_b2');
    })
    $('#nb2').mouseenter(function(){
        $('nav>ul>li:nth-child(3)>span').addClass('nav_b2');
    });
    $('#nb3').mouseleave(function(){
        $('nav>ul>li:nth-child(4)>span').removeClass('nav_b3');
    })
    $('#nb3').mouseenter(function(){
        $('nav>ul>li:nth-child(4)>span').addClass('nav_b3');
    });
    $('#nb4').mouseleave(function(){
        $('nav>ul>li:nth-child(5)>span').removeClass('nav_b4');
    })
    $('#nb4').mouseenter(function(){
        $('nav>ul>li:nth-child(5)>span').addClass('nav_b4');
    });
    $('#nb5').mouseenter(function(){
        $('nav>ul>li:nth-child(6)>span').addClass('nav_b5');
    });
    $('#nb5').mouseleave(function(){
        $('nav>ul>li:nth-child(6)>span').removeClass('nav_b5');
    })  
})