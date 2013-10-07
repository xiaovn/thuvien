var src_sentence = link_game_tieng_anh_qua_phim + '/sentengame/';
var gameSentence = {};
gameSentence.list_sound = [];
gameSentence.question_index = 0;
gameSentence.sentence_correct_answer = 0;
gameSentence.dropable = false;

$(window).load(function(){
    gameSentence.initQuestion_Sentence = function() {
	$('.box_q_button').each(function(index, element) {
			if (index != gameSentence.question_index) {
				$(element).css('display', 'none');
			}
		});
		gameSentence.number_char = parseInt($('.box_q_button').eq(gameSentence.question_index).attr('number_char'));
		gameSentence.audio = gameSentence.list_sound[gameSentence.question_index];
		stopSound();
        playSound(gameSentence.audio, 0);
		$('.box_q_button').eq(gameSentence.question_index).fadeIn(300, function(){
		  //console.log(this);
          $(this).find('.ui-draggable-disabled').each(function(index, element){
            //console.log(element);
            gameSentence.sentence_correct_answer++;
          });
		});
		$(gameSentence.audio).bind($.jPlayer.event.ended, function() {
			$('#sentence_playing_btn').fadeOut(300);
			$('#sentence_stream').fadeOut(300);
			$('#sentence_play_btn').fadeIn(300);
			gameSentence.dropable = true;
		});
        $('#sentengame_true').css('display','none');
        $('#sentengame_false').fadeIn(300);
    }
    gameSentence.sentence_success_question = function() {
    	stopSound();
    	playSound(gameSentence.audio_success, 0);
    	$('#sentence_playing_btn').fadeOut(300);
    	$('#sentence_stream').fadeOut(300);
    	$('#sentence_play_btn').fadeIn(300);
        $('#sentengame_false').css('display','none');
        $('#sentengame_true').fadeIn(300);
    }
    gameSentence.select_item = function(drop) {
    	var parent_drop = $(drop).parent();
    	var parent = $(parent_drop).siblings('.box_but_2');
    	$(parent).children().each(function(index, element) {
    		if ($(element).attr('lang') == $(drop).attr('lang')) {
    			$(element).droppable({
    				accept: $(drop),
    				tolerance: 'intersect',
    				drop: function(event, ui) {
    					gameSentence.sentence_correct_answer++;
    					if (gameSentence.sentence_correct_answer == gameSentence.number_char) {
    						gameSentence.sentence_success_question();
    						gameSentence.sentence_correct_answer = 0;
    					}
    					$(ui.draggable).draggable('disable');
    					$(ui.draggable).addClass('orange');
    					$(this).addClass('orange');
    					var drop_p = $(this).offset();
    					var drag_p = $(ui.draggable).offset();
    					var left_end = drop_p.left - drag_p.left + 1;
    					var top_end = drop_p.top - drag_p.top + 1;
    					$(ui.draggable).animate({
    						top: '+=' + top_end,
    						left: '+=' + left_end
    					});
    				}
    			});
    		}
    	});
    }
    
    
    
	gameSentence.number_question = $('.box_q_button').length;
	$('.box_q_button').each(function(index, element) {
		gameSentence.list_sound[index] = createSound(src_sentence + 'audios/' + $(element).attr('sound'), '', '#audio_sentence');
	});
	gameSentence.audio_success = createSound(src_sentence + 'audios/success', '', '#audio_sentence');
	$('#start_btn_sentence').click(function() {
		$('.drag').draggable({
			revert: "invalid",
			start: function(event, ui) {
				gameSentence.select_item($(this));
			}
		});
		$('.q_main_start').fadeOut(300);
		$('.q_footer').fadeIn(300);
		gameSentence.initQuestion_Sentence();
        $('.drag').each(function(index,element){
            $(element).css('left',$(element).attr('init_left', $(element).position().left));
            $(element).css('top',$(element).attr('init_top', $(element).position().top));
        });
	});
	$('.change_ques_btn_sentence').bind('click', function() {
		var _self = $(this);
		if ((gameSentence.question_index == 0) && (parseInt($(_self).attr('value')) == -1)) {
			gameSentence.question_index = 0;
		} else if ((gameSentence.question_index == (gameSentence.number_question) - 1) && (parseInt($(_self).attr('value')) == 1)) {
			gameSentence.question_index = (gameSentence.number_question) - 1;
		} else {
			stopSound();
            gameSentence.sentence_correct_answer = 0;
			gameSentence.question_index = gameSentence.question_index + parseInt($(_self).attr('value'));
            if(gameSentence.question_index == 2 && goldenkids != true){
                    $(document).trigger('sen_none_goldenkids');
                }else{
        			var slide_order = gameSentence.question_index;
        			$('.sp_num').text((slide_order + 1) + ' of ' + (gameSentence.number_question));
        			$('#sentence_playing_btn').fadeIn(300);
        			$('#sentence_stream').fadeIn(300);
        			$('#sentence_play_btn').fadeOut(300);
        			gameSentence.initQuestion_Sentence();
                    if (gameSentence.question_index == (gameSentence.number_question) - 1){
                        $('#redo_sentengame_btn').fadeIn(300);
                     }
            }
		}
	});
    $('#redo_sentengame_btn').bind('click', function(){
         $(this).css('display','none');
         gameSentence.question_index = 0;
        gameSentence.initQuestion_Sentence();
         $('.sp_num').text('1 of '+gameSentence.number_question);
         $('#sentence_playing_btn').fadeIn(300);
         $('#sentence_stream').fadeIn(300);
         $('#sentence_play_btn').fadeOut(300);
         $('.drag').each(function(index,element){
            $(element).css('left',$(element).css('left', '0px'));
            $(element).css('left',$(element).css('top', '0px'));
            $(element).removeClass('orange ui-draggable-disabled ui-state-disabled');
            $(element).removeAttr('aria-disabled');
            $(element).draggable("enable");        
        });
        $('.dropp').each(function(index, element){
          $(element).removeClass('ui-droppable orange');  
        });    
	});
    
	$('#sentence_play_btn').bind('click', function() {
		stopSound();
		playSound(gameSentence.audio, 0);
		$('#sentence_playing_btn').fadeIn(300);
		$('#sentence_stream').fadeIn(300);
		$('#sentence_play_btn').fadeOut(300);
	});
    
    $(document).bind('sen_none_goldenkids',function(){
	   playSound(gameLAW.sound_none_goldenkids,0);
			$('#popup_non_goldenkid_sen').fadeIn(300,function(){
			 	$('#thong_bao_sen').animate({
				 	top: '100px' 
				},1000,'linear');
			});
	});	
});
// JavaScript Document