var arr_listen=[5,5,5,5,5,5,5,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,110,115,120,125,130,135,140,145,150,160,165,170,175,180,185,190,195,200,210,215,220,230,240,245,250,255,260,270,275,280,290,295,300,310,315,320,325,330,340,345,350,360,365,370,380,385,390,395,400,405,410,420,425,430,440,445,450,460,465,470,475,480,485,490,495,495,495,495,495,495,495,495,495,495,495];
var arr_read=[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10,15,20,25,30,35,40,45,50,60,65,70,80,85,90,95,100,110,115,120,125,130,140,145,150,160,165,170,175,180,190,195,200,210,215,220,225,230,235,240,250,255,260,265,270,280,285,290,300,305,310,315,320,325,330,335,340,350,355,360,365,370,380,385,390,395,400,405,410,415,420,430,435,440,450,455,465,470,480,485,490,495,495,495,495];

var url=window.location.protocol + "//" + location.host+'/';			
var passwordAuthen = encrypt.registerAuthen(url); 
function stoptime(){
document.getElementById("container").style.display="none";
document.getElementById("text_time").style.display="none";
document.getElementById("container").innerHtml="200";

}
var timer1 = {
	minutes1 :0,
	seconds1 : 0,
	elm1 :null,//id
	samay1 : null,
	sep1 : ':',	
	init1 : function(m1,s1,elm1){
		//m = parseInt(m,10);
		//s = parseInt(s,10);
		if(m1<0 || s1<0 || isNaN(m1) || isNaN(s1)) 
		{ alert('Invalid Values'); return; }
		this.minutes1 = m1;
		this.seconds1 = s1;
		this.elm1 = document.getElementById(elm1);
		timer1.start1();},
	start1 : function(){
		this.samay1 = setInterval((this.doCountDown1),1100);
	},
	doCountDown1 : function(){
		
			if(timer1.minutes1 ==135){
				clearInterval(timer1.samay1);
				timerComplete1();
				return;
			}		
		timer1.seconds1++;
		timer1.updateTimer1(timer1.minutes1,timer1.seconds1);
		
	},
	updateTimer1 :  function(min1,secs1){
			min1 = (min1 < 10 ? '0'+min1 : min1);
			secs1 = (secs1 < 10 ? '0'+secs1 : secs1);
			(this.elm1).innerHTML = min1+(this.sep1)+secs1;
			if(timer1.seconds1==60){
				timer1.seconds1=0;
				timer1.minutes1++;
			}
		}
	}
function timerComplete1(){	
$('.toeic_sh').hide();
$('.curr_time').text('Bạn đã hết thời gian làm bài');
$('.toeic_cmd1').show();
$('.container').prev().hide();
}


if($.browser.msie){
    $(window).load(function(){	
	$('.jquery_jplayer_long').each(function(i){		
		addAudioLong_toeic(this,i,audio_long[i],url_audio);					
	});
	$('.jp_player_stt').click(function(){		
		$(this).parent().parent().parent().next().show();
		 if($('#container').text()=='00:00'){timer1.init1(0,0,'container');}
		  $('.jquery_jplayer_long').removeClass("jplayer_playing");
	});
	});
}else{	
	$(document).ready(function(){
	$('.jquery_jplayer_long').each(function(i){		
		addAudioLong_toeic(this,i,audio_long[i],url_audio);					
	});
	$('.jp_player_stt').click(function(){		
		$(this).parent().parent().parent().next().show();
		 if($('#container').text()=='00:00'){timer1.init1(0,0,'container');}
		  $('.jquery_jplayer_long').removeClass("jplayer_playing");
	});
	});
}

$(document).ready(function(){	
	$('.played').click(function(){
			alert("Bạn không được phép nghe lại !");
	});	
	$('.toeic_tab').bind("click",function(){
		$('.toeic_tab_active').removeClass('toeic_tab_active');
		$('.toda_part_active').removeClass('toda_part_active');
		var inx=$(this).index('.toeic_tab');	
		$('.toda_part_content:eq('+inx+')').addClass('toda_part_active');
		$(this).addClass('toeic_tab_active');
		
	});
});

