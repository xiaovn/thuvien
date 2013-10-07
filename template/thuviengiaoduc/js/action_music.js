function compare(s1,s2){
	if(s1==s2){
	return true;
	}else{
	return false;
	}
}
 $(window).load(function(){
	$('.dang3_box').hide();			
			$('.dang3_box:eq(0)').show();
			$('.active1').click(function(){		
			$('.active').toggleClass('active1');
			$('.active').toggleClass('active');
			$(this).toggleClass('active');
			$(this).toggleClass('active1');			
			var index=parseInt($(this).prev().text());	
			$('.ss').hide();
			var index1=index+1;			
			$('.s'+index1+'>.ss').show();		
			$('.dang3_box').hide();		
			$('.boxx').hide();
			$('.dang3_box:eq('+index+')').show();			
		});
			$('.active').click(function(){
			$('.active').toggleClass('active1');
			$('.active').toggleClass('active');
			$(this).toggleClass('active');
			$(this).toggleClass('active1');
			var index=parseInt($(this).prev().text());		
				$('.ss').hide();
			var index1=index+1;			
			$('.s'+index1+'>.ss').show();		
			$('.dang3_box').hide();			
			$('.dang3_box:eq('+index+')').show();			
		});

	$('.cmd').css("cursor","pointer");	 	   
	var vip=0;
	if (paidmember()){
		vip=1;
	}	
	if (vip==1){
			$('.cmd').show();
			$('.dang3_cau').show();			
		}else{	
		
			for(var i=1;i<=num_test;i++){				
			for(var j=3;j<=num[i];j++){		
					$('.cau'+i+j).click(function(){
					var ii=$(this).next().text();							 
					$('.cmd'+ii).hide();
					$('.tab'+ii).hide();	
					$(this).parent().parent().show();				
					$(this).parent().parent().prev().show();	
					$(this).parent().parent().prev().prev().show();
					//$(this).parent().parent().parent().children().show();	
					$('.s'+ii).html('');
					$('.s'+ii).html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;">Bạn phải là <a title="Quyền lợi của thành vien VIP" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/>thành viên VIP của thuviengiaoduc.org </a> mới có thể làm tiếp bài tập này</div>');
					for(var t=1;t<=num[i];t++){
						$('input:radio[name=cau'+i+t+']').prev().css('visibility','hidden');
						$('input:radio[name=cau'+i+t+']:checked').prev().css('visibility','visible');			
					}
					});
			
				}	
			}		
			
		}	   
	
		$('.cmd').click(function(){		
		 var t=$(this).prev().val();	
		if(vip==1){	
			var total=0;		
			for(var j=1;j<=num[t];j++){	
				var s=String(t)+String(j);					
				var type=$('.cau'+s).attr('type')	;
				if(type=='radio'){
					$('input:radio[name=cau'+s+']').prev().css('visibility','hidden');
					$('input:radio[name=cau'+s+']:checked').prev().css('visibility','visible');
					if(compare($('input:radio[name=cau'+s+']:checked').val(),arr_result[s])){			
						total++;			
					}
				}
				if(type=='text'){	
				
					var str=$('.cau'+s).val();		
					if(str!=''){						
						if(str.indexOf(' ')>=0){
							str=str.replace(/ /gi,"");
						}
						if(arr_result[s].indexOf(' ')>=0){
							arr_result[s]=arr_result[s].replace(/ /gi,"");
						}
						if(str.indexOf(' ')>=0){
							str=str.replace(/./gi,"");
						}
						if(arr_result[s].indexOf(' ')>=0){
							arr_result[s]=arr_result[s].replace(/./gi,"");
						}	
						str=str.toLowerCase();						
						if(arr_result[s].toLowerCase()==str){
							total++;
							
							$('.cau'+s).css('color','blue');
							$('.text'+s).html("");
							$('.text'+s).html('<img src="correct-1.jpg"/*tpa=http://www.thuviengiaoduc.org/file/music/common/correct.jpg*/ style="width:13px;" />');
							$('.text'+s).addClass('m_correct');
						}else{						
							$('.text'+s).html("");
							$('.text'+s).addClass('m_incorrect');
							$('.text'+s).html('<img src="incorrect-1.jpg"/*tpa=http://www.thuviengiaoduc.org/file/music/common/incorrect.jpg*/ style="width:13px;" />');
						}
						
			
					}
				}
				var arr_chk=[];
				var n_chk=0;	
				var n_chk1=0;					
				if(type=='checkbox'){
						$('input:checkbox[name=cau'+s+']').prev().css('visibility','hidden');
						$('input:checkbox[name=cau'+s+']:checked').prev().css('visibility','visible');
						$('input:checkbox[name=cau'+s+']:checked').each(function(i){		
						arr_chk[i]= $(this).val();
						n_chk1++;
						if(arr_result[s].indexOf(arr_chk[i])>=0){
							n_chk++;
						}						
						});							
						if(n_chk1==n_chk && n_chk==arr_result[s].split("*").length){
							total++;
						}
						n_chk=0;
				}
				
				
			}	
  
		var nums=num[t];	
		var str1='<p> Result:  '+total+'/'+num[t] +' correct</p>';	
		$('.s'+t).html('');		
		if(total==num[t]){
			$('.s'+t).html('<div class="ss" style="color:#008000; text-align:center; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;"><p>Bạn đã làm đúng <span style="color:red">'+total+'</span>/<span style="color:red">'+num[t]+'</span></p></div><div id="myDiv" style="display:none;"></div>');	
		}else{	
			$('.s'+t).html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;"><p>Bạn đã làm đúng <span style="color:red">'+total+'</span>/<span style="color:red">'+num[t]+'</span>&nbsp;&nbsp;&nbsp;<input style="color:blue" type="button" value="Xem đáp án" id="close'+t+'" /></p></div><div id="myDiv" style="display:none;"></div>');	
		}
		$('#close'+t).click(function(){									
								$('.prev_').filter(function(){
									return $(this).val()==t;
								}).next().hide();
							   	$('.s'+t).html('<div class="ss" style="color:#008000;text-align:center; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;"><p>Bạn đã làm đúng <span style="color:red">'+total+'</span>/<span style="color:red">'+num[t]+'</span></p></div>');
								$('.hidd').css("visibility",'hidden');								
								$('.correct'+t).css("visibility",'visible');								
								for(var i=1;i<=num[t];i++){
								s=String(t)+String(i);
								if($('.cau'+s).prev().is('.m_correct')){}else{
									$('.cau'+s).after('<span style="color:blue">&nbsp;'+arr_result[s]+'&nbsp;</span>');
								}	
								}						
								$('.s').html('');								
							   });
	}else{
			$('.s'+t).html('');
			$('.s'+t).html('<div class="ss" style="color:#008000; background:#dbf2ff;border: 1px solid #a9ccde;font-weight: bold;margin: 10px;padding: 20px;">Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ title="Quyền lợi của thành vien VIP">thành viên VIP của thuviengiaoduc.org </a>mới thực hiện được chức năng này</div>');
		}
							   
	});
		
	});					
							
