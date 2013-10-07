// JavaScript Document
function compare(s1,s2){	
	if(s1==s2){
	return true;
	}else{
	return false;
	}	
}
var url=window.location.protocol + "//" + location.host+'/';	
var passwordAuthen = encrypt.registerAuthen(url);
var isAndroidDefault = false;
	if(isAndroidPhone && !DetectChrome()){
			//Load script pickle Player
	isAndroidDefault = true;
}
if($.browser.msie){
 	$(window).load(function(){	
		$('.segment1').hide();
		$('.segment1:eq(0)').show();
		$('.col1').css('float','left');
		var d = new Date();	 	
		var n = d.getTime(); 
		$('.ss_audio:eq(0)').css('display','block');	
		$('.ss_audio').css('height','35px');
		$('.giai_thich').hide();	   
		$('.cmd').css("cursor","pointer");	
		$('.jquery_jplayer_long:eq(0)').addClass('jquery_jplayer_long_0');		
			addAudioLong('.jquery_jplayer_long_0',0,isAndroidDefault);					
	
		$('input:radio').each(function(){		
			var txt=(this).nextSibling.data;
			(this).nextSibling.data='';	
			$(this).css('float','left');		
			$(this).after('<div style="float:left; width:85%">'+txt+'</div>');			
		});
		var vip=0;
		if (paidmember()){
			vip=1;
		}	
		if (vip==1){
			$('.cmd').show();
			$('.quess').show();			
		}else{			
			$('#translate').hide();	
			for(var j=3;j<=num[1];j++){		
			$('.cau1'+j).click(function(){				
				$('.cmd').hide();
				$('.quess').hide();	
				$(this).parent().parent().show();				
				$(this).parent().parent().prev().show();	
				$(this).parent().parent().prev().prev().show();							
				$('.next').hide();
				$('.back').hide();
				$('.s').html('');
				$('.s').html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;">Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/>thành viên VIP của thuviengiaoduc.org </a> mới có thể làm tiếp bài tập này</div>');
				for(var t=1;t<=num[1];t++){
					$('input:radio[name=cau1'+t+']').prev().css('visibility','hidden');
					$('input:radio[name=cau1'+t+']:checked').prev().css('visibility','visible');			
				}
			});			
		}
		}
		$('.back:eq(0)').css('visibility','hidden');
		$('.next:last').css('visibility','hidden');		
		$('.next').click(function(){							  
			$(this).parent().parent().next().css('display','block');
			$(this).parent().parent().css('display','none');
			$('.segment1 .ss_audio').css('display','none');
			$(this).parent().parent().next().find('.ss_audio').css('display','block');
			$('.jquery_jplayer_long').each(function(i){		
				addAudioLong(this,i,isAndroidDefault);					
			});
			toPos('.page_question'); 
		});
		$('.back').click(function(){		
		$(this).parent().parent().prev().css('display','block');
		$(this).parent().parent().css('display','none');
		$('.segment1 .ss_audio').css('display','none');
			$(this).parent().parent().prev().find('.ss_audio').css('display','block');
			$('.jquery_jplayer_long').each(function(i){		
				addAudioLong(this,i,isAndroidDefault);					
			});
		toPos('.page_question'); 
		});
		
	$('.cmd').click(function(){			
	if(vip==1){	
		var total=0;
		$('input:radio:checked').each(function(){
			if($(this).prev().is('.correct1')){
				total++;
			}
			$(this).prev().css("visibility",'visible');
		});	
		var d_end = new Date();	 	
		var n_end = d_end.getTime(); 
		var tg=Math.round((n_end-n)/1000);		
		var ie_page=$('#pathname').val();
		var ie_memid=$('#ie_memid').val();
		var toeic_score=String(total);
		var toeic_total=String(num[1]);
		var toeic_time=String(tg);
		toeic_score=encrypt.string(toeic_score,passwordAuthen);	
		toeic_total=encrypt.string(toeic_total,passwordAuthen);
		toeic_time=encrypt.string(toeic_time,passwordAuthen);		
		ie_memid=encrypt.string(ie_memid,passwordAuthen);
		ie_page=encrypt.string(ie_page,passwordAuthen);	
		
		$.post(url+'ws_action/handle.php', {toeic_score:toeic_score,toeic_total:toeic_total,toeic_time:toeic_time,mem_id:ie_memid,page:ie_page,type:"toeic"},function(data){
		var obj=$.parseJSON(data);	
		if(obj.er!=0){
			$('.s').html('Có lỗi trong quá trình thực thi! Bạn hãy gửi lại');
			$('.s').fadeOut(500);	
		}else{		
			var str1='<p> Result:  '+total+'/'+num[1] +' correct</p>';						
			$('.s').html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;"><p>Bạn đã làm đúng <span style="color:red">'+total+'</span>/<span style="color:red">'+num[1]+'</span></p><p>Click vào nút "Xem đáp án" để xem chi tiết đáp án và giải thích <input style="color:red" type="button" value="Xem đáp án" id="close" /></p></div><div id="myDiv" style="display:none;"></div>');	
			$('#close').click(function(){									
				$('.cmd').hide();				
				$('.correct1').css("visibility",'visible');
				$('.giai_thich').show();
				toPos('.page_question');   							
			});
			$('.tapescript').show();
		}									   
		});	
	}else{			
		$('.s').html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;">Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ title="Quyền lợi của thành vien VIP">thành viên VIP của thuviengiaoduc.org </a>mới thực hiện được chức năng này</div>');
	}	
	
	});	
		
	});	
}else{
	$(document).ready(function(){
		$('.segment1').hide();
		$('.segment1:eq(0)').show();
		$('.col1').css('float','left');
		var d = new Date();	 	
		var n = d.getTime(); 
		$('.ss_audio:eq(0)').css('display','block');	
		$('.ss_audio').css('height','35px');
		$('.giai_thich').hide();	   
		$('.cmd').css("cursor","pointer");	
		$('.jquery_jplayer_long:eq(0)').addClass('jquery_jplayer_long_0');		
			addAudioLong('.jquery_jplayer_long_0',0,isAndroidDefault);					
	
		$('input:radio').each(function(){		
			var txt=(this).nextSibling.data;
			(this).nextSibling.data='';	
			$(this).css('float','left');		
			$(this).after('<div style="float:left; width:85%">'+txt+'</div>');			
		});
		var vip=0;
		if (paidmember()){
			vip=1;
		}	
		if (vip==1){
			$('.cmd').show();
			$('.quess').show();			
		}else{			
			$('#translate').hide();	
			for(var j=3;j<=num[1];j++){		
			$('.cau1'+j).click(function(){				
				$('.cmd').hide();
				$('.quess').hide();	
				$(this).parent().parent().show();				
				$(this).parent().parent().prev().show();	
				$(this).parent().parent().prev().prev().show();							
				$('.next').hide();
				$('.back').hide();
				$('.s').html('');
				$('.s').html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;">Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/>thành viên VIP của thuviengiaoduc.org </a> mới có thể làm tiếp bài tập này</div>');
				for(var t=1;t<=num[1];t++){
					$('input:radio[name=cau1'+t+']').prev().css('visibility','hidden');
					$('input:radio[name=cau1'+t+']:checked').prev().css('visibility','visible');			
				}
			});			
		}
		}
		$('.back:eq(0)').css('visibility','hidden');
		$('.next:last').css('visibility','hidden');		
		$('.next').click(function(){							  
			$(this).parent().parent().next().css('display','block');
			$(this).parent().parent().css('display','none');
			$('.segment1 .ss_audio').css('display','none');
			$(this).parent().parent().next().find('.ss_audio').css('display','block');
			$('.jquery_jplayer_long').each(function(i){		
				addAudioLong(this,i,isAndroidDefault);					
			});
			toPos('.page_question'); 
		});
		$('.back').click(function(){		
		$(this).parent().parent().prev().css('display','block');
		$(this).parent().parent().css('display','none');
		$('.segment1 .ss_audio').css('display','none');
			$(this).parent().parent().prev().find('.ss_audio').css('display','block');
			$('.jquery_jplayer_long').each(function(i){		
				addAudioLong(this,i,isAndroidDefault);					
			});
		toPos('.page_question'); 
		});
		
	$('.cmd').click(function(){		
	if(vip==1){
		var total=0;
		$('input:radio:checked').each(function(){
			if($(this).prev().is('.correct1')){
				total++;
			}
			$(this).prev().css("visibility",'visible');
		});	
		var d_end = new Date();	 	
		var n_end = d_end.getTime(); 
		var tg=Math.round((n_end-n)/1000);		
		var ie_page=$('#pathname').val();
		var ie_memid=$('#ie_memid').val();
		var toeic_score=String(total);
		var toeic_total=String(num[1]);
		var toeic_time=String(tg);
		toeic_score=encrypt.string(toeic_score,passwordAuthen);	
		toeic_total=encrypt.string(toeic_total,passwordAuthen);
		toeic_time=encrypt.string(toeic_time,passwordAuthen);		
		ie_memid=encrypt.string(ie_memid,passwordAuthen);
		ie_page=encrypt.string(ie_page,passwordAuthen);	
		
		$.post(url+'ws_action/handle.php', {toeic_score:toeic_score,toeic_total:toeic_total,toeic_time:toeic_time,mem_id:ie_memid,page:ie_page,type:"toeic"},function(data){
		var obj=$.parseJSON(data);	
		if(obj.er!=0){
			$('.s').html('Có lỗi trong quá trình thực thi! Bạn hãy gửi lại');
			$('.s').fadeOut(500);	
		}else{		
			var str1='<p> Result:  '+total+'/'+num[1] +' correct</p>';						
			$('.s').html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;"><p>Bạn đã làm đúng <span style="color:red">'+total+'</span>/<span style="color:red">'+num[1]+'</span></p><p>Click vào nút "Xem đáp án" để xem chi tiết đáp án và giải thích <input style="color:red" type="button" value="Xem đáp án" id="close" /></p></div><div id="myDiv" style="display:none;"></div>');	
			$('#close').click(function(){									
				$('.cmd').hide();				
				$('.correct1').css("visibility",'visible');
				$('.giai_thich').show();
				toPos('.page_question');   							
			});
			$('.tapescript').show();
		}									   
		});	
	}else{			
		$('.s').html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;">Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ title="Quyền lợi của thành vien VIP">thành viên VIP của thuviengiaoduc.org </a>mới thực hiện được chức năng này</div>');
	}	
	
	});	
		
	});	
}