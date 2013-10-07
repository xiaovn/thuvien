// thanh vien vip
var vip=0;
if (paidmember()){
	vip=1;
}
isIOS = false;
var path_img="/file/dungchung/quiz_common/images/";
var msg_vip_trans='Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank" title="quyền lợi thành viên VIP"  style="color:#0d6af7;" target="_blank" >thành viên VIP</a> của TiếngAnh123.Com mới có thể xem được lời dịch hiện ở đây';
var msg_vip_bg='Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank">thành viên VIP</a> của thuviengiaoduc.org mới được học tiếp  bài học này !';
var msg_vip_sb='Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank">thành viên VIP</a> của thuviengiaoduc.org mới được làm tiếp bài này !';
audio_ctrl=new Object();
audio_ctrl = {
	start:'start_next.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/gold/start_next.mp3*/,
	correct:'correct.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/gold/correct.mp3*/,
	incorrect:'incorrect.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/gold/incorrect.mp3*/,
	next:'start_next.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/gold/start_next.mp3*/,
	vip:'vip_only_audio.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/vip_only_audio.mp3*/,
	you_passed:'you_passed.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/gold/you_passed.mp3*/,
	you_failed:'you_failed.mp3'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/libAudio/gold/you_failed.mp3*/	,
}
$(document).ready(function(){
	// am thanh cho cac nut	
	$("#ubaPlayer_ctrl").ubaPlayer_ctrl({
		audioButtonClass:'uba_ctrl',				
		codecs: [{name:"MP3", codec: 'audio/mpeg;'}],					
		playStartCallback: PlayingAudioHide,
		stopCallback: stopAudioHide							
	});	
	/*	Popup image for real view
	*/
// add type
	$('.qz_st1').after('<div class="stt_page_type" sub="0" item_type=""></div>');
	$('.qz_sort_drop').parents('.qz_st1').next().text('Sequence').attr('sub','0').attr('item_type','Sequence');
	$('.qz_blank').parents('.qz_st1').next().text('Fill in the blank').attr('sub','0').attr('item_type','Fill in the blank');	
	$('.stt_mat_drop').parents('.qz_st1').next().text('Matching').attr('sub','0').attr('item_type','Matching');
	$('.qz_radio').parents('.qz_st1').next().text('Multiple choice').attr('sub','0').attr('item_type','Multiple choice');	
	$('.qz_check_ic').parents('.qz_st1').next().text('Checkbox').attr('sub','0').attr('item_type','Checkbox');
	
var pWidth;
	var pHeight;
	var popupStatus = 0;
	$('.qz_box img').click(function(){
		if ($(this).attr('src').indexOf('copy_bt-1.png'/*tpa=http://www.thuviengiaoduc.org/file/dungchung/quiz_common/js/copy_bt.png*/)<0){
			$('.qz_box').append('<div class="backgroundPopup"></div>');		
			setTimeout(function(){ // then show popup, deley in .5 second
				 // function show popup 
			}, 500); // .5 second
			
			if(popupStatus == 0) { // if value is 0, show popup			
				if ($('.qz_box').append('<div class="toPopup"><div class="close"></div><span class="ecs_tooltip">Press Esc to close <span class="arrow"></span></span><img src="'+$(this).attr('src')+'" class="qz_pop_img" id="pop_img"></div>'))
				{
					var img = $('#pop_img');										
					img[0].onload = function(){
						pWidth = img[0].naturalWidth;
						pHeight = img[0].naturalHeight;
					
						if (pWidth>500) pWidth = 500;
						if (pHeight>500) pHeight = 500;
						
						var halfWidth = pWidth/2;
						var halfHeight = pHeight/2;
						var cssMarLeft = '-'+halfWidth.toString()+'px';
						var cssMarTop = '-'+halfHeight.toString()+'px';
						var cssWidth = pWidth.toString()+'px';			
						
						$(".qz_box .toPopup").css({
							"width": cssWidth,
							"margin-left":cssMarLeft,
							"margin-top":cssMarTop
						});
						
						$(".qz_box .close").hover(
								function() {
									
									$('span.ecs_tooltip').show();
								},
								function () {
									$('span.ecs_tooltip').hide();
								}
						);
						$(".qz_box .close").click(function() {				
							disablePopup();  // function close pop up
						});
						
						$('body').keyup(function(event) {				
							if (event.which == 27) { // 27 is 'Ecs' in the keyboard
								disablePopup();  // function close pop up
							}  	
						});
						$('.toPopup').fadeIn(200);
						$(".backgroundPopup").fadeIn(100); 
						
						$(".qz_box .backgroundPopup").click(function() {
							console.log("background click");
							disablePopup();  // function close pop up
						});
						
						popupStatus = 1; // and set value to 1
					}														
				}
				
			}	
		}
		return false;
		
	});	
	
	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$(".qz_box .toPopup").fadeOut("normal");  
			$(".qz_box .backgroundPopup").fadeOut("normal");  
			
			$(".qz_box .toPopup").each(function(i){				
				$(this).remove();
			});			
			$(".qz_box .backgroundPopup").each(function(j){				
				$(this).remove();
			});			
			popupStatus = 0;  // and set value to 0
		}
	}
	
	/*
	*	Show copyright information
	*/
	$('.qz_title_copy').hover(
		function () {
			$(this).parent().append($('<div class="qz_cpr_popup"><div class="qz_cpr_top">Bản quyền nội dung bài học thuộc về thuviengiaoduc.org</div><div class="qz_cpr_bottom"><div> <span style="color:#3f3f3f;" ></span> BeOnline Co., Ltd.</div><div><span style="color:#3f3f3f;"  >Email: </span> admin@beonline.com.vn</div></div></div>'));
    		//$('.qz_title').append($('<div class="qz_cpr_popup"><div class="qz_cpr_top">Bản quyền nội dung bài học thuộc về thuviengiaoduc.org</div><div class="qz_cpr_bottom"><div> <span style="color:#3f3f3f;" >Company: </span> BeOnline Co., Ltd.</div><div><span style="color:#3f3f3f;"  >Email: </span> tienganh123@beonline.com.vn</div></div></div>'));
  		},
  		function () {
			$(this).parent().find(".qz_cpr_popup").remove();
    		//$('.qz_title').find(".qz_cpr_popup").remove();
  		}
	);
	$('.qz_tbao').after('<div class="qz_feedback_show"></div>');
	
	// control next
	$('.qz_next').attr('ctrl_next','find');
		$('.qz_next').each(function(j){		
		var num=$('.qz_num:eq('+j+')').text();
		var score=$('.qz_total_score:eq('+j+')').text();
		var mini_score=$('.qz_mini_score:eq('+j+')').text();
		var title='';
		var txt='';
		that=this;	
			if(vip==0){
				$('.qz_box:eq('+(2*j+1)+') .qz_content').each(function(i){
				if(i<2){
					txt=$(this).find('.qz_st1_note').text();
					if(txt==''){				
						txt="Question "+(i+1);
					}			
					title +='<div class="qz_outmd_row qz_outline_item" inx="'+j+'"><div class="qz_outmc_text"><strong style="margin-right:20px;">'+(i+1)+'.</strong>'+txt+'</div><div class="qz_outmc_tf"></div><div class="qz_outmc_scores">0/10</div></div>';
				}
			});	
			$(that).parent().after('<div style="clear:both"></div><div class="qz_pop qz_outline"><div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1">Danh sách câu hỏi</div><div class="qz_outline_title2">Kết quả</div><div class="qz_outline_title3">Điểm</div><div class="qz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="viewport"><div class="overview qz_outline_list">'+title+'</div></div></div></div><div class="qz_outline_bottom"><div class="qz_ou_bt_item" style="border:none;">Đang làm đến câu <span class="orange qz_ques_inx">1</span></div><div class="qz_ou_bt_item">Số câu trả lời đúng <span class="orange"><span class="qz_ques_inx_t">0</span>/'+num+'</span></div><div class="qz_ou_bt_item">Tổng điểm <span class="orange"><span class="qz_score_inx">0</span>/'+score+'</span></div><div class="qz_ou_bt_item">Điểm yêu cầu <span class="orange qz_score_min">'+mini_score+'</span></div></div></div></div></div></div>');
			}else{
			$('.qz_box:eq('+(2*j+1)+') .qz_content').each(function(i){
				txt=$(this).find('.qz_st1_note').text();
				if(txt==''){				
					txt="Question "+(i+1);
				}			
				title +='<div class="qz_outmd_row qz_outline_item" inx="'+j+'"><div class="qz_outmc_text"><strong style="margin-right:20px;">'+(i+1)+'.</strong>'+txt+'</div><div class="qz_outmc_tf"></div><div class="qz_outmc_scores">0/10</div></div>';
				
			});	
			$(that).parent().after('<div style="clear:both"></div><div class="qz_pop qz_outline"><div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1">Danh sách câu hỏi</div><div class="qz_outline_title2">Kết quả</div><div class="qz_outline_title3">Điểm</div><div class="qz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview qz_outline_list">'+title+'</div></div></div></div><div class="qz_outline_bottom"><div class="qz_ou_bt_item" style="border:none;">Đang làm đến câu <span class="orange qz_ques_inx">1</span></div><div class="qz_ou_bt_item">Số câu trả lời đúng <span class="orange"><span class="qz_ques_inx_t">0</span>/'+num+'</span></div><div class="qz_ou_bt_item">Tổng điểm <span class="orange"><span class="qz_score_inx">0</span>/'+score+'</span></div><div class="qz_ou_bt_item">Điểm yêu cầu <span class="orange qz_score_min">'+mini_score+'</span></div></div></div></div></div></div>');
			
		}	
			$('.qz_outline_list:eq('+j+') .qz_outline_item:eq(0)').addClass('qz_ol_active');		
		});	
		$('.qz_outline_item').bind('click',function(){			
		var ink=$(this).attr('inx');		
		$('.qz_outline_list:eq('+ink+') .qz_outline_item').removeClass('qz_ol_active');
		$(this).addClass('qz_ol_active');
		$('.qz_outline:eq('+ink+')').fadeOut(200);
		var index=$(this).index('.qz_outline_list:eq('+ink+') .qz_outline_item');		
		var stt=parseInt(index)+1;
		$('.qz_ques_inx:eq('+ink+')').text(stt);				
		$('.box_curr_'+ink).hide().removeClass('box_curr_'+ink);
		$('.box_current_'+ink+' .qz_content:eq('+index+')').addClass('box_curr_'+ink).show();		
		if($('.box_curr_'+ink+' .stt_page_type').text()==''){			
			$('.qz_next:eq('+ink+')').show();
			$('.qz_submit:eq('+ink+')').hide();				
		}else{
			$('.qz_next:eq('+ink+')').hide();
			$('.qz_submit:eq('+ink+')').show();
		}
		$('.qz_content_end:eq('+ink+')').hide();
		$('.jquery_jplayer_long').each(function(i){                    
			addAudioLong(this,i,isIOS);	
		});
		$('.box_current_'+ink+' .qz_inx').text((index+1));	
		status_ques=$('.box_curr_'+ink).attr('status_ques');
		if($('.box_curr_'+ink).attr('status_ques')){			
			str_feedback=$('.box_curr_'+ink+' .qz_feedback').html();
			if($('.box_curr_'+ink+' .qz_feedback').length==1){
				str_feedback=$('.box_curr_'+ink+' .qz_feedback').html();
				$('.box_current_'+t+' .qz_feedback_show').html(str_feedback);
			}else{
				$('.box_current_'+t+' .qz_feedback_show').html('');
			}	
		}else{			
			$('.box_current_'+t+' .qz_feedback_show').html('');
		}
				
		if($('.box_curr_'+ink).attr('status_ques')){
			if(status_ques=='t'){
				$('.box_current_'+ink+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');		
				$('.box_current_'+ink+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');

			}else{
				$('.box_current_'+ink+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');		
				$('.box_current_'+ink+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
			}
		}else{
			$('.box_current_'+ink+' .qz_st_anstatus').html('');
			$('.box_current_'+ink+' .qz_tbao .qz_st2_tick').html('');
		}
		$('.box_current_'+ink+' .qz_st2_answer').css("padding-left","0px");
		$('.box_current_'+t+' .qz_feedback_show').css('visibility','visible');
		$('.box_curr_'+ink).tinyscrollbar(); 
	});
		$('.qz_ouclose').click(function(){
			$(this).parents('.qz_outline').fadeOut(200);
		});
			$('.stt_mat_drag').css("position",'absolute');
		$('table tr').css('background','none');	
			var mat_drag_top=0;
			var mat_drag_left=0;
		$('.qz_next').attr('nclick','0');	
		$('.qz_content').each(function(){
			$(this).find('.qz_sort_drop');
	});	
	
	// matching	
	if($('.stt_mat_drag').length>0){
	var ok_drop=1;			
		$( ".stt_mat_drag").draggable({
			start: function( event, ui ){	
				event.stopPropagation();
				mat_drag_top=$(this).css('top');
				mat_drag_left=$(this).css('left');	
			},
			drag: function(event, ui){				
				$(this).css('z-index','200');
				ok_drop=1;	
					if($('.drag-hover').length >1){
					var inx_drag=parseInt($(ui.draggable).attr('inx'));	
					var top_drag=inx_drag*55+'px';	
					$(ui.draggable).animate({
						top:top_drag,	
						left:'0px'
					},300);
				ok_drop=0;
			}																				
			},stop: function(){	
				$(this).css('z-index','0');
				if($(this).attr('draged')){												
				}else{
					var inx_drag=parseInt($(this).attr('inx'));	
					var top_drag=inx_drag*55+'px';	
					$(this).animate({
						top:top_drag,	
						left:'0px'
					});
				}
			}
		});			
	$('.stt_mat_drop').droppable({
			accept: ".stt_mat_drag",				
			hoverClass : "drag-hover",
			tolerance: "touch",							 
			drop: function( event, ui ){
				event.stopPropagation();				
				if(ok_drop==1){			
				var inx_drop=parseInt($(this).attr('inx'));							
				var top_drop=inx_drop*55+'px';
				var inx_drag=parseInt($(ui.draggable).attr('inx'));	
				var top_drag=inx_drag*55+'px';			
				var drop=$(this).attr('drop');
				var drag=$(ui.draggable).attr('drag');
				$(this).attr('droped',drag);
				$(ui.draggable).css('z-index','0');	
				var k=$(this).parents('.qz_match_drop').index('.qz_match_drop');
				that=this;
				
				$('.qz_match_drag:eq('+k+') .stt_mat_drag[draged='+drop+']').css('z-index','0').not(ui.draggable).animate({						
					top:top_drag,					
					left:'0px'	
				},400).attr('inx',inx_drag).removeAttr('draged');	
				
				$(ui.draggable).attr('inx',inx_drop);				
				$(ui.draggable).animate({
					top:top_drop,
					left:'-25px'	
				},300);					
				$(ui.draggable).attr('draged',drop);
				$('.qz_match_drag:eq('+k+') .stt_mat_drag[inx='+inx_drop+']').css('z-index','0').not(ui.draggable).animate({						
					top:top_drag,					
					left:'0px'	
				},400).attr('inx',inx_drag);	
			}				
			},		
			over:function(event,ui){									
				$(ui.draggable).removeAttr('draged');																	
			}
	});	
	}
	$(document).mousedown(function(){
		$('.outline').fadeOut(500);
	});	
	
	// radio
	$('.qz_radio').click(function(){		
		var k=$(this).parents('.qz_multiple').index('.qz_multiple');
		$('.qz_multiple:eq('+k+') .qz_ticked_radio').toggleClass('qz_ticked_radio');	
		$(this).addClass('qz_ticked_radio');
		
	});	
	//checkbox
	$('.qz_st6_item').click(function(){
		$(this).find('.qz_check_ic').toggleClass('qz_chkbox_checked');
	});
	// sequence
	if($('.qz_sort_drag').length>0){			
		$( ".qz_sort_drag").draggable({			
			drag: function(event, ui){				
				$('.qz_sort_drag').css('z-index','100');	
				$(this).css('z-index','200');	 															
			},
			stop:function(){
				if($(this).attr('nodrop')!=''){
					var top_drag=parseInt($(this).attr('inx'));
					$(this).animate({
					top:top_drag,
					left:'0px'	
					},300);
				}	
			}
		});
	$('.qz_sort_drop').droppable({
			accept: ".qz_sort_drag",
			tolerance: "intersect",				
			 greedy: true,
			drop: function( event, ui ){			
				var inx_curr=parseInt($(this).attr('inx'));
				var inx_drag=$(ui.draggable).attr('inx');
				var draged=$(ui.draggable).attr('draged');	
				var drag=$(ui.draggable).attr('drag');				
				var drop=$(this).attr('drop');
				var drag_ui=inx_curr;
				var drag_move=inx_drag;	
				var k=$(this).parent().index('.qz_sequence');	
				var drag1=$('.qz_sequence:eq('+k+') .qz_sort_drag[draged='+drop+']').not(ui.draggable).attr('drag');	
				$('.qz_sequence:eq('+k+') .qz_sort_drop[droped='+drag+']').attr('droped',drag1);					
				$('.qz_sequence:eq('+k+') .qz_sort_drag[draged='+drop+']').not(ui.draggable).animate({
					top:drag_move,
					left:"0px"						
				},300).attr('inx',inx_drag).attr('draged',draged);				
				$(this).attr('droped',drag);				
				$(ui.draggable).animate({
					top:drag_ui,
					left:"0px"						
				},300).attr('inx',inx_curr).attr('draged',drop);
				$(ui.draggable).removeAttr('nodrop');				
			},
			over:function( event, ui ){
				$(ui.draggable).attr('nodrop','1');
			}
	});	
			
	}
		// click map	
	 $('polygon').live("mousedown", function(e){
	   e.stopPropagation();
	   $('.mcfsl').removeClass('parent_cm');
	   $(this).parents('.mcfsl').addClass('parent_cm');
	   	var n_svg=parseInt($(this).parents('.slmccplg').attr('n_svg'));		
		var n=parseInt($(this).parents('.slmccplg').attr('n_click'));					
		var offset = $(this).parents('.slmccplg').offset();
		var left=e.pageX-offset.left-15;
		var top=e.pageY	-offset.top-15;
		var inx=$(this).index('polygon');
	
		$(this).attr('option',1);
	if(n<n_svg){		
		$(this).parents('.slmccplg').after('<div class="position_click" inx="'+inx+'" style="left:'+left+'px; top:'+top+'px"><img src="smile1.png"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/quiz_common/images/smile1.png*/ style="width:30px" alt="bo chon" /></div>');
		n++;
		
	}else{
		if($('.parent_cm .position_click:eq(0)').attr('inx')){		
			var inx1=$('.parent_cm .position_click:eq(0)').attr('inx');
			if($('.parent_cm .position_click[inx='+inx1+']').length>1){				
			}else{			
				$('.parent_cm polygon:eq('+inx1+')').removeAttr('option');
			}
		}	
		$('.parent_cm .position_click:eq(0)').attr('inx',inx).animate({
			left:left,
			top:top			
		},800);			
	}		
	$('.parent_cm .slmccplg').attr('n_click',n);
	
	});
	$('.position_click').live('click',function(e){
		// xem co img nao svg=sgv this dang chiem giu ko
		var inx=$(this).attr('inx');
		
		if($('.parent_cm .position_click[inx='+inx+']').length>1){
			$(this).remove();
		}else{
			$(this).remove();
			$('.parent_cm polygon:eq('+inx+')').removeAttr('option');
		}
		n=parseInt($('.parent_cm .slmccplg').attr('n_click'));
		n--;
		$('.parent_cm .slmccplg').attr('n_click',n);
	
	});
	 $('.slmccplg').live("mousedown", function(e){
		$('.mcfsl').removeClass('parent_cm');
		var n_svg=parseInt($(this).attr('n_svg'));
		$(this).parents('.mcfsl').addClass('parent_cm');
		var n=parseInt($('.parent_cm .slmccplg').attr('n_click'));	
		var offset = $('.parent_cm .slmccplg').offset();
		var left=e.pageX-offset.left-15;
		var top=e.pageY	-offset.top-15;
		if(n<n_svg){		
			$(this).after('<div class="position_click" style="left:'+left+'px; top:'+top+'px"><img src="smile1.png"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/quiz_common/images/smile1.png*/ style="width:30px" alt="bo chon" /></div>');
		n++;
		}else{
			if($('.parent_cm .position_click:eq(0)').attr('inx')){
			var inx1=$('.position_click:eq(0)').attr('inx');	
			if($('.parent_cm .position_click[inx='+inx1+']').length>1){			
			}else{			
				$('.parent_cm polygon:eq('+inx1+')').removeAttr('option');
			}
			}	
			$('.parent_cm .position_click:eq(0)').attr('inx',inx1).animate({
			left:left,
			top:top			
		},800);			
		}
		$('.parent_cm .slmccplg').attr('n_click',n);
	 });
// bai giang
	$('.qzbg_next').each(function(j){	
		var title='';		
		that=this;		
		$('.qzbg_box:eq('+(2*j+1)+') .qz_content').each(function(i){
				txt=$(this).find('.qz_title_hidden').text();
				if(txt==''){				
					txt="page "+i;
				}			
				title +='<div class="qz_outmd_row qzbg_outline_item" inx="'+j+'"><div class="qz_outmc_text"><strong style="margin-right:20px;">'+(i+1)+'.</strong>'+txt+'</div></div>';
			});	
			$(that).parent().after('<div style="clear:both"></div><div class="qz_pop qz_outline qzbg_outline"><div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1" style="width:625px;">Danh sách slide</div><div class="qz_ouclose bgqz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview qzbg_outline_list">'+title+'</div></div></div></div></div></div></div></div>');
	});	
		$('.bgqz_ouclose').click(function(){	
			$(this).parents('.qzbg_outline').fadeOut(200);
		});
	$('.qzbg_outline_list .qzbg_outline_item:eq(0)').addClass('qz_ol_active');	
	$('.qzbg_outline_list .qzbg_outline_item:last').hide();
	$('.qzbg_outline_item').bind('click',function(){
		var ink=$(this).attr('inx');
		$('.qzbg_outline_list:eq('+ink+') .qzbg_outline_item').removeClass('qz_ol_active');
		$(this).addClass('qz_ol_active');
		$('.qzbg_outline:eq('+ink+')').fadeOut(200);
		var index=$(this).index('.qzbg_outline_list:eq('+ink+') .qzbg_outline_item');								
		$('.bg_curr_'+ink).hide().removeClass('bg_curr_'+ink);
		$('.bg_current_'+ink+' .qz_content:eq('+index+')').addClass('bg_curr_'+ink).show();		
		$('.jquery_jplayer_long').each(function(i){                    
			addAudioLong(this,i,isIOS);	
		});
		type=$('.bg_curr_'+ink+' .stt_page_type').text();
		if($('.bg_curr_'+ink).next().is('.qz_content')){
			if(type!=''){
				$('.qzbg_submit:eq('+ink+')').show();
				$('.qzbg_next:eq('+ink+')').hide();
			}else{
				$('.qzbg_submit:eq('+t+')').hide();
				$('.qzbg_next:eq('+ink+')').show();
			}
		}else{
				$('.qzbg_next:eq('+ink+')').hide();
		}
		if($('.bg_curr_'+ink).prev().is('.qz_content')){
			$('.qzbg_prev:eq('+ink+')').show();
		}else{
				$('.qzbg_prev:eq('+ink+')').hide();
		}
		title_bg=$('.bg_curr_'+t+' .qz_title_hidden').text();
		$('.bg_current_'+t+' .qz_title_name').text(title_bg);
		
	});		
	
});
function delSpace(str){	
	str=str.toLowerCase();	
	if(str.indexOf(".")>=0){
		str=str.replace(/\./g," ");
	}		
	if(str.indexOf(",")>=0){
		str=str.replace(/,/g," ");
	}
	if(str.indexOf("-")>=0){
		str=str.replace(/-/g," ");
	}
	str=$.trim(str);
	var i=0;
	var n=str.length;
	while(i<n){
		if(str[i]==' '&& str[i+1]==' ')
			str=str.replace("  "," ");
		else
			i++;		
	}	
	return str;
}

function qzType(type,elm_curr){
var isSub=1;
	switch (type){
		case 'Matching':{
			$(elm_curr +' .stt_mat_drag').each(function(){				
				if(!$(this).attr('draged')){
					isSub=0;							
				}
			});
			break;
		}
		case 'Multiple choice':{
			if($(elm_curr +' .qz_ticked_radio').length==0){			
				isSub=0;		
			}	
				break;
		}
		case 'Fill in the blank':{
			if($(elm_curr +' .qz_blank').val()==''){			
				isSub=0;		
			}
			break;	
		}
		case 'Sequence':{
			isSub=1;
			break;		
		}
		case 'Checkbox':{
			if($(elm_curr +' .qz_chkbox_checked').length==0){			
				isSub=0;
			}	
			break;
		}
		case 'click_map':{
			var n_img=$(elm_curr+' .position_click').length;
			var n=parseInt($(elm_curr+' .slmccplg').attr('n_svg'));	
			if(n_img<n){
				isSub=0;
			}
			break;
		}
		default:{
			isSub=1;
			break;
		}
	}
	return isSub;
} 


var inx_m=0;
var total=new Array();
var inx_s=0;
var ok=0;
var  isIOS=false;	
var arr_time=new Array();
var stt=1;
var t=0;
var str_feedback='';
function qzStart(cmd){
	$('#load_audio_ctrl').attr('media-url',audio_ctrl.start);	
	$('#load_audio_ctrl').trigger('click');		
	var d = new Date();	 	
	index=parseInt($(cmd).index('.qz_bt_start'));		
	arr_time[index]= d.getTime();
	$(cmd).parents('.qz_part').addClass('box_current_'+index);	
	$('.box_current_'+index+' .qz_content:eq(0)').addClass('box_curr_'+index);
	var type=$('.box_current_'+index+' .qz_content:eq(0) .stt_page_type').text();
	$('.box_current_'+index+' .qz_type').text(type);	
	$('.box_curr_'+index).show();	
	$(cmd).parents('.qz_start').hide();
	$(cmd).parents('.qz_start').next().show();
	total[index]=0;
	inx_m=0;
	inx_s=0;
	if(vip==0){
		$('.qz_outline_list:eq('+index+') .qz_outline_item:gt(1)').html('');			
	}
    $('.jquery_jplayer_long').each(function(i){                    
        addAudioLong(this,i,isIOS);	
	});	
		
	changeBg(index);
	$('.box_curr_'+index).tinyscrollbar(); 
}	

function changeBg(index){
	switch($('.box_curr_'+index+' .stt_page_type').attr('item_type')){
		case 'Multiple choice':		
			$('.box_curr_'+index).parent('.qz_box').css('background','url("'+path_img+'/bg_mchoice.png")');
			break;
		case 'Sequence':		
			$('.box_curr_'+index).parent('.qz_box').css('background','url("'+path_img+'/bg_sequence.png")');
			break;
		case 'Fill in the blank':		
			$('.box_curr_'+index).parent('.qz_box').css('background','url("'+path_img+'/bg_fblank.png")');
			break;
		case 'Matching':		
			$('.box_curr_'+index).parent('.qz_box').css('background','url("'+path_img+'/bg_mat.png")');
			break;
		case 'Checkbox':		
			$('.box_curr_'+index).parent('.qz_box').css('background','url("'+path_img+'/bg_mres.png")');
			break;
		default:
			$('.box_curr_'+index).parent('.qz_box').css('background','url("'+path_img+'/bg_start.png")');
			break;
			
	}
}

function qzSubmit(cmd,arr){	
	var t=parseInt($(cmd).index('.qz_submit'));
	var k=$('.box_curr_'+t).index('.box_current_'+t+' .qz_content');
	var dem=0;
	var d=0;
	str_feedback=$('.box_curr_'+t+' .qz_feedback').html();
	str=$
	var type=$('.box_curr_'+t+' .stt_page_type').text();
	
	type=$.trim(type);
	
	$('.box_current_'+t+' .qz_type').text(type);	
	ok=qzType(type,'.box_curr_'+t);
	$('.box_current_'+t+' .qz_tbao').css('visibility','visible');	
	if(ok==1){
		if($('.box_current_'+t).find('.pause').length>0){	
			stopAudio();
		}
		$(cmd).hide();
		$(cmd).next().show();		
		switch (type){
			case 'Matching':{
				var countChild=$('.box_curr_'+t+' .stt_mat_drop').length;					
				dem=0;				
				$('.box_curr_'+t+' .stt_mat_drop').each(function(i){	
					var top=$('.box_curr_'+t+' .stt_mat_drag[drag='+$(this).attr('droped')+']').css('top');		
					inx_m=parseInt($(this).index('.box_current_'+t+' .stt_mat_drop'));			
					if(parseInt($(this).attr('droped'))==arr[5][inx_m]){	
						dem++;
						$(this).prev().addClass('qz_correct_cil');												
						$('.box_curr_'+t+' .stt_mat_drag[drag='+arr[5][inx_m]+']').after('<div class="qz_st4_number qz_st4_number_r qz_correct_cil" style="position:absolute; top:'+top+'">'+arr[5][inx_m]+'</div>');
					}else{
						$(this).prev().addClass('qz_incorrect_cil');
						$('.box_curr_'+t+' .stt_mat_drag[drag='+$(this).attr('droped')+']').after('<div class="qz_st4_number qz_st4_number_r qz_incorrect_cil" style="position:absolute; top:'+top+'">'+arr[5][inx_m]+'</div>');
					
					}					
				});				
				if(dem==countChild){				
					total[t]++;
					d=1;
					$('.box_curr_'+t).attr('status_ques','t');
				}else{
					$('.box_curr_'+t).attr('status_ques','f');
				}					
				break;
			}
			case 'Multiple choice':{
				
				var val=parseInt($('.box_curr_'+t+' .qz_ticked_radio').attr('val_radio'));
				var ind=parseInt($('.box_current_'+t+' .qz_ticked_radio').length)-1;
				if(val==arr[2][ind]){
					total[t]++;
					d=1;					
					$('.box_curr_'+t+' .qz_ticked_radio').find('.qz_tf').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px">');
					$('.box_curr_'+t).attr('status_ques','t');
				}else{
					$('.box_curr_'+t+' .qz_radio[val_radio='+arr[2][ind]+']').find('.qz_tf').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
					$('.box_curr_'+t).attr('status_ques','f');
				}				
				break;					
			}				
			case 'Fill in the blank':{
				var val=$('.box_curr_'+t+' .qz_blank').val();
				var ind=parseInt($('.box_curr_'+t+' .qz_blank').index('.box_current_'+t+' .qz_blank'));
				val=$.trim(val);
				val=delSpace(val);
				if(val.indexOf("'")>=0){
					val=val.replace("'","\'");
				}
				var sh_ans='';
				var str=delSpace(arr[4][ind]);				
				if(str.indexOf('&')>0){
					var ar=str.split('&');	
					var okk=0;			
					for(var j=0;j<ar.length;j++){
						sh_ans += ar[j]+'<br />'; 
						arr[j]=$.trim(arr[j]);
						if(val==ar[j]){						
							okk=1;												
							break;
						}					
					}				
				}else{
					sh_ans=arr[4][ind];
					if(val==str){					
						okk=1;					
					}
				}
				if(okk==1){
					total[t]++;
					d=1;
					$('.box_curr_'+t+' .qz_st3_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
					$('.box_curr_'+t).attr('status_ques','t');	
				}else{
					$('.box_curr_'+t+' .qz_st3_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
					$('.box_curr_'+t+' .qz_st3_answer').show();
					$('.box_curr_'+t+' .qz_st_ans_kq').html(sh_ans);
					$('.box_curr_'+t).attr('status_ques','f');
				}
				break;	
			}		
			case 'Sequence':{				
				var countChild=$('.box_curr_'+t+' .qz_sort_drop').length;					
				dem=0;	
					$('.box_curr_'+t+' .qz_sort_drag').addClass('qz_incor');					
				$('.box_curr_'+t+' .qz_sort_drop').each(function(i){	
					inx_s=parseInt($(this).index('.box_current_'+t+' .qz_sort_drop'));					
					if(parseInt($(this).attr('droped'))==arr[6][inx_s]){	
						dem++;						
						$(this).addClass('qz_cor');	
						$('.box_current_'+t+' .qz_index_sort_item:eq('+inx_s+')').addClass('qz_cor');							
						$('.box_curr_'+t+' .qz_sort_drag[drag='+arr[6][inx_s]+']').addClass('qz_cor');
					}else{
						$(this).addClass('qz_incor');	
						$('.box_current_'+t+' .qz_index_sort_item:eq('+inx_s+')').addClass('qz_incor');		
					}
					$('.box_current_'+t+' .qz_index_sort_item:eq('+inx_s+')').text(arr[6][inx_s]);		
					
				});				
				if(dem==countChild){
					total[t]++;
					d=1;
					$('.box_curr_'+t).attr('status_ques','t');
				}else{
					$('.box_curr_'+t).attr('status_ques','f');
				}
				break;					
			}
			case 'Checkbox':{
				var val='';
				$('.box_curr_'+t+' .qz_chkbox_checked').each(function(){
					val +=$(this).attr('val_chkbox')+'*';	
				});
				val=val.substr(0,val.length-1);
				var vt=$('.box_curr_'+t+' .qz_checkbox').index('.box_current_'+t+' .qz_checkbox');
				if(val==arr[3][vt]){
					total[t]++;
					d=1;
					$('.box_curr_'+t).attr('status_ques','t');
					$('.box_curr_'+t+' .qz_chkbox_checked').prev().html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');					
				}else{
					$('.box_curr_'+t).attr('status_ques','f');
				}
				ar_check=arr[3][vt].split('*');
				for(i=0;i<ar_check.length;i++){
					$(".box_curr_"+t+" .qz_check_ic[val_chkbox="+ar_check[i]+"]").prev().html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');					
				}				
				break;
			}
			case 'click_map':{				
				var n_pyn=$('.box_curr_'+t+' polygon[option=1]').length;
				var n_svg=parseInt($('.box_curr_'+t+' .slmccplg').attr('n_svg'));
				if(n_pyn >= n_svg){
					total[t]++;
					d=1;	
				}else{
					d=0;
				}
				if($('.box_curr_'+t+' .slmccplg').attr('bg')){
					var bg_cm=$('.box_curr_'+t+' .slmccplg').attr('bg');
					$('.box_curr_'+t+' .slmccplg').css('background','url('+bg_cm+')');
				}else{
					$('.box_curr_'+t+' polygon').css('stroke','red');
					$('.box_curr_'+t+' polygon').css('stroke-width','5px');
				}	
					break;	
			}
		}		
	if(d==1){
		// status question
		$('.box_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');	
		$('.box_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');					
		$('#load_audio_ctrl').attr('media-url',audio_ctrl.correct);	
		$('#load_audio_ctrl').trigger('click');	
		$('.qz_outline_list:eq('+t+') .qz_outmc_tf:eq('+k+')').addClass('qz_true');
		$('.qz_outline_list:eq('+t+') .qz_outmc_scores:eq('+k+')').text("10/10");
	}else{
		// status question
		$('.box_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');		
		$('.box_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
		$('#load_audio_ctrl').attr('media-url',audio_ctrl.incorrect);	
		$('#load_audio_ctrl').trigger('click');	
		$('.qz_outline_list:eq('+t+') .qz_outmc_tf:eq('+k+')').addClass('qz_false');
		$('.qz_outline_list:eq('+t+') .qz_outmc_scores:eq('+k+')').text("0/10");
	}
		$('.qz_outline_list:eq('+t+') .qz_outline_item').removeClass('qz_ol_active');
		$('.qz_outline_list:eq('+t+') .qz_outline_item:eq('+k+')').addClass('qz_ol_active');			
		stt=parseInt($('.box_curr_'+t).index('.qz_content'))+1;
		$('.qz_ques_inx:eq('+t+')').text(stt);
		$('.qz_ques_inx_t:eq('+t+')').text(total[t]);
		$('.qz_score_inx:eq('+t+')').text(total[t]*10);
		$('.box_curr_'+t+' .stt_page_type').text('');
		$('.box_curr_'+t+' .stt_page_type').attr('sub','1');		
		$('.box_current_'+t+' .qz_feedback_show').css('visibility','visible').html(str_feedback);
		
	}else{	
		$('#load_audio_ctrl').attr('media-url',audio_ctrl.incorrect);	
		$('#load_audio_ctrl').trigger('click');	
		$('.box_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
		$('.box_current_'+t+' .qz_st_anstatus').html('You must complete the question before submitting');
			$('.box_current_'+t+' .close').click(function(){
				$(this).parent().parent().hide();
			});
	}
	$('.box_curr_'+t).tinyscrollbar();	
}
function convertTime(n){
	var s=Math.floor(n/1000);
	var m=0;h=0;
	if(s>60){
			var m=Math.floor(s/60);
			s -=m*60;
		}
	if(m>0 && m>60){
			h=Math.floor(m/60);
			m=m%60;
	}
	if(h<10){
		h ='0'+h;
	}
	if(m<10){
		m ='0'+m;
	}
	if(s<10){
		s ='0'+s;
	}
	str=m+' : '+m+' : '+s;
	return str;			
	}	
var nclick=0;

function qzNext(cmd){	
	var t=parseInt($(cmd).index('.qz_next'));		
	$('.box_current_'+t+' .qz_st2_answer').css("padding-left","0px");
	if($('.box_current_'+t).find('.pause').length>0){	
		stopAudio();
	}
	nclick=$('.box_curr_'+t).index('.box_current_'+t+' .qz_content');		
	if(vip==0 && nclick >=1){			
			$('.box_curr_'+t).after('<div class="qz_pop"><div class="qz_pop_layout">'+msg_vip_sb+'<br /><br /><a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank"><span class="qz_pop_bt">Đăng ký thành viên VIP</span></a><br /><br /><button class="qz_close">Close</button></div></div></div></div>');
			$('.qz_close').click(function(){
				$(this).parents('.qz_pop').remove();
			});	
		$(cmd).attr('ctrl_next','next');
		$('#load_audio_ctrl').attr('media-url',audio_ctrl.gold);	
		$('#load_audio_ctrl').trigger('click');	
		
	}else{		
		var ctrl_next=$(cmd).attr('ctrl_next');	
		if(ctrl_next!='next'){
			if($('.box_current_'+t+' .stt_page_type[sub=0]').length>0){	
				$('#load_audio_ctrl').attr('media-url',audio_ctrl.next);	
				$('#load_audio_ctrl').trigger('click');	
				$(cmd).attr('ctrl_next','find');
			}else{			
				$(cmd).attr('ctrl_next','close');
			}
		}
		var ctrl_next=$(cmd).attr('ctrl_next');	
		if(ctrl_next=='find'){
			$('.box_current_'+t+' .qz_feedback_show').html('');
			$('#load_audio_ctrl').attr('media-url',audio_ctrl.next);	
			$('#load_audio_ctrl').trigger('click');	
			$(cmd).hide();
			$(cmd).prev().show();
			$('.box_curr_'+t).hide().removeClass('box_curr_'+t);
			$('.box_current_'+t+' .stt_page_type[sub=0]:first').parents('.qz_content').addClass('box_curr_'+t).show();			
			stt=parseInt($('.box_curr_'+t).index('.box_current_'+t+' .qz_content'))+1;
			$('.qz_ques_inx:eq('+t+')').text(stt);
			$('.qz_ques_inx_t:eq('+t+')').text(total[t]);
			$('.qz_score_inx:eq('+t+')').text(total[t]*10);	
			var type=$('.box_curr_'+t+' .stt_page_type').text();	
			$('.box_current_'+t+' .qz_type').text(type);		
			var inx_curr=parseInt($('.box_curr_'+t).index('.box_current_'+t+' .qz_content'))+1;		
			$('.box_current_'+t+' .qz_inx').text(inx_curr);	
			$('.box_current_'+t+' .qz_st_anstatus').html('');		
			$('.box_current_'+t+' .qz_tbao .qz_st2_tick').html('');	
		}
		if(ctrl_next=='close'){		
			$('.box_current_'+t+' .qz_tbao').css('visibility','visible');
			$('.box_current_'+t+' .qz_feedback_show').css('visibility','hidden');			
			$('.box_current_'+t+' .qz_type').text('Result');
			var d = new Date();
			var n = d.getTime(); 
			var k=parseInt($(cmd).index('.qz_next'));		
			y_time=n-arr_time[k];
			your_time=convertTime(y_time);
			your_sc=total[t]*10;
			var pass=0;
			$('.box_current_'+t+' .your_score').text(your_sc);
			$('.box_current_'+t+' .qz_time').text(your_time);		
			$('.box_curr_'+t).hide();	
			$('.box_current_'+t+' .qz_content_end').show();
			$(cmd).hide();				
			var score=parseInt($('.box_current_'+t+' .your_score').parent().prev().find('.qz_bg_table_value').text());			
			if(your_sc >= score){				
				$('#load_audio_ctrl').attr('media-url',audio_ctrl.you_passed);	
				$('#load_audio_ctrl').trigger('click');	
				$('.box_current_'+t+' .qz_st2_answer').css("padding-left","260px");
				$('.box_current_'+t+' .your_score').addClass('qz_cor');						
				$('.box_current_'+t+' .qz_st_anstatus').html('<span class="qz_cor">Congratulations, you passed! </span>');	
				$('.qz_tbao:eq('+t+') .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
				$('.box_current_'+t+' .qz_st_anstatus').attr('pass',1);
				pass=1;
			}else{
				$('#load_audio_ctrl').attr('media-url',audio_ctrl.you_failed);	
				$('#load_audio_ctrl').trigger('click');	
				$('.box_current_'+t+' .qz_st2_answer').css("padding-left","300px");
				$('.qz_tbao:eq('+t+') .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');	
				$('.box_current_'+t+' .qz_st_anstatus').html('<span class="qz_incor">Sorry, you failed. </span>');				
				pass=0;
			}
			// luu diem		
			if($('.box_current_'+t+' .qz_save_score').length==1){
					$('.box_current_'+t+' .qz_control').after('<div class="qz_save"></div>');
					var total_score=$('.box_current_'+t+' .qz_save_score').text();					
					var tg=Math.round(y_time/1000);
					var post=saveScore('http://soan.thuviengiaoduc.org/qms/index.php?module=interface&submod=xml&method=submit_result','{user_score:'+your_sc+',total_score:'+total_score+',tg:'+tg+',pass:'+pass+'}',t);
					if(post==false){					
						$('.qz_bt_save').click(function(){
							post=saveScore('http://soan.thuviengiaoduc.org/qms/index.php?module=interface&submod=xml&method=submit_result','{user_score:your_sc,total_score:total_score,tg:tg,pass:pass}');
						});
					}
			}
			$(cmd).attr('ctrl_next','next');		
		}
		if(ctrl_next=='next'){				
			$('#load_audio_ctrl').attr('media-url',audio_ctrl.next);	
			$('#load_audio_ctrl').trigger('click');	
			if($('.box_curr_'+t).next().is('.qz_content')){
				$('.box_current_'+t+' .qz_feedback_show').css('visibility','visible');	
				$(cmd).show();
				$('.box_curr_'+t).hide().removeClass('box_curr_'+t).next().addClass('box_curr_'+t).show();
				status_ques=$('.box_curr_'+t).attr('status_ques');
				if(status_ques=='t'){
					$('.box_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');		
					$('.box_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
		
				}else{
					$('.box_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');		
					$('.box_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
				}
				stt=parseInt($('.box_curr_'+t).index('.box_current_'+t+' .qz_content'))+1;
				$('.qz_ques_inx:eq('+t+')').text(stt);
				var inx_curr=parseInt($('.box_curr_'+t).index('.box_current_'+t+' .qz_content'))+1;		
				
				$('.box_current_'+t+' .qz_inx').text(inx_curr);	
			}else{	
				var pa=$('.box_current_'+t+' .qz_st_anstatus').attr('pass');
				if(pa==1){				
				$('#load_audio_ctrl').attr('media-url',audio_ctrl.you_passed);	
				$('#load_audio_ctrl').trigger('click');	
				$('.box_current_'+t+' .qz_st2_answer').css("padding-left","260px");
				$('.box_current_'+t+' .your_score').addClass('qz_cor');						
				$('.box_current_'+t+' .qz_st_anstatus').html('<span class="qz_cor">Congratulations, you passed! </span>');	
				$('.qz_tbao:eq('+t+') .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
				
			}else{
				$('#load_audio_ctrl').attr('media-url',audio_ctrl.you_failed);	
				$('#load_audio_ctrl').trigger('click');	
				$('.box_current_'+t+' .qz_st2_answer').css("padding-left","300px");
				$('.qz_tbao:eq('+t+') .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');	
				$('.box_current_'+t+' .qz_st_anstatus').html('<span class="qz_incor">Sorry, you failed. </span>');	
			}
				$('.box_current_'+t+' .qz_feedback_show').css('visibility','hidden');	
				$(cmd).hide();
				$('.box_curr_'+t).hide();	
				$('.box_curr_'+t).next().show();				
			}
			
		}
		$('.jquery_jplayer_long').each(function(i){                    
			addAudioLong(this,i,isIOS);	
		});			
		changeBg(t);
	}
	$('.box_curr_'+t).tinyscrollbar();	
}
function saveScore(link,str_data,t){
	$.post(link,str_data,function(data){	
		console.log('data:'+data);
		if(data==0){		
			$('.box_current_'+t+' .qz_save').html('Lưu điểm thành công!</div>');
			return true;
		}else{
		$('.box_current_'+t+' .qz_save').html('Có lỗi trong quá trình lưu điểm! Bạn hãy click vào nút <strong>Lưu điểm</strong> để lưu điểm của mình :))<br /><br /><button class="qz_bt_save" type="button">Lưu điểm</button></div>');	
			return false;
		}
	});
}
function qzOutline(cmd){		
	var t=parseInt($(cmd).index('.qz_bt_outline'));
	$('.box_current_'+t+' .qz_outline').fadeIn(200);
	$('.scroll_outline:eq('+t+')').tinyscrollbar();
}
//bai giang
var title_bg='';
var type='';
function qzStart_bg(cmd){	
	t=parseInt($(cmd).index('.qzbg_bt_start'));	
	$(cmd).parents('.qzbg_part').addClass('bg_current_'+t);	
	$('.bg_current_'+t+' .qz_content:eq(0)').addClass('bg_curr_'+t);	
	$('.bg_curr_'+t).show();
	type=$('.bg_curr_'+t+' .stt_page_type').text();
	if(type==''){
		$('.qzbg_submit:eq('+t+')').hide();
		
	}else{
		$('.qzbg_next:eq('+t+')').hide();
		$('.qzbg_submit:eq('+t+')').show();
	}
	$(cmd).parents('.qzbg_start').hide();
	$(cmd).parents('.qzbg_start').next().show();
	if(vip==0){
		$('.qzbg_outline_list:eq('+t+') .qzbg_outline_item:gt(1)').html('');			
	}
	title_bg=$('.bg_curr_'+t+' .qz_title_hidden').text();
	$('.bg_current_'+t+' .qz_title_name').text(title_bg);
    $('.jquery_jplayer_long').each(function(i){                    
        addAudioLong(this,i,isIOS);	
	});	
	
}
function qzbgSubmit(cmd,arr){	
	var t=parseInt($(cmd).index('.qzbg_submit'));
	var k=$('.bg_curr_'+t).index('.bg_current_'+t+' .qz_content');
	var dem=0;
	var d=0;	
	str_feedback=$('.bg_curr_'+t+' .qz_feedback').html();
	str=$
	var type=$('.bg_curr_'+t+' .stt_page_type').text();
	type=$.trim(type);	
	ok=qzType(type,'.bg_curr_'+t);
	$('.bg_current_'+t+' .qz_tbao').css('visibility','visible');

	if(ok==1){
	
		if($('.bg_current_'+t).find('.pause').length>0){	
			stopAudio();
		}
		$(cmd).hide();
		$(cmd).next().show();		
		switch (type){
			case 'Matching':{
				var countChild=$('.bg_curr_'+t+' .stt_mat_drop').length;					
				dem=0;				
				$('.bg_curr_'+t+' .stt_mat_drop').each(function(i){	
					var top=$('.bg_curr_'+t+' .stt_mat_drag[drag='+$(this).attr('droped')+']').css('top');		
					inx_m=parseInt($(this).index('.bg_current_'+t+' .stt_mat_drop'));			
					if(parseInt($(this).attr('droped'))==arr[5][inx_m]){	
						dem++;
						$(this).prev().addClass('qz_correct_cil');												
						$('.bg_curr_'+t+' .stt_mat_drag[drag='+arr[5][inx_m]+']').after('<div class="qz_st4_number qz_st4_number_r qz_correct_cil" style="position:absolute; top:'+top+'">'+arr[5][inx_m]+'</div>');
					}else{
						$(this).prev().addClass('qz_incorrect_cil');
						$('.bg_curr_'+t+' .stt_mat_drag[drag='+$(this).attr('droped')+']').after('<div class="qz_st4_number qz_st4_number_r qz_incorrect_cil" style="position:absolute; top:'+top+'">'+arr[5][inx_m]+'</div>');
					
					}					
				});				
				if(dem==countChild){				
					total[t]++;
					d=1;
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');						
				}else{
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');	
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');	
				}					
				break;
			}
			case 'Multiple choice':{				
				var val=parseInt($('.bg_curr_'+t+' .qz_ticked_radio').attr('val_radio'));
				var ind=parseInt($('.bg_current_'+t+' .qz_ticked_radio').length)-1;
				if(val==arr[2][ind]){
					total[t]++;
					d=1;
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');	
					$('.bg_curr_'+t+' .qz_ticked_radio').find('.qz_tf').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px">');
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
				}else{
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');	
					$('.bg_curr_'+t+' .qz_radio[val_radio='+arr[2][ind]+']').find('.qz_tf').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
				}				
				break;					
			}				
			case 'Fill in the blank':{
				var val=$('.bg_curr_'+t+' .qz_blank').val();
				var ind=parseInt($('.bg_curr_'+t+' .qz_blank').index('.bg_current_'+t+' .qz_blank'));
				val=$.trim(val);
				val=delSpace(val);
				if(val.indexOf("'")>=0){
					val=val.replace("'","\'");
				}
				var sh_ans='';
				var str=delSpace(arr[4][ind]);
				if(str.indexOf('/')>0){
					var ar=str.split('/');	
					var okk=0;	
					sh_ans=ar[0]; 						
					for(var j=0;j<ar.length;j++){
						arr[j]=$.trim(arr[j]);
						if(val==ar[j]){						
							okk=1;												
							break;
						}					
					}				
				}else{
					sh_ans=arr[4][ind];
					if(val==str){					
						okk=1;					
					}
				}
				if(okk==1){
					total[t]++;
					d=1;
					$('.bg_curr_'+t+' .qz_st3_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
				}else{
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>')
					$('.bg_curr_'+t+' .qz_st3_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
					$('.bg_curr_'+t+' .qz_st3_answer').show();
					$('.bg_curr_'+t+' .qz_st_ans_kq').text(sh_ans);
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
				}
				break;	
			}		
			case 'Sequence':{				
				var countChild=$('.bg_curr_'+t+' .qz_sort_drop').length;					
				dem=0;	
					$('.bg_curr_'+t+' .qz_sort_drag').addClass('qz_incor');					
				$('.bg_curr_'+t+' .qz_sort_drop').each(function(i){	
					inx_s=parseInt($(this).index('.bg_current_'+t+' .qz_sort_drop'));					
					if(parseInt($(this).attr('droped'))==arr[6][inx_s]){	
						dem++;
						$(this).addClass('qz_cor');	
						$(this).next().addClass('qz_cor');
						$('.bg_curr_'+t+' .qz_sort_drag[drag='+arr[6][inx_s]+']').addClass('qz_cor');
					}else{
						$(this).addClass('qz_incor');
						$(this).next().addClass('qz_incor');						
					}
					$(this).next().text(arr[6][inx_s]);	
					
				});				
				if(dem==countChild){
					total[t]++;
					d=1;
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');	
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');					
				}else{
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');		
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
				}
				break;					
			}
			case 'Checkbox':{
				var val='';
				$('.bg_curr_'+t+' .qz_chkbox_checked').each(function(){
					val +=$(this).attr('val_chkbox')+'*';	
				});
				val=val.substr(0,val.length-1);
				var vt=$('.bg_curr_'+t+' .qz_checkbox').index('.bg_current_'+t+' .qz_checkbox');
				if(val==arr[3][vt]){
					total[t]++;
					$('.bg_curr_'+t+' .qz_chkbox_checked').prev().html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');					
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Incorrect </span>');		
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');
				}else{
					$('.bg_current_'+t+' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');		
					$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('<img src="'+path_img+'incorrect_icon.png" style="widht:14px; height:14px" />');
				}
				ar_check=arr[3][vt].split('*');
				for(i=0;i<ar_check.length;i++){
					$(".bg_curr_"+t+" .qz_check_ic[val_chkbox="+ar_check[i]+"]").prev().html('<img src="'+path_img+'correct_icon.png" style="widht:14px; height:14px" />');					
				}				
				break;
			}
		}		
		$('.qzbg_outline_list:eq('+t+') .qz_outline_item').removeClass('qz_ol_active');
		$('.qzbg_outline_list:eq('+t+') .qz_outline_item:eq('+k+')').addClass('qz_ol_active');		
		$('.bg_curr_'+t+' .stt_page_type').text('');
		$('.bg_curr_'+t+' .stt_page_type').attr('sub','1');		
		$('.bg_current_'+t+' .qz_feedback_show').css('visibility','visible').html(str_feedback);
		
	}else{		
		$('.bg_current_'+t+' .qz_st_anstatus').html('You must complete the question before submitting');
			$('.bg_current_'+t+' .close').click(function(){
				$(this).parent().parent().hide();
			});
	}
}
function qzbgNext(cmd){
	if($(cmd).next().css('display')=="none"){
			$(cmd).next().show();
	}
	t=parseInt($(cmd).index('.qzbg_next'));	
	var k1=$('.bg_curr_'+t).index('.bg_current_'+t+' .qz_content');
	if($('.bg_current_'+t).find('.pause').length>0){	
		stopAudio();
	}
	$('.bg_current_'+t+' .qz_feedback_show').css('visibility','hidden');
	nclick=$('.box_curr_'+t).index('.box_current_'+t+' .qz_content');		
	if(vip==0 && nclick >=1){
			stopAudio();
			$('.box_curr_'+t).after('<div class="qz_pop"><button type="button" class="qz_close_pp"><img src="closebox.png"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/quiz_tate/images/closebox.png*/ style="width:30px; height:30px" /></button><div class="qz_pop_layout">'+msg_kid+'<br /><br /><a target="_blank" href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html*/><span class="qz_pop_bt"></span></a></div></div>');
			$('.qz_close_pp').click(function(){
				$(this).parents('.qz_pop').remove();
			});				
	}else{
		$('.bg_curr_'+t).hide().removeClass('bg_curr_'+t).next().addClass('bg_curr_'+t).show();			
		$('.bg_current_'+t+' .qz_st_anstatus').html('');
		$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('');
		if($('.bg_curr_'+t).next().is('.qz_content')){		
			type=$('.bg_curr_'+t+' .stt_page_type').text();
			if(type!=''){
				$('.qzbg_submit:eq('+t+')').show();
				$(cmd).hide();	
			}
			title_bg=$('.bg_curr_'+t+' .qz_title_hidden').text();
			$('.bg_current_'+t+' .qz_title_name').text(title_bg);	
			$('.jquery_jplayer_long').each(function(i){                    
				addAudioLong(this,i,isIOS);	
			});	
			$('.qz_outline_list:eq('+t+') .qz_outline_item').removeClass('qz_ol_active');
			$('.qz_outline_list:eq('+t+') .qz_outline_item:eq('+k1+')').addClass('qz_ol_active');	
		}else{					
			$(cmd).hide();		
		}
	}		
}
function qzbgPrev(cmd){
	t=parseInt($(cmd).index('.qzbg_prev'));	
	if($('.bg_current_'+t).find('.pause').length>0){	
		stopAudio();
	}
	if($(cmd).prev().css('display')=="none"){
			$(cmd).prev().show();
	}	
	$('.bg_current_'+t+' .qz_feedback_show').css('visibility','hidden');
	if($('.bg_curr_'+t).prev().is('.qz_content')){
		nclick=parseInt($(cmd).prev().attr('nclick'));	
		nclick--;
		$(cmd).prev().attr('nclick',nclick);
		$('.bg_curr_'+t).hide().removeClass('bg_curr_'+t).prev().addClass('bg_curr_'+t).show();	
		$('.qzbg_submit:eq('+t+')').hide();
		$('.bg_current_'+t+' .qz_st_anstatus').html('');
		$('.bg_current_'+t+' .qz_tbao .qz_st2_tick').html('');
	}else{					
		$(cmd).hide();				
	}	
	title_bg=$('.bg_curr_'+t+' .qz_title_hidden').text();
	$('.bg_current_'+t+' .qz_title_name').text(title_bg);
	$('.jquery_jplayer_long').each(function(i){                    
        addAudioLong(this,i,isIOS);	
	});				
}
function bgOutline(cmd){		
	var t=parseInt($(cmd).index('.qzbg_bt_outline'));
	console.log('t='+t);
	$('.bg_current_'+t+' .qz_outline').fadeIn(200);
	$('.bg_current_'+t+' .scroll_outline').tinyscrollbar();
}



$('.child_c_1').css({'z-index':'100'});




function qzTranslate(cmd,arr_trans,t){	
	var trans=parseInt($(cmd).attr('trans'));
	
	if(trans==0){		
		if($('.qz_part_translate_'+t+' .dich_mobile').length>0){
			$('.qz_part_translate_'+t+' .dich_mobile').show();
		}else{
			if(!vip){										
				$('.qz_part_translate_'+t+' .qz_ta123_dich:eq(0)').after('<div class="dich_mobile"><div class="icon_trans"></div><div class="content_trans">'+arr_trans[0]+'</div></div>');
				$('.qz_part_translate_'+t+' .qz_ta123_dich:gt(0)').after('<div class="dich_mobile"><div class="icon_trans"></div><div class="content_trans">'+msg_vip_trans+'</div></div>');					
			}else{
				$('.qz_part_translate_'+t+' .qz_ta123_dich').each(function(i){					
					$(this).after('<div class="dich_mobile"><div class="icon_trans"></div><div class="content_trans">'+arr_trans[i]+'</div></div>');					
				});
			}
		}	
			$('.qz_translate_'+t).text('Đóng bài dịch').attr('trans',1);			
	}else{			
		$('.qz_part_translate_'+t+' .dich_mobile').hide();				
		$('.qz_translate_'+t).attr('trans',0).text('Xem bài dịch');				
	}
}// JavaScript Document