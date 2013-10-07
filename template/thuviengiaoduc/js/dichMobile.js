  	
   $(document).ready(function(){	
   var uagent = navigator.userAgent.toLowerCase();
   var arrMobi = new Array('midp', 'j2me', 'avantg', 'ipad', 'iphone', 'docomo', 'novarra', 'palmos','palmsource', '240x320', 'opwv', 'chtml', 'pda', 'windows ce','mmp/','mib/', 'symbian', 'wireless', 'nokia','hand', 'mobi', 'phone', 'cdm', 'up.b', 'audio', 'sie-', 'sec-','samsung', 'htc', 'mot-', 'mitsu', 'sagem', 'sony', 'alcatel','lg', 'erics', 'vx', 'nec', 'philips', 'mmm', 'xx', 'panasonic','sharp', 'wap', 'sch', 'rover', 'pocket', 'benq', 'java', 'pt','pg', 'vox', 'amoi', 'bird', 'compal', 'kg', 'voda', 'sany','kdd', 'dbt', 'sendo', 'sgh', 'gradi', 'jb', 'dddi', 'moto', 'opera mobi', 'opera mini', 'android');
    var isMobile = false;
    for(i = 0; i < arrMobi.length; i++){
        if(uagent.indexOf(arrMobi[i]) != -1){
            isMobile = true;
            break;
        }
    }	
    if (isMobile){
  		$('.span-audio').css('vertical-align','middle');  
		$('.span-audio').css('margin-top','-10px'); 
		 $('#tickerbg').css('z-index',-1);
		 $('#ticker').css('z-index',-1);
		 var dichActive = false;
        $("#translate").bind("click", function(){		
  		dichActive = (dichActive != true)?true:false;
		if(dichActive == true){				 			     
		     	$('.ta123_dich').each(function(index,element){
		     		var _self = element;
		     		try{
					$(_self).find("span").trigger("mouseover");
				}finally{
					var _text = $('#ticker span').html();
					$('.ta123_dich span').css('background','#fff');		
					if($('.ta123_dich').next().is('.span-audio')){					
						$(_self).next().after('<div class="dich_mobile">'+_text+'</div>');
					}else{		
					 	$(_self).append('<div class="dich_mobile">'+_text+'</div>');
					}
				}					 
		     	});
		}else{
			$('.ta123_dich').find("span").trigger("mouseout");
			$('.ta123_dich').find("span").css("background","#FFFFFF");
			$('.dich_mobile').remove();					
		}			
      });	 
	$(".bh_trans").bind("click", function(){	
		var trans=parseInt($(this).attr('trans')); 		
		var inx=$(this).index('.bh_trans');				
		$(this).parent().addClass('trans_curr_'+inx);	
			that=this;
		if(trans==0){			
			if($('.trans_curr_'+inx+' .dich_mobile').length>0){
				$('.trans_curr_'+inx+' .dich_mobile').show();
			}else{				
			$('.trans_curr_'+inx+' .ta123_dich').each(function(){			     	
				try{
					$(this).find("span").trigger("mouseover");
				}finally{
					var _text = $('#ticker span').html();
					$(this).css('background','#fff');		
					if($(this).next().is('.span-audio')){					
						$(this).next().after('<div class="dich_mobile">'+_text+'</div>');
					}else{		
						$(this).append('<div class="dich_mobile">'+_text+'</div>');
					}
				}					 
			});
				dk=0;
			}	
			$(that).attr('trans',1);				
		}else{			
			$('.trans_curr_'+inx+' .ta123_dich span').css('background','#fff');	
			$('.trans_curr_'+inx+' .dich_mobile').hide();				
			$(that).attr('trans',0);				
		}			
     });
	} 
});