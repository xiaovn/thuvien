String.prototype.concat = function() {
    return this.replace(/ /g, "_");
};
$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};

$(window).load(function(){
    var question_index = 0;
    var next_avaiable = false;
    var goldenkid = false;
    var review_mode = false;
    var score = 0;
	var _correct;
    var number_question = $('.class_picture .lesstion').length;
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		goldenkid = true;
    	}
    var practice_list_answer = []; 
    /*------------------*/
   $('.class_picture audio,.class_picture video').mediaelementplayer({
        features: ['playpause','progress','current','duration','tracks','fullscreen'],
   });
   $('.class_picture .change_ques_btn').bind('click', function() {   
    		var _self = $(this);
    		if ((question_index == 0) && (parseInt($(_self).attr('value')) == -1)) {
    			 question_index = 0;
    		} else if ((question_index == (number_question) - 1) && (parseInt($(_self).attr('value')) == 1)) {
    			question_index = (number_question) - 1;
    		}else{
    		  if(next_avaiable == true || review_mode == true){
				  if(review_mode == false){
						next_avaiable = false; 
					}
    		      $('.class_picture .word_answer').eq(question_index).attr('disabled','true');
    		      question_index = question_index + parseInt($(_self).attr('value'));
                    if(goldenkid != true && question_index >= 2){
                        loadAudioSeekbar('.class_picture','audio_none_goldenkids');
                       $('.class_picture #popup_non_goldenkid').fadeIn(300,function(){
                            playAudioSeekbar('.class_picture', 'audio_none_goldenkids');
        				 	$('.class_picture #thong_bao_png').animate({
        					 	top: '10px' 
        					},1000,'linear');                                              
        				});                     
                    }else{
                        if($.browser.webkit && !window.chrome){
                            playAudioSeekbar('.class_picture','cm_audio_'+question_index);
                            pauseAudioSeekbar('.class_picture');             
                        }
            			$('.class_picture .lesstion').css('display','none');
                        $('.class_picture .lesstion').eq(question_index).fadeIn(300, function(){
                            playAudioSeekbar('.class_picture','cm_audio_'+question_index);
                        });
                        $('.class_picture #name_lession').html($('.lesstion').eq(question_index).attr('name'));
                        if(question_index == (number_question) - 1 && review_mode == false){
                            $('.class_picture #out_line_btn').css('display','none');
                            $('.class_picture .change_ques_btn').css('display','none'); 
                            $('.class_picture #submit_btn').fadeIn(300);
                        }else if(question_index == (number_question) - 1 && review_mode == true){
                             /*$('.class_picture #out_line_btn').css('display','none');*/
                            $('.class_picture .change_ques_btn').css('display','none'); 
                           $('.class_picture #result_btn').fadeIn(300); 
                        }
                    }
                    /*top audio*/
                    pauseAudioSeekbar('.class_picture');           
        		}
        }
   	});
    $('.class_picture .lesstion').each(function(index,element){
            var name = $(element).attr('name');            
            createEleHtml('div','lession_'+index,'menu_lession','','#list_lesstion_content');
            $('.class_picture #lession_'+index).html(name); 
    });
    
    $('.class_picture .lesstion').each(function(index,element){
        $(element).find('video, audio').attr('id',"cm_audio_"+index);
    });
	
    $('.class_picture #out_line_btn').bind('click', function(){
       $('.class_picture #out_line_page').fadeIn(300);
       $('.class_picture .menu_lession').removeClass('menu_active'); 
       $('.class_picture .menu_lession').eq(question_index).addClass('menu_active');
    });
	
    $('.class_picture #close_list_less_btn').bind('click', function(){
         $('.class_picture #out_line_page').css('display','none');
    });
	
    $('.class_picture .menu_lession').bind('click', function(){
        $('.class_picture #out_line_page').css('display','none');
        var choose_lesstion = $(this).text();
        question_index = $(this).index();
        if(goldenkid != true && question_index >= 2){
               $('.class_picture #popup_non_goldenkid').fadeIn(300,function(){
				 	$('.class_picture #thong_bao_png').animate({
					 	top: '10px' 
					},1000,'linear');
				});
        }else{             
            $('.class_picture .lesstion').css('display','none');
            $('.class_picture .lesstion').each(function(index,element){
                if($(element).attr('name') == choose_lesstion){
                    if(question_index == (number_question) - 1){
                        $('.class_picture .change_ques_btn').css('display','none');
                        $('.class_picture .result_btn').fadeIn(300);
                    }else{                        
                        $('.class_picture .result_btn').css('display','none');
                        $('.class_picture .change_ques_btn').fadeIn(300);
                    }
                    $(element).fadeIn(300);                    
                    $('.class_picture #name_lession').html(choose_lesstion);
                }             
            });
            pauseAudioSeekbar('.class_picture');          
        }
        
    });
    $('.class_picture #start_btn').bind('click', function(){
        if($.browser.webkit && !window.chrome){
            playAudioSeekbar('.class_picture','cm_audio_'+question_index);
            pauseAudioSeekbar('.class_picture');             
        }
        $('.class_picture #start_screen').css('display','none');
        $('.class_picture #name_lession').html($('.class_picture .lesstion').eq(0).attr('name'));        
        $('.class_picture #next_btn').fadeIn(300);
        $('.class_picture .lesstion').eq(0).fadeIn(300, function(){
            playAudioSeekbar('.class_picture','cm_audio_'+question_index);
        });
        $('.class_picture #practice_intruction').fadeIn(300);
    });
    
    $('.class_picture #redo_btn').bind('click',function(){
        if($.browser.webkit && !window.chrome){
            playAudioSeekbar('.class_picture','cm_audio_0');
            pauseAudioSeekbar('.class_picture');             
        }
        question_index = 0;
        score =0;
        review_mode = false;
		next_avaiable = false;
		$('.class_picture .ques_img .icon_result').css('display','none');
		$('.ques_img').css("border-color", "#ff898c");
        $('.class_picture #out_line_btn').css('display','none');
        $('.class_picture #popup_congratulation').css('display','none');
        $('.class_picture .lesstion').css('display','none');
        $('.class_picture .lesstion').eq(0).fadeIn(300, function(){
            playAudioSeekbar('.class_picture','cm_audio_0');
        });
        $('.class_picture .change_ques_btn').css('display','none');        
        $('.class_picture #next_btn').fadeIn(300);        
        $('.class_picture .icon_result').css('display','none');        
        $('.class_picture #name_lession').html($('.lesstion').eq(question_index).attr('name'));          
    });
    $('.class_picture #submit_btn, .class_picture #result_btn').bind('click', function(){
		if(next_avaiable == true || review_mode == true){
			$('.class_picture .result_btn').css('display','none');
				 $('.class_picture .ques_img').each(function(index, element){
					 	$(element).find('.tick').css('display','block');
						if($(element).attr('answer')=='true'){
								$(element).find('.icon_result').css('display','block');
							}
						$(element).find('.tick').css('display','block');
						var correct = $(element).attr('correct');
						var answer = $(element).attr('answer');
						if(correct && answer && answer == correct){
							score++;
						}
					});
				$('.class_picture #result_game').html(score+'/'+number_question);
				$('.class_picture #popup_congratulation').fadeIn(300, function(){
					score = 0;
				});
				pauseAudioSeekbar('.class_picture'); 
		}
    });
    $('.class_picture #review_btn').bind('click', function(){
        review_mode = true;
        question_index = 0; 
        $('.class_picture #out_line_btn').fadeIn(300);
        $('#popup_congratulation').css('display','none');
        $('.class_picture .lesstion').css('display','none');
        $('.class_picture #out_line_btn').fadeIn(300);
        $('.class_picture .lesstion').eq(0).fadeIn(300); 
        $('.class_picture .change_ques_btn').fadeIn(300);
        $('.class_picture .form_answer_correct').css('display','block');
        $('.class_picture #name_lession').html($('.class_picture .lesstion').eq(question_index).attr('name'));        
    });
    /*setAnser*/
	$('.class_picture .ques_img').bind('click',function(){
			if(review_mode==false){
				next_avaiable = true;
				$(this).siblings('.ques_img').removeAttr('answer');
				$(this).siblings('.ques_img').css("border-color", "#ff898c");
				$(this).attr('answer','true');
				$(this).css("border-color", "#ff0000");
			}
		});
});