function startToeic(){
	$('.page_toeic').show();
	$('.gioi_thieu').hide();
	toPos('.ghichu0');
}
function showlisten(cmd){
			$('.part').css("background","#ffffff")	;	
			$(cmd).css({"background":"url(/file/luyen-thi-toeic/bai6/bg_part1.jpg) no-repeat","margin-left":"0px","height":"39px","width":"344px","line-height":"50px","padding-left":"17px"});
			$('.part_n').css("color","#ffffff");
			$('.part_01').css("color","#000");
			$('.part_d').css("color","#000");
			$('.part_02').css("color","#ffffff");
			$('.read').css({"padding-left":"13px","width":"351px","margin-left":"0px","background":"url(/file/luyen-thi-toeic/bai6/bg_part_0.jpg) repeat scroll 0 0 transparent",'line-height':'38px'});
			$('.part_listen').css("display","inline-block");
			$('.part').show();
			$('.hr_active').css("background","url(/file/luyen-thi-toeic/bai6/hr.jpg) no-repeat");		
			$('.hr_active').next().css({"margin-left":"1px","padding-top":"30px"});			
			$('.text_listen').css('color','white');
			$('.partt_listen').css({'color':'black','padding-left':'http://www.thuviengiaoduc.org/file/luyen-thi-toeic/common/js/7.5px'});
			$('.listen>div:first-child').css('background','url(/file/luyen-thi-toeic/bai6/bg_0.jpg) no-repeat');			
			$('.box_current').removeClass('box_current');	
			$('.segment:eq(0)').addClass('box_current');
			$('.list_audio').show();
			$('.audio1').show();
			$('.tbao').show();
			$('#part1').css({"background":"#CDEB8B","border":"#1px solid #A9CF58"});
			$('.ss_control').show();
			
}
function showRead(cmd){
		$(cmd).css({"margin-left":"7px","padding-left":"16px","line-height":"43px","width":"344px","height":"39px","background":"url(/file/luyen-thi-toeic/bai6/bg_part2.jpg) no-repeat"});
			$('.part_d').css("color","#ffffff");
			$('.part_02').css("color","#000");						
			$('.hr_active').css("background","url(/file/luyen-thi-toeic/bai6/hr1.jpg) no-repeat");					  
			$('.hr_active').next().css({"padding-top":"30px","margin-left":"2px"});			
			$('.listen').css({'width':'350px','margin-left':'-2px','padding-left':'13px','line-height':'38px',"background":"url(/file/luyen-thi-toeic/bai6/bg_part_0.jpg) no-repeat"});	
			$('.part_n').css("color","#000");
			$('.part_01').css("color","#ffffff");
			$('.part_listen').hide();				  
			$('.tbao').show();
			var times = $('#container').text();	
			var index1=times.indexOf(":");
			var gt1=parseInt(times.substr(0,index1));
			var gt2=parseInt(times.substr((index1+1),times.length));	
			if(gt2==0){
				timer1.init1(0,0,'container');
			}			
			$('.list_audio').hide();
			$('.box_current').removeClass('box_current');	
			$('.start_read').addClass('box_current');	
			$('.part').hide();
			$('.ss_control').show();
			$('.toeic_back').css('display','block');
	
}
function toeicNext(cmd){
	if($('.box_current').next().is('.segment')){
		$('.box_current').removeClass('box_current').next().addClass('box_current');	
		scroll(0,500);
		if($('.toeic_back').css('display')=='none'){
			$('.toeic_back').css('display','block');	
		}	
		if($('.box_current .part_to_read').length==1){
			$('.text_').text("Bạn đang làm phần đọc !");
			$('.read').css({"margin-left":"7px","padding-left":"16px","line-height":"43px","width":"344px","height":"39px","background":"url(/file/luyen-thi-toeic/bai6/bg_part2.jpg) no-repeat"});
			$('.part_d').css("color","#ffffff");
			$('.part_02').css("color","#000");						
			$('.hr_active').css("background","url(/file/luyen-thi-toeic/bai6/hr1.jpg) no-repeat");					  
			$('.hr_active').next().css({"padding-top":"30px","margin-left":"2px"});						
			$('.listen').css({"width":"350px","margin-left":"-2px",'padding-left':'13px','line-height':'38px',"background":"url(/file/luyen-thi-toeic/bai6/bg_part_0.jpg) no-repeat"});	
			$('.part_n').css("color","#000");
			$('.part_01').css("color","#ffffff");					
			$('.audio').hide();	
			$('.part').hide();
			$('.list_audio').hide();
			$('.part_listen').hide();
			$('.audio').hide();						
			$('#playaudio').hide();
			$('.part').css("background","#ffffff")	;	
		}	
	}else{
		$(cmd).hide();
	
	}	
}
function toeicBack(cmd){
	if($('.box_current').prev().is('.segment')){
		if($('.box_current .part_audio').length==1){
			var t = $('.box_current .part_audio').text();
				t=t-1;
			$('.audio').hide();			
			$('.jplayer_playing').parent().show();
			$('.audio'+t).show();
			$('.part').css("background","#ffffff")	;	
			$('#part'+t).css({"color":"#0F4400","background":"#CDEB8B","border":"1px solid #A9CF58"});		
		}
		if($('.box_current .part_to_read').length==1){
			$('.part').css("background","#ffffff")	;	
			$('.listen').css({"background":"url(/file/luyen-thi-toeic/bai6/bg_part1.jpg) no-repeat","margin-left":"0px","height":"39px","width":"344px","line-height":"50px","padding-left":"17px"});
			$('.part_n').css("color","#ffffff");
			$('.part_01').css("color","#000");
			$('.part_d').css("color","#000");
			$('.part_02').css("color","#ffffff");
			$('.read').css({"padding-left":"13px","width":"351px","margin-left":"0px","background":"url(/file/luyen-thi-toeic/bai6/bg_part_0.jpg) repeat scroll 0 0 transparent",'line-height':'38px'});
			$('.part_listen').css("display","inline-block");
			$('.part').show();
			$('.hr_active').css("background","url(/file/luyen-thi-toeic/bai6/hr.jpg) no-repeat");		
			$('.hr_active').next().css({"margin-left":"1px","padding-top":"30px"});			
			$('.text_listen').css('color','white');
			$('.partt_listen').css({'color':'black','padding-left':'http://www.thuviengiaoduc.org/file/luyen-thi-toeic/common/js/7.5px'});
			$('.listen>div:first-child').css('background','url(/file/luyen-thi-toeic/bai6/bg_0.jpg) no-repeat');
			$('.list_audio').show();
			$('.audio4').show();
			$('.tbao').show();
			$('#part4').css({"background":"#CDEB8B","border":"#1px solid #A9CF58"});
		}	
		$('.box_current').removeClass('box_current').prev().addClass('box_current');	
		scroll(0,500);
		if($('.toeic_next').css('display')=='none'){
			$('.toeic_next').css('display','block');	
		}
	}	
}
	
	

