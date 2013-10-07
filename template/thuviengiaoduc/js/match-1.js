jQuery.fn.swap = function(b){ 
    // method from: http://blog.pengoworks.com/index.cfm/2008/9/24/A-quick-and-dirty-swap-method-for-jQuery
    b = jQuery(b)[0];        
    var a = this[0]; 
    var t = a.parentNode.insertBefore(document.createTextNode(''), a); 
    b.parentNode.insertBefore(a, b); 
    t.parentNode.insertBefore(b, t); 
    t.parentNode.removeChild(t);     
    return this; 
};
//reset
function revertDraggable($selector) {
    $($selector).each(function() {
        var $this = $(this),
            position = $this.data("originalPosition");

        if (position) {
            $this.animate({
                left: position.left,
                top: position.top
            }, 500, function() {
                $this.data("originalPosition", null);
            });
        }
    });
}
//ververting
$.ui.draggable.prototype._mouseStop = function(event) {
            //If we are using droppables, inform the manager about the drop
            var dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour)
            	dropped = $.ui.ddmanager.drop(this, event);
        
            //if a drop comes from outside (a sortable)
            if(this.dropped) {
            	dropped = this.dropped;
            	this.dropped = false;
            }
        
            if((this.options.revert == "invalid" && !dropped) || (this.options.revert == "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
            	var self = this;
            	self._trigger("reverting", event);
            	$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
            		event.reverted = true;
            		self._trigger("stop", event);
            		self._clear();
            	});
            } else {
            	this._trigger("stop", event);
            	this._clear();
            }
        
            return false;
        }
