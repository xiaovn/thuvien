//function create audio
function createAudio(id,src,parent,event_play,event_ended){
    var sound = document.createElement('audio');
    if(id){
        id = id.replace(/\s+/g, '');
        $(sound).attr('id',id);
    }
    $(sound).attr('src',src);
    $(sound).attr('type','audio/mp3');
    if(parent){
		$(parent).append(sound);
    }
    var audio = new MediaElementPlayer('#'+id,{
        success: function (mediaElement, domObject){
                //console.log(mediaElement);
                // add event listener
                mediaElement.addEventListener('play', function(e){
                    if(event_play){
                       $(document).trigger(event_play);
                       }
                }, false);
                mediaElement.addEventListener('ended', function(e){
                    if(event_ended){
                       $(document).trigger(event_ended);
                       }
                }, false);                
            }
    });
    return audio;                
};

function loadAudioSeekbar(parent, audio){
    if($.browser.mozilla){ 
         $(parent).find('video,audio').each(function(index, element){
            var _self = $(element)[0];
            if($(_self).attr('id')== audio){
                _self.player.load();   
            }    
        });
    }else{  
        MediaElement(audio, {
                success: function(me) {
                me.load();
            }                            		  
        });
    }
}

function playAudioSeekbar(parent,audio){ 
    if($.browser.mozilla){ 
         $(parent).find('video,audio').each(function(index, element){
            var _self = $(element)[0];
            if($(_self).attr('id')== audio){
                _self.player.play();   
            }    
        });
    }else{                                
        MediaElement(audio, {
                success: function(me) {
                me.play();
            }                            		  
        });
    }
}



function pauseAudioSeekbar(parent){
    $(parent).find('video,audio').each(function(index, element){
            //console.log($(_self)[0]);
            if($.browser.mozilla){                                
                $(element)[0].player.pause();
            }else{
                var name = $(element).attr('id');
                MediaElement(name,{
                    success: function(me) {
                        me.pause();
                    }                            		  
                });
            }
     });        
}
