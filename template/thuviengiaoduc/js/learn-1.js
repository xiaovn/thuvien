String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.concat = function() {
    return this.replace(/ /g, "_");
};
$(window).load(function(){
    var question_index = 0;
    var next_avaiable = true;
    var goldenkid = false;
    var number_question = $('.class_learning .lesstion').length;
    $('.class_learning .lesstion').each(function(index, element){
        $(element).find("video, audio").attr('id','learn_audio_'+index);       
    });
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		goldenkid = true;
    	}
   $('.class_learning audio,.class_learning video').mediaelementplayer({
        features: ['playpause','progress','current','duration','tracks','fullscreen'],
   });
   $('.class_learning .change_ques_btn').bind('click', function() {   
    		var _self = $(this);
    		if ((question_index == 0) && (parseInt($(_self).attr('value')) == -1)) {
    			 question_index = 0;
    		} else if ((question_index == (number_question) - 1) && (parseInt($(_self).attr('value')) == 1)) {
    			question_index = (number_question) - 1;
    		}else{   		  
    		  if(next_avaiable == true){
    		      question_index = question_index + parseInt($(_self).attr('value'));
                    if(goldenkid != true && question_index >= 2){
                        loadAudioSeekbar('.class_learning','audio_none_goldenkids');
                       $('.class_learning .popup_non_goldenkid').fadeIn(300,function(){
                            playAudioSeekbar('.class_learning', 'audio_none_goldenkids');
        				 	$('.class_learning .thong_bao_png').animate({
        					 	top: '10px' 
        					},1000,'linear');
        				});                     
                    }else{
                        if($.browser.webkit && !window.chrome){
                            if(document.getElementById('learn_audio_'+question_index)){
                                playAudioSeekbar('.class_learning','learn_audio_'+question_index);
                                pauseAudioSeekbar('.class_learning');            
                            } 
                        }
            			$('.class_learning .lesstion').css('display','none');
                        $('.class_learning .lesstion').eq(question_index).fadeIn(300, function(){
                            if(document.getElementById('learn_audio_'+question_index)){
                                playAudioSeekbar('.class_learning','learn_audio_'+question_index);
                            }
                        });
                        $('.class_learning .name_lession').html($('.class_learning .lesstion').eq(question_index).attr('name'));
                        if(question_index == number_question-1){
                             $('.class_learning .out_line_btn').css('display','none');
                             $('.class_learning .change_ques_btn').css('display','none');
                             $('.class_learning .theend_btn').fadeIn(300);
                        }
                    }                   
                     $('.class_learning video, .class_learning audio').each(function() {
                            var _self = $(this);
                            if($.browser.mozilla){                                
                                $(_self)[0].player.pause();
                            }else{
                                    var name = $(_self).attr('id');
                                    MediaElement(name, {
                                        success: function(me) {
                                        me.pause();
                                    }                            		  
                                });
                            }
                     });             
        		}
        }
   	});
    $('.class_learning .lesstion').each(function(index,element){
            var name = $(element).attr('name');
            //console.log(name);            
            createEleHtml('div','lession_'+index,'menu_lession','','.class_learning .list_lesstion_content');
            $('.class_learning #lession_'+index).html(name); 
    });
    
    $('.class_learning .out_line_btn').bind('click', function(){
       $('.class_learning .out_line_page').fadeIn(300);
       $('.class_learning .menu_lession').removeClass('menu_active'); 
       $('.class_learning .menu_lession').eq(question_index).addClass('menu_active'); 
    });
    $('.class_learning .close_list_less_btn').bind('click', function(){
         $('.class_learning .out_line_page').css('display','none');
    })
    $('.class_learning .menu_lession').bind('click', function(){
        $('.class_learning .out_line_page').css('display','none');
        var choose_lesstion = $(this).text();
        question_index = $(this).index();
        if(goldenkid != true && question_index >= 2){
                loadAudioSeekbar('.class_learning','audio_none_goldenkids');
               $('.class_learning .popup_non_goldenkid').fadeIn(300,function(){
                    playAudioSeekbar('.class_learning', 'audio_none_goldenkids');
				 	$('.class_learning .thong_bao_png').animate({
					 	top: '10px' 
					},1000,'linear');
				});
        }else{             
            $('.class_learning .lesstion').css('display','none');
            $('.class_learning .lesstion').each(function(index,element){
                if($(element).attr('name') == choose_lesstion){
                    $(element).fadeIn(300);
                    $('.class_learning .name_lession').html(choose_lesstion);
                }             
            });
            if(question_index == (number_question) - 1){
                $('.class_learning .change_ques_btn').css('display','none');
                $('.class_learning .theend_btn').fadeIn(300);
            }else{                        
                $('.class_learning .theend_btn').css('display','none');
                $('.class_learning .change_ques_btn').fadeIn(300);
            }
            pauseAudioSeekbar('.class_learning');         
        }
        
    });
    $('.class_learning .start_btn').bind('click', function(){
        $('.class_learning .start_screen').css('display','none');
        $('.class_learning .name_lession').html($('.class_learning .lesstion').eq(0).attr('name'));
        $('.class_learning .out_line_btn').fadeIn(300);
        $('.class_learning .change_ques_btn').fadeIn(300);
        $('.class_learning .lesstion').eq(0).fadeIn(300);
    })
    
    $('.class_learning .theend_btn').bind('click', function(){
        pauseAudioSeekbar('.class_learning');
        $('.class_learning .popup_congratulation').fadeIn(300);
    });
    
    $('.class_learning .review_btn').bind('click', function(){
        $('.class_learning .popup_congratulation').css('display','none');
        question_index = 0;
        $('.class_learning .lesstion').css('display','none');
        $('.class_learning .lesstion').eq(0).fadeIn(300);
        $('.class_learning .name_lession').html($('.class_learning .lesstion').eq(0).attr('name'));
        $('.class_learning .theend_btn').css('display','none');
         $('.class_learning .change_ques_btn').fadeIn(300);
         $('.class_learning .out_line_btn').fadeIn(300);
    });
    
});