$(window).load(function(){
    var question_index = 0;
    var next_avaiable = false;
    var goldenkid = false;
    var review_mode = false;    
    var score = 0;
    var number_question = $('.class_match_picture .lesstion').length;
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		goldenkid = true;
    	}
    var practice_list_answer = [];
    var reverted = false; 
    /*------------------*/
    $(".class_match_picture .drag" ).draggable({ 
            //revert: true,
            helper: "clone",
            zIndex: 10,
             start: function(event, ui){               
                    $(this).css('visibility','hidden');
                },
                stop: function(event, ui){
                    $(this).css('visibility','visible');                    
            	}
    });
        $( ".class_match_picture .drag" ).droppable({
            accept: ".drag",
            drop: function( event, ui ) {                
                var draggable = ui.draggable,                     
                    droppable = $(this),
                    parent = $(this).parent();                    
                    dragPos = draggable.position(),
                    dropPos = droppable.position();
                var _tempAni = $(droppable).clone();
                try{
                    $(_tempAni).css({
                        position: "absolute",
                        top: dropPos.top+'px'
                    }).appendTo(parent);
                }finally{ 
                    $(_tempAni).animate({
                        top: dragPos.top+'px' 
                    },300, function(){
                        $(this).remove();
                        $(droppable).css('visibility','visible');
                        next_avaiable = true;        
                    });
                }                             
                draggable.css({
                    left: dropPos.left+'px',
                    top: dropPos.top+'px'
                });
                
                droppable.css({
                    left: dragPos.left+'px',
                    top: dragPos.top+'px',
                    visibility: 'hidden'                                        
                });              
                draggable.swap(droppable);                
            }
        });   
  //end of new code  
   $('.class_match_picture audio,.class_match_picture video').mediaelementplayer();
    $( ".class_match_picture .wrap_drag" ).disableSelection();
   $('.class_match_picture .change_ques_btn').bind('click', function() {   
    		var _self = $(this);
    		if ((question_index == 0) && (parseInt($(_self).attr('value')) == -1)) {
    			 question_index = 0;
    		} else if ((question_index == (number_question) - 1) && (parseInt($(_self).attr('value')) == 1)) {
    			question_index = (number_question) - 1;
    		}else{   		  
    		   if(next_avaiable == true || review_mode == true){
				  if(review_mode == false){
						next_avaiable = false; 
					}
                   /*top audio*/
                  pauseAudioSeekbar('.class_match_picture');  
    		      question_index = question_index + parseInt($(_self).attr('value'));
                    if(goldenkid != true && question_index >= 2){
                        loadAudioSeekbar('.class_match_picture','audio_none_goldenkids');
                       $('.class_match_picture #popup_non_goldenkid').fadeIn(300,function(){
                            playAudioSeekbar('.class_match_picture', 'audio_none_goldenkids');
        				 	$('.class_match_picture #thong_bao_png').animate({
        					 	top: '10px' 
        					},1000,'linear');                                              
        				});                     
                    }else{                                              
            			$('.class_match_picture .lesstion').css('display','none');
                        $('.class_match_picture .lesstion').eq(question_index).fadeIn(300);
                        $('.class_match_picture #name_lession').html($('.class_match_picture .lesstion').eq(question_index).attr('name'));
                        if(question_index == (number_question) - 1 && review_mode == false){
                            $('.class_match_picture #out_line_btn').css('display','none');
                             $('.class_match_picture .change_ques_btn').css('display','none'); 
                            $('.class_match_picture #submit_btn').fadeIn(300);
                        }else if(question_index == (number_question) - 1 && review_mode == true){
                             /*$('.class_match_picture #out_line_btn').css('display','none');*/
                            $('.class_match_picture .change_ques_btn').css('display','none'); 
                           $('.class_match_picture #result_btn').fadeIn(300); 
                        }
                    }                              
        		}
        }
   	});
    $('.class_match_picture .lesstion').each(function(index,element){
            var name = $(element).attr('name');            
            createEleHtml('div','lession_'+index,'menu_lession','','.class_match_picture #list_lesstion_content');
            $('.class_match_picture #lession_'+index).html(name); 
    });
    
    $('.class_match_picture #out_line_btn').bind('click', function(){
       $('.class_match_picture #out_line_page').fadeIn(300);
       $('.class_match_picture .menu_lession').removeClass('menu_active'); 
       $('.class_match_picture .menu_lession').eq(question_index).addClass('menu_active');
    });
    $('.class_match_picture #close_list_less_btn').bind('click', function(){
         $('.class_match_picture #out_line_page').css('display','none');
    })
    $('.class_match_picture .menu_lession').bind('click', function(){
        $('.class_match_picture #out_line_page').css('display','none');
        var choose_lesstion = $(this).text();
        question_index = $(this).index();
        if(goldenkid != true && question_index >= 2){
               $('.class_match_picture #popup_non_goldenkid').fadeIn(300,function(){
				 	$('.class_match_picture #thong_bao_png').animate({
					 	top: '10px' 
					},1000,'linear');
				});
        }else{             
            $('.class_match_picture .lesstion').css('display','none');
            $('.class_match_picture .lesstion').each(function(index,element){
                if($(element).attr('name') == choose_lesstion){
                    if(question_index == (number_question) - 1){
                        $('.class_match_picture .change_ques_btn').css('display','none');
                        $('.class_match_picture .result_btn').fadeIn(300);
                    }else{                        
                        $('.class_match_picture .result_btn').css('display','none');
                        $('.class_match_picture .change_ques_btn').fadeIn(300);
                    }
                    $(element).fadeIn(300);                    
                    $('.class_match_picture #name_lession').html(choose_lesstion);
                }             
            });
            pauseAudioSeekbar('.class_match_picture');          
        }
        
    });
    $('.class_match_picture #start_btn').bind('click', function(){
        $('.class_match_picture #start_screen').css('display','none');
        $('.class_match_picture #name_lession').html($('.class_match_picture .lesstion').eq(0).attr('name'));        
        $('.class_match_picture #next_btn').fadeIn(300);
        $('.class_match_picture .lesstion').eq(0).fadeIn(300);
        $('.class_match_picture #practice_intruction').fadeIn(300);
    });
    
    $('.class_match_picture #redo_btn').bind('click',function(){
        question_index = 0;
        score =0;
        review_mode = false;
        $('.class_match_picture .wrap_drag .drag').each(function(index,ele){
             var _self = $(this);
             var _parent = $(this).parent();
               if($(_self).attr('name') == 1){
                $(_self).prependTo(_parent);
                }else if($(_self).attr('name') == 3){
                $(_self).appendTo(_parent);
                }
        })   
        $(".class_match_picture .wrap_drag .drag").draggable("enable");
        $('.class_match_picture .result_screen').css('display','none');
        $('.class_match_picture .drag .result_icon').remove();
        $('.class_match_picture .drag').removeClass('drag_false');
        $('.class_match_picture .drag').removeClass('drag_correct');
        $('.class_match_picture .drop').removeClass('drop_false');
        $('.class_match_picture .drop').removeClass('drop_correct');
        $('.class_match_picture #out_line_btn').css('display','none');
        $('.class_match_picture #popup_congratulation').css('display','none');
        $('.class_match_picture .lesstion').css('display','none');
        $('.class_match_picture .lesstion').eq(0).fadeIn(300);
        $('.class_match_picture .change_ques_btn').css('display','none');        
        $('.class_match_picture #next_btn').fadeIn(300);        
        $('.class_match_picture .icon_result').css('display','none');
        $('.class_match_picture .form_answer_correct').css('display','none');         
        $('.class_match_picture #name_lession').html($('.class_match_picture .lesstion').eq(question_index).attr('name'));          
    });
    $('.class_match_picture #submit_btn, .class_match_picture #result_btn').bind('click', function(){
        if(next_avaiable == true || review_mode == true){
    		  if(review_mode == false){
    				next_avaiable = false; 
    			}
            $('.class_match_picture .result_btn').css('display','none');
            $('.class_match_picture .drag .result_icon').remove();
                 $('.drop').each(function(index, element){
                        var _self_drag = $('.drag').eq(index);
                         var correct = $.trim($('.class_match_picture .drop').eq(index).attr('correct'));
                         var answer = $.trim($('.class_match_picture .drag').eq(index).attr('name')); 
                        if(answer == correct){   
                            $('.class_match_picture .drag').eq(index).addClass('drag_correct');
                            $('.class_match_picture .sound .tick').clone().appendTo(_self_drag);
                            $('.class_match_picture .drop').eq(index).addClass('drop_correct');
                            score++;                            
                        }else{
                            $('.class_match_picture .drag').eq(index).addClass('drag_false');
                            $('.class_match_picture .sound .cross').clone().appendTo(_self_drag);
                            $('.class_match_picture .drop').eq(index).addClass('drop_false');
                        }           
                    });
                $('.class_match_picture #result_game').html(score+'/'+$('.drop').length);
                $('.class_match_picture #popup_congratulation').fadeIn(300, function(){
                    score = 0;
                });
                pauseAudioSeekbar('.class_match_picture'); 
         }
    });
    $('.class_match_picture #review_btn').bind('click', function(){
        review_mode = true;        
        $('.class_match_picture .result_screen').css('display','block');
        $(".class_match_picture .wrap_drag .drag").draggable("disable");
        question_index = 0; 
        $('.class_match_picture #out_line_btn').fadeIn(300);
        $('.class_match_picture #popup_congratulation').css('display','none');
        $('.class_match_picture .lesstion').css('display','none');
        $('.class_match_picture #out_line_btn').fadeIn(300);
        $('.class_match_picture .lesstion').eq(0).fadeIn(300); 
        $('.class_match_picture .change_ques_btn').fadeIn(300);
        $('.class_match_picture .form_answer_correct').css('display','block');
        $('.class_match_picture #name_lession').html($('.class_match_picture  .lesstion').eq(question_index).attr('name'));        
    });
    
});