function toeicAction(cmd){
	var time_curr=$('#container').text();
	var index=time_curr.indexOf(":"); 
	var so_p=134-parseInt(time_curr.substring(0,index));

	var so_s=60-parseInt(time_curr.substr((index+1),2));
	if(so_s==60){
			so_p+=1;
			so_s=0;
	}	
	$('.status_submit').show();
	toPos('.ss_control');
	$('.alert_toeic').html('Bạn còn <strong style="color:#df3400">'+so_p+' </strong> phút <strong style="color:#df3400">'+so_s+'</strong> giây để làm bài! Bạn có chắc chắn muốn nộp bài ?<br/>');
}
var diem1=0	;	
var diem2=0;
function actionYes(){	
	$('.toeic_cmd1').hide();
	$('.curr_time').hide();
	$('#show_text_1').show();
	var total1=0;
	var total2=0;
	var inx=0;
	// diem phan nghe
	$("input:radio[part=1]:checked").each(function(){
		inx=parseInt($(this).attr('inx'));				
		if($(this).val()==arr_result[inx]){
			total1 +=1;			
		}
	});	
	
	// diem phan doc
	$("input:radio[part=2]:checked").each(function(){
		inx=parseInt($(this).attr('inx'));		
		if($(this).val()==arr_result1[inx]){
			total2 +=1;
		}
	});
	console.log(total2);
	var diem1=arr_listen[total1];		
	var diem2=arr_read[total2];
	console.log(diem2);
	var diem=diem1+diem2;
	
	var time_curr=$('#container').text();
		var index=time_curr.indexOf(":"); 
	var so_p=parseInt(time_curr.substring(0,index));
	var so_s=parseInt(time_curr.substr((index+1),2));
	so_p= so_p*60;
	so_s= so_s;
	toeic_t=so_p+so_s;
	$('.toeic_result').show();
	$('.toeic_dl').text(diem1);
	$('.toeic_dr').text(diem2);
	$('.toeic_dt').text(diem);
	$('.toeic_t').text(time_curr);
	$('.toeic_sh').hide();
	scroll(0,400);
	$('.toeic_save_er').after('<div style="display:none" id="save_d" diem1="'+diem1+'"  diem2="'+diem2+'"  toeic_t="'+toeic_t+'"></div>')
	$('#container').hide();
	$('.toeic_save_er').show();
}
function toiecSave(cmd){	
		if (paidmember()){	
			var ie_page=$('#pathname').val();
			var ie_memid=$('#ie_memid').val();				
			var toeic_score1=$('#save_d').attr('diem1');
			var toeic_score2=$('#save_d').attr('diem2');
			var toeic_time=$('#save_d').attr('toeic_t');					
			toeic_score1=encrypt.string(toeic_score1,passwordAuthen);	
			toeic_score2=encrypt.string(toeic_score2,passwordAuthen);	
			toeic_total1=encrypt.string('100',passwordAuthen);
			toeic_total2=encrypt.string('100',passwordAuthen);
			toeic_time=encrypt.string(toeic_time,passwordAuthen);		
			ie_memid=encrypt.string(ie_memid,passwordAuthen);
			ie_page=encrypt.string(ie_page,passwordAuthen);	
			
			$.post(url+'ws_action/handle.php', {toeic_score1:toeic_score1,toeic_score2:toeic_score2,toeic_total1:toeic_total1,toeic_total2:toeic_total2,toeic_time:toeic_time,mem_id:ie_memid,page:ie_page,type:"toeic_luyentap"},function(data){
			
			var obj=$.parseJSON(data);	
			if(obj.er!=0){
				$('.toeic_save_er').html('Có lỗi trong quá trình lưu điểm! bạn hãy gửi lại');
			}else{
				$('.toeic_save_er').html("Lưu điểm thành công");
				$(cmd).hide();				
			}
			});	
		}else{
			$('.toeic_save_er').html('Chỉ có <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ style="color:#099; font-weight:bold">thành viên VIP</a> mới có chức năng ghi điểm!');
		}
}
function actionNo(){
	$('.status_submit').hide();
	toPos('.toeic_box');
}

