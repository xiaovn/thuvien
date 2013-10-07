var src_lw = link_game_tieng_anh_qua_phim+'vocabgame/';
var gameLAW = new createGame();
createGame.prototype.initQuestion = function() {
	gameLAW.audio = gameLAW.list_sound[gameLAW.index_question];
    playSound(gameLAW.audio,0);
	$('#img_question_law').attr('src', src_lw + 'imgs_que/' +gameLAW.img);
	gameLAW.correctChar = $('.pronun_input_law').eq(gameLAW.index_question).attr('char_correct');
    $(gameLAW.audio).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){
		$('#play_audio_law').fadeIn(300);
		$('#playing_law').fadeOut(300);
	});
}

gameLAW.list_sound = [];
gameLAW.index_question = 0;
gameLAW.change_ques_avaiable = false;
gameLAW.img = '1-2.png'/*tpa=http://www.thuviengiaoduc.org/file/learn/child/learn_through_movies/dungchung/vocargame/js/1.png*/;
$(window).load(function() {
	gameLAW.number_question = $('.pronun_input_law').length;
	gameLAW.sound_correct = createSound(src_lw+'audios/correct', '', '#sound_law');
    gameLAW.sound_none_goldenkids  = createSound(link_game_tieng_anh_qua_phim+'dungchung/trangchinh/audios/none_goldelkilds','','#sound');
	for (var i = 0; i < gameLAW.number_question; i++) {
		var index = i;
		index++;
		gameLAW.list_sound[i] = createSound(src_lw+'audios/question_' + index, '', '#sound_law');
	}
	$(document).ready(function() {
		$('.q_submit_start_law').click(function() {
			$(this).parent().hide();
			$('.dang3_box_q_button_law:first').addClass('dang3_active_law');
			$('.q_footer_law *').not('#redo_vocargame_btn').fadeIn(300);
			$('.pronun_input_law').eq(0).css('display','block');
			$('#sp_num_law').text('1 of '+gameLAW.number_question);
			gameLAW.initQuestion();
		});
        
		$('.pro_put_law').keypress(function() {
				$(this).val('');
			});
		$('.pro_put_law').keyup(function() {
			if($(this).val()==$(this).parent().attr('char_correct')){
				$(this).attr('disabled','true');
                $(this).css('color','#F00');
                $('#vocargame_false').css('display','none');
                $('#vocargame_true').fadeIn(300);
				playSound(gameLAW.sound_correct,0);
				}else{
                    $('#vocargame_true').css('display','none');				    
                    $('#vocargame_false').fadeIn(300);
				}
		});
		$('.change_ques_btn_law').bind('click',function(){
				var _self  = $(this);
			if((gameLAW.index_question==0)&&(parseInt($(_self).attr('value'))==-1)){
				gameLAW.index_question = 0;
				}
			else if((gameLAW.index_question==(gameLAW.number_question)-1)&&(parseInt($(_self).attr('value'))==1)){
				gameLAW.index_question = (gameLAW.number_question)-1;
				}
			else{
				stopSound();
                $('.vocargame_status').css('display','none');
				gameLAW.index_question = gameLAW.index_question+parseInt($(_self).attr('value'));
                if(gameLAW.index_question == 2 && goldenkids != true){
                    $(document).trigger('law_none_goldenkids');
                }else{
    				gameLAW.img = $('.pronun_input_law').eq(gameLAW.index_question).attr('img');
    				gameLAW.initQuestion();
    				var slide_order = gameLAW.index_question;
    				$('#sp_num_law').text((slide_order+1)+' of '+(gameLAW.number_question));
    				$('#play_audio_law').fadeOut(300);
    				$('#playing_law').fadeIn(300);
    				$('.pronun_input_law').each(function(index, element) {
                        if(index!=gameLAW.index_question){
    						$(element).fadeOut(300);
    						}
    					});
    				$('.pronun_input_law').eq(gameLAW.index_question).fadeIn(300);
                        if(gameLAW.index_question==(gameLAW.number_question)-1){
                            $('#redo_vocargame_btn').fadeIn(300);
                        }
    				}
                }
			});
			$('#redo_vocargame_btn').bind('click', function(){
   			      $(this).css('display','none');
			     $('.vocargame_status').css('display','none');
                 gameLAW.index_question = 0;
                 gameLAW.img = '1-2.png'/*tpa=http://www.thuviengiaoduc.org/file/learn/child/learn_through_movies/dungchung/vocargame/js/1.png*/;
                 $('.pro_put_law').val('');
                 $('.pro_put_law').removeAttr('disabled');
                 $('#sp_num_law').text('1 of '+gameLAW.number_question);
                 $('.pronun_input_law').each(function(index, element) {
                    if(index!=gameLAW.index_question){
						$(element).fadeOut(300);
						}
					});
				$('.pronun_input_law').eq(gameLAW.index_question).fadeIn(300);
                gameLAW.initQuestion();        
			});
            
			$('#play_audio_law').bind('click', function(){
					stopSound();
					$(this).fadeOut(300);
					$('#playing_law').fadeIn(300);
					playSound(gameLAW.audio,0);
					$(gameLAW.audio).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){
						$('#play_audio_law').fadeIn(300);
						$('#playing_law').fadeOut(300);
					});
			});
	});
    $(document).bind('law_none_goldenkids',function(){
        stopSound();
	   playSound(gameLAW.sound_none_goldenkids,0);
			$('#popup_non_goldenkid_law').fadeIn(300,function(){
			 	$('#thong_bao_law').animate({
				 	top: '100px' 
				},1000,'linear');
			});
	});	
});

