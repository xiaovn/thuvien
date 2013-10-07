String.prototype.concat = function() {
    return this.replace(/ /g, "_");
};
$(window).load(function(){
    var question_index = 0;
    var next_avaiable = false;
    var goldenkid = false;
    var review_mode = false;
    var score = 0;
    var number_question = $('.class_sequencing .lesson').length;
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		goldenkid = true;
    	}
    var practice_list_answer = []; 
    /*------------------*/   
    $( ".class_sequencing .wrap_drag" ).sortable({
         change: function(event, ui) {
            next_avaiable = true;
        }
    });
    $('#sequencing_content audio, #sequencing_content video').each(function(index,element){
        $(element).attr('id','sqc_audio_'+index);
    }); 
    $('.class_sequencing audio, .class_sequencing video').mediaelementplayer({
         features: ['playpause','progress','current','duration','tracks','fullscreen'],
    });
    $( ".class_sequencing .wrap_drag" ).disableSelection();
    $('.class_sequencing .change_ques_btn').bind('click', function() {            
    		var _self = $(this);            
            /*top audio*/
            pauseAudioSeekbar('.class_sequencing');   
    		if ((question_index == 0) && (parseInt($(_self).attr('value')) == -1)) {
    			 question_index = 0;
    		}else if ((question_index == (number_question) - 1) && (parseInt($(_self).attr('value')) == 1)) {
    			question_index = (number_question) - 1;
    		}else{   		  
    		  if(next_avaiable == true){    		      
    		      $('.class_sequencing .word_answer').eq(question_index).attr('disabled','true');
    		      question_index = question_index + parseInt($(_self).attr('value'));
                  if(review_mode == false){
    		          next_avaiable = false;
                      playAudioSeekbar('#sequencing_content','sqc_audio_'+question_index);
                  }else{
                      if(practice_list_answer[question_index] == 1){
                         if ($.browser.mozilla) {
                            loadAudioSeekbar('.class_sequencing', "sqc_audio_correct");  
                         }                         
                         playAudioSeekbar('.class_sequencing','sqc_audio_correct');
                      } else{
                         if ($.browser.mozilla) {
                            loadAudioSeekbar('.class_sequencing', "sqc_audio_fall");
                         }
                         playAudioSeekbar('.class_sequencing','sqc_audio_fall');
                      } 
                  }
                    if(goldenkid != true && question_index >= 2){
                        loadAudioSeekbar('.class_sequencing', "audio_none_goldenkids");                        
                       $('.class_sequencing #popup_non_goldenkid').fadeIn(300,function(){
                            playAudioSeekbar('.class_sequencing', 'audio_none_goldenkids');
        				 	$('.class_sequencing #thong_bao_png').animate({
        					 	top: '10px' 
        					},1000,'linear');                                              
        				});                     
                    }else{                                              
            			$('.class_sequencing .lesson').css('display','none');
                        $('.class_sequencing .lesson').eq(question_index).fadeIn(300);
                        $('.class_sequencing #name_lession').html($('.class_sequencing .lesson').eq(question_index).attr('name'));
                        if(question_index == (number_question) - 1 && review_mode == false){
                            $('.class_sequencing #out_line_btn').css('display','none');
                             $('.class_sequencing .change_ques_btn').css('display','none'); 
                            $('.class_sequencing #submit_btn').fadeIn(300);
                        }else if(question_index == (number_question) - 1 && review_mode == true){
                             /*$('.class_sequencing #out_line_btn').css('display','none');*/
                            $('.class_sequencing .change_ques_btn').css('display','none'); 
                           $('.class_sequencing #result_btn').fadeIn(300); 
                        }
                    }        
        		}
        }
   	});
    $('.class_sequencing .lesson').each(function(index,element){
            var name = $(element).attr('name');            
            createEleHtml('div','lession_'+index,'menu_lession','','.class_sequencing #list_lesson_content');
            $('.class_sequencing #lession_'+index).html(name); 
    });    
    
    $('.class_sequencing #out_line_btn').bind('click', function(){
       $('.class_sequencing #out_line_page').fadeIn(300);
       $('.class_sequencing .menu_lession').removeClass('menu_active'); 
       $('.class_sequencing .menu_lession').eq(question_index).addClass('menu_active');
    });
    $('.class_sequencing #close_list_less_btn').bind('click', function(){
         $('.class_sequencing #out_line_page').css('display','none');
    })
    $('.class_sequencing .menu_lession').bind('click', function(){
        $('.class_sequencing #out_line_page').css('display','none');
        var choose_lesson = $(this).text();
        question_index = $(this).index();
        if(goldenkid != true && question_index >= 2){
               $('.class_sequencing #popup_non_goldenkid').fadeIn(300,function(){
				 	$('.class_sequencing #thong_bao_png').animate({
					 	top: '10px' 
					},1000,'linear');
				});
        }else{             
            $('.class_sequencing .lesson').css('display','none');
            $('.class_sequencing .lesson').each(function(index,element){
                if($(element).attr('name') == choose_lesson){
                    if(question_index == (number_question) - 1){
                        $('.class_sequencing .change_ques_btn').css('display','none');
                        $('.class_sequencing .result_btn').fadeIn(300);
                    }else{                        
                        $('.class_sequencing .result_btn').css('display','none');
                        $('.class_sequencing .change_ques_btn').fadeIn(300);
                    }
                    $(element).fadeIn(300);                    
                    $('.class_sequencing #name_lession').html(choose_lesson);
                }             
            });
            pauseAudioSeekbar('.class_sequencing');          
        }
        
    });
    
    $('.class_sequencing #start_btn').bind('click', function(){
        $('.class_sequencing #start_screen').css('display','none');
        $('.class_sequencing #name_lession').html($('.class_sequencing .lesson').eq(0).attr('name'));        
        $('.class_sequencing #next_btn').fadeIn(300);
        $('.class_sequencing .lesson').eq(0).fadeIn(300, function(){
            playAudioSeekbar('#sequencing_content','sqc_audio_'+question_index);
                    
        });
        $('.class_sequencing #practice_intruction').fadeIn(300);
    });
    
    $('.class_sequencing #redo_btn').bind('click',function(){
        question_index = 0;
        score =0;
        review_mode = false;
        next_avaiable = false;
        $(".class_sequencing .result_icon").remove();
        $(".class_sequencing .wrap_drag").sortable("cancel");
        $(".class_sequencing .wrap_drag").sortable("enable");
        $('.class_sequencing .result_screen').css('display','none');        
        $('.class_sequencing #out_line_btn').css('display','none');
        $('.class_sequencing #popup_congratulation').css('display','none');
        $('.class_sequencing .lesson').css('display','none');
        $('.class_sequencing .lesson').eq(0).fadeIn(300, function(){
            playAudioSeekbar('#sequencing_content','sqc_audio_'+question_index);
        });
        $('.class_sequencing .change_ques_btn').css('display','none');        
        $('.class_sequencing #next_btn').fadeIn(300);        
        $('.class_sequencing .icon_result').css('display','none');
        $('.class_sequencing .form_answer_correct').css('display','none');         
        $('.class_sequencing #name_lession').html($('.class_sequencing .lesson').eq(question_index).attr('name'));          
    });
    $('.class_sequencing #submit_btn, .class_sequencing #result_btn').bind('click', function(){
        if(next_avaiable == true){
            var  _self = this;
            $('.class_sequencing .result_btn').css('display','none');
            $('.class_sequencing .lesson').each(function(index, element){
                var _lesson = $(element);
                var answer = '';
                var correct = $(_lesson).find('.result_screen').text().trim();
                var _index = index;
               $(_lesson).find('.drag').each(function(index,element){              
                        var text = $(element).text().trim();
                        answer = answer + text + ' ';
                });            
                answer = answer.trim();
                if(answer == correct){
                    score++;
                    if($(_self).attr('id') == 'submit_btn'){
                        practice_list_answer[index] = 1;
                        var _parent = $('.class_sequencing .wrap_audio').eq(_index);
                        $('#sqc_icon_result .sqc_correct').clone().addClass('result_icon').insertAfter(_parent);
                    }
                }else if($(_self).attr('id') == 'submit_btn'){
                    practice_list_answer[index] = 0;
                    var _parent = $('.class_sequencing .wrap_audio').eq(_index);
                    $('#sqc_icon_result .sqc_fall').clone().addClass('result_icon').insertAfter(_parent);
                }             
            });            
                $('.class_sequencing #result_game').html(score+'/'+$('.class_sequencing .lesson').length);
                $('.class_sequencing #popup_congratulation').fadeIn(300, function(){
                    score = 0;
                });
                pauseAudioSeekbar('.class_sequencing'); 
        }
    });
    $('.class_sequencing #review_btn').bind('click', function(){
        review_mode = true;
        next_avaiable = true;        
        $('.class_sequencing .result_screen').css('display','block');
        $(".class_sequencing .wrap_drag").sortable("disable");
        question_index = 0;
        if(practice_list_answer[question_index] == 1){
             playAudioSeekbar('.class_sequencing','sqc_audio_correct');
          }else{
            playAudioSeekbar('.class_sequencing','sqc_audio_fall');
          } 
        $('.class_sequencing .result_icon').fadeIn(300);
        $('.class_sequencing #out_line_btn').fadeIn(300);
        $('.class_sequencing #popup_congratulation').css('display','none');
        $('.class_sequencing .lesson').css('display','none');
        $('.class_sequencing #out_line_btn').fadeIn(300);
        $('.class_sequencing .lesson').eq(0).fadeIn(300); 
        $('.class_sequencing .change_ques_btn').fadeIn(300);       
        $('.class_sequencing .form_answer_correct').css('display','block');
        $('.class_sequencing #name_lession').html($('.class_sequencing .lesson').eq(question_index).attr('name'));        
    });
    
});