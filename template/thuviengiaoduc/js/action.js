function compare(s1,s2){
	if(s1==s2){
	return true;
	}else{
	return false;
	}
}

 if($.browser.msie){
    $(window).load(function(){	
	$('.cmd').click(function(){
	var t=$(this).prev().val();	
	var total=0;		
	for(var j=1;j<=num[t];j++){	
	var s=t+j;		
		$('input:radio[name=cau'+s+']').prev().css('visibility','hidden');
		$('input:radio[name=cau'+s+']:checked').prev().css('visibility','visible');
		if(compare($('input:radio[name=cau'+s+']:checked').val(),arr_result[s])){
			
			total+=1;
		}
	}	
	$('.correct'+t).css('visibility','visible');
	$('.test_s'+t).html('');
	$('.test_s'+t).append('<span style="color:red; font-weight:bold;"> Result:  '+total+'/'+num[t] +' correct</span>');
	//var st=$('#result_end').html();
	var str1='<p> Result:  '+total+'/'+num[t] +' correct</p>';
	$('.s'+t).html("");
	$('.s'+t).append('<div class="ss ss'+t+'"><p>'+str1+'<p><input type="button" value="Close" id="close'+t+'" /></div>');	
	$('#close'+t).click(function(){							  
							   	$('.ss'+t).css('display','none');
							   });
	});	
	$('.showw').click(function(){
		var t=$(this).prev().val();	
		var val=$(this).val();
		if(val=='Xem'){
			$('.page_question'+t).css('display','block');
			$(this).val('Ẩn');	
			$('.ass'+t).next().val('Ẩn');	
			$('.segment'+t).css('display','none');
		$('.segment'+t+':eq(0)').css('display','block');
		$('.segment'+t+':eq(0) >.back').css('visibility','hidden');
		var x=parseInt($('.number_segment'+t).text())-1;		
		$('.segment'+t+':eq('+x+')> .next').css('display','none');
		$('.segment'+t+':eq(0)').css('display','block');
		$('.next').click(function(){		
			$(this).parent().next().css('display','block');
			$(this).parent().css('display','none');		
		});
	$('.back').click(function(){		
		$(this).parent().prev().css('display','block');
		$(this).parent().css('display','none');		
		});
		}			
		if(val=='Ẩn'){
			$('.page_question'+t).css('display','none');
			$(this).val('Xem');
			$('.ass'+t).next().val('Xem');
		}
		
		
	});
	});
 }else{
$(document).ready(function(){
	$('.cmd').click(function(){
	var t=$(this).prev().val();	
	var total=0;		
	for(var j=1;j<=num[t];j++){	
	var s=t+j;		
		$('input:radio[name=cau'+s+']').prev().css('visibility','hidden');
		$('input:radio[name=cau'+s+']:checked').prev().css('visibility','visible');
		if(compare($('input:radio[name=cau'+s+']:checked').val(),arr_result[s])){
			
			total+=1;
		}
	}	
	$('.correct'+t).css('visibility','visible');
	$('.test_s'+t).html('');
	$('.test_s'+t).append('<span style="color:red; font-weight:bold;"> Result:  '+total+'/'+num[t] +' correct</span>');
	//var st=$('#result_end').html();
	var str1='<p> Result:  '+total+'/'+num[t] +' correct</p>';
	$('.s'+t).html("");
	$('.s'+t).append('<div class="ss ss'+t+'"><p>'+str1+'<p><input type="button" value="Close" id="close'+t+'" /></div>');	
	$('#close'+t).click(function(){							  
							   	$('.ss'+t).css('display','none');
							   });
	});	
	$('.showw').click(function(){
		var t=$(this).prev().val();	
		var val=$(this).val();
		if(val=='Xem'){
			$('.page_question'+t).css('display','block');
			$(this).val('Ẩn');	
			$('.ass'+t).next().val('Ẩn');	
			$('.segment'+t).css('display','none');
		$('.segment'+t+':eq(0)').css('display','block');
		$('.segment'+t+':eq(0) >.back').css('visibility','hidden');
		var x=parseInt($('.number_segment'+t).text())-1;		
		$('.segment'+t+':eq('+x+')> .next').css('display','none');
		$('.segment'+t+':eq(0)').css('display','block');
		$('.next').click(function(){		
			$(this).parent().next().css('display','block');
			$(this).parent().css('display','none');		
		});
	$('.back').click(function(){		
		$(this).parent().prev().css('display','block');
		$(this).parent().css('display','none');		
		});
		}			
		if(val=='Ẩn'){
			$('.page_question'+t).css('display','none');
			$(this).val('Xem');
			$('.ass'+t).next().val('Xem');
		}
		
		
	});
	
});
 }