/*
function addAudioLong(element,i,isAndroid){
	var file_play = $(element).attr("media-url");	
	if(isAndroid){
		$(element).attr("id","pickle_player_" + i);
		console.log('id:' + "pickle_player_" + i);
		$(element).after('<script language="javascript"> PKL_AddPlayer({ target: "pickle_player_' + i + '",id: "picke_player' + i + '", media: "' + file_play + '" } );</script>'	);
	}else{
		$(element).after('<div id="jp_container_long'+i+'" class="jp_audio_long"><div class="jp-gui ui-widget ui-widget-content ui-corner-all"><ul><li class="jp-play ui-state-default ui-corner-all"><a href="javascript:;" class="jp-play ui-icon ui-icon-play" tabindex="1" title="play">play</a></li><li class="jp-pause ui-state-default ui-corner-all"><a href="javascript:;" class="jp-pause ui-icon ui-icon-pause" tabindex="1" title="pause">pause</a></li></ul><div class="jp-progress-slider"></div><div class="jp-current-time  counttime"></div><div class="jp-clearboth"></div></div></div>');	
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
				},			
				play: function(event) { // To avoid both jPlayers playing together.				
					$(this).jPlayer("pauseOthers");							
				},
				
				timeupdate: function(event) {
					if(!ignore_timeupdate) {
						myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
					}
				},			
				swfPath:"Jplayer-3.swf"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/audioPlayer/jplayer/js/Jplayer.swf*/,
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
	
	
}
*/
