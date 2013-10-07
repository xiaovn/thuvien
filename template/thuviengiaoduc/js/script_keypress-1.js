press_key = new createGame();
press_key.available = false;
press_key.list_audio_words = [];
press_key.list_audio_words_complete = [];
press_key.word_index = 0;
press_key.list_sound_words = [];
press_key.started = false;
press_key.diem = 00;
press_key.list_img = [];
press_key.first_key = true;
press_key.play_audio = false;
press_key.vip = false;
press_key.gameFocused = false;
function init_word(){
    if(press_key.started == false){
        if(press_key.word_index < list_words.length){
            if(press_key.vip == false && press_key.word_index==2){
                count_avaiable = false;
                $('.form_non_vip').fadeIn(300);
            }else{
                press_key.correct_char_index = 0;
                press_key.first_key = true;
                press_key.word = list_words[press_key.word_index];
                press_key.array_words = (press_key.word).split('');
                $('#tu').empty();                
                $('.key').attr('disabled','true');
                $('.thumbnail').css('display','none');                
                $('#thumbnail_'+list_img[press_key.word_index].split('.')[0]).fadeIn(300);            
                $.each(press_key.array_words, function(index,element){
                    press_key.char_create = createEleHtml('span',element,'character','','#tu');
                    var _keyInit = element.toLocaleUpperCase();
                    $(press_key.char_create).text(element);
                    $(press_key.char_create).attr('value',element);
                    //console.log(_keyInit.charCodeAt(0));
                    $('.key').each(function(key, value){                        
                        if($(value).attr('charCode') == _keyInit.charCodeAt(0)){
                            $(value).addClass('key_choose');
                        }
                    }); 
                });
                $('#tu *').css('font-size',list_font_size[press_key.word_index]);
                press_key.available = true;  
                press_key.audio_word = $('#'+list_audio[press_key.word_index]);
                press_key.audio_word_complete = $('#complete_'+list_audio[press_key.word_index]);                
                
                $('.key').each(function(index, element){
                        if($(element).html().trim().toLowerCase() == press_key.array_words[press_key.correct_char_index ]){
                            $(element).removeAttr('disabled');
                        }   
                    });
                if($.browser.webkit && !window.chrome){
                    $('#animal').css('display','none'); 
                    $('#speaking').css('display','none');
                }else{
                    $('#animal').exPulsate(500,500);
                    $('#animal').css('display','block');
                    playSound(press_key.audio_word, 0);
                    $('#speaking').css('display','block');    
                    $(press_key.audio_word).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){                        
                        $('#animal').css('display','none'); 
                        $('#speaking').css('display','none');
                    });   
                }
            }
        }else if(press_key.word_index == list_words.length){
            $('#tu').empty();
            $('#congratulation').fadeIn(300);
            playSound(press_key.audio_end, 0);
            $('#redo_btn').css('display','block');
        }
    } 
}

