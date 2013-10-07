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
//none goldenkids
function _nongks(){
    $('.videoplayer, .slmca').jPlayer("stop");  
    $.fn.playAudio(0,'_Agks',true);
	$('#mcslfsl #popup_non_goldenkid').fadeIn(300,function(){
	 	$('#mcslfsl #thong_bao_png').animate({
		 	top: '10px' 
		},1000,'linear');
	});
 };
$(function(){
    $('#mcslfsl').css({height: $('#slct').height(), "padding-bottom": "6px"});
    $('#mcslcsl').removeAttr('style');  
    $('.blueButton').text('');
    $('#mcslcbtnb').css({"visibility":"hidden",zIndex: -1});
    $('#mcslfsl, .mcfsl').css({display:"block", visibility:"hidden",zIndex: -1});
    $('#mcslfsl, .mcfsl:first').css({visibility:"visible",zIndex: 0});
	$('#mcslfsl').data("mcslv", {"index": 0});  
    $('#mcslfsl').createAudio("/file/learn/child/dungchung/lib_new_en/goldenkids","_Agks");    
    var $gkshtml = '<div id="popup_non_goldenkid" class="ab" style="display: none; width: 100%; height: 100%;">'+
                        '<a target="_blank" href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html*/>'+
                            '<div style="position: absolute; top: 0px; left: 0px; width:100%; height: 100%; background-color: black; opacity: 0.5;"></div>'+
                            '<img id="thong_bao_png" src="non_gks-1.png"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/dungchung/lib_new_en/non_gks.png*/ width="381" height="429" style="top:'+$('#mcslfsl').height()+'px; position: absolute; left: '+($('#mcslfsl').width() - 381)/2+'px;" />'+
                        '</a>'+
                	'</div>';
    $('#mcslcsl').after($gkshtml);
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
            $('#mcslfsl').data("mcslv").index = $(this).index('.slmcowrow');
            if($('#mcslfsl').data("mcslv").index >= 2 && !document.getElementById('goldenkids_member')){_nongks();}else{
                $('.mcfsl').css({"visibility":"hidden",zIndex: -1});            
                $('.mcfsl').eq($('#mcslfsl').data("mcslv").index).css({"visibility":"visible",zIndex: 0});
                $previewmode();    
            }
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
                if($('#mcslfsl').data("mcslv").index >= 2 && !document.getElementById('goldenkids_member')){_nongks();}else{
                    $('.mcfsl').css({"visibility":"hidden",zIndex: -1});
    			    $('.mcfsl').eq($('#mcslfsl').data("mcslv").index).css({"visibility":"visible",zIndex: 0});
                    $previewmode();   
                }
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
    		} else {
    			alert('chua c� slide n�o');
    		}
    	})
        setTimeout(function(){
          $previewmode()  
        },300)
    })
})