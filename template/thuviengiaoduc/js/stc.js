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
function $fnstcgks(){
    $('.stca, .soundJplayer').jPlayer('stop');
    soundManager.stopAll();
    soundManager.play('_Astcgks');
	$('#stcgks').css({display:"block"});
}


function $fnstcInit(){
    $('.stca, .soundJplayer').jPlayer('stop');
    soundManager.stopAll();
    console.log($('#stc').data('stc').indexLesson);
    if($('#stc').data('stc').indexLesson >=2 && !document.getElementById('goldenkids_member')){
        $('#stc').data('stc').indexLesson = 1;
        $fnstcgks();
    }else{         
        $('#stc').data('stc').dragcorrect = 0;
        $('#stccor').css({display: "none"});
        $('#stcincor').css({display: "block"});
        $('#stc').data('stc').number_char = $('.stcls').eq($('#stc').data('stc').indexLesson).attr('number_char');
        $('.stcls').css({"visibility":"hidden", zIndex:-1});				
        $('.stcls').eq($('#stc').data('stc').indexLesson).css({"visibility":"visible", zIndex: 0});
        $('#stca'+$('#stc').data('stc').indexLesson).jPlayer('play');        
    }
}
function $select_item(drop) {
        	var parent_drop = $(drop).parent();
        	var parent = $(parent_drop).siblings('.box_but_2');
        	$(parent).children().each(function(index, element) {
        		if ($(element).attr('lang') == $(drop).attr('lang')) {
        			$(element).droppable({
        				accept: $(drop),
        				tolerance: 'intersect',
        				drop: function(event, ui) {
        					$('#stc').data('stc').dragcorrect++;
        					if ($('#stc').data('stc').dragcorrect == $('#stc').data('stc').number_char) {        						
                                $('.stca, .soundJplayer').jPlayer('stop');
                                soundManager.play('_Acorrect');
                                $('#stccor').css({display: "block"});
                                $('#stcincor').css({display: "none"});        						
                                $('#stc').data('stc').tscore += 1;
        					}
        					$(ui.draggable).draggable('disable');
        					$(ui.draggable).addClass('kids_orange');
        					$(this).addClass('kids_orange');
        					var drop_p = $(this).offset();
        					var drag_p = $(ui.draggable).offset();
        					var left_end = drop_p.left - drag_p.left;
        					var top_end = drop_p.top - drag_p.top;
        					$(ui.draggable).animate({
        						top: '+=' + top_end,
        						left: '+=' + left_end
        					});
        				}
        			});
        		}
        	});
        }
$(document).live('stc_complete',function(){
    $('#stc').data('stc',{indexLesson: 0, dragcorrect: 0, number_char: 0, tscore: 0});
    $('.drag').each(function(index,element){    
        $(element).css('left',$(element).attr('init_left', $(element).position().left));
        $(element).css('top',$(element).attr('init_top', $(element).position().top));
    });
    $('.drag').draggable({
		revert: "invalid",
		start: function(event, ui) {
			$select_item($(this));
		}
	});
    $('#stcstart').one('mousedown',function(){
        $('#stcms').css({display: "block"});
        $('#stcsi').fadeOut(300, function(){            
            $fnstcInit();
        });  
    }); 
   $fnstcInit();
   //change lesson
    $('.stccb').live('mousedown', function() {        
		$plus = parseInt($(this).attr('value'));
        $('#stc').data('stc').indexLesson += $plus;
		if($('#stc').data('stc').indexLesson == 0) {
            $('#stcbb').css({"display":"none"});								
		}else if($('#stc').data('stc').indexLesson >= $('.stcls').length - 1) {
		    $('#stcnb').css({"display":"none"});
            $('#stcnsmb').css({"display":"block"});
		}else{
		    $('#stcbb').css({"display":"block"});
            $('#stcnb').css({"display":"block"});
            $('#stcnsmb').css({"display":"none"});
		}
        $fnstcInit();
	}) 
    //review
    $('#stcnsmb').live('mousedown', function(){
        $(this).css({display:"none"});
        $('#stcincor, #stccor').css({display: "none"});    
        soundManager.stopAll();
        $('.stca, .soundJplayer').jPlayer('stop');
        $('#stcrol').text($('#stc').data('stc').tscore+"/"+$('.stcls').length);
        $('#stcrs').css({display:"block"});
    })
    //Redo game
    $('#stcrrd').live('mousedown', function(){
        $('#stc').data('stc').indexLesson = 0;
        $('#stc').data('stc').tscore  = 0;
        $('#stcrs').css({display:"none"});        
        $('#stcbb').css({"display":"none"});
        $('#stcnb').css({"display":"block"});
        soundManager.play('_Aredo');
        $('.drag').each(function(index,element){
            $(element).css('left',$(element).css('left', '0px'));
            $(element).css('left',$(element).css('top', '0px'));
            $(element).removeClass('kids_orange ui-draggable-disabled ui-state-disabled');
            $(element).removeAttr('aria-disabled');
            $(element).draggable("enable");        
        });
        $('.dropp').each(function(index, element){
          $(element).removeClass('ui-droppable kids_orange');  
        });  
        $fnstcInit();
    })
    //goldenkids
    $('#stcrgtclbtn').live('mousedown', function(){
        soundManager.stopAll();                        
        $('#stcgks').css({display: "none"});    
    })  
})
