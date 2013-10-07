function $previewmode(){
    $('.videoplayer, .slmca').jPlayer("stop");            
    $('.mcfsl').eq($('#mcslfsl').data("mcslv").index).find('.slmcwa').each(function(){
        var $this = $(this);
        if($this.attr("autoplay")){
            var $id = $this.find('.slmca').attr('id');
            $("#"+$id).jPlayer("play");
        }
    })
    $('.mcfsl').eq($('#mcslfsl').data("mcslv").index).find('.dragslmcvideo').each(function(){
        var $this = $(this);
        if($this.attr("autoplay")){
            var $id = $this.find('.videoplayer').attr('id');
            $("#"+$id).jPlayer("play");
        }
    })
    $('.mcfsl').eq($('#mcslfsl').data("mcslv").index).find('.slmchidden').each(function(){
        var $this = $(this);
        var $timeout = parseInt($this.attr('timeout'));
        var $fadein = parseInt($this.attr('delay')); 
        $this.fadeOut(10).delay($timeout).fadeIn($fadein);
    })        
}
$(function(){
    $('#mcslfsl').css({height: $('#slct').height(), "padding-bottom": "6px"});
    $('#mcslcsl').removeAttr('style');  
    $('.blueButton').text('');
    $('#mcslcbtnb').css({"visibility":"hidden",zIndex: -1});
    $('#mcslfsl, .mcfsl').css({display:"block", visibility:"hidden",zIndex: -1});
    $('#mcslfsl, .mcfsl:first').css({visibility:"visible",zIndex: 0});
	$('#mcslfsl').data("mcslv", {"index": 0});    
    
    $(window).load(function(){
        //slide
        var $stt = 0;    
        $('.mcfsl').each(function(index,ele){
            $stt++;        
            if($(this).attr('slname')== "No Name"){
                var $slidename = "Lession "+$stt;  
            }else{
                var $slidename  = $(this).attr('slname');
            }        
            var $html = '<div class="slmcowrow" id="slmcorow'+index+'" _index ="'+index+'" ><div class="slmcorow"><div class="slmcon">'+$stt+'.</div><div class="slmcoq">'+$slidename+'</div></div></div>';
            $('#slmcotb').append($html) 
            
        }).promise().done(function(){
            $('.slmcoq').css({width: $('#slmcato').width()-100});
        })  
        $('#mcslcbtnoutline').live('mousedown', function(){
            $('#slmcsol').css({display: "block"});
            $('.slmcorow').removeClass('slmcorowAct');
            $('.slmcorow').eq($('#mcslfsl').data("mcslv").index).addClass('slmcorowAct');
        });
        $('#slmcocl').live('mousedown', function(){
            $('#slmcsol').css({display: "none"});
        });  
        $('.slmcowrow').live('mousedown', function(){
            $('#slmcsol').css({display: "none"});
            $('.mcfsl').css({"visibility":"hidden",zIndex: -1});
            $('#mcslfsl').data("mcslv").index = $(this).index('.slmcowrow');
            $('.mcfsl').eq($('#mcslfsl').data("mcslv").index).css({"visibility":"visible",zIndex: 0});
            if($('#mcslfsl').data("mcslv").index == 0) {
                $('#mcslcbtnb').css({"visibility":"hidden",zIndex: -1});
                $('#mcslcbtnn').css({"display":"block"});
                $('#mcslcbtnh').css({"display":"none"});                								
    		}else if($('#mcslfsl').data("mcslv").index >= $('.mcfsl').length - 1) {
    		    $('#mcslcbtnn').css({"display":"none"});
                $('#mcslcbtnh').css({"display":"block"});
                $('#mcslcbtnb').css({"visibility":"visible",zIndex: 0}); 
    		}else{
    		    $('#mcslcbtnb').css({"visibility":"visible",zIndex: 0});
                $('#mcslcbtnn').css({"display":"block"});
                $('#mcslcbtnh').css({"display":"none"}); 
    		}
            $previewmode();       
        });  
        $('#mcslcbtnh').live('mousedown', function(){            
            $('#mcslfsl').data("mcslv").index = 0;
            $('.mcfsl').css({"visibility":"hidden",zIndex: -1});
            $('.mcfsl:first').css({"visibility":"visible",zIndex: 0});
            $('#mcslcbtnb').css({"visibility":"hidden",zIndex: -1});
            $('#mcslcbtnn').css({"display":"block"});
            $('#mcslcbtnh').css({"display":"none"});
            $previewmode();
        })
        //audio
        $('#slct .slmcwa').each(function(index,ele){                                
            $(this).find('.slmcabt').gJPlayS({theme: "circle",index: index});
            $(this).find('.slmcasb').gJPlayS({theme: "seekbar",index: index});
        })
        $('#slct .videoplayer').each(function(index,ele){    
            $(this).gJPlayV({index: "slmcdvp"+index});
        })
    	$('.mcslcbtn').live('mousedown', function() {
    		if ($('.mcfsl').length > 0){
    			$plus = parseInt($(this).attr('value'));
                $('#mcslfsl').data("mcslv").index += $plus;
                console.log($('#mcslfsl').data("mcslv").index); 
    			if($('#mcslfsl').data("mcslv").index == 0) {
                    $('#mcslcbtnb').css({"visibility":"hidden",zIndex: -1});								
    			}else if($('#mcslfsl').data("mcslv").index >= $('.mcfsl').length - 1) {
    			    $('#mcslcbtnn').css({"display":"none"});
                    $('#mcslcbtnh').css({"display":"block"});
    			}else{
    			    $('#mcslcbtnb').css({"visibility":"visible",zIndex: 0});
                    $('#mcslcbtnn').css({"display":"block"});
                    $('#mcslcbtnh').css({"display":"none"});
    			}
                $('.mcfsl').css({"visibility":"hidden",zIndex: -1});
    			$('.mcfsl').eq($('#mcslfsl').data("mcslv").index).css({"visibility":"visible",zIndex: 0});
                $previewmode();
    		} else {
    			alert('chua có slide nào');
    		}
    	})
        setTimeout(function(){
          $previewmode()  
        },300)
    })
})