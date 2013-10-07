var level_btn_avaiable = true;
var _InLev = 0;
var gameFocused = false;
$(window).load(function() {
        var ranking = $('#your-ranking_1').html();
        $('#your-ranking').html(ranking);
    /*------------------------------------------------------------------*/
    
    $(document).bind("click", function(event){
             gameFocused = false;
        });
        $('#sr').bind('click', function(event){
            event.stopPropagation();
            gameFocused = true;
        });
        $(document).keydown(function(e){            
            if(gameFocused == true){                    
       //e.preventDefault();
                var _keyCode = e.keyCode || e.which;
                if(_keyCode == 13){
                  console.log('_keyCode: '+_keyCode);
                  search()         
                }
            }
        });
       
     $('.level-btn').bind('click',function(){
            if(level_btn_avaiable==true){
                var _self = this;
                _InLev = $(_self).index();
                $('.ranking_info').css('background-color','transparent');
                $('#resultSearch').empty();
                $('.level-btn').removeClass('level-btn-active');
                $(_self).addClass('level-btn-active');
                $('.level-btn').animate({
                    top: 0
                },100);
                $(_self).animate({
                    top: 10
                },100,'linear',function(){
                    $('#your-ranking').empty();
                    var id_ranking = $(_self).attr('id_your_ranking');
                    var ranking = $('#'+id_ranking).html();
                    $('#your-ranking').html(ranking);
                    $('.table_ranking').css('display','none');
                    $('.table_ranking').eq($(_self).attr('level')).fadeIn(300,function(){                        
                        search();                       
                    });               
                });
            }
        });
        
     $("#ranking-table").mCustomScrollbar({
        scrollButtons:{
          enable:true
        },
        advanced:{
            updateOnContentResize: true
        }
    }); 
     /*-------------------------------------------------------------------*/
     $('.ranking_info').bind('click', function(){
        $('.ranking_info').css('background-color','transparent');
        $(this).css('background-color','#fdfc9e');
     });
     /*------search--------------------------------------------------------*/
     function search(){
        var _keyWord = $('#sr').val().toLowerCase();
        var _FlagSearch = false;
        var _IndexResult = 0;
        if(_keyWord != ''){
            $('#resultSearch').empty();        
            $('.table_ranking').eq(_InLev).find('.ranking_info').each(function(){           
               var _user  = $(this).find('.ranking_name').text().trim().toLowerCase();
                  if(_user == _keyWord.trim()){
                     _FlagSearch = true;
                     _IndexResult = $(this).index();
                     $('.ranking_info').css('background-color','transparent');
                     $(this).css('background-color','#b9f6be');
                     console.log("_FlagSearch: "+_FlagSearch);
                  }
            });
            if(_FlagSearch == true && _IndexResult> 10){            
                var _scroll = ((_IndexResult*27.5) - 100);
                console.log("_scroll: "+_scroll);
                $("#ranking-table").mCustomScrollbar("scrollTo",_scroll);
            }else if(_FlagSearch == false){
                $('#resultSearch').html("<span style='color: red; font-weight: bold;'>Hãy kiểm tra lại tên đăng nhập hoặc chắc chắn rằng bạn đã tham gia các bài học</span>")
            }
        }
     }
     $('#sbsr').bind('click', function(){
          search();      
     })
     
})