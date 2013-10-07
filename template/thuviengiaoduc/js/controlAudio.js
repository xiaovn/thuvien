// JavaScript Document
// stop audio
	var isIOS = false;
	function stopAudio(){  
		var audio_curr=$('.pause').parents('.cp-jplayer');
		var id=$(audio_curr).attr('id');
		PKL_Pause(id); 		
	}
// play audio
	function playAudio(){		
		var audio_curr=$('.pause').parents('.cp-jplayer');
		var id=$(audio_curr).attr('id');
		PKL_Play();
	}
// add audio auto play

function addAudioLong(element,i,isIOS){	
	var file_play = $(element).attr("media-url");        
        var is_paid=$(element).attr("is_paid");
        var player_type=$(element).attr("player_type");
        if(is_paid){
            file_play=getLinkVIP(file_play,'mp3');           
        }
		var is_auto="";
		if($(element).attr("auto")){
			is_auto=',autoplay: "true"';
		}	
        var prefix = 'v2_audio_player';
        var class_id = 'v2_audio_player';
        var time_now = new Date().getTime();
        if($(element).hasClass("jquery_jplayer_home")){
            prefix = 'v2_player_home_';
            class_id = 'jquery_jplayer_home';
        }else if($(element).hasClass('jquery_jplayer_long')){
            prefix = 'v2_player_lesson_';
            class_id = 'jquery_jplayer_long';
        }else if($(element).hasClass('jquery_jplayer_lesson')){
            prefix = 'v2_player_comment_';
            class_id = 'jquery_jplayer_lesson';
        }        
        //Check element show?
		//console.log(prefix+i+':'+$(element).is(":visible"));
        if(!$(element).is(":visible")){
            return;
        }
        //Check added audio?
        if($(element).attr('add_audio')){
            return;
        }        
        prefix += time_now;         
	
        $(element).attr("id",prefix + i);
		$(element).after('<script language="javascript"> PKL_AddPlayer({ target: "' + prefix + i + '",id: "' + prefix + i + '", media: "' + file_play + '", timeformat: "1"'+is_auto+'});</script>');
	     //Danh dau phan tu da add audio
        $(element).attr('add_audio', true);
}
	

	
