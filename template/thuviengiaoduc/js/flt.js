 $.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
    $this = $(this),
    $parents = $elems.parent();
    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
    if($elems.html() == $parents.children().html()){
        $this.randomize();
    }else{
        return this;   
    }    
};
$.fn.autoBreakLine = function(options){
    var $this = $(this),
    $child = options.child ? $(this).find(options.child) : $(this).children(),    
    $Indexmin = 0,
    $Indexmax = options.max - 1;
    if($this.find('.'+options.classbreak).length > 0 && $child.length > options.max){
        (function breakLine(){                
            var $indexSpaceMax;    
            for(var $i = $Indexmin; $i <= $Indexmax; $i++){                                   
               $indexSpaceMax = ($child.eq($i).hasClass(options.classbreak))?$i:$indexSpaceMax;
               if($i == $Indexmax){
                    $child.eq($indexSpaceMax).after('</br>');                        
                    if(($child.length - $Indexmax) >= 10){
                        $Indexmax = options.max + $indexSpaceMax;
                        $i = $indexSpaceMax;
                        if($Indexmax > ($child.length -1)){$Indexmax = $child.length -1}                                                
                    }       
               }    
            }
        })()
    }
}
function $fnfltgks(){
    $('.flta, .soundJplayer').jPlayer('stop');
    soundManager.stopAll();
    soundManager.play('_Aclfgks');
	$('#clfgks').css({display:"block"});
}
function $fnsetIndex(){
		var listMiss = [];
		$('.flts').each(function(index, element) {
		    var $this = $(this);
			if (!$this.attr('answer')) {
				listMiss.push(index);
			}
		}).promise().done(function(){
		      $('#clf').data('clf').index = listMiss[0];
		});
}
function $fnfltInit(){
    $('.flta, .soundJplayer').jPlayer('stop');
    soundManager.stopAll();
    console.log("$('#clf').data('clf').indexLesson: "+$('#clf').data('clf').indexLesson);
    if($('#clf').data('clf').indexLesson >=2 && !document.getElementById('goldenkids_member')){
        $('#clf').data('clf').indexLesson = 1;
        console.log("$('#clf').data('clf').indexLesson: "+$('#clf').data('clf').indexLesson);
        $fnfltgks();
    }else{          
        $('#clf').data("clf").index = 0;
        $('#clf').data("clf").count = 0;
        $('.area_word').eq($('#clf').data('clf').indexLesson).randomize('.que_btn');
        $('#clf').data('clf').selected = false;
        $('.flts').css({"visibility":"hidden", zIndex:-1});				
        $('.flts').eq($('#clf').data('clf').indexLesson).css({"visibility":"visible", zIndex: 0});
        $('#flta'+$('#clf').data('clf').indexLesson).jPlayer('play');
    }
}
function $fnsetIndex(){
    try {
		var listMiss = [];
		$('.area_answer_word:eq('+$('#clf').data('clf').indexLesson+') .an_btn').each(function(index, element) {
			if ($(this).children('.lelrw').length == 0) {
				listMiss.push(index);
			}
		});
	} catch (e) {
		console.log(e);
	} finally {
	   $('#clf').data("clf").index = listMiss[0];
	}
}

