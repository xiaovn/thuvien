$(document).ready(function(){
	var id_mem=$('#ie_memid').val();
	if(id_mem){
		$('.iets_notepage_bottom a').attr('href','http://www.thuviengiaoduc.org/member/'+id_mem+'/m-card');
	}	
	//var scrore=$('.ielts_get_score').text();
	//var str_post=$('.ielts_get_score').html();
	//var str_respone=$('.ielts_get_respone').html();
	/*{"format_pri":"5000|2000",
		"list_send":[
			{
				"id":"2",
				"post_id":"9127",				
				"segment_id":"1",
				"content":"Hello",
				"score":"",
				"nhanxet
				
				
				"id_giaovien":"0",
				"time_chamdiem":"0000-00-00 00:00:00"
			}
			]
		}
	*/
//	var str_respone='[{"segment":1,"scose":10,"content":"noi dung hs post","nhanxet":"nhận xét của giáo viên"},{"segment":3,"scose":10,"content":"noi dung hs post3","nhanxet":"nhận xét của giáo viên3"},{"segment":2,"scose":10,"content":"noi dung hs post2","nhanxet2":"nhận xét của giáo viên2"}]';
		
		var str_respone=$('#res').text();
		var obj=$.parseJSON(str_respone);	
		var totalAmount=obj.totalAmount;
		$('.totalAmount').text(' '+totalAmount);
		var price=new Array();
		var pr=obj.format_pri;	
		if(pr.indexOf("|")>0){			
			var price=obj.format_pri.split("|");	
			for(i=0;i<price.length;i++){
				$('#res').after('<div class="ielts_price price_'+i+'">'+price[i]+'</div>');
			}	
		}else{	
			$('#res').after('<div class="ielts_price price_0">'+pr+'</div>');			
		}
		if(obj.list_send==0){
			$('.ielts_get').hide();
		}else{	
			for(var i=0;i< obj.list_send.length;i++){
				var seg=obj.list_send[i].segment_id;				
				$('.ielts_get_'+seg).show();				
				if(obj.list_send[i].score==''){
					$('.ielts_score_'+seg).text("Bài của bạn đang chờ chấm điểm!");	
					$('.ielts_nx_'+seg).hide();	
				}else{
					$('.ielts_nx_'+seg).show();	
					$('.ielts_score_'+seg).text(obj.list_send[i].score);
					$('.ielts_respone_lesson_'+seg).html(obj.list_send[i].nhanxet);
				}
				
				var ar_cont=obj.list_send[i].content.split("|");
					var str_pos='<strong>'+ar_cont[0]+'</strong><div class="space10"></div>';
				for(var j=1;j<ar_cont.length;j++){	
					str_pos += ar_cont[j]+'<div class="space10"></div>';					
				}
					$('.ielts_post_lesson_'+seg).html(str_pos);
			}
		}	
		if($('.box_active_p .ielts_post_lesson').html()!=''){			
			$('.p_iets_box .iets_bt_global').hide();
		}
		
});
  function nextPage_p(cmd,classBox,num){		
	$(cmd).prev().prev().removeClass('bt_prev_dis');	
	if($(cmd).hasClass('bt_next_dis')){	
	}else{	
		$('.'+classBox).removeClass('box_current_p');		
		$(cmd).parents('.'+classBox).addClass('box_current_p');
		toPos('.box_current_p');
		var index=$(cmd).prev().find('.bt_index').text();
		index=parseInt(index);
		index++;
		$(cmd).prev().find('.bt_index').text(index);
		if(index==num){
			$('.iets_control_bt').show();
			$(cmd).addClass('bt_next_dis');			
		}		
		$('.box_current_p .box_active_p').removeClass('box_active_p').next().addClass('box_active_p');	
		if($('.box_active_p .ielts_post_lesson').html()!=''){			
			$('.p_iets_box .iets_bt_global').hide();
		}else{
			$('.p_iets_box .iets_bt_global').show();
		}
	}
		$('.cd_status').hide();
}

