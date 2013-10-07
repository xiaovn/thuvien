var _index = 0;
var _Key;
var _src;
function $fngks(){
    soundManager.stopAll();
    soundManager.play('_Agks');
	$('#popup_non_goldenkid').fadeIn(300,function(){
	 	$('#thong_bao_png').animate({
		 	top: '10px' 
		},1000,'linear');
	});
}
function $fnsetIndex(){
    try {
		var listMiss = [];
		$('#area_answer_word .an_btn').each(function(index, element) {
			if ($(this).children('.lelrw').length == 0) {
				listMiss.push(index);
			}
		});
	} catch (e) {
		console.log(e);
	} finally {
	   $('#lelr').data("lelrvl").index = listMiss[0];
	}
}
function _init(){
     $('#lelr').data("lelrvl").scrplus = 1;
     $('#lelr').data("lelrvl").index = 0;
     $('#lelr').data("lelrvl").count = 0;
     $('#lelr').data("lelrvl").inhint = 0;
     $('.lelrrs,#ltlrh').fadeOut(10);
     $('.ltlrimg').css({"display":"none"});
    $('#area_word, #area_answer_word,#ltlrh').empty();
    var _Key = $('#lelr').data("lelrvl").listKey[$('#lelr').data("lelrvl").inles].split('');    
    $.each(_Key, function(index, value){
        if(value == " "){            
            $('#ltlrh').append('<div class="hbtnspace"></div>');
            $('#area_answer_word').append('<div class="hbtnspace"></div>');    
        }else{
            $('#area_word').append('<div class="que_btn"><div class="lelrw" id="'+index+'" char="'+value+'">'+value+'</div></div>');
            $('#ltlrh').append('<div class="hbtn"><div class="lelrh">'+value+'</div></div>');
            $('#area_answer_word').append('<div class="an_btn"></div>');
        }            
        
    })   
    $('#area_word').randomize();
    soundManager.stopAll();
    soundManager.play('_A'+$('#lelr').data("lelrvl").inles);
    $('#_img'+$('#lelr').data("lelrvl").inles).css({"display":"block"}); 
}

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
$(window).load(function(){    
    $('#lelr').data("lelrvl").scrore = 0;
    setInterval(function(){
        $('.lelrrs').toggleClass('lelrrsActive');   
    },300); 
    $('.reSpeak').live('click', function(){         
         if(!$(this).attr('active')){
            $(this).attr('active',true);
            soundManager.stopAll(); 
            soundManager.play($(this).attr('audio'));
            $(this).animate({scale: 1},200,'swing').animate({scale: 0.9},{duration: 200, easing: 'swing', complete: function(){
                $(this).removeAttr('active')
            }});
        }         
    })
    $('#area_word .lelrw').live('click', function(){
        //soundManager.play('_Asnap');
        soundManager.stopAll();
        soundManager.play('_Aapb'+$(this).attr('char'));        
        $fnsetIndex();                
        var $this = $(this).clone();
        var $parent = $(this).parent('.que_btn');        
        $(this,'.lelrrs').fadeOut(10);
        $parent.css({"visibility":"hidden"});
        $('#lelr').data("lelrvl").count++;   
        $('.an_btn').eq($('#lelr').data("lelrvl").index).append($this);
        
        $(document).unbind('_Aapb'+$(this).attr('char')+'_finish').bind('_Aapb'+$(this).attr('char')+'_finish',function(){
          if($('#lelr').data("lelrvl").count == $('.an_btn').length){
            soundManager.stopAll();
            soundManager.play('_A'+$('#lelr').data("lelrvl").inles);
          }     
        })
               
    })
    $('#area_answer_word .lelrw').live('click', function(){
        //soundManager.play('_Arevert');
        soundManager.stopAll();
        soundManager.play('_Aapb'+$(this).attr('char'));
        $('#lelr').data("lelrvl").count--;
        var  $id = $(this).attr('id');
        $(this).remove();
        $('.lelrrs,#lelrnext').fadeOut(10);
        $('#area_word #'+$id).fadeIn(10);
        $('#area_word #'+$id).parent('.que_btn').css({"visibility":"visible"});            
    })
    $('#lelrcheck').live('click', function(){    
        $('#lelr').data("lelrvl").$text = '';
        $('#ltlrh,.lelrrs').fadeOut(10);
        $('#area_answer_word .lelrw').text(function(index, string){
            if(string.toLowerCase() == "space"){
                string = " ";
            }
            $('#lelr').data("lelrvl").$text += string;
        });
        if($('#lelr').data("lelrvl").$text.replace(/\s+/g, '').trim() == $('#lelr').data("lelrvl").listKey[$('#lelr').data("lelrvl").inles].replace(/\s+/g, '').trim()){
            if($('#lelr').data("lelrvl").inles >= 2 && !document.getElementById('goldenkids_member')){
                $fngks(); 
            }else if($('#lelr').data("lelrvl").inles >= $('#lelr').data("lelrvl").listKey.length-1){
                $('#lelr').data("lelrvl").scrore += $('#lelr').data("lelrvl").scrplus;
                $('#ltlrrstb').empty().append('<div><p style="color:#ffff00;">CHÚC MỪNG</p><p style="color:#fdfeff;">KẾT QUẢ CỦA BẠN ĐẠT</p><p style="color:#ffff00;">'+$('#lelr').data("lelrvl").scrore+'điểm / '+$('#lelr').data("lelrvl").listKey.length+' câu hỏi</p></di>');
                $('#ltlrrs').fadeIn(300, function(){
                    soundManager.stopAll(); 
                    soundManager.play('_Acongrat');
                });
            }else{
                soundManager.stopAll(); 
                soundManager.play('_Acorect');
                $('#lelrcor,#lelrnext').fadeIn(10);        
            }                              
        }else{
            soundManager.stopAll(); 
            soundManager.play('_Awrong');
            $('#lelrinco').fadeIn(10);            
            $('#lelr').data("lelrvl").scrplus = 0.5;
        }        
    })
    $('#lelrredo').live('click', function(){
        soundManager.play('_Aredo');
        $('#lelr').data("lelrvl").index = 0;
        $('#lelr').data("lelrvl").count = 0;
        $('#area_answer_word .lelrw').remove();
        $('#lelr').data("lelrvl").$text = "";
        $('.que_btn').css({"visibility":"visible"});
        $('#area_word .lelrw').fadeIn();
        $('.lelrrs,#lelrnext,#ltlrh').fadeOut(10);
    })
    $('#lelrhint').live('mousedown', function(){
        soundManager.play('_Asnap');
        $('#ltlrh').css({"display":"block"});
        if($('#lelr').data("lelrvl").inhint < $('.lelrh').length){
            $('.lelrh').eq($('#lelr').data("lelrvl").inhint).fadeIn(300);
            $('#lelr').data("lelrvl").inhint++
        }
    })
    $('#lelrsp').live('mousedown', function(){        
        if(!$('#lelrsp').data("active")){
            $('#lelrsp').data("active",true);
            soundManager.stopAll();
            soundManager.play('_A'+$('#lelr').data("lelrvl").inles);         
            $(this).animate({scale: 1},200,'swing').animate({scale: 0.9},{duration: 200, easing: 'swing', complete: function(){
                $('#lelrsp').data("active",false);
            }});
        }      
    })
    $('#lelrnext').live('mousedown', function(){
        soundManager.stopAll(); 
        soundManager.play("_Anext");
        $(this).fadeOut(10);   
        $('#lelr').data("lelrvl").scrore += $('#lelr').data("lelrvl").scrplus;     
        $('#lelr').data("lelrvl").inles++;
        _init();                   
    })
    $('#ltlrrp').live('mousedown', function(){        
        $('#lelr').data("lelrvl").scrore = 0;
        $('#lelr').data("lelrvl").inles = 0;
        $('#ltlrrs').fadeOut(10, function(){
            _init();
        });
    })
})