function showAnswer(cmd){
	if (paidmember()){
		// show listen			
		$('.toeic_sh').show();
		$('.giai_thich').show();
		$('.tbao').html('');
		for(var i=0;i<100;i++){	
			$("input:radio[name=toeic_rad_"+i+"][value="+arr_result[i]+"]").prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
		}
		var j=0;
		for(var i=100;i<200;i++){	
			$("input:radio[name=toeic_rad_"+i+"][value="+arr_result1[j]+"]").prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
			j++;
		}					
		$('.part').css("background","#ffffff")	;	
		$('.listen').css({"background":"url(/file/luyen-thi-toeic/bai6/bg_part1.jpg) no-repeat","margin-left":"0px","height":"39px","width":"344px","line-height":"50px","padding-left":"17px"});
		$('.part_n').css("color","#ffffff");
		$('.part_01').css("color","#000");
		$('.part_d').css("color","#000");
		$('.part_02').css("color","#ffffff");
		$('.read').css({"padding-left":"13px","width":"351px","margin-left":"0px","background":"url(/file/luyen-thi-toeic/bai6/bg_part_0.jpg) repeat scroll 0 0 transparent",'line-height':'38px'});
		$('.part_listen').css("display","inline-block");
		$('.part').show();
		$('.hr_active').css("background","url(/file/luyen-thi-toeic/bai6/hr.jpg) no-repeat");		
		$('.hr_active').next().css({"margin-left":"1px","padding-top":"30px"});			
		$('.text_listen').css('color','white');
		$('.partt_listen').css({'color':'black','padding-left':'http://www.thuviengiaoduc.org/file/luyen-thi-toeic/common/js/7.5px'});
		$('.listen>div:first-child').css('background','url(/file/luyen-thi-toeic/bai6/bg_0.jpg) no-repeat');			
		$('.box_current').removeClass('box_current');	
		$('.segment:eq(0)').addClass('box_current');
		$('.list_audio').show();
		$('.audio1').show();
		$('.tbao').show();
		$('#part1').css({"background":"#CDEB8B","border":"#1px solid #A9CF58"});
		$('.ss_control').show();
		$(cmd).hide();	
	}else{
		$('.toeic_save_er').html('Chỉ có <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ style="color:#099; font-weight:bold">thành viên VIP</a> mới xem được đáp án và lời giải thích!');
	}
}
function showTapescript(cmd,i){
	if (paidmember()){	
		var hide_cont=$(cmd).val();	
		if(hide_cont=='Xem'){
			$(cmd).val('Ẩn');		
			$('.hidden_'+i).show();
		}else{
			$(cmd).val('Xem');
			$('.hidden_'+i).hide();
		}
	}else{
			$('.toeic_save_er1').html('Chỉ có <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ style="color:#099; font-weight:bold">thành viên VIP</a> mới được xem!');
	}	
}