function prevPage_p(cmd,classBox){		
	$(cmd).next().next().removeClass('bt_next_dis');
	if($(cmd).hasClass('bt_prev_dis')){		
	}else{		
		$('.'+classBox).removeClass('box_current_p');		
		$(cmd).parents('.'+classBox).addClass('box_current_p');
		toPos('.box_current_p');
		var index=$(cmd).next().find('.bt_index').text();
		index=parseInt(index);		
		index--;	
		$(cmd).next().find('.bt_index').text(index);
		if(index==1){
			$(cmd).addClass('bt_prev_dis');			
		}else{
			$(cmd).removeClass('bt_prev_dis');
		}
		$('.box_current_p .box_active_p').removeClass('box_active_p').prev().addClass('box_active_p');		
		if($('.box_active_p .ielts_post_lesson').html()!=''){			
			$('.p_iets_box .iets_bt_global').hide();
		}else{
			$('.p_iets_box .iets_bt_global').show();
		}
	}
		$('.cd_status').hide();
}
var url=window.location.protocol + "//" + location.host+'/';		
var passwordAuthen = encrypt.registerAuthen(url); 

function cmd_post(cmd){	
	var segment_id=parseInt($('.box_active_p').index('.iets_content_p'));	
	$('.cd_status').show();	
	var price_seg=$('.price_'+segment_id).text();
	var dem=0;	
	var total=parseInt($('.box_active_p .stt_cd_blank').length/2);	
	
	$('.box_active_p .stt_cd_blank').each(function(){			
		if($(this).val()!=''){
			dem++;
		}
	});	
	if(dem >=total){
		$('.iets_box_outline').show();
		$('.tbao_post').show();
		if($('.ielts_post_lesson_'+segment_id).html()!=''){
			$('.price_post').text(price_seg);
		}else{			
			$('.price_post').text(price_seg);
		}	
		$('.status_submit').show();
	}else{	
		$('.cd_status').css('color','red');
		$('.cd_status').text("Bạn phải làm ít nhất 50% mới được gửi bài chấm điểm!");		
	}
	toPos('.iets_box_outline');
	}
function actionYes(cmd){		
		$('.iets_box_outline').hide();		
		var segment_id=$('.box_active_p').index('.iets_content_p');	
		var price_seg=$('.price_'+segment_id).text();
		var str='';		
		$('.box_active_p .stt_cd_blank').each(function(j){
			str += (j+1)+': '+$(this).val()+'|';	
		});	
			var ie_page=$('#pathname').val();			
			var ar_p=ie_page.split("/");
			var ar_id=ar_p[2].split("-");
			var post_id = String(ar_id[0]);
			var ie_memid=$('#ie_memid').val();				
			segment_id=String(segment_id);			
			str = encrypt.string(str,passwordAuthen);	
			ie_memid=encrypt.string(ie_memid,passwordAuthen);
			segment_id	= encrypt.string(segment_id,passwordAuthen);			
			post_id = encrypt.string(post_id,passwordAuthen);			
			$.post(url+'ws_action/handle.php',{content:str,mem_id:ie_memid,post_id:post_id,segment_id:segment_id,type:"ielts"},function(data){
				var obj_respone=$.parseJSON(data);	
				if(obj_respone.er==7){
					$('.cd_status').css('color','red');
					$('.cd_status').text("Có lỗi trong quá trình thực thi! bạn hãy gửi lại");		
				}else if(obj_respone.er==6){
					$('.tbao_post').hide();
					$('.iets_box_outline').show();	
					$('.iets_box_inline').hide();					
					$('.not_post').show();
					$('.not_post_msg').text(obj_respone.message).show();
				}
				else if(obj_respone.er==0){
					$('.cd_status').css('color','#48953C');
					$('.cd_status').text("Gửi bài thành công! Số tiền trong tài khoản của bạn sẽ bị trừ đi "+price_seg+' vnđ');
					$('.p_iets_box .iets_bt_global').hide();				
				}	
			});	
	toPos('.cd_status');			
	}	

function actionNo(cmd){
	$('.iets_box_outline').hide();
	$('.cd_status').hide();	
	toPos('.p_iets_box');
}
