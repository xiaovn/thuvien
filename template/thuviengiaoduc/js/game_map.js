//fig ie
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };  

var leb_function = function(index){
    $('.leb_active').eq(index).fadeOut(200,function(){
        $(this).fadeIn(200,function(){
            index++;
            if(index==($('.leb_active').length)){
                leb_function(0);
            }
            $('.leb_active').eq(index).fadeOut(200,function(){
                if(index<($('.leb_active').length)){
                    leb_function(index);
                }
            });
        });
    });
}

function move_arrow(){
    $('.arrow_level').animate({
        top: '5px',
        left:'-5px'
    },500).animate({
        left:"0px",
        top: "0px"
        },500);
};



$(window).load(function(){    
    var gameElement =  createGame();
    var level_btn_avaiable;
    leb_function(0);
      setInterval(function(){
            move_arrow();
        },1000);
      setInterval(function(){
        $('.timeleft').toggleClass('timeleft2');
        $('.dl').toggleClass('dl2');
      },500)
      $('#wrap_level_1').attr('link_continue',$('#link_continue_game_level_1').html());
      $('#wrap_level_2').attr('link_continue',$('#link_continue_game_level_2').html());
      $('#wrap_level_3').attr('link_continue',$('#link_continue_game_level_3').html());
            
      $('#wrap_level_1').attr('timeleft',$('#deadline_level_1').attr('timeleft'));
      $('#wrap_level_2').attr('timeleft',$('#deadline_level_2').attr('timeleft'));
      $('#wrap_level_3').attr('timeleft',$('#deadline_level_3').attr('timeleft'));
      
      $("#timeLeft_level1").text($('#deadline_level_1').attr('timeleft'));
      $("#timeLeft_level2").text($('#deadline_level_2').attr('timeleft'));
      $("#timeLeft_level3").text($('#deadline_level_3').attr('timeleft'));
      
      $('#wrap_level_1').attr('first_play',$('#link_continue_game_level_1').attr('first_play'));
      $('#wrap_level_2').attr('first_play',$('#link_continue_game_level_2').attr('first_play'));
      $('#wrap_level_3').attr('first_play',$('#link_continue_game_level_3').attr('first_play'));
    
    $('.wrap_level').each(function(index, element){
        if($(element).attr('ready')!='true'){
            $(element).find('.leb_active').css('visibility','hidden');
        }
    });
    
   $('.wrap_level').bind('click', function(){
        var link = $(this).attr('link_continue');
        var first_play = $(this).attr('first_play');
        var ready = $(this).attr('ready');
        var timeLeft = parseInt($(this).attr('timeleft'));
        var _id = $(this).attr('id').split('_');
        _index = _id.pop(); 
        $('.list_game_played').css('display','none');
        $('#list_game_level_'+_index).css('display','block');                
        function playLess(){            
            if(first_play == "true"){
                window.top.location.href = link;
            }else if(first_play == "false"){      
                console.log(link);
                if(link !=undefined && link!= null && link !=''){
                    $('#link_continue_game').attr('href',link);
                    $('#popup_game_play').fadeIn(300);
                }else{
                    
                    $('#title_game_played').empty();
                    $('#title_game_played').text('CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH CÁC BÀI THI CỦA CẤP ĐỘ NÀY, CLICK ĐỂ CHƠI LẠI');                    
                    $('.popup_replay').fadeIn(300);
                }
            }    
        }
        
        if(ready=='true'){
            if(timeLeft > 0){                
                 playLess();
            }else{
                $('#popup_deadline').fadeIn(300, function(){
                    $('#close_popup_deadline').bind('click', function(){
                        $('#popup_deadline').css('display','none');
                        playLess();
                    })
                })
            }            
        }else{
            $('#popup_game_not_open').fadeIn(300);
        }
   });
   $('#back_to_home').bind('click', function(){
        $('#popup_game_play').css('display','none');
        $('.popup_replay').fadeIn(300);
        
        $('#title_game_played').empty();
        $('#title_game_played').text('CÁC BÀI THI ĐÃ HOÀN THÀNH');
        
   });
   $('#popup_game_finish').bind('click', function(){
        $(this).css('display','none');
   });
   $('#close_popup_replay_game').bind('click', function(){
        $('.popup_replay').css('display','none');
   });
   $('#close_popup_game_not_open').bind('click', function(){
        $('#popup_game_not_open').css('display','none');
   });
   $('#close_popup_play_btn').bind('click', function(){
        $('#popup_game_play').css('display','none');
   });
});
