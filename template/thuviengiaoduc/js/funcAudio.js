/* JavaScript Document
function PlayingAudioHide(element){		
		if(element.hasClass('uba_hideAudio')){		
			element.children('.stt_par_hideaudio').children(0).attr('src','speaker-playing.gif'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/audioPlayer/ubanplayer/img/speaker-playing.gif*/);
			if(prev_element != null){	
				if(element.attr('media-url') != prev_element.attr('media-url')){				
					stopAudioHide(prev_element);
				}
			}		
			prev_element = element;
		}	
	}
	function stopAudioHide(element){
		if(element.hasClass('uba_hideAudio')){		
			element.children('.stt_par_hideaudio').children(0).attr('src','speaker-stop.gif'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/audioPlayer/ubanplayer/img/speaker-stop.gif*/);
		}	
	}*/