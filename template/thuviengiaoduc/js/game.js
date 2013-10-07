function PlayingAudioHide(element){		
		if(element.hasClass('uba_hideAudio')){			
			element.children('.stt_par_hideaudio').children(0).attr('src','speaker-playing-1.gif'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/button_img/speaker-playing.gif*/);
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
			element.children('.stt_par_hideaudio').children(0).attr('src','speaker-stop.png'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/button_img/speaker-stop.png*/);
				}	
		
	}

var json_file = $("#game_jsonfile").attr("url");
var items = [];
var cur_word = '';
var q = 0;
var num_correct = 0;
var len = 0;
var hint = {};
var audio_true='correct-6.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/correct.mp3*/;
var audio_false='wrong.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/wrong.mp3*/;
var audio_redo='redo.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/redo.mp3*/;
var game = {
	init: function(){
		game._reset_html();
		game._reset_var();
		game.load_json();
	},
	_reset_html: function(){
		$("#ga_input_word").val("");
		$(".ga_vcab_hint_bt").show();
		$(".ga_vcab_next_bt").hide();
		$(".ga_vcab_submit_bt").hide();
		$(".ga_vcab_redo_bt").hide();
		$(".ga_vcab_check").hide();
	},
	_reset_var: function(){
		items = [];
		q = 0;
		num_correct = 0;
		len = 0;
	},
	load_json: function(){
		// Load du lieu
        $.getJSON(json_file, function(data) {
        	len = data.bai.length;
            for (var i=0;i<data.bai.length;i++)
            {
                num = data.bai.length; // Lay so luong cac cau hoi
                items.push(data.bai[i]); // Nap du lieu cac cau hoi vao mang items
            }
        })
        .done(function(){  // Load du lieu thanh con
            //console.log("success");
            //khoi tao ban dau
            game.load_img(items[0].img);
            game.load_audio(items[0].sound);
            game.assign_current_word(items[0].correct);
            hint[0] = false;
            //lay random cac chu cai trong tu
        })
        .fail(function(){ console.log("error");}) // Neu load du lieu that bai
        .always(function(){ console.log("complete");});
	},
	load_img: function(url){
		$(".qz_st2_img").attr("src", url);
	},
	load_audio: function(url){
        $("#load_audio").attr("media-url",url);
        
	},
	assign_current_word: function(word){
		cur_word = word;
	},
	_next: function(){
		q++;
		game.load_img(items[q].img);
        game.load_audio(items[q].sound);
        game.assign_current_word(items[q].correct);
        hint[q] = false;
	},
	_hint: function(){
		var _cur_str = $("#ga_input_word").val();
		_cur_str = $.trim(_cur_str);
		var _word = items[q].correct;
		var _str = '';
		if(_cur_str.length < _word.length){
			if(_cur_str != ""){
				if(game._check_word(_cur_str, _word) == true){
					_str += _cur_str+_word.substr(_cur_str.length,1);
					$("#ga_input_word").val(_str);
				}
			}
			else{
				$("#ga_input_word").val(_word.substr(0,1));
			}
		}
	},
	_check_word: function(s,word){
		if(s == word.substr(0,s.length)){			
			return true;
		}
		else{
			return false;
		}
	}
};

$(function(){	
	game.init();
	$(".ga_vcab_check_bt").click(function(){		
		var input_word = $("#ga_input_word").val();
		input_word = $.trim(input_word);
		
		if(input_word == cur_word){
			$(".ga_vcab_check").removeClass("ga_vcab_check_fal");
			$(".ga_vcab_check").addClass("ga_vcab_check_true");
			if(q < len-1)
				$(".ga_vcab_next_bt").show();
			else{
				$(".ga_vcab_submit_bt").show();
			}
			if(hint[q] == false)
				num_correct++;	
			$('#load_audio_ctrl').attr('media-url',audio_true);
			$('#load_audio_ctrl').trigger('click');
		}
		else{
			$(".ga_vcab_check").removeClass("ga_vcab_check_true");
			$(".ga_vcab_check").addClass("ga_vcab_check_fal");
			$(".ga_vcab_redo_bt").show();
			$('#load_audio_ctrl').attr('media-url',audio_false);
			$('#load_audio_ctrl').trigger('click');
			
		}
		$(".ga_vcab_hint_bt").hide();
		$(".ga_vcab_check").show();
		$(".ga_vcab_check_bt").hide();
		
	});
	
	$(".ga_vcab_hint_bt").live("click", function(){
		hint[q] = true;
		game._hint();
	});
	
	$(".ga_vcab_redo_bt").live("click", function(){
		game._reset_html();
		$(".ga_vcab_hint_bt").show();
		$(".ga_vcab_check_bt").show();
		$('#load_audio_ctrl').attr('media-url',audio_redo);
		$('#load_audio_ctrl').trigger('click');
	});
	
	$(".ga_vcab_next_bt").live("click", function(){
		game._reset_html();
		game._next();
		$(".ga_vcab_hint_bt").show();
		$(".ga_vcab_check_bt").show();
	});
	
	$(".ga_vcab_submit_bt").live("click", function(){
		$("#g-points").html(num_correct);
		$("#g-questions").html(len);
		$(".ga_vcab_outl_bg").show();
	});
	
	$(".ga_vcab_again_bt").live("click", function(){
		$(".ga_vcab_outl_bg").hide();
		game.init();
		$(".ga_vcab_check_bt").show();
	});

});