$(document).live('flt_complete',function(){
    //test
    $('.area_answer_word').each(function(){$(this).autoBreakLine({max: 10, child:'div', classbreak: 'hbtnspace'});})    
    //$('.ab').draggable();    
    $('#clf').data('clf',{index: 0, indexLesson: 0, selected: false, tscore: 0, count: 0});
    $('#clfstart').one('mousedown',function(){
        $('#clfms').css({display: "block"});
        $('#clfsi').fadeOut(300, function(){            
            $fnfltInit();
        });  
    }); 
    $('.area_word .lelrw').live('click', function(){
        soundManager.stopAll();
        soundManager.play('_Aapb'+$(this).attr('char'));        
        $fnsetIndex();                
        var $this = $(this).clone();
        var $parent = $(this).parent('.que_btn');        
        $(this).fadeOut(10);
        $parent.css({"visibility":"hidden"});
        $('#clf').data("clf").count++;   
        $('.area_answer_word:eq('+$('#clf').data('clf').indexLesson+') .an_btn:eq('+$('#clf').data("clf").index+')').append($this);   
        //choose
        if($('#clf').data("clf").count == $('.area_answer_word:eq('+$('#clf').data('clf').indexLesson+') .an_btn').length){            
            //check correct
            $('#clf').data("clf").$text = '';
            $('.area_answer_word:eq('+$('#clf').data('clf').indexLesson+') .lelrw').text(function(index, string){
                if(string.toLowerCase() == "space"){
                    string = " ";
                }
                $('#clf').data("clf").$text += string;
            });
            if($('#clf').data("clf").$text.replace(/\s+/g, '').trim() == $('.flts:eq('+$('#clf').data('clf').indexLesson+')').attr('correct').replace(/\s+/g, '').trim() && !$('.flts:eq('+$('#clf').data('clf').indexLesson+')').attr('pass')){              
                    $('.flts:eq('+$('#clf').data('clf').indexLesson+')').attr('pass',true);
                    $('#clf').data('clf').tscore++;
                    console.log("score: "+$('#clf').data('clf').tscore);
            }        
        } 
        $(document).unbind('_Aapb'+$(this).attr('char')+'_finish').bind('_Aapb'+$(this).attr('char')+'_finish',function(){
            if($('#clf').data("clf").count == $('.area_answer_word:eq('+$('#clf').data('clf').indexLesson+') .an_btn').length){
                 soundManager.stopAll();
                 $('.flta, .soundJplayer').jPlayer('stop');
                 if($('#clf').data("clf").$text.replace(/\s+/g, '').trim() == $('.flts:eq('+$('#clf').data('clf').indexLesson+')').attr('correct').replace(/\s+/g, '').trim()){
                    soundManager.play('_Acorrect');
                    $('#clfcor').fadeIn(10);                                                
                }else{
                    soundManager.play('_Aincorrect');
                    $('#clfincor').fadeIn(10);
                }
            }
        })          
    })
    //revert
    $('.area_answer_word .lelrw').live('click', function(){
        soundManager.stopAll();
        soundManager.play('_Aapb'+$(this).attr('char'));
        $('#clf').data("clf").count--;
        var  $id = $(this).attr('id');
        $(this).remove();
        $('.area_word:eq('+$('#clf').data('clf').indexLesson+') #'+$id).fadeIn(10);
        $('.area_word:eq('+$('#clf').data('clf').indexLesson+') #'+$id).parent('.que_btn').css({"visibility":"visible"});            
    })  
    //redo
    $('#clfrdb').live('click', function(){
        soundManager.play('_Aredo');
        $('#clfincor, #clfcor').css({display: "none"});
        $('#clf').data("clf").index = 0;
        $('#clf').data("clf").count = 0;
        $('.area_answer_word:eq('+$('#clf').data('clf').indexLesson+') .lelrw').remove();
        $('#clf').data("clf").$text = "";
        $('.area_word:eq('+$('#clf').data('clf').indexLesson+') .que_btn').css({"visibility":"visible"});
        $('.area_word:eq('+$('#clf').data('clf').indexLesson+') .lelrw').fadeIn();
    }) 
    //change lesson
    $('.fltcb').live('mousedown', function() {	
        $('#clfincor, #clfcor').css({display: "none"});
		$plus = parseInt($(this).attr('value'));
        $('#clf').data('clf').indexLesson += $plus;
		if($('#clf').data('clf').indexLesson == 0) {
            $('#clfbb').css({"display":"none"});								
		}else if($('#clf').data('clf').indexLesson >= $('.flts').length - 1) {
		    $('#clfnb').css({"display":"none"});
            $('#clfnsmb').css({"display":"block"});
		}else{
		    $('#clfbb').css({"display":"block"});
            $('#clfnb').css({"display":"block"});
            $('#clfnsmb').css({"display":"none"});
		}
        $fnfltInit();
	}) 
    //review
    $('#clfnsmb').live('mousedown', function(){
        $(this).css({display:"none"});
        $('#clfincor, #clfcor').css({display: "none"});    
        soundManager.stopAll();
        $('.flta, .soundJplayer').jPlayer('stop');
        $('#clfrol').text($('#clf').data('clf').tscore+"/"+$('.flts').length);
        $('#clfrs').css({display:"block"});
    })
    //Redo game
    $('#clfrrd').live('mousedown', function(){
        $('#clf').data('clf').indexLesson = 0;
        $('#clf').data('clf').tscore  = 0;
        $('#clfrs').css({display:"none"});
        $('.flts').removeAttr('pass');
        $('#clfbb').css({"display":"none"});
        $('#clfnb').css({"display":"block"});
        $('.area_answer_word .lelrw').remove();        
        $('.area_word .que_btn').css({"visibility":"visible"});
        $('.area_word .lelrw').fadeIn();        
        $fnfltInit();
    })
    //goldenkids
    $('#clfrgtclbtn').live('mousedown', function(){
        soundManager.stopAll();                        
        $('#clfgks').css({display: "none"});
            
            
    })        
})