function check_key(){
    if(press_key.started == true){
        /*---*/
         if($(press_key.key_active).attr('disabled')=='disabled'){
                $('#'+press_key.audio_name).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){
                    playSound(press_key.audio_incorrect,0);  
                });
                }else{
                    $('#'+press_key.audio_name).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){
                        playSound(press_key.audio_correct,0);
                    });
                    $('#animal').css('display','none');
                    $('.character').eq(press_key.correct_char_index).html($('.character').eq(press_key.correct_char_index).attr('value'));
                    $('.character').eq(press_key.correct_char_index).css('color','white');
                    $('.character').eq(press_key.correct_char_index).css('top','0px');
                    /*
                    if(press_key.first_key==true){
                        press_key.first_key = false;                        
                        $('.character').each(function(index, element){
                           if(index!=0){
                                $(element).html('*');
                                $(element).css('top','26px');
                           } 
                        });
                        
                    }
                    */
                    if(press_key.first_key==true){
                        press_key.first_key = false;
                    }
                        press_key.double_char = false;
                        var word_next_index = press_key.correct_char_index;
                        word_next_index++;
                        for(var i = word_next_index; i< press_key.array_words.length ;i++){
                                if($(press_key.key_active).attr('charCode') == press_key.array_words[i].toLocaleUpperCase().charCodeAt(0)){
                                    press_key.double_char = true;
                                }
                            };
                        if($.browser.webkit && !window.chrome){    
                            setTimeout(function(){
                                if(press_key.double_char != true){
                                    $(press_key.key_active).removeClass('key_choose');
                                };
                            },100);
                            }else{
                               if(press_key.double_char != true){
                                    $(press_key.key_active).removeClass('key_choose');
                                }; 
                            }  
                        $(press_key.key_active).attr('disabled','true');
                        press_key.correct_char_index++;
                        if(press_key.correct_char_index < press_key.array_words.length){
                            $('.key').each(function(index,element){
                                if($(element).attr('charCode') == press_key.array_words[press_key.correct_char_index].toLocaleUpperCase().charCodeAt(0)){
                                    $(element).removeAttr('disabled');
                                    press_key.available = true;
                                }   
                            });
                        }else{
                            press_key.started = false;
                            press_key.available = false;
                            press_key.word_index++;
                            press_key.correct_char_index = 0;
                            $('#animal').css('display','block');
                            press_key.diem = press_key.diem + 10;
                            $('#diem').text(press_key.diem+'/'+tong_diem); 
                            press_key.play_audio = false;                            
							if($.browser.webkit && !window.chrome){
							 $('#'+press_key.audio_name).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){
								    $('#animal').css('display','none'); 
                                    $('#speaking').css('display','none');
                                    $('.key').removeClass('key_choose');           
                                    init_word();
                                    press_key.play_audio = true;
                                });
							}else{
							 $('#'+press_key.audio_name).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){
                                    playSound(press_key.audio_word_complete,0);
                                    $('#speaking').css('display','block');
                                    $(press_key.audio_word_complete).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function(){                                     
                                    $('#animal').css('display','none'); 
                                    $('#speaking').css('display','none');            
                                    init_word();
                                    press_key.play_audio = true;
                                }); 
                            });
							}
                        }  
                    
                }     
        /*----*/
    }
}
$(document).ready(function(){
    press_key.audio_correct = createSound(src+'audio/activities/correct','correct','#sound');
    press_key.audio_incorrect = createSound(src+'audio/activities/incorrect','incorrect','#sound');
    for(var i=0;i<list_words.length; i++){
        press_key.list_audio_words[i] = createSound(link_private+'audio/words/'+list_audio[i],list_audio[i],'#sound'); 
        press_key.list_audio_words_complete[i] = createSound(link_private+'audio/words/'+list_audio[i],'complete_'+list_audio[i],'#sound');
        press_key.list_img[i] = createEleHtml('img','thumbnail_'+list_img[i].split('.')[0],'thumbnail',link_private+'imgs/thumbnail/'+list_img[i],'#khung_anh');   
    }
    press_key.audio_click_btn = createSound(src+'audio/public/beep','beep','#sound');
    press_key.audio_timeout = createSound(src+'audio/public/timeout','timeout','#sound');
    press_key.audio_end = createSound(src+'audio/public/end','end','#sound');
    $('.key').each(function(index, element){
        var name_sound = $(element).attr('charCode');
        press_key.list_sound_words[index] = createSound(src+'audio/letters/'+name_sound,name_sound,'#sound');
    });
$(window).load(function(){
    /*---------*/
    document.addEventListener("click", function(event){
        press_key.gameFocused = false;
        });
    var game = document.getElementById("form_key");
    game.addEventListener("click", function(event){
       // if (press_key.gameFocused) return;
        event.stopPropagation();
        press_key.gameFocused = true;
        });
    /*---------*/
    
    var check_vip = document.getElementById('goldenkids_member');
    if(check_vip!=null){
    		press_key.vip = true;
    	}
        $('#start_btn').bind('click', function(){
            $(this).fadeOut(300, function(){                
                $('#diem').text(press_key.diem+'/'+tong_diem);
                 press_key.available = true;
                 press_key.play_audio = true;
                 countDownMinus(time_play,'#thoi_gian');
            });
            init_word();
        });
            $(document).keydown(function(e){				
                var character = e.keyCode || e.which;
                if(character==190){
                    character = 46;
                }
                if(press_key.available == true && press_key.gameFocused == true){
                    //press_key.available = false;
					e.preventDefault();
                    press_key.started = true;
                    $('.key').each(function(index, element){
                       if($(element).attr('charCode')== character){
						   $('.key').css('top','0px');
						   $('.key').css('left','0px');
                            press_key.key_active = $(element); 
                            press_key.audio_name = $(press_key.key_active).attr('charCode');
                            playSound('#'+press_key.audio_name,0);
                            $('#speaking').css('display','none');
                            $('#animal').css('display','block');
							$(press_key.key_active).css('top','5px');
							$(press_key.key_active).css('left','3px');
                       }
                    });
                }
            });
            
            $(document).keyup(function(e){
                if(press_key.started == true && press_key.gameFocused == true){
                    check_key(); 
	                  $(press_key.key_active).css('top','0px');
  	                  $(press_key.key_active).css('left','0px');
                }
            });
            
            $('.key').mousedown(function(){
               if(press_key.available == true && press_key.gameFocused == true){
                    //press_key.available = false;
					$('.key').css('top','0px');
					$('.key').css('left','0px');
                    press_key.started = true;
                    press_key.key_active = $(this);
                    press_key.audio_name = $(press_key.key_active).attr('charCode');
                    playSound('#'+press_key.audio_name,0);
                    $('#speaking').css('display','none');
                    $('#animal').css('display','block');
                    $(press_key.key_active).css('top','5px');
                    $(press_key.key_active).css('left','3px'); 
               }
            });
            
            $('.key').mouseup(function(){
                if(press_key.started == true && press_key.gameFocused == true){
                    check_key();                   
                    $(press_key.key_active).css('top','0px');
                    $(press_key.key_active).css('left','0px');
                }
            });
            $('#redo_btn, #redo_none').bind('click', function(){
                //list_words = returnArrayRandom(list_init_word);
                $('.form_non_vip').css('display','none');
                list_words = list_init_word;
                $('#congratulation').css('display','none');
                count_avaiable = true;
                $(this).fadeOut(300,function(){
                    press_key.word_index = 0;
                    press_key.correct_char_index = 0;
                    $('#diem').empty();
                    press_key.diem = 0;
                    press_key.available = true;
                    press_key.started = false;
                    $('#diem').text(press_key.diem+'/'+tong_diem);
                    $('.key').removeClass('key_choose');
                    if(press_key.time_out_event == true){
                        countDownMinus(time_play,'#thoi_gian');
                        press_key.time_out_event = false;
                    }
                    init_word();    
                });
            });
            $('#speaker').bind('click', function(){
                if(press_key.started = true && press_key.play_audio == true){
                    playSound(press_key.audio_word);
                    if(jQuery.browser.mozilla == true){
                        $(this).animate({width: 80},300).animate({width: 60},150).animate({width: 74},100);
                    }else{
                        $(this).animate({scale: 'http://www.thuviengiaoduc.org/file/learn/child/dungchung/lib_new_en/keypress/public/js/1.1deg'},{duration: 200}).animate({scale: 'http://www.thuviengiaoduc.org/file/learn/child/dungchung/lib_new_en/keypress/public/js/0.9deg'},{duration: 150}).animate({scale: '1deg'},{duration: 100});
                        }
                    $('#speaking').css('display','block');  
                }
            });
    });
});