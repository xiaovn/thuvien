function $fngks(){
    $('.clfpta, .soundJplayer').jPlayer('stop');
    $('#_Aclfpgks').jPlayer('play');
	$('#clfpgks').css({display:"block"});
}
function $fnsetIndex(){
		var listMiss = [];
		$('.clfpts').each(function(index, element) {
		    var $this = $(this);
			if (!$this.attr('answer')) {
				listMiss.push(index);
			}
		}).promise().done(function(){
		      $('#clfp').data('clfp').index = listMiss[0];
		});
}
function $fnInit(){
    if($('#clfp').data('clfp').index >=2 && !document.getElementById('goldenkids_member')){
        $fngks();
    }else{  
        var $number = $('#clfp').data('clfp').index;
        $number++;        
        $('#clfpttt').text('Question '+$number+' of '+clfpt["lesson"].length);
        $('#clfp').data('clfp').selected = false;
        $('#clfpnx').css({display:"none"});
        $('#clfpsm').css({display:"block"});
        $('#clfptrs, #clfptan').empty();
        $('.clfpts').css({"visibility":"hidden"});				
        $('.clfpts').eq($('#clfp').data('clfp').index).css({"visibility":"visible"});        
        $('.clfpta, .soundJplayer').jPlayer('stop');        
        $('#clfpta'+$('#clfp').data('clfp').index).jPlayer('play');
    }
}
function $review(){    
    $('#clfp').data('clfp').playmode = false;
    _countUpAble = false;
    if($('#clfp').data('clfp').tscore < clfpt["min_score"]){
        $('#clfprrt').empty().append('<div style="color: red">Sorry, You failed.</div>');
    }else{
        $('#clfprrt').empty().append('<div style="color: blue">Congratulations, You passed!</div>');
    }
    $('#clfprys').text($('#clfp').data('clfp').tscore);    
    $('#_Acorrect, #_Aincorrect').one($.jPlayer.event.ended, function(){
         $('#clfprs').css({display:"block"});
    }) 
}
$(document).live('clfpt_complete',function(){
    //$('#clfpato .ab').draggable();    
    $('#clfp').data('clfp',{index: 0, selected: false, tscore: 0, playmode: true});
    $('#clfp').data('clfp').score = parseInt(clfpt["max_score"]) / clfpt["lesson"].length;
    $('#clfpstart').one('mousedown',function(){
        $('#clfpms').css({display: "block"});
        $('#clfpsi').fadeOut(300, function(){
            $('#clfprt').countup();
            $fnInit();
        });  
    });
    $('.clfptsl').live('mousedown',function(){        
        if(!$(this).parents('.clfpts').attr('answer')){
           $('#clfp').data('clfp').selected = true;
           $(this).siblings('.clfptsl').removeClass('clfptslAca');
           $(this).addClass('clfptslAca');   
        }        
    })
    $('#clfpsm').live('mousedown',function(){
        if($('#clfp').data('clfp').selected == true){
            $(this).css({display:"none"});
            $('.clfpta').jPlayer('stop');
            $('.clfpts').eq($('#clfp').data('clfp').index).attr('answer',true);            
            $('.clfpowrow').eq($('#clfp').data('clfp').index).attr('answer',true);
            if($('.clfpts').eq($('#clfp').data('clfp').index).find('.clfptslAca').attr('cr')){
                $('#_Acorrect').jPlayer('play');
                $('#clfp').data('clfp').tscore += $('#clfp').data('clfp').score ; 
                var $html = '<span id="clfpir"><img src="tick-10.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/clfpt/img/tick.png*/ width="15" height="15" /></span> Your answer: <span id="clfpir">Correct</span>'
                $('#clfptrs').empty().append($html);
            }else{
                $('#_Aincorrect').jPlayer('play');
                var $html = '<span id="clfpir"><img src="cross-12.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/clfpt/img/cross.png*/ width="12" height="13" /></span> Your answer: <span id="clfpincr">Incorrect</span>'
                $('#clfptrs').empty().append($html);
            }
            $('#clfptan').empty().text(clfpt.lesson[$('#clfp').data('clfp').index].tutorial);            
            $fnsetIndex(); 
            if($('#clfp').data('clfp').index != undefined){                
                $('#clfpnx').css({display:"block"});
            }else{
                $review();                               
            }
        }else{
           $('#clfptrs').empty().append('<div id="clfpwarning">You must complete the question before submitting.</div>') 
        }
    })
    $('#clfpnx').live('mousedown',function(){
        if($('#clfp').data('clfp').playmode == true){
            $(this).css({display:"none"});
            $('#clfpsm').css({display:"block"});
            $fnInit();    
        }else{                        
            $('.clfpta, .soundJplayer').jPlayer('stop');
            $('#clfp').data('clfp').index++;
            var $number = $('#clfp').data('clfp').index;            
            $number++;
            console.log("$('#clfp').data('clfp').index: "+$('#clfp').data('clfp').index+" number:"+$number);
            $('#clfpttt').text('Question '+$number+' of '+clfpt["lesson"].length);
            if($('#clfp').data('clfp').index < clfpt["lesson"].length){
                $('.clfpts').css({"visibility":"hidden"});				
                $('.clfpts').eq($('#clfp').data('clfp').index).css({"visibility":"visible"});
                $('#clfpta'+$('#clfp').data('clfp').index).jPlayer('play'); 
            }else{
                $('#clfprs').css({display:"block"});
            }
        }        
    });
    //outline
    $('.clfpol').live('mousedown',function(){
        $('.clfpors, .clfposc').empty();        
        $('.clfpts').each(function(index, domobj){
            var $this = $(this);  
            if($this.attr('answer')){
                if($this.find('.clfptslAca').attr('cr')){
                    $('.clfpors').eq(index).append('<img src="tick-10.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/clfpt/img/tick.png*/ width="15" height="15" />');
                    $('.clfposc').eq(index).text($('#clfp').data('clfp').score);
                }else{
                    $('.clfpors').eq(index).append('<img src="cross-12.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/clfpt/img/cross.png*/ width="12" height="13" />');
                    $('.clfposc').eq(index).text(0);
                }
            }else{
                $this.children().removeClass('clfptslAca');
            }
        }).promise().done(function(){
            $('#clfpsol').css({display:"block"});
        })        
    })
    
    $('#clfpocl').live('mousedown',function(){
        $('#clfpsol').css({display:"none"});        
    })
    
    $('.clfpowrow').live('mousedown',function(){
        var $this = $(this);
        $('#clfp').data('clfp').index = $this.index('.clfpowrow'); 
        if($this.attr('answer')){            
            $('#clfp').data('clfp').selected = true;
            var $number = $('#clfp').data('clfp').index;
            $number++;
            $('#clfpttt').text('Question '+$number+' of '+clfpt["lesson"].length);
            $('#clfpsm, #clfprs').css({display:"none"});
            $('.clfpts').css({"visibility":"hidden"});	
            $('#clfpnx').css({display:"block"});            
            if($('.clfpts').eq($('#clfp').data('clfp').index).find('.clfptslAca').attr('cr')){                 
                var $html = '<span id="clfpir"><img src="tick-10.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/clfpt/img/tick.png*/ width="15" height="15" /></span> Your answer: <span id="clfpir">Correct</span>'
                $('#clfptrs').empty().append($html);
            }else{
                var $html = '<span id="clfpir"><img src="cross-12.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/clfpt/img/cross.png*/ width="12" height="13" /></span> Your answer: <span id="clfpincr">Incorrect</span>'
                $('#clfptrs').empty().append($html);
            }
            $('.clfpts').eq($('#clfp').data('clfp').index).css({"visibility":"visible"});
            $('.clfpta, .soundJplayer').jPlayer('stop');
            $('#clfpta'+$('#clfp').data('clfp').index).jPlayer('play');            
            if($('#clfp').data('clfp').playmode == true){
                $fnsetIndex();   
            }             
        }else{ 
            $fnInit();  
        }
        $('#clfpsol').css({display:"none"});
    }) 
    //redo
    $('#clfprrd').live('mousedown',function(){
        $('#clfp').data('clfp').selected = false;
        $('#clfp').data('clfp').index = 0;
        $('#clfp').data('clfp').playmode = true;
        $('#clfp').data('clfp').tscore  = 0;
        _countUpAble = true;
        $('#clfprt').countup();
        $('.clfpts, .clfpowrow').removeAttr('answer'); 
        $('.clfpts').find('.clfptsl').removeClass('clfptslAca');
        $('#clfprs').css({display:"none"});
        $fnInit();
    })   	
})