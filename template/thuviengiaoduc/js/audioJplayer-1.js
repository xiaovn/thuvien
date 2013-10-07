

function addAudioLong(element,i,isIOS){
	var file_play = $(element).attr("media-url");        
        var is_paid=$(element).attr("is_paid");
        var player_type=$(element).attr("player_type");
        if(is_paid){
            file_play=getLinkVIP(file_play,'mp3');           
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
        if(player_type){
             isIOS=true;
        }else{
            isIOS = DetectIos();
        }
        prefix += time_now;
        
	if(!isIOS){
                $(element).attr("id",prefix + i);
		$(element).after('<script language="javascript"> PKL_AddPlayer({ target: "' + prefix + i + '",id: "' + prefix + i + '", media: "' + file_play + '", timeformat: "1" } );</script>');
	}else{
		$(element).after('<div id="' + prefix + i +'" class="jp_audio_long"><div class="jp-gui ui-widget ui-widget-content ui-corner-all adl_box"><ul><li class="jp-play ui-state-default ui-corner-all adl_play"><a href="javascript:;" class="jp-play ui-icon ui-icon-play adl_play_in" tabindex="1" title="play">play</a></li><li class="jp-pause ui-state-default ui-corner-all adl_pause"><a href="javascript:;" class="jp-pause ui-icon ui-icon-pause adl_play_in" tabindex="1" title="pause">pause</a></li></ul><div class="jp-progress-slider adl_slider"></div><div class="jp-current-time  counttime adl_time"></div><div class="jp-clearboth"></div></div></div>');	
		var myPlayer = $(element),
			myPlayerData,
			fixFlash_mp4,
			fixFlash_mp4_id,
			ignore_timeupdate, 
			options = {
				ready: function (event) {
					if(event.jPlayer.status.noVolume) {
						$(".jp-gui").addClass("jp-no-volume");
					}
					fixFlash_mp4 = event.jPlayer.flash.used && /mp3/.test(event.jPlayer.options.supplied);
					$(this).jPlayer("setMedia", {
					mp3: file_play
					});
                                        $(".adl_slider").find("a").addClass("adl_icon");
                                        $(".adl_slider").find("div").addClass("adl_sl");
				},
                                   play: function(event) { // To avoid both jPlayers playing together.				
                                    	$(this).jPlayer("pauseOthers");							
				},
            /*load : function(event){
				console.log("error");	
			},
			warning  : function(event){
				console.log("warning ");			
			},
			loadstart : function(event){
				console.log("loadstart");	
			},
			abort : function(event){
				console.log("abort");				
			},
			loadeddata : function(event){
				console.log("loadeddata");	
			},
			waiting : function(event){
				console.log("waiting");	
			},
			playing : function(event){
				console.log("playing");	
			},
			canplay : function(event){
				console.log("canplay");	
			},
			ended  : function(event){
				console.log("ended ");	
			},
			emptied : function(event){
				console.log("emptied");			
			},
             */                                        
                 timeupdate: function(event) {
					if(!ignore_timeupdate) {
						myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
					}
				},
				 solution:"flash, html",	
				swfPath:"Jplayer.swf"/*tpa=http://www.thuviengiaoduc.org/static/js/audioPlayer/jplayer/js/Jplayer.swf*/,
				supplied: "mp3",
				cssSelectorAncestor: "#" + prefix + i,
				wmode: "window"
			},
			myControl = {
				progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
				volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
			};
                        
		myPlayer.jPlayer(options);
		myPlayerData = myPlayer.data("jPlayer");
		$('.jp-gui ul li').hover(
			function() { $(this).addClass('ui-state-hover'); },
			function() { $(this).removeClass('ui-state-hover'); }
		);
		myControl.progress.slider({
			animate: "fast",
			max: 100,
			range: "min",
			step: 0.1,
			value : 0,
			slide: function(event, ui) {
				var sp = myPlayerData.status.seekPercent;
				if(sp > 0) {
					if(fixFlash_mp4) {
						ignore_timeupdate = true;
						clearTimeout(fixFlash_mp4_id);
						fixFlash_mp4_id = setTimeout(function() {
							ignore_timeupdate = false;
						},1000);
					}
					myPlayer.jPlayer("playHead", ui.value * (100 / sp));
				} else {
					setTimeout(function() {
						myControl.progress.slider("value", 0);
					}, 0);
				}
			}
		});
	}

        //Danh dau phan tu da add audio
        $(element).attr('add_audio', true);
}
function addAudioLong_toeic(cmd,i,filename,pathFile){	
	$(cmd).after('<div class="jplayer_common" >Audio '+(i+1)+':</div><div id="jp_container_long'+i+'" class="jplayer_common"><div class="jp-gui ui-widget ui-widget-content ui-corner-all adl_box"><ul><li class="jp_player_stt jp-play ui-state-default ui-corner-all adl_play"><a href="javascript:;" class="ui-icon ui-icon-play adl_play_in" tabindex="1" title="play">play</a></li><li class="jp-pause ui-state-default ui-corner-all adl_pause"><a href="javascript:;" class="jp-pause ui-icon ui-icon-pause adl_play_in" tabindex="1" title="pause">pause</a></li></ul><div class="jp-progress-slider adl_slider"></div><div class="jp-current-time  counttime adl_time"></div><div class="jp-clearboth"></div></div></div>');	
	
	var myPlayer = $(cmd),
		myPlayerData,
		fixFlash_mp4,
		fixFlash_mp4_id,
		ignore_timeupdate, 
		options = {
			ready: function (event) {
				if(event.jPlayer.status.noVolume) {
					$(".jp-gui").addClass("jp-no-volume");
				}
				fixFlash_mp4 = event.jPlayer.flash.used && /mp3/.test(event.jPlayer.options.supplied);
				$(this).jPlayer("setMedia", {
				mp3: pathFile+'/'+filename
				});
                                 $(".adl_slider").find("a").addClass("adl_icon");
                                 $(".adl_slider").find("div").addClass("adl_sl");
			},			
			play: function(event) { // To avoid both jPlayers playing together.
                                 $(this).jPlayer("pauseOthers"); 
                                    $(this).addClass('jplayer_playing');
			},
                        width:"150px",
                        height:"40px",
                        playing : function(event){
				
                             //   console.log(this);
			},
		/*	load : function(event){
				console.log("error");	
			},
			warning  : function(event){
				console.log("warning ");			
			},
			loadstart : function(event){
				console.log("loadstart");	
			},
			abort : function(event){
				console.log("abort");				
			},
			loadeddata : function(event){
				console.log("loadeddata");	
			},
			waiting : function(event){
				console.log("waiting");	
			},
			playing : function(event){
				console.log("playing");	
			},
			canplay : function(event){
				console.log("canplay");	
			},
			ended  : function(event){
				console.log("ended ");	
			},
			emptied : function(event){
				console.log("emptied");			
			},
			
			*/
			
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
                         solution:"flash, html",
                        swfPath:"Jplayer.swf"/*tpa=http://www.thuviengiaoduc.org/static/js/audioPlayer/jplayer/js/Jplayer.swf*/,
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_long"+i,
			wmode: "window"
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	myPlayer.jPlayer(options);
	myPlayerData = myPlayer.data("jPlayer");
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});
	
}