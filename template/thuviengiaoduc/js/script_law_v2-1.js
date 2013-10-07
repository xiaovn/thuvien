$(window).load(function(){
    window.lawNumberQues = $('.pronun_input_law').length;
    window.lawIndexQues = 0;
    window.next_avaiable = true;
    window.goldenkid = false;
    window.lawAudio;
    $('.listen_and_write audio, .listen_and_write video').mediaelementplayer();
    window.check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
  		goldenkid = true;
    }
    $('.listen_and_write audio').each(function(index, element){
        var id = $(element).attr('id');
        loadAudioSeekbar('.listen_and_write', id);
    });
    //window.lawCorrect = $('.pronun_input_law').eq(lawIndexQues).attr('char_correct');    
    $('#listen_and_write .q_submit_start_law').bind('click', function(){
        $('#listen_and_write .q_main_start_law').css('display','none');
        $('.q_footer_law > *, .dang3_box_q_button_law').not('#redo_vocargame_btn').css('display','block');
        window.questionNumber = lawIndexQues;
        questionNumber++;        
        $('#sp_num_law').text(questionNumber+'/'+lawNumberQues);
        playAudioSeekbar('.audio_law', "law_audio_1");
        $(document).trigger('questionComplete');
    });
    $(document).bind('questionComplete', function(){
        $('.pro_put_law').eq(lawIndexQues).keypress(function() {        
    		$(this).val('');
    	});
        
        $('.pro_put_law').eq(lawIndexQues).keyup(function(){
            if($(this).val().toLowerCase() == $('.pronun_input_law').eq(lawIndexQues).attr('char_correct').toLowerCase()){
                $(this).attr('disabled','true');
                $(this).css('color','#F00');
                $(this).blur();
                if($.browser.mozilla){                 
                    loadAudioSeekbar('.listen_and_write',"lawCorrect");
                }
                playAudioSeekbar('.law_audio_hidden',"lawCorrect");
                $('#vocargame_false').css('display','none');
                $('#vocargame_true').css('display','block');
            }else{
                $('#vocargame_false').css('display','block');
            }
        });
    });
    $(document).bind('law_none_goldenkids',function(){        
        playAudioSeekbar('.law_audio_hidden', 'goldenkids');
		$('#popup_non_goldenkid_law').fadeIn(300,function(){
		 	$('#thong_bao_law').animate({
			 	top: '10px' 
			},1000,'linear');
		});
	});	
    $('#redo_vocargame_btn').bind('click', function(){
        $(this).css('display','none');
        lawIndexQues = 0;
        questionNumber = lawIndexQues;
        questionNumber++;        
        $('#sp_num_law').text(questionNumber+'/'+lawNumberQues);
        $('.pronun_input_law').css('display','none');
        $('.pro_put_law').val('');
        $('.pro_put_law').removeAttr('disabled');
        $('.pro_put_law').css('color','black');
        $('.vocargame_status').css('display','none');
        $('.pronun_input_law').eq(lawIndexQues).fadeIn(300);
        lawAudio = $('.audio_law').eq(lawIndexQues).find('audio').attr('id');
        if($.browser.mozilla){
           loadAudioSeekbar('.audio_law',lawAudio);
        }        
        playAudioSeekbar('.audio_law',lawAudio);
        $(document).trigger('questionComplete');
    });
    $('.change_ques_btn_law').bind('click', function() {   
    		var _self = $(this);
    		if ((lawIndexQues == 0) && (parseInt($(_self).attr('value')) == -1)) {
    			 lawIndexQues = 0;
    		} else if ((lawIndexQues == (lawNumberQues) - 1) && (parseInt($(_self).attr('value')) == 1)) {
    			lawIndexQues = (lawNumberQues) - 1;
                $('#redo_vocargame_btn').fadeIn(300);
    		}else{   		  
    		  if(next_avaiable == true){    		      
    		      lawIndexQues += parseInt($(_self).attr('value'));
    		      pauseAudioSeekbar('#wrap_form_anwer_law');                  
                  $('.vocargame_status').css('display','none');
                  if(goldenkid != true && lawIndexQues >= 2){
                     $(document).trigger('law_none_goldenkids');
                     next_avaiable = false;
                  }else{
                    questionNumber = lawIndexQues;
                    questionNumber++;        
                    $('#sp_num_law').text(questionNumber+'/'+lawNumberQues);
                    $('.pronun_input_law').css('display','none');
                    $('.pronun_input_law').eq(lawIndexQues).fadeIn(300);
                    lawAudio = $('.audio_law').eq(lawIndexQues).find('audio').attr('id');
                    if($.browser.mozilla){
                      loadAudioSeekbar('.audio_law',lawAudio);
                    }
                    playAudioSeekbar('.audio_law', lawAudio);
                    $(document).trigger('questionComplete');
                  }
    		  }
            }
      });
})