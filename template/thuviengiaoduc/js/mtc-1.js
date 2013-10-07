String.prototype.concat = function() {
    return this.replace(/ /g, "_");
};
$(window).load(function(){
    var question_index = 0;
    var next_avaiable = false;
    var goldenkid = false;
    var review_mode = false;
    var score = 0;
    var number_question = $('.class_mtc .lesson').length;
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		goldenkid = true;
    	}
    var practice_list_answer = [];
    $('#mtc_content audio').each(function(index,element){
        $(element).attr('id','mtc_audio_'+index);
    }) 
    /*------------------*/
   $('.class_mtc audio,.class_mtc video').mediaelementplayer({
        features: ['playpause','progress','current','duration','tracks','fullscreen'],
   });
   $('.class_mtc .change_ques_btn').bind('click', function() {   
    		var _self = $(this);
    		if ((question_index == 0) && (parseInt($(_self).attr('value')) == -1)) {
    			 question_index = 0;
    		} else if ((question_index == (number_question) - 1) && (parseInt($(_self).attr('value')) == 1)) {
    			question_index = (number_question) - 1;
    		}else{   		  
    		  if(next_avaiable == true){
                  /*top audio*/
                  pauseAudioSeekbar('.class_mtc');  
                  if(review_mode == false){
                    next_avaiable = false; 
                  }
    		      question_index = question_index + parseInt($(_self).attr('value'));
                    if(goldenkid != true && question_index >= 2){
                        loadAudioSeekbar('.class_mtc','goldenkids');
                       $('.class_mtc #popup_non_goldenkid').fadeIn(300,function(){
                            playAudioSeekbar('.class_mtc','goldenkids');
        				 	$('.class_mtc #thong_bao_png').animate({
        					 	top: '10px' 
        					},1000,'linear');                                              
        				});                     
                    }else{
                        //console.log('mtc_audio_'+question_index);
                        if(document.getElementById('mtc_audio_'+question_index)){
                            playAudioSeekbar('.class_mtc','mtc_audio_'+question_index);
                        }
            			$('.class_mtc .lesson').css('display','none');
                        $('.class_mtc .lesson').eq(question_index).fadeIn(300);
                        $('.class_mtc #name_lession').html($('.class_mtc .lesson').eq(question_index).attr('name'));
                        if(question_index == (number_question) - 1 && review_mode == false){
                            $('.class_mtc #out_line_btn').css('display','none');
                             $('.class_mtc .change_ques_btn').css('display','none'); 
                            $('.class_mtc #submit_btn').fadeIn(300);
                        }else if(question_index == (number_question) - 1 && review_mode == true){
                             /*$('.class_mtc #out_line_btn').css('display','none');*/
                           $('.class_mtc .change_ques_btn').css('display','none'); 
                           $('.class_mtc #result_btn').fadeIn(300); 
                        }
                    }                             
        		}
        }
   	});
    $('.class_mtc .lesson').each(function(index,element){
            var name = $(element).attr('name');            
            createEleHtml('div','lession_'+index,'menu_lession','','.class_mtc #list_lesson_content');
            $('.class_mtc #lession_'+index).html(name);
            $(element).find('input').attr('name','choice_'+index); 
    });
    
    $('.class_mtc #out_line_btn').bind('click', function(){
       $('.class_mtc #out_line_page').fadeIn(300);
       $('.class_mtc .menu_lession').removeClass('menu_active'); 
       $('.class_mtc .menu_lession').eq(question_index).addClass('menu_active');
    });
    $('.class_mtc #close_list_less_btn').bind('click', function(){
         $('.class_mtc #out_line_page').css('display','none');
    })
    $('.class_mtc .menu_lession').bind('click', function(){
        $('.class_mtc #out_line_page').css('display','none');
        var choose_lesson = $(this).text();
        question_index = $(this).index();
        if(goldenkid != true && question_index >= 2){
               $('.class_mtc #popup_non_goldenkid').fadeIn(300,function(){
				 	$('.class_mtc #thong_bao_png').animate({
					 	top: '10px' 
					},1000,'linear');
				});
        }else{             
            $('.class_mtc .lesson').css('display','none');
            $('.class_mtc .lesson').each(function(index,element){
                if($(element).attr('name') == choose_lesson){
                    if(question_index == (number_question) - 1){
                        $('.class_mtc .change_ques_btn').css('display','none');
                        $('.class_mtc .result_btn').fadeIn(300);
                    }else{                        
                        $('.class_mtc .result_btn').css('display','none');
                        $('.class_mtc .change_ques_btn').fadeIn(300);
                    }
                    $(element).fadeIn(300);                    
                    $('.class_mtc #name_lession').html(choose_lesson);
                }             
            });
            pauseAudioSeekbar('.class_mtc');          
        }
        
    });
    
    $('.class_mtc #start_btn').bind('click', function(){
        if($.browser.webkit && !window.chrome){
            if(document.getElementById('mtc_audio_'+question_index)){
                playAudioSeekbar('.class_mtc','mtc_audio_'+question_index);
                pauseAudioSeekbar('.class_mtc');            
            } 
        }
        $('.class_mtc #start_screen').css('display','none');
        $('.class_mtc #name_lession').html($('.class_mtc .lesson').eq(0).attr('name'));        
        $('.class_mtc #next_btn').fadeIn(300);
        $('.class_mtc .lesson').eq(0).fadeIn(300,function(){
            if(document.getElementById('mtc_audio_'+question_index)){
                playAudioSeekbar('.class_mtc','mtc_audio_'+question_index);
            }
        });
        $('.class_mtc #practice_intruction').fadeIn(300);
    });
    
    $('.class_mtc #redo_btn').bind('click',function(){
        question_index = 0;
        score =0;
        review_mode = false;
        next_avaiable = false;
        $('#mtc_content .icon').remove();
        $('.class_mtc input').removeAttr('checked');
        $('.class_mtc input').removeAttr('disabled');
        $('.class_mtc .result_screen').css('display','none');        
        $('.class_mtc #out_line_btn').css('display','none');
        $('.class_mtc #popup_congratulation').css('display','none');
        $('.class_mtc .lesson').css('display','none');
        $('.class_mtc .lesson').eq(0).fadeIn(300);
        $('.class_mtc .change_ques_btn').css('display','none');        
        $('.class_mtc #next_btn').fadeIn(300);        
        $('.class_mtc .icon_result').css('display','none');
        $('.class_mtc .form_answer_correct').css('display','none');         
        $('.class_mtc #name_lession').html($('.class_mtc .lesson').eq(question_index).attr('name'));          
    });
    $('.class_mtc #submit_btn, .class_mtc #result_btn').bind('click', function(){
        if(next_avaiable == true || review_mode == true){
            $('#mtc_content .icon').remove();
            $('.class_mtc .result_btn').css('display','none');
            $('.class_mtc .lesson').each(function(index, element){
                var _lesson = element;
                $(_lesson).find('input').each(function(index,element){
                    var _self = $(element).parent();
                    if($(element).attr('crt') && $(element).attr('checked')){
                        score++;
                        console.log(score);
                        $('.class_mtc #icon .tick').clone().prependTo(_self);    
                    }else if($(element).attr('checked')){
                        $('.class_mtc #icon .cross').clone().prependTo(_self);
                    }else if($(element).attr('crt')){
                        $('.class_mtc #icon .tick').clone().prependTo(_self);
                    }                
                });
            });
                       
            $('.class_mtc #result_game').html(score+'/'+$('.class_mtc .lesson').length);
            $('.class_mtc #popup_congratulation').fadeIn(300, function(){
                score = 0;
            });            
            pauseAudioSeekbar('.class_mtc');
       } 
    });
    
    $('.class_mtc #review_btn').bind('click', function(){
        review_mode = true;
        $('.class_mtc input').attr("disabled", "disabled");
        $('.class_mtc .result_screen').css('display','block');
        question_index = 0; 
        $('.class_mtc #out_line_btn').fadeIn(300);
        $('.class_mtc #popup_congratulation').css('display','none');
        $('.class_mtc .lesson').css('display','none');
        $('.class_mtc #out_line_btn').fadeIn(300);
        $('.class_mtc .lesson').eq(0).fadeIn(300, function(){
            if(document.getElementById('mtc_audio_'+question_index)){
                playAudioSeekbar('.class_mtc','mtc_audio_'+question_index);
            }
        }); 
        $('.class_mtc .change_ques_btn').fadeIn(300);
        $('.class_mtc .form_answer_correct').css('display','block');
        $('.class_mtc #name_lession').html($('.class_mtc .lesson').eq(question_index).attr('name'));        
    });
    $('.class_mtc .drag input').bind('click', function(){
        next_avaiable = true;
    })
});