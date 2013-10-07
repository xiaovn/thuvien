var vip=0;
if (paidmember()){
	vip=1;
}
$(document).ready(function(){
	var type_result=$('.type_result').text();
		if(type_result!=''){
			arr_type_result=type_result.split("|");
			for(i=0;i<arr_type_result.length;i++){
				ar=arr_type_result[i].split("*");
				$('.base_text:eq('+ar[0]+')').val(ar[1]);
				$('.re_base_text:eq('+ar[0]+')').html('kết quả :'+ar[2]+'%').show();
				$('.re_base_text:eq('+ar[0]+')').attr('is_next',1);
			}
		}		
		var _total=parseInt($('.bt_total').text());
		if(_total==1){
			$('.iets_control_bt').show();
			$('.iets_bottom').hide();			
		}		
		if($('.part_drop').length>0){			
		var ok_drop=1;			
		$( ".stt_drag").draggable({
			start: function( event, ui ){	
				event.stopPropagation();				
			},
			drag: function(event, ui){				
				$(this).css('z-index','200');
				ok_drop=1;	
				if($('.drag-hover').length >1){
					ok_drop=0;
				}																				
			},stop: function(){	
				$(this).css('z-index','0');
				if($(this).attr('draged')){												
				}else{
					var inx_drag=parseInt($(this).attr('inx'));	
					var top_drag=inx_drag*50+'px';	
					$(this).animate({
						top:top_drag,	
						left:'15px'
					});
				}
			}
		});			
	$('.part_drop').each(function(i){		
	$('.part_drop:eq('+i+') .stt_drop').each(function(){
		$('.part_drag:eq('+i+') .stt_drag').addClass('stt_drag_'+i);		
		$(this).droppable({		
			accept: '.stt_drag_'+i,				
			hoverClass : "drag-hover",
			tolerance: "touch",							 
			drop: function( event, ui ){
				event.stopPropagation();				
				if(ok_drop==1){			
				var inx_drop=parseInt($(this).attr('inx'));							
				var top_drop=(inx_drop*86 +37)+'px';
				var inx_drag=parseInt($(ui.draggable).attr('inx'));						
				var drop=$(this).attr('drop');
				var drag=$(ui.draggable).attr('drag');
				$(this).attr('droped',drag);
				$(ui.draggable).css('z-index','0');	
				that=this;
				if($(this).attr('droped')!=''){	
					top_drag=parseInt($('.stt_drag_'+i+'[draged='+drop+']').not(ui.draggable).attr('inx'))*50+'px';
					$('.stt_drag_'+i+'[draged='+drop+']').css('z-index','0').not(ui.draggable).animate({						
						top:top_drag,					
						left:'15px'	
					},400).removeAttr('draged');	
				}
				$(ui.draggable).animate({
					top:top_drop,
					left:'-295px'	
				},300);					
				$(ui.draggable).attr('draged',drop);
				
			}				
			},		
			over:function(event,ui){									
				$(ui.draggable).removeAttr('draged');																	
			}
		});	
		});	
		});	
		}
	
	// sequence
	if($('.ielts_sort_drag').length>0){			
		$( ".ielts_sort_drag").draggable({			
			drag: function(event, ui){				
				$('.ielts_sort_drag').css('z-index','100');	
				$(this).css('z-index','200');	 															
			},
			stop:function(){
				if($(this).attr('nodrop')!=''){
					var top_drag=parseInt($(this).attr('inx'))*50;
					$(this).animate({
					top:top_drag,
					left:'0px'	
					},300);
				}	
			}
		});
	$('.iets_sequence_content').each(function(i){		
		$('.iets_sequence_content:eq('+i+') .ielts_sort_drop').each(function(){
		$('.iets_sequence_content:eq('+i+') .ielts_sort_drag').addClass('ielts_sort_drag_'+i);	
		$('.iets_sequence_content:eq('+i+') .ielts_sort_drop').addClass('ielts_sort_drop_'+i);	
		$(this).droppable({		
			accept: '.ielts_sort_drag_'+i,				
			tolerance: "intersect",				
			 greedy: true,
			drop: function( event, ui ){				
				var inx_curr=parseInt($(this).attr('inx'));
				var inx_drag=$(ui.draggable).attr('inx');
				var draged=$(ui.draggable).attr('draged');	
				var drag=$(ui.draggable).attr('drag');				
				var drop=$(this).attr('drop');
				var drag_ui=inx_curr*50;
				var drag_move=inx_drag*50;					
				var drag1=$('.ielts_sort_drag_'+i+'[draged='+drop+']').not(ui.draggable).attr('drag');	
				$('.ielts_sort_drop_'+i+'[droped='+drag+']').attr('droped',drag1);					
				$('.ielts_sort_drag_'+i+'[draged='+drop+']').not(ui.draggable).animate({
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
	});
	});
			
	}	
	// mark error		
	if(!window.CurrentSelection){
		CurrentSelection = {}
	}	
	CurrentSelection.Selector = {}	
	CurrentSelection.Selector.getSelected = function(){
		var sel = '';
		if(window.getSelection){
			sel = window.getSelection()
		}
		else if(document.getSelection){
			sel = document.getSelection()
		}
		else if(document.selection){
			sel = document.selection.createRange()
		}
		return sel;
	}
	//function to be called on mouseup
	CurrentSelection.Selector.mouseup = function(){
		var st = CurrentSelection.Selector.getSelected();
		if(st!=''){		
			if(document.selection && !window.getSelection){
				var range = st;
				range.pasteHTML("<span class='selectedText'>" + range.htmlText + "</span>");
			}
			else{
				var range = st.getRangeAt(0)    
				var newNode = document.createElement("span");
				newNode.setAttribute("class", "selectedText");
				range.surroundContents(newNode) ;               
			}
		}else{
			$(".selectedText" ).click(function(){
				txt=$(this).text();				
				$(this).after(txt);
				$(this).remove(); 
			});
			
		}
	}
	$(".iets_box_error").bind("mouseup",CurrentSelection.Selector.mouseup);	
	$('.base_text').keydown(function(){
		$('.tbao_base_text').fadeOut(400);
		$('.box_active .re_base_text').fadeOut(400);
	});	
	$(document).mousedown(function(){
		$('.tbao_base_text').hide();
		$('.stt_tbao').hide();
	});
});
var isAndroidDefault=false;
var msg_non_vip='Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank" title="quyền lợi thành viên VIP"  style="color:#0d6af7; text-decoration:underline">thành viên VIP của TiếngAnh123.Com</a> mới được học tiếp bài học này';
var msg_non_vip_sb='Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank" title="quyền lợi thành viên VIP"  style="color:#0d6af7; text-decoration:underline">thành viên VIP của TiếngAnh123.Com</a> mới được xem kết quả và đáp án.';
var url=window.location.protocol + "//" + location.host+'/';
var passwordAuthen = encrypt.registerAuthen(url);

if(!$.browser.msie){
	$(document).ready(function(){				
		$('.jquery_jplayer_long').each(function(i){				
			addAudioLong(this,i,isAndroidDefault);					
		});
	});
}
var d_start = new Date();	 	
var n_start = d_start.getTime(); 
var i=0;
var n=0;
var total=0;
var inx=0;	
var inx_s=0;
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
function numbers(e){
		var keynum;
		var keychar;
		var numcheck;
		if(window.event) // IE8 and earlier
		{
			keynum = e.keyCode;
		}
		else if(e.which) // IE9/Firefox/Chrome/Opera/Safari
		{
			keynum = e.which;
		}
		keychar = String.fromCharCode(keynum);
		numcheck =/[A-Za-z]/;
		return !numcheck.test(keychar);
}
function testRadio(arr){
	var s=0;
	$('.box_active_curr input:radio:checked').each(function(){
		inx=parseInt($(this).attr('inx'));
		if($(this).val()==arr[inx]){
			s++;
			$(this).prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
		}else{		
			$(this).prev().html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px" />');
		}	
	});	
	return s;
}
function showRadio(result){
	var n=result.length;
	var start_rad=$('.box_active_curr input:radio:first').attr('inx');
	var end_rad=$('.box_active_curr input:radio:last').attr('inx');
	for(var i=start_rad;i<=end_rad;i++){		
		$(".box_active_curr input:radio[name=radio_"+i+"][value="+result[i]+"]").prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
	}
}
function testCheckbox(arr){		
	n=arr.length;
	var s=0;
	for(i=0;i<n;i++){		
		if($('.box_active_curr input[name=checkbox_'+i+']:checked')){				
			val='';
			$('.box_active_curr input[name=checkbox_'+i+']:checked').each(function(){	
				val +=$(this).val()+'*';	
			});
			val=val.substr(0,val.length-1);
			if(val!=''){				
				if(val==arr[i]){
					$('.box_active_curr .tf_checkbox:eq('+i+')').html('Your answer : Correct!').css('color','blue');
					//$('.box_active .stt_check_tf:eq('+i+')').html('<img src="true.png"/*tpa=http://www.thuviengiaoduc.org/file/baihoc/listening/common/js/images/true.png*/ border="0" width="18px" height="18px" />');
					s++;					
				}else{
					$('.box_active_curr .tf_checkbox:eq('+i+')').html('Your answer :Incorrect!').css('color','red');
					//$('.box_active .stt_check_tf:eq('+i+')').html('<img src="false.png"/*tpa=http://www.thuviengiaoduc.org/file/baihoc/listening/common/js/images/false.png*/ border="0" width="18px" height="18px" />');
				}								
			}	
		}	
	}	
	return s;
}
function showCheckbox(result){	
	var start_rad=$('.box_active_curr input:checkbox:first').attr('inx');
	var end_rad=$('.box_active_curr input:checkbox:last').attr('inx');
	for(var i=start_rad;i<=end_rad;i++){		
		ar_check=result[i].split('*');
		for(j=0;j<ar_check.length;j++){
			$('.box_active_curr input:checkbox[name=checkbox_'+i+'][value='+ar_check[j]+']').prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
		}
	}		
}
function testBlank_row(arr){	
	var s=0;
	var okk=0;		
	$('.box_active_curr .iel_row_blank').each(function(){
		okk=0;												   
		var i=$(this).index('.iel_row_blank');
		val=$(this).val();		
		if(val!=''){			
			val=delSpace(val);				
			if(val.indexOf("'")>=0){
				val=val.replace("'","\'");
			}
			str=delSpace(arr[i]);			
			var str=$.trim(str);
			if(str.indexOf('/')>0){
				var arr_st=str.split('/');									
				for(var t=0;t < arr_st.length;t++){
					if(val==arr_st[t]){						
						okk=1;						
						break;
					}					
				}				
			}else{
				if(val==str){
					okk=1;
				}
			}
			if(okk==1){			
				$(this).css('color','blue');		
				s++;
				$(this).prev().attr('stt_bl','correct').html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" />');
					
			}else{
				$(this).css('color','red');	
				$(this).prev().attr('stt_bl','incorrect').html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;" />');
			}
		}
		});		
		return s;	
	}
function showBlank_row(result){
	$('.box_active_curr .iel_row_blank').each(function(){
		t=$(this).index('.iel_row_blank');
		if($(this).prev().attr('stt_bl')=='correct'){}else{
			$(this).after('<div class="stt_text_row">'+result[t]+'</div>');	
		}		
	});	
}	
function testBlank_part(arr){	
	var s=0;
	var okk=0;		
	$('.box_active_curr .iel_part_blank').each(function(){		
		okk=0;													
		val=$(this).val();		
		var i=$(this).index('.iel_part_blank');
		if(val!=''){			
			val=delSpace(val);				
			if(val.indexOf("'")>=0){
				val=val.replace("'","\'");
			}
			str=delSpace(arr[i]);			
			var str=$.trim(str);
			if(str.indexOf('/')>0){
				var arr_st=str.split('/');									
				for(var t=0;t < arr_st.length;t++){
					if(val==arr_st[t]){						
						okk=1;						
						break;
					}					
				}				
			}else{
				if(val==str){
					okk=1;
				}
			}
			if(okk==1){			
				$(this).css('color','blue');		
				s++;
				$(this).prev().attr('stt_bl','correct').html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" />');
					
			}else{
				$(this).css('color','red');	
				$(this).prev().attr('stt_bl','incorrect').html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;" />');
			}
		}
		});		
		return s;	
	}	
function showBlank_part(result){
	$('.box_active_curr .iel_part_blank').each(function(){
		t=$(this).index('.iel_part_blank');
		if($(this).prev().attr('stt_bl')=='correct'){}else{			
			$(this).after('&nbsp;&nbsp;&nbsp;<span class="stt_text">'+result[t]+'</span>');		
		}
	});	
}	
function  testDrop(arr_drop){
	var dem=0;
	var s=0;		
	$('.box_active_curr .part_drop').each(function(t){
		$('.part_drop').removeClass('part_drop_curr');
		$(this).addClass('part_drop_curr');			
		that=this;
		dem=0;
		countChild=$('.part_drop_curr .stt_drop').length;
				
		$('.part_drop_curr .stt_drop').each(function(i){				
			if(parseInt($(this).attr('droped'))==arr_drop[(i+inx)]){					
				dem++;
				$(this).parent().prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" alt="correct" />');
				$(this).parent().prev().attr('status_drop','correct');
			}else{
				$(this).parent().prev().html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;"  alt="incorrect"  />');
				$(this).parent().prev().attr('status_drop','incorrect');
			}			
		});
		if(dem==countChild){
			s++;	
		}
		inx +=countChild;
	});		
	return s;
}
function showDrop(arr_drop){
	$('.box_active_curr .part_drop').each(function(){
		$('.part_drop').removeClass('part_drop_curr');
		$('.part_drop').next().removeClass('part_drag_curr');
		$(this).addClass('part_drop_curr');	
		$(this).next().addClass('part_drag_curr');
		that=this;
		$('.part_drop_curr .stt_drop').each(function(){
			t=$(this).index('.stt_drop');
			if($(this).parent().prev().attr('status_drop')=='incorrect'){		
				var top_drop=parseInt($(this).attr('inx'))*86 +37;			
				$('.part_drag_curr').find('.stt_drag[drag='+arr_drop[t]+']').animate({
					top:top_drop,
					left:'-295px'	
				},1000);
				$(this).parent().prev().attr('status_drop','correct');
				$(this).parent().prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" alt="correct" />');
			}
		});		
	});
}
function testSort(arr_sort){
	var dem=0;
	var s=0;
	var ok_drop=0;	
	$('.box_active .iets_sequence_content').each(function(){
		dem=0;
		$('.iets_sequence_content').removeClass('iets_sequence_curr');		 
		 $(this).addClass('iets_sequence_curr');
		  countChild=$('.iets_sequence_curr .ielts_sort_drop').length;	  
		  $('.iets_sequence_curr .ielts_sort_drag').css('color','red');		
		$('.iets_sequence_curr .ielts_sort_drag').attr('is_droped',0);
			that=this;
		  $('.iets_sequence_curr .ielts_sort_drop').each(function(i){
		  
			ok_drop=0;			
		 	 inx_s=parseInt($(this).index('.ielts_sort_drop'));
			 var val=$(this).attr('droped');			
			 if(arr_sort[inx_s].indexOf('/') >0){				
				var arr_sq=arr_sort[inx_s].split('/');					
				for(t=0;t < arr_sq.length;t++){				
					if(val==arr_sq[t]){					
						ok_drop=1;	
							break;
					}					
				}				
			 }else{				
				if(val==arr_sort[inx_s]){
					ok_drop=1;
				}else{
					ok_drop=0;
				}
			 }
		 	 if(ok_drop==1){				
				  dem++;	 
					$('.index_sort_drop:eq('+inx_s+')').css('color','blue');	
					$(this).attr('tf_sq','correct');	
					$('.iets_sequence_curr .ielts_sort_drag[drag='+val+']').css('color','blue').attr('is_droped',1);							
			}else{
				$(this).attr('tf_sq','incorrect');
			 	 $(this).css('color','red');
			 	$('.index_sort_drop:eq('+inx_s+')').css('color','red');				
		 	}			
		  	$('.index_sort_drop:eq('+inx_s+')').text(arr_sort[inx_s]).hide();	
		 });  	 				
	  if(dem==countChild){
		  	$('.iets_sequence_curr').next().next().html('Your answer : Correct!').css('color','blue');
		  s++;
	  }else{
		  	$('.iets_sequence_curr').next().next().html('Your answer : Incorrect!').css('color','red');
		  }
	});  
	
	  return s;
}

function showwSort(arr_sort){	
	$('.box_active_curr .base_index_sort').css('visibility','visible');
	$('.box_active .iets_sequence_content').each(function(){		
		$('.iets_sequence_content').removeClass('iets_sequence_curr');		 
		$(this).addClass('iets_sequence_curr');		
		that=this;
		$('.iets_sequence_curr .ielts_sort_drop[tf_sq=incorrect]').each(function(i){		
			 inx_s=parseInt($(this).index('.ielts_sort_drop'));
			var top_drop=parseInt($(this).attr('inx'))*50;	
			 if(arr_sort[inx_s].indexOf('/') >0){				
				var arr_sq=arr_sort[inx_s].split('/');					
				for(t=0;t < arr_sq.length;t++){	
					if($('.iets_sequence_curr').find('.ielts_sort_drag[drag='+arr_sq[t]+'][is_droped=0]').length==1){				
						$('.iets_sequence_curr').find('.ielts_sort_drag[drag='+arr_sq[t]+'][is_droped=0]:first').animate({
							top:top_drop,
							left:'0px'	
						},700).attr('is_droped',1).draggable("disable");
					break;
					}						
				}
			 }else{		
				$('.iets_sequence_curr').find('.ielts_sort_drag[drag='+arr_sort[inx_s]+']').animate({
					top:top_drop,
					left:'0px'	
				},700).draggable("disable");
				$(this).attr('tf_sq','correct');
			}		
		});
	});	  
	$('.index_sort_drop').show();
}
var start=0;	
var mark=0;
var n_error=0;
var m_error=0;
var t=0;
function testError(arr_error,arr_pos){
	 var s=0;
	$('.box_active_curr .iets_box_error').each(function(){
		t=$(this).index('.iets_box_error');
		var str_html=$('.iets_box_error:eq('+t+')').html();	
		arr=str_html.split('<span class="selectedText">');
		n=arr.length - 1;	
		var i=0;
		while(i<n){						
			mark=0;			
			start=str_html.indexOf('<span class="selectedText">');
		
			str=$.trim($('.iets_box_error:eq('+t+') .selectedText:eq('+i+')').text());			
			var ii=arr_error[t].indexOf(str);
			if(ii>=0){		
			console.log("start :"+start);
				console.log("arr_pos: "+arr_pos[t][ii]);
				if(start==arr_pos[t][ii]){
					mark=1;
				}else{
					mark=0;
				}
			}else{
				mark=0;	
			}
			
			if(mark==1){
				s ++;
				$('.iets_box_error:eq('+t+') .selectedText:eq('+i+')').before('<span style="color:blue; padding:0px 5px;" class="sh_status_mark"><img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" /></span>');
			}else{
				$('.iets_box_error:eq('+t+') .selectedText:eq('+i+')').before('<span style="color:red; padding:0px 5px;" class="sh_status_mark"><img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;" /></span>');
			}				
			$('.selectedText .sh_status_mark').remove();
			str_html=str_html.replace('<span class="selectedText">','');	
			str_html=str_html.replace('</span>','');
			i++;		
		}
	});
	return s;
}
function showwError(){
	$('.box_active_curr .base_error').fadeIn();	
}
var save_sr=0;
var total=0;
var is_nextb=0;
var save=0;
var ss=0;
var arr_re=new Array();
function testAll(cmd){
	if(vip==1){	
		total=0;
		var sum=$('#tongsocau').text();				
		var k=$(cmd).parents('.base_box').index('.base_box');
		var j=$(cmd).next().index('.base_show_ans');
		var dem=0;
		var countChild=0;	
		$('.box_active_curr').removeClass('box_active_curr');
		$('.box_active:eq('+k+')').addClass('box_active_curr');
		if($('.box_active_curr .part_drop').length>0){			
			total += testDrop(arr_result[4]);					
		}	
		if($('.box_active_curr .iel_part_blank').length>0){
			total += testBlank_part(arr_result[0]);	
		}
		if($('.box_active_curr .iel_row_blank').length>0){
			total += testBlank_row(arr_result[1]);	
		}
		if($('.box_active_curr .iel_radio').length>0){
			total += testRadio(arr_result[2]);
		}
		if($('.box_active_curr .iel_checkbox').length>0){
			total += testCheckbox(arr_result[3]);
		}
		
		if($('.box_active_curr .iets_sequence_content').length>0){		
			total += testSort(arr_result[5]);
		}			
		if($('.box_active_curr .iets_box_error').length>0){
			total += testError(arr_error,arr_pos);
			$(cmd).hide();
		}			
		$(cmd).next().show();
		is_nextb=1;	
		arr_re[j]=total;
		
		if(!$('#tongsocau').attr('no_save')){		
			ss=0;
			for(i=0;i<arr_re.length;i++){
				ss +=arr_re[i];
			}
		if($(cmd).parent().next().is('.base_result')){
			$('.base_result').html('Bạn đã làm đúng '+ss+'/ '+sum).show();
		}else{
			$('.base_result').html('Bạn đã làm đúng '+ss+'/ '+sum).show();
			$(cmd).parent().after('<div class="base_result" style="display:block">Bạn đã làm đúng '+ss+'/ '+sum+'</div>');	
		}
		if($(cmd).parent().next().next().is('.save_base_text')){}else{
			$(cmd).parent().next().after('<div class="save_base_text"></div>');
		}	
			var d_end = new Date();	 	
			var n_end = d_end.getTime(); 
			var tg=Math.round((n_end-n_start)/1000);
			toeic_time=String(tg);		
			ss=String(ss);		
			var ie_page=$('#pathname').val();
			var ie_memid=$('#ie_memid').val();
			console.log('ie_page:'+ie_page);
			console.log('ie_memid:'+ie_memid);
			console.log('s:'+ss);
			console.log('sum:'+sum);
			
			ie_memid=encrypt.string(ie_memid,passwordAuthen);
			ie_page=encrypt.string(ie_page,passwordAuthen);	
			toeic_score=encrypt.string(ss,passwordAuthen);	
			toeic_total=encrypt.string(sum,passwordAuthen);
			toeic_time=encrypt.string(toeic_time,passwordAuthen);			
			var type='toeic';
			var post=saveScore(url+'ws_action/handle.php',{toeic_score:toeic_score,toeic_total:toeic_total,toeic_time:toeic_time,mem_id:ie_memid,page:ie_page,type:type});
			if(post==false){					
				$('.save_score').click(function(){
					post=saveScore(url+'ws_action/handle.php',{toeic_score:toeic_score,toeic_total:toeic_total,toeic_time:toeic_time,mem_id:ie_memid,page:ie_page,type:type});
				});
			}	
			
		}else{
			if($(cmd).parent().next().is('.base_result')){
			$('.base_result').html('Bạn đã làm đúng '+total+'/ '+sum).show();
				}else{
			$('.base_result').html('Bạn đã làm đúng '+total+'/ '+sum).show();
			$(cmd).parent().after('<div class="base_result" style="display:block">Bạn đã làm đúng '+total+'/ '+sum+'</div>');	
			}
			if(total==sum){
				$(cmd).hide();
				$(cmd).next().hide();
			}		
		}
	}else{
		if($(cmd).parent().next().is('.base_result')){
			$(cmd).parent().next().html(msg_non_vip_sb).show();
		}else{
			$(cmd).parent().after('<div class="base_result" style="display:block; color:green">'+msg_non_vip_sb+'</div>');	
		}
	}
}
function showAnswer(cmd){
	$(cmd).hide();
	$(cmd).prev().hide();			
	$('.box_active_curr .iets_hidden').show();	
	if($('.box_active_curr .iel_part_blank').length>0){
		showBlank_part(arr_result[0]);	
	}
	if($('.box_active_curr .iel_row_blank').length>0){
		showBlank_row(arr_result[1]);	
	}
	if($('.box_active_curr .iel_radio').length>0){
		showRadio(arr_result[2]);
	}
	if($('.box_active_curr .iel_checkbox').length>0){
		showCheckbox(arr_result[3]);
	}
	if($('.box_active_curr .part_drop').length>0){			
		showDrop(arr_result[4]);					
	}
	if($('.box_active_curr .iets_sequence_content').length>0){
		showwSort(arr_result[5]);
	}
	if($('.box_active_curr .iets_box_error').length>0){
			showwError();
		}
	
	
}	

	
var result_text=new Array();
var is_next=0;
function checkText(cmd,arr){		
		var i=$('.box_active .base_text').index('.base_text');
		var n_true=parseInt($(cmd).attr('n_true'));
		var txt =$('.box_active .base_text').val();	
		if($.trim(txt)!=''){			
			$.post(url+'ws_action/handle.php', {string1:arr[i],string2:txt,type:"smarttext"},function(data){			
				result_text=data.split('|');				
				if(result_text[2]>=50){	
					is_next=1;
					n_true +=1;
					$(cmd).attr('n_true',n_true);
					$('.box_active .re_base_text').attr('is_next',1);					
					$('.box_active .re_base_text').html('Kết quả: '+result_text[2]+'% <span class="bt_showAns"> Xem đáp án</span>').show();
					$('.bt_showAns').click(function(){		
						if($(this).text()=='Ẩn đáp án'){
							$('.box_active .sh_base_text').html('<span style="color:#ff6d00">Tapescript:</span> '+arr[i]).slideUp();
							$(this).text('Xem đáp án');
						}else{
							$('.box_active .sh_base_text').html('<span style="color:#ff6d00">Tapescript:</span> '+arr[i]).slideDown();
							$(this).text('Ẩn đáp án');
						}
					});
					if(vip ==1){	
						if(save==0){
							var ie_page=$('#pathname').val();
							var ie_memid=$('#ie_memid').val();						
							ie_memid=encrypt.string(ie_memid,passwordAuthen);
							ie_page=encrypt.string(ie_page,passwordAuthen);	
							i=String(i);
							var percent	=String(result_text[2]);						
							var id=encrypt.string(i,passwordAuthen);	
							percent=encrypt.string(percent,passwordAuthen);
							var	str=encrypt.string(txt,passwordAuthen);
							var type='listening_save_text';
							var post=saveScore(url+'ws_action/handle.php',{id:id,percent:percent,str:str,ie_memid:ie_memid,ie_page:ie_page,type:type});
							if(post==false){					
								$('.save_score').click(function(){
									post=saveScore(url+'ws_action/handle.php','{id:'+id+',percent:'+percent+',str:'+str+',ie_memid:'+ie_memid+',ie_page:'+ie_page+',type:'+type+'}');
								});
							}else{
								save=1;
							}
						}
					}							
				}else{
					$('.box_active .re_base_text').html('Kết quả: '+result_text[2]+'% <br /> <span style="font-weight:normal;">Bạn hãy nghe và làm lại.</span>').show();
					is_next=0;
					$('.box_active .re_base_text').attr('is_next',0);
				}								
			});
						
		}else{
			$('.tbao_base_text').show().css('left','15px').html('Bạn  phải nhập nội dung mới check được! <div class="base_close"></div>');
			is_next=0;
			$('.box_active .re_base_text').attr('is_next',0);
		}
		
}
function saveScore(link,str_data){	
	$.post(link,str_data,function(data){		
		var obj=$.parseJSON(data);		
		if(obj.er==0){		
			return true;
		}else{
			$('.save_base_text').html('Có lỗi trong quá trình lưu điểm! Bạn hãy click vào nút <strong>Lưu điểm</strong> để lưu điểm của mình :))<br /><br /><button class="save_score" type="button">Lưu điểm</button></div>');	
			return false;
		}
	});
}
var n_next=0;

function nextPage(cmd,num){	
		var t=$(cmd).index('.bt_next');		
		if($(cmd).hasClass('bt_next_dis')){	
		}else{
			if(is_nextb==1){
				$('.bt_prev:eq('+t+')').removeClass('bt_prev_dis');	
				$('.box_active:eq('+t+')').removeClass('box_active').next().addClass('box_active');			
				var index=$('.bt_index:eq('+t+')').text();
				index=parseInt(index);
				index++;
				$('.bt_index:eq('+t+')').text(index);
				if(index==num){
					$('.iets_control_bt:eq('+t+')').show();
					$(cmd).addClass('bt_next_dis');			
				}
				n_next++;
				$(cmd).attr('n_next',n_next);
					
				toPos('.box_active:eq('+t+')');
				$('.jquery_jplayer_long').each(function(i){				
					addAudioLong(this,i,isAndroidDefault);					
				});
				is_nextb=0;
			}else{
				if(vip==0){
					$('.stt_tbao:eq('+t+')').show().css('padding','2px 10px').html(msg_non_vip+'<div class="base_close" style=" margin-top:3px; margin-right:-4px; margin-left:0px;"></div>');
				
				}else{
					$('.stt_tbao:eq('+t+')').show().css('padding','2px 10px').html('<div style="float:left; width:165px">Bạn phải hoàn thành các câu trên mới làm câu tiếp theo.</div> <div class="base_close" style=" margin-top:3px; margin-right:-4px; margin-left:0px;"></div>');
				}
			}
		}
		
}
function prevPage(cmd){
	$('.save_base_text').hide();
	is_nextb=1;
	var t=$(cmd).index('.bt_prev');		
	$('.bt_next:eq('+t+')').removeClass('bt_next_dis');
	if($(cmd).hasClass('bt_prev_dis')){		
	}else{
		$('.box_active:eq('+t+')').removeClass('box_active').prev().addClass('box_active');
		var index=$('.bt_index:eq('+t+')').text();
		index=parseInt(index);		
		index--;	
		$('.bt_index:eq('+t+')').text(index);
		if(index==1){
			$(cmd).addClass('bt_prev_dis');			
		}else{
			$(cmd).removeClass('bt_prev_dis');
		}
	}
	toPos('.box_active:eq('+t+')');
	$('.jquery_jplayer_long').each(function(i){				
		addAudioLong(this,i,isAndroidDefault);					
	});
}
function nextPage_text(cmd,num){
	save=0;
	if(is_next==0){
		is_next=$('.box_active .re_base_text').attr('is_next');
	}
	$('.save_base_text').hide();
	$('.save_base_text').hide();
	n_next=parseInt($(cmd).attr('n_next'));
		$('.base_check').show();
	if(vip==0 && n_next >1){	
		//$('.box_active').after('<div class="qz_pop"><div class="qz_pop_layout">Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/>thành viên VIP</a> của <a title="" href="index.htm"/*tpa=http://www.thuviengiaoduc.org/*/>thuviengiaoduc.org </a><br />mới có thể làm tiếp được bài tập này<br /><br /><a href="register.htm"/*tpa=http://www.thuviengiaoduc.org/register*/ title="Đăng ký thành viên"><span class="qz_pop_bt">Đăng ký thành viên</span></a></div></div>');
		if($('.box_active').next().is('.qz_pop')){}else{
			$('.box_active').after('<div class="lis_pop"><div class="lis_pop_layout">Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank">thành viên VIP</a> của thuviengiaoduc.org mới có thể học tiếp  bài học này !<br /><br /><button class="qz_close">Close</button></div></div>');
		}
		$('.qz_close').click(function(){
			$(this).parents('.lis_pop').remove();
			});		
	}else{		
		if(is_next==1){			
			$('.tbao_base_text').hide();
			var t=$('.box_active').parents('.base_box').index('.base_box');		
			if($(cmd).hasClass('bt_next_dis_text')){	
			}else{			
				$('.bt_prev_text:eq('+t+')').removeClass('bt_prev_dis_text');	
				$('.box_active:eq('+t+')').removeClass('box_active').next().addClass('box_active');			
				var index=$('.bt_index_text:eq('+t+')').val();
				index=parseInt(index);
				index++;
				$('.bt_index_text:eq('+t+')').val(index);				
				if(index==num){
					$('.base_control_text:eq('+t+')').show();
					$(cmd).addClass('bt_next_dis_text');			
				}
				n_next++;
				$(cmd).attr('n_next',n_next);
				
				toPos('.box_active:eq('+t+')');
				$('.jquery_jplayer_long').each(function(i){				
					addAudioLong(this,i,isAndroidDefault);					
				});
			}	
			is_next=parseInt($('.box_active .re_base_text').attr('is_next'));
		}else{
			$('.tbao_base_text').show().css('left','487px').html('Bạn phải đạt trên <span style="font-style:italic; color:red">50%</span> mới được làm câu tiếp theo. <div class="base_close"></div>');
			
		}
	}
	toPos('.box_active');
	$('.jquery_jplayer_long').each(function(i){				
		addAudioLong(this,i,isAndroidDefault);					
	});
}
function prevPage_text(cmd){
	is_next=1;	
	$('.tbao_base_text').hide();	
	
	var t=$(cmd).index('.bt_prev_text');		
	$('.bt_next_text:eq('+t+')').removeClass('bt_next_dis_text');
	if($(cmd).hasClass('bt_prev_dis_text')){		
	}else{
		$('.qz_pop').remove();
		n_next=parseInt($(cmd).next().attr('n_next'))-1;
		$(cmd).next().attr('n_next',n_next);
		$('.box_active').removeClass('box_active').prev().addClass('box_active');
		var index=$('.bt_index_text:eq('+t+')').val();
		index=parseInt(index);		
		index--;	
		$('.bt_index_text:eq('+t+')').val(index);		
		if(index==1){
			$(cmd).addClass('bt_prev_dis_text');			
		}else{
			$(cmd).removeClass('bt_prev_dis_text');
		}
		n_next=parseInt($(cmd).next().attr('n_next'))-1;
	}
	toPos('.box_active');
	$('.jquery_jplayer_long').each(function(i){				
		addAudioLong(this,i,isAndroidDefault);					
	});
}
function changeIndex(cmd,val,e){	
	if(window.event){
		var keynum = e.keyCode;
	}else if(e.which){
		var keynum = e.which;
	}
	if(keynum >=48 && keynum <=57){
		val=parseInt(val);
		$('.tbao_base_text').hide();	
		n_true=parseInt($('.base_check').attr('n_true'));
		if(val>=1 && val<=num_page){
			val--;
			if (val<=n_true){
				$('.box_active').removeClass('box_active');		
				$('.base_content:eq('+val+')').addClass('box_active');
				toPos('.box_active');
			}else{
				var inx=$('.box_active').index('.base_content')+1;
				setTimeout(function(){$(cmd).val(inx)},1000);	
				$('.tbao_base_text').show().css('left','487px').html('Bạn phải đạt trên <span style="font-style:italic; color:red">50%</span> của các câu trước đó mới được làm câu này.<div class="base_close"></div>');
			}
		}else{		
			$('.tbao_base_text').show().css('left','487px').html('Số trang bạn nhập không hợp lệ. <div class="base_close"></div>');
			var inx=$('.box_active').index('.base_content')+1;
			
			setTimeout(function(){$(cmd).val(inx)},1000);				
		}
		
		$('.jquery_jplayer_long').each(function(i){				
			addAudioLong(this,i,isAndroidDefault);					
		});
	}
}// JavaScript Document