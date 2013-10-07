/*
 * jquery.ubaplayer
 * https://github.com/brianhadaway/UbaPlayer
 *
 * Copyright (c) 2012 Brian Hadaway
 * Licensed under the MIT, GPL licenses.
 
*/
(function($) {
	var defaults_ctrl = {
		audioButtonClass: "uba_ctrl",
		autoPlay: null,
		codecs: [{
			name: "OGG",
			codec: 'audio/ogg; codecs="vorbis"'
		}, {
			name: "MP3",
			codec: 'audio/mpeg'
		}],
		continuous: false,
		extension: null,
		flashAudioPlayerPath: "player.swf"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/audioPlayer/ubanplayer/swf/player.swf*/,
		flashExtension: ".mp3",
		flashObjectID: "audioPlayer",
		loadingClass: "loading",
		loop: false,
		playerContainer: "player",
		playingClass: "playing",
		playStartCallback: null,
		stopCallback: null,
		swfobjectPath: "swfobject.js"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/audioPlayer/ubanplayer/swfobject/swfobject.js*/,
		volume: 0.5
	},
		currentTrack, isPlaying = false,
		isFlash = false,
		audio, $buttons, $tgt, $el, playTrack, resumeTrack, pauseTrack, 
               methods = {
			play: function(element){
				$tgt = element;
				currentTrack = _methods.getFileNameWithoutExtension($tgt.attr("media-url"));				
				isPlaying = true;
				$tgt.addClass(defaults_ctrl.loadingClass);
				$buttons.removeClass(defaults_ctrl.playingClass);
				
				if (isFlash) {
					if (audio) {
						_methods.removeListeners(window);
					}
					audio = document.getElementById(defaults_ctrl.flashObjectID);
					_methods.addListeners(window);
					audio.playFlash(currentTrack + defaults_ctrl.extension);
				} else {
					if (audio) {
						audio.pause();
						_methods.removeListeners(audio);
					}
					audio = new Audio("");
					_methods.addListeners(audio);
					audio.id = "audio";
					audio.loop = defaults_ctrl.loop ? "loop" : "";
					audio.volume = defaults_ctrl.volume;
					audio.src = currentTrack + defaults_ctrl.extension;
					audio.play();
				}
			},

			pause: function() {
				if (isFlash) {
					audio.pauseFlash();
				} else {
					audio.pause();
				}

				$tgt.removeClass(defaults_ctrl.playingClass);
				isPlaying = false;
			},

			resume: function() {
				if (isFlash) {
					audio.playFlash();
				} else {
					audio.play();
				}
				$tgt.addClass(defaults_ctrl.playingClass);
				isPlaying = true;
			},

			playing: function() {
				return isPlaying;
			}
		},

		_methods = {
			init: function(options) {
				var types;

				//set defaults_ctrl
				$.extend(defaults_ctrl, options);
				$el = this;

				//listen for clicks on the controls
				$("."+defaults_ctrl.audioButtonClass).bind("click", function(event) {
					var target = null;					
					if(!$(event.target).attr('media-url')){
						event.target = $(event.target).parents('.'+defaults_ctrl.audioButtonClass)
					}
					
					_methods.updateTrackState(event);
					return false;
				});
				
				$buttons = $("." + defaults_ctrl.audioButtonClass);

				types = defaults_ctrl.codecs;
				for (var i = 0, ilen = types.length; i < ilen; i++) {
					var type = types[i];
					if (_methods.canPlay(type)) {
						defaults_ctrl.extension = [".", type.name.toLowerCase()].join("");
						break;
					}
				}

				if (!defaults_ctrl.extension || isFlash) {
					isFlash = true;
					defaults_ctrl.extension = defaults_ctrl.flashExtension;
				}

				if (isFlash) {
					$el.html("<div id='" + defaults_ctrl.playerContainer + "'/>");
					$.getScript(defaults_ctrl.swfobjectPath, function() {
						swfobject.embedSWF(defaults_ctrl.flashAudioPlayerPath, defaults_ctrl.playerContainer, "0", "0", "9.0.0", "expressInstall-3.swf"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/js/swf/expressInstall.swf*/, false, false, {
							id: defaults_ctrl.flashObjectID
						}, _methods.swfLoaded);
					});
				} else {
					if (defaults_ctrl.autoPlay) {
						methods.play(defaults_ctrl.autoPlay);
					}
				}
			},

			updateTrackState: function(evt) {
				$tgt = $(evt.target);
				if (!$tgt.hasClass(defaults_ctrl.audioButtonClass)) {
					return;
				}
				if (!audio || (audio && currentTrack !== _methods.getFileNameWithoutExtension($tgt.attr("media-url")))) {
					methods.play($tgt);
				} else if (!isPlaying) {					
					methods.resume();
				} else {					
					methods.pause();
				}
			},

			addListeners: function(elem) {
				$(elem).bind({
					"canplay": _methods.onLoaded,
					"error": _methods.onError,
					"ended": _methods.onEnded
				});
			},

			removeListeners: function(elem) {
				$(elem).unbind({
					"canplay": _methods.onLoaded,
					"error": _methods.onError,
					"ended": _methods.onEnded
				});
			},

			onLoaded: function() {
				$buttons.removeClass(defaults_ctrl.loadingClass);
				$tgt.addClass(defaults_ctrl.playingClass);					
				if(typeof(defaults_ctrl.playStartCallback) == 'function'){
					defaults_ctrl.playStartCallback($tgt);
				}
				audio.play();
			},

			onError: function() {
				$buttons.removeClass(defaults_ctrl.loadingClass);
				if (isFlash) {
					_methods.removeListeners(window);
				} else {
					_methods.removeListeners(audio);
				}
			},

			onEnded: function() {
				isPlaying = false;
				$tgt.removeClass(defaults_ctrl.playingClass);
				if(typeof(defaults_ctrl.stopCallback) == 'function'){
					defaults_ctrl.stopCallback($tgt);
				}
				currentTrack = "";
				if (isFlash) {
					_methods.removeListeners(window);
				} else {
					_methods.removeListeners(audio);
				}

				if (defaults_ctrl.continuous) {
					var $next = $tgt.next().length ? $tgt.next() : $(defaults_ctrl.audioButtonClass).eq(0);
					methods.play($next);
				}

			},

			canPlay: function(type) {
				if (!document.createElement("audio").canPlayType) {
					return false;
				} else {
					return document.createElement("audio").canPlayType(type.codec).match(/maybe|probably/i) ? true : false;
				}
			},

			swfLoaded: function() {
				if (defaults_ctrl.autoPlay) {
					setTimeout(function() {
						methods.play(defaults_ctrl.autoPlay);
					}, 500);
				}
			},

			getFileNameWithoutExtension: function(fileName) {
				//this function take a full file name and returns an extensionless file name
				//ex. entering foo.mp3 returns foo
				//ex. entering foo returns foo (no change)
				var fileNamePieces = fileName.split('.');
				fileNamePieces.pop();
				return fileNamePieces.join(".");
			}
		};

	$.fn.ubaPlayer_ctrl = function(method){
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === "object" || !method) {
			return _methods.init.apply(this, arguments);
		} else {
			$.error("Method " + method + " does not exist on jquery.ubaPlayer");
		}
	};

})(jQuery);
