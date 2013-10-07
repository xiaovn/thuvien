function compare(s1,s2){
	if(s1==s2){
	return true;
	}else{
	return false;
	}
}

var timer = {
	minutes :0,
	seconds : 0,
	elm :null,//id
	samay : null,
	sep : ':',
	init : function(m,s,elm){
		//m = parseInt(m,10);
		//s = parseInt(s,10);
		if(m<0 || s<0 || isNaN(m) || isNaN(s)) 
		{ alert('Invalid Values'); return; }
		this.minutes = m;
		this.seconds = s;
		this.elm = document.getElementById(elm);
		timer.start();},
	start : function(){
		this.samay = setInterval((this.doCountDown),1100);
	},
	doCountDown : function(){
		
			if(timer.minutes ==timegame1){
				clearInterval(timer.samay);
				timerComplete();
				return;
			}		
		timer.seconds++;
		timer.updateTimer(timer.minutes,timer.seconds);
		
	},
	updateTimer :  function(min,secs){
			min = (min < 10 ? '0'+min : min);
			secs = (secs < 10 ? '0'+secs : secs);
			(this.elm).innerHTML = min+(this.sep)+secs;
			if(timer.seconds==60){
				timer.seconds=0;
				timer.minutes++;
			}
		}
	}
	function timerComplete(){
		$(function(){
			alert("Đã hết "+timegame1+" phút làm bài! Bạn hãy click vào nút Hoàn Thành để biết kết quả của mình!");
			$('.table_game').hide();
		});

	}
function stoptime_game(){
	document.getElementById("container").style.display="none";
	document.getElementById("container").innerHtml="100";
}
 if($.browser.msie){
    $(window).load(function(){	
	$('.clock').css('display','none');
	$('.start').click(function(){
		$('.gt').css('display','none');
		$('.clock').css('display','block');	
		$('.game1').css('display','block');
		timer.init(0,0,'container');
	});
	$('.cmdgame').click(function(){	
		$('table').show();
		$(this).hide();
		stoptime_game();
		var total=0;
		for(var i=0;i<num_first;i++){
		var str=$('.name'+i).val();		
		if(str!=''){
		var dem=0;
		for(var j=0;j<i;j++){
			str.replace(" ","");
			str.replace(".","");
			var sr=$('.name'+j).val();	
			sr.replace(" ","");
			sr.replace(".","");
			if(str.toUpperCase()==sr.toUpperCase()){
				dem++;
			}
		}
		if(dem==0){
			str.replace(" ","");
			first_name.replace(" ","");
			var index=(first_name.toUpperCase()).indexOf(str.toUpperCase());			
				if (parseInt(index)>=0){						
					total+=1;					
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:10px;" />');
				}else{
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:10px;" />');
				}
			
			}	
		}	
	}
	for(var i=num_first;i<(num_first+num_last);i++){
		var str=$('.name'+i).val();		
		if(str!=''){
		var dem=0;
		for(var j=num_first;j<i;j++){
			str.replace(" ","");
			var sr=$('.name'+j).val();	
			sr.replace(" ","");
			if(str.toUpperCase()==sr.toUpperCase()){
				dem++;
			}
		}
		if(dem==0){
			str.replace(" ","");
			last_name.replace(" ","");
			var index=(last_name.toUpperCase()).indexOf(str.toUpperCase());			
				if (parseInt(index)>=0){						
					total+=1;					
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:10px;" />');
				}else{
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:10px;" />');
				}
			
			}
		}	
	}
	$('.game_result').html("");
if(total==(num_first+num_last)){
	$('.game_result').append('<span style="color:red; font-weight:bold">'+true_game+'</span>');	
}	
else{
	$('.game_result').append('<span style="color:red; font-weight:bold">'+false_game+'</span><span style="margin-left:30px"><input type="button" class="replay" value="Chơi lại" /></span>');	
}
	$('.replay').click(function(){
		$('.game_result').html("");
		$('.cmdgame').show();
		$('#display').val('00:00');
		 msec=0;
		sec=0;
		min=0;
		start_games();
		for(var i=0;i<arr_fl.length;i++){
			$('.name'+i).val("");
			$('.gamee'+i).html("");
		}
		
	});
	});
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
	//var st=$('#result_end').html();
	var str1='<p> Result:  '+total+'/'+num[t] +' correct</p>';
	$('.test_s'+t).html("");
	$('.test_s'+t).append('<div style="color:red; font-weight:bold; font-size:15px; padding-left:100px;"> Result:  '+total+'/'+num[t] +' correct</div>');	
	});		
	
for(var i=1;i<=16;i++){
	$('.game2_img'+i+'> p').css('visibility','hidden');
	$('.game2_img'+i+'> input').css('visibility','hidden');
	$('.game2_img'+i+'> span').css('visibility','hidden');
}
	$('.game2_img1 > p').css('visibility','visible');
	$('.game2_img1 > input').css('visibility','visible');
	$('.game2_img1 > span').css('visibility','visible');
	$('.game2_img2 > p').css('visibility','visible');
	$('.game2_img2 > input').css('visibility','visible');
	$('.game2_img2 > span').css('visibility','visible');
	$('.game2_img5 > p').css('visibility','visible');
	$('.game2_img5 > input').css('visibility','visible');
	$('.game2_img5 > span').css('visibility','visible');
	$('.game2_img6 > p').css('visibility','visible');
	$('.game2_img6 > input').css('visibility','visible');
	$('.game2_img6 > span').css('visibility','visible');
	
	arr_pic_result[1]=arr_pic_result[1].replace(" ","");
	arr_pic_result[2]=arr_pic_result[2].replace(" ","");
	arr_pic_result[3]=arr_pic_result[3].replace(" ","");
	arr_pic_result[4]=arr_pic_result[4].replace(" ","");
	arr_pic_result[9]=arr_pic_result[9].replace(" ","");
	arr_pic_result[10]=arr_pic_result[10].replace(" ","");
	arr_pic_result[11]=arr_pic_result[11].replace(" ","");
	arr_pic_result[12]=arr_pic_result[12].replace(" ","");
	arr_pic_result[1]=arr_pic_result[1].replace(".","");
	arr_pic_result[2]=arr_pic_result[2].replace(".","");
	arr_pic_result[3]=arr_pic_result[3].replace(".","");
	arr_pic_result[4]=arr_pic_result[4].replace(".","");
	arr_pic_result[9]=arr_pic_result[9].replace(".","");
	arr_pic_result[10]=arr_pic_result[10].replace(".","");
	arr_pic_result[11]=arr_pic_result[11].replace(".","");
	arr_pic_result[12]=arr_pic_result[12].replace(".","");
$('.game2_name1').keyup(function(){

			var name1=$(this).val();
		
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				//$('.game2_img1').css('z-index','-10');
				$('.game2_img1').animate({top:"320px"},1000);				
			}
			var name2=$('.game2_name2').val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				$('.game2_img2').css('z-index','-10');
			}
			var name5=$('input:radio[name=game2_name5]:checked').val();
			if(name5==arr_pic_result[5]){
				$('.game2_img5').css('z-index','-10');
			}
			var name6=$('input:radio[name=game2_name6]:checked').val();
			if(name6==arr_pic_result[6]){
				$('.game2_img6').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){
			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');		
		}		
				
		});
$('.game2_name2').keyup(function(){
			var name2=$(this).val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				//$('.game2_img2').css('z-index','-10');
				$('.game2_img2').animate({top:"320px"},1000);				
			}
			var name1=$('.game2_name1').val();
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				$('.game2_img1').css('z-index','-10');
			}
			var name5=$('input:radio[name=game2_name5]:checked').val();
			if(name5==arr_pic_result[5]){
				$('.game2_img5').css('z-index','-10');
			}
			var name6=$('input:radio[name=game2_name6]:checked').val();
			if(name6==arr_pic_result[6]){
				$('.game2_img6').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){
			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');		
		}		
		
		});
$('.game2_name5').click(function(){
			var name5=$(this).val();
			if(name5==arr_pic_result[5]){
				//$('.game2_img5').css('z-index','-10');
				$('.game2_img5').animate({top:"170px"},1000);
				
			}
			var name1=$('.game2_name1').val();
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				$('.game2_img1').css('z-index','-10');
			}
			var name2=$('.game2_name2').val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				$('.game2_img2').css('z-index','-10');
			}
			var name6=$('input:radio[name=game2_name6]:checked').val();
			if(name6==arr_pic_result[6]){
				$('.game2_img6').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');		
		}				
				
		
		});
$('.game2_name6').click(function(){
			var name6=$(this).val();
			if(name6==arr_pic_result[6]){
				//$('.game2_img6').css('z-index','-10');
				$('.game2_img6').animate({top:"170px"},1000);				
			}
			var name1=$('.game2_name1').val();
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				$('.game2_img1').css('z-index','-10');
			}
			var name5=$('input:radio[name=game2_name5]:checked').val();
			if(name5==arr_pic_result[5]){
				$('.game2_img5').css('z-index','-10');
			}
			var name2=$('.game2_name2').val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				$('.game2_img2').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){
			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');						
		}		
		
		});	
	$('.game2_name3').keyup(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');
			var name3=$(this).val();
			name3=name3.replace(" " ,"");
			name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').animate({top:"320px"},1000);
			}	
			var name4=$('.game2_name4').val();
			var name7=$('input:radio[name=game2_name7]:checked').val();
			name4=name4.replace(" " ,"");
				name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').css('z-index','-10');
			}
			if(name7==arr_pic_result[7]){
				$('.game2_img7').css('z-index','-10');
			}
			var name8=$('input:radio[name=game2_name8]:checked').val();
			if(name8==arr_pic_result[8]){
				$('.game2_img8').css('z-index','-10');
			}
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){
			
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name4').keyup(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');
			var name4=$(this).val();
			name4=name4.replace(" " ,"");
			name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').animate({top:"320px"},1000);
			}	
			var name3=$('.game2_name3').val();
			
			var name7=$('input:radio[name=game2_name7]:checked').val();
			var name8=$('input:radio[name=game2_name8]:checked').val();
			name3=name3.replace(" " ,"");
			name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').css('z-index','-10');
			}
			if(name7==arr_pic_result[7]){
				$('.game2_img7').css('z-index','-10');
			}			
			if(name8==arr_pic_result[8]){
				$('.game2_img8').css('z-index','-10');
			}
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){
			
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name7').click(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');
			var name7=$(this).val();
			if(name7==arr_pic_result[7]){
				$('.game2_img7').animate({top:"170px"},1000);
			}	
			var name4=$('.game2_name4').val();
			var name3=$('.game2_name3').val();
			name3=name3.replace(" " ,"");
			name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').css('z-index','-10');
			}
			name4=name4.replace(" " ,"");
			name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').css('z-index','-10');
			}
			var name8=$('input:radio[name=game2_name8]:checked').val();
			if(name8==arr_pic_result[8]){
				$('.game2_img8').css('z-index','-10');
			}			
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){			
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});
$('.game2_name8').click(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');								 
			var name8=$(this).val();
			if(name8==arr_pic_result[8]){
				$('.game2_img8').animate({top:"170px"},1000);
			}	
			var name4=$('.game2_name4').val();
			var name3=$('.game2_name3').val();
			var name7=$('input:radio[name=game2_name7]:checked').val();
			name3=name3.replace(" " ,"");
				name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').css('z-index','-10');
			}
			if(name7==arr_pic_result[7]){
				$('.game2_img7').css('z-index','-10');
			}			
			name4=name4.replace(" " ,"");
			name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').css('z-index','-10');
			}
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){		
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});

	$('.game2_name9').keyup(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');
			var name9=$(this).val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').animate({top:"300px",height:'0px',background:'#ffffff'},1000);
				
				$('.game2_img9 > p').css('visibility','hidden');	
				$('.game2_img9 > input').css('visibility','hidden');
				$('.game2_img9 > span').css('visibility','hidden');
			}	
			var name10=$('.game2_name10').val();
			var name13=$('input:radio[name=game2_name13]:checked').val();
			var name14=$('input:radio[name=game2_name14]:checked').val();
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').css('z-index','-10');
			}
			if(name13==arr_pic_result[13]){
				$('.game2_img13').css('z-index','-10');
			}			
			if(name14==arr_pic_result[14]){
				$('.game2_img14').css('z-index','-10');
			}
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){		
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name10').keyup(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');						  
			var name10=$(this).val();
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').animate({top:"300px",height:'0px',background:'#ffffff'},1000);
				
				$('.game2_img10 > p').css('visibility','hidden');	
				$('.game2_img10 > input').css('visibility','hidden');
				$('.game2_img10 > span').css('visibility','hidden');
			}	
			var name9=$('.game2_name9').val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').css('z-index','-10');
			}
			var name13=$('input:radio[name=game2_name13]:checked').val();
			var name14=$('input:radio[name=game2_name14]:checked').val();			
			if(name13==arr_pic_result[13]){
				$('.game2_img13').css('z-index','-10');
			}			
			if(name14==arr_pic_result[14]){
				$('.game2_img14').css('z-index','-10');
			}
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){
			
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name13').click(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');
			var name13=$(this).val();
			if(name13==arr_pic_result[13]){
			$('.game2_img13').animate({top:"150px",height:'0px',background:'#ffffff'},1000);		
			$('.game2_img13 > p').css('visibility','hidden');	
				$('.game2_img13 > input').css('visibility','hidden');
				$('.game2_img13 > span').css('visibility','hidden');
			}	
			var name9=$('.game2_name9').val();
			var name10=$('.game2_name10').val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').css('z-index','-10');
			}
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').css('z-index','-10');
			}
			var name14=$('input:radio[name=game2_name14]:checked').val();					
			if(name14==arr_pic_result[14]){
				$('.game2_img14').css('z-index','-10');
			}
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){			
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');						
		}		
	});
$('.game2_name14').click(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');								  
			var name14=$(this).val();
			if(name14==arr_pic_result[14]){
				$('.game2_img14').animate({top:"150px",height:'0px',background:'#ffffff'},1000);			
				$('.game2_img14 > p').css('visibility','hidden');	
				$('.game2_img14 > input').css('visibility','hidden');
				$('.game2_img14 > span').css('visibility','hidden');
			}	
			var name9=$('.game2_name9').val();
			var name10=$('.game2_name10').val();
			var name13=$('input:radio[name=game2_name13]:checked').val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').css('z-index','-10');
			}
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').css('z-index','-10');
			}
			if(name13==arr_pic_result[13]){
				$('.game2_img13').css('z-index','-10');
			}		
			
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){			
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');						
		}		
	});
	$('.game2_name11').keyup(function(){
			$('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');						  
			var name11=$(this).val();				
			var name12=$('.game2_name12').val();
			var name15=$('input:radio[name=game2_name15]:checked').val();
			var name16=$('input:radio[name=game2_name16]:checked').val();	
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').animate({top:"300px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img11 > p').css('visibility','hidden');	
				$('.game2_img11 > input').css('visibility','hidden');
				$('.game2_img11 > span').css('visibility','hidden');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').css('z-index','-10');
			}
			if(name15==arr_pic_result[15]){
				$('.game2_img15').css('z-index','-10');
			}			
			if(name16==arr_pic_result[16]){
				$('.game2_img16').css('z-index','-10');
			}
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		}
	});
	$('.game2_name12').keyup(function(){
			 $('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');	
			var name12=$(this).val();				
			var name11=$('.game2_name11').val();
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').css('z-index','-10');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').animate({top:"300px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img12 > p').css('visibility','hidden');	
				$('.game2_img12 > input').css('visibility','hidden');
				$('.game2_img12 > span').css('visibility','hidden');
			}
			var name15=$('input:radio[name=game2_name15]:checked').val();
			var name16=$('input:radio[name=game2_name16]:checked').val();				
			if(name15==arr_pic_result[15]){
				$('.game2_img15').css('z-index','-10');
			}			
			if(name16==arr_pic_result[16]){
				$('.game2_img16').css('z-index','-10');
			}
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		}
	});
	$('.game2_name15').click(function(){
		$('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');								  
			var name15=$(this).val();
			if(name15==arr_pic_result[15]){
				$('.game2_img15').animate({top:"150px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img15 > p').css('visibility','hidden');	
				$('.game2_img15 > input').css('visibility','hidden');
				$('.game2_img15 > span').css('visibility','hidden');
			}	
			var name11=$('.game2_name11').val();
			var name12=$('.game2_name12').val();			
			var name16=$('input:radio[name=game2_name16]:checked').val();	
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').css('z-index','-10');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').css('z-index','-10');
			}			
			if(name16==arr_pic_result[16]){
				$('.game2_img16').css('z-index','-10');				
			}
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		}
	});
	$('.game2_name16').click(function(){
		$('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');								  
			var name16=$(this).val();
			if(name16==arr_pic_result[16]){
				
				$('.game2_img16').animate({top:"150px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img16 > p').css('visibility','hidden');	
				$('.game2_img16 > input').css('visibility','hidden');
				$('.game2_img16 > span').css('visibility','hidden');
			}	
			var name11=$('.game2_name11').val();
			var name12=$('.game2_name12').val();			
			var name15=$('input:radio[name=game2_name15]:checked').val();	
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').css('z-index','-10');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').css('z-index','-10');
			}			
			if(name15==arr_pic_result[15]){
				$('.game2_img15').css('z-index','-10');
			}
		if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		
		}
	});
	
	
	});						
							
}else{
$(function(){
$('.clock').css('display','none');
$('.start').click(function(){
$('.gt').css('display','none');
$('.clock').css('display','block');	
$('.game1').css('display','block');
timer.init(0,0,'container');
});
$('.cmdgame').click(function(){	
$('table').show();
	$(this).hide();
	stoptime_game();
	var total=0;
	for(var i=0;i<num_first;i++){
		var str=$('.name'+i).val();		
		if(str!=''){
		var dem=0;
		for(var j=0;j<i;j++){
			str.replace(" ","");
			str.replace(".","");
			var sr=$('.name'+j).val();	
			sr.replace(" ","");
			sr.replace(".","");
			if(str.toUpperCase()==sr.toUpperCase()){
				dem++;
			}
		}
		if(dem==0){
			str.replace(" ","");
			first_name.replace(" ","");
			var index=(first_name.toUpperCase()).indexOf(str.toUpperCase());			
				if (parseInt(index)>=0){						
					total+=1;					
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:10px;" />');
				}else{
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:10px;" />');
				}
			
			}	
		}	
	}
	for(var i=num_first;i<(num_first+num_last);i++){
		var str=$('.name'+i).val();		
		if(str!=''){
		var dem=0;
		for(var j=num_first;j<i;j++){
			str.replace(" ","");
			var sr=$('.name'+j).val();	
			sr.replace(" ","");
			if(str.toUpperCase()==sr.toUpperCase()){
				dem++;
			}
		}
		if(dem==0){
			str.replace(" ","");
			last_name.replace(" ","");
			var index=(last_name.toUpperCase()).indexOf(str.toUpperCase());			
				if (parseInt(index)>=0){						
					total+=1;					
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:10px;" />');
				}else{
					$('.gamee'+i).html("");
					$('.gamee'+i).append('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:10px;" />');
				}
			
			}
		}	
	}
	$('.game_result').html("");
if(total==(num_first+num_last)){
	$('.game_result').append('<span style="color:red; font-weight:bold">'+true_game+'</span>');	
}	
else{
	$('.game_result').append('<span style="color:red; font-weight:bold">'+false_game+'</span><span style="margin-left:30px"><input type="button" class="replay" value="Chơi lại" /></span>');	
}
	$('.replay').click(function(){
		$('.game_result').html("");
		$('.cmdgame').show();
		$('#display').val('00:00');
		 msec=0;
		sec=0;
		min=0;
		start_games();
		for(var i=0;i<arr_fl.length;i++){
			$('.name'+i).val("");
			$('.gamee'+i).html("");
		}
		
	});
	});
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
	//var st=$('#result_end').html();
	var str1='<p> Result:  '+total+'/'+num[t] +' correct</p>';
	$('.test_s'+t).html("");
	$('.test_s'+t).append('<div style="color:red; font-weight:bold; font-size:15px; padding-left:100px;"> Result:  '+total+'/'+num[t] +' correct</div>');
	//$('.s'+t).html("");	
	//$('.s'+t).append('<div class="ss ss'+t+'"><p>'+str1+'<p><input type="button" value="Close" id="close'+t+'" /></div>');	
	//$('#close'+t).click(function(){							  
							 //  	$('.ss'+t).css('display','none');
							  // });
	});		
	
for(var i=1;i<=16;i++){
	$('.game2_img'+i+'> p').css('visibility','hidden');
	$('.game2_img'+i+'> input').css('visibility','hidden');
	$('.game2_img'+i+'> span').css('visibility','hidden');
}
	$('.game2_img1 > p').css('visibility','visible');
	$('.game2_img1 > input').css('visibility','visible');
	$('.game2_img1 > span').css('visibility','visible');
	$('.game2_img2 > p').css('visibility','visible');
	$('.game2_img2 > input').css('visibility','visible');
	$('.game2_img2 > span').css('visibility','visible');
	$('.game2_img5 > p').css('visibility','visible');
	$('.game2_img5 > input').css('visibility','visible');
	$('.game2_img5 > span').css('visibility','visible');
	$('.game2_img6 > p').css('visibility','visible');
	$('.game2_img6 > input').css('visibility','visible');
	$('.game2_img6 > span').css('visibility','visible');
	
	arr_pic_result[1]=arr_pic_result[1].replace(" ","");
	arr_pic_result[2]=arr_pic_result[2].replace(" ","");
	arr_pic_result[3]=arr_pic_result[3].replace(" ","");
	arr_pic_result[4]=arr_pic_result[4].replace(" ","");
	arr_pic_result[9]=arr_pic_result[9].replace(" ","");
	arr_pic_result[10]=arr_pic_result[10].replace(" ","");
	arr_pic_result[11]=arr_pic_result[11].replace(" ","");
	arr_pic_result[12]=arr_pic_result[12].replace(" ","");
	arr_pic_result[1]=arr_pic_result[1].replace(".","");
	arr_pic_result[2]=arr_pic_result[2].replace(".","");
	arr_pic_result[3]=arr_pic_result[3].replace(".","");
	arr_pic_result[4]=arr_pic_result[4].replace(".","");
	arr_pic_result[9]=arr_pic_result[9].replace(".","");
	arr_pic_result[10]=arr_pic_result[10].replace(".","");
	arr_pic_result[11]=arr_pic_result[11].replace(".","");
	arr_pic_result[12]=arr_pic_result[12].replace(".","");
$('.game2_name1').keyup(function(){

			var name1=$(this).val();
		
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				//$('.game2_img1').css('z-index','-10');
				$('.game2_img1').animate({top:"320px"},1000);				
			}
			var name2=$('.game2_name2').val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				$('.game2_img2').css('z-index','-10');
			}
			var name5=$('input:radio[name=game2_name5]:checked').val();
			if(name5==arr_pic_result[5]){
				$('.game2_img5').css('z-index','-10');
			}
			var name6=$('input:radio[name=game2_name6]:checked').val();
			if(name6==arr_pic_result[6]){
				$('.game2_img6').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){
			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');		
		}		
				
		});
$('.game2_name2').keyup(function(){
			var name2=$(this).val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				//$('.game2_img2').css('z-index','-10');
				$('.game2_img2').animate({top:"320px"},1000);				
			}
			var name1=$('.game2_name1').val();
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				$('.game2_img1').css('z-index','-10');
			}
			var name5=$('input:radio[name=game2_name5]:checked').val();
			if(name5==arr_pic_result[5]){
				$('.game2_img5').css('z-index','-10');
			}
			var name6=$('input:radio[name=game2_name6]:checked').val();
			if(name6==arr_pic_result[6]){
				$('.game2_img6').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){
			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');		
		}		
		
		});
$('.game2_name5').click(function(){
			var name5=$(this).val();
			if(name5==arr_pic_result[5]){
				//$('.game2_img5').css('z-index','-10');
				$('.game2_img5').animate({top:"170px"},1000);
				
			}
			var name1=$('.game2_name1').val();
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				$('.game2_img1').css('z-index','-10');
			}
			var name2=$('.game2_name2').val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				$('.game2_img2').css('z-index','-10');
			}
			var name6=$('input:radio[name=game2_name6]:checked').val();
			if(name6==arr_pic_result[6]){
				$('.game2_img6').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');		
		}				
				
		
		});
$('.game2_name6').click(function(){
			var name6=$(this).val();
			if(name6==arr_pic_result[6]){
				//$('.game2_img6').css('z-index','-10');
				$('.game2_img6').animate({top:"170px"},1000);				
			}
			var name1=$('.game2_name1').val();
			name1=name1.replace(" " ,"");
			name1=name1.replace("." ,"");
			if(name1.toUpperCase()==arr_pic_result[1].toUpperCase()){
				$('.game2_img1').css('z-index','-10');
			}
			var name5=$('input:radio[name=game2_name5]:checked').val();
			if(name5==arr_pic_result[5]){
				$('.game2_img5').css('z-index','-10');
			}
			var name2=$('.game2_name2').val();
			name2=name2.replace(" " ,"");
			name2=name2.replace("." ,"");
			if(name2.toUpperCase()==arr_pic_result[2].toUpperCase()){
				$('.game2_img2').css('z-index','-10');
			}
		if(name1.toUpperCase()==arr_pic_result[1].toUpperCase() && name2.toUpperCase()==arr_pic_result[2].toUpperCase() && name5==arr_pic_result[5] && name6==arr_pic_result[6]){
			
			$('.game2_img3 > p').css('visibility','visible');		
			$('.game2_img3 > input').css('visibility','visible');
			$('.game2_img3 > span').css('visibility','visible');
			$('.game2_img4 > p').css('visibility','visible');
			$('.game2_img4 > input').css('visibility','visible');
			$('.game2_img4 > span').css('visibility','visible');
			$('.game2_img7 > p').css('visibility','visible');
			$('.game2_img7 > input').css('visibility','visible');
			$('.game2_img7 > span').css('visibility','visible');
			$('.game2_img8 > p').css('visibility','visible');
			$('.game2_img8 > input').css('visibility','visible');
			$('.game2_img8 > span').css('visibility','visible');						
		}		
		
		});	
	$('.game2_name3').keyup(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');
			var name3=$(this).val();
			name3=name3.replace(" " ,"");
			name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').animate({top:"320px"},1000);
			}	
			var name4=$('.game2_name4').val();
			var name7=$('input:radio[name=game2_name7]:checked').val();
			name4=name4.replace(" " ,"");
				name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').css('z-index','-10');
			}
			if(name7==arr_pic_result[7]){
				$('.game2_img7').css('z-index','-10');
			}
			var name8=$('input:radio[name=game2_name8]:checked').val();
			if(name8==arr_pic_result[8]){
				$('.game2_img8').css('z-index','-10');
			}
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){
			
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name4').keyup(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');
			var name4=$(this).val();
			name4=name4.replace(" " ,"");
			name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').animate({top:"320px"},1000);
			}	
			var name3=$('.game2_name3').val();
			
			var name7=$('input:radio[name=game2_name7]:checked').val();
			var name8=$('input:radio[name=game2_name8]:checked').val();
			name3=name3.replace(" " ,"");
			name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').css('z-index','-10');
			}
			if(name7==arr_pic_result[7]){
				$('.game2_img7').css('z-index','-10');
			}			
			if(name8==arr_pic_result[8]){
				$('.game2_img8').css('z-index','-10');
			}
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){
			
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name7').click(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');
			var name7=$(this).val();
			if(name7==arr_pic_result[7]){
				$('.game2_img7').animate({top:"170px"},1000);
			}	
			var name4=$('.game2_name4').val();
			var name3=$('.game2_name3').val();
			name3=name3.replace(" " ,"");
			name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').css('z-index','-10');
			}
			name4=name4.replace(" " ,"");
			name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').css('z-index','-10');
			}
			var name8=$('input:radio[name=game2_name8]:checked').val();
			if(name8==arr_pic_result[8]){
				$('.game2_img8').css('z-index','-10');
			}			
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){			
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});
$('.game2_name8').click(function(){
			$('.game2_img1').css('z-index','-10');	
			$('.game2_img2').css('z-index','-10');
			$('.game2_img5').css('z-index','-10');
			$('.game2_img6').css('z-index','-10');								 
			var name8=$(this).val();
			if(name8==arr_pic_result[8]){
				$('.game2_img8').animate({top:"170px"},1000);
			}	
			var name4=$('.game2_name4').val();
			var name3=$('.game2_name3').val();
			var name7=$('input:radio[name=game2_name7]:checked').val();
			name3=name3.replace(" " ,"");
				name3=name3.replace("." ,"");
			if(name3.toUpperCase()==arr_pic_result[3].toUpperCase()){
				$('.game2_img3').css('z-index','-10');
			}
			if(name7==arr_pic_result[7]){
				$('.game2_img7').css('z-index','-10');
			}			
			name4=name4.replace(" " ,"");
			name4=name4.replace("." ,"");
			if(name4.toUpperCase()==arr_pic_result[4].toUpperCase()){
				$('.game2_img4').css('z-index','-10');
			}
		if(name3.toUpperCase()==arr_pic_result[3].toUpperCase() && name4.toUpperCase()==arr_pic_result[4].toUpperCase() && name7==arr_pic_result[7] && name8==arr_pic_result[8]){		
			$('.game2_img9 > p').css('visibility','visible');	
			$('.game2_img9 > input').css('visibility','visible');
			$('.game2_img9 > span').css('visibility','visible');
			$('.game2_img10 > p').css('visibility','visible');
			$('.game2_img10 > input').css('visibility','visible');
			$('.game2_img10 > span').css('visibility','visible');
			$('.game2_img13 > p').css('visibility','visible');
			$('.game2_img13 > input').css('visibility','visible');
			$('.game2_img13 > span').css('visibility','visible');
			$('.game2_img14 > p').css('visibility','visible');
			$('.game2_img14 > input').css('visibility','visible');
			$('.game2_img14 > span').css('visibility','visible');							
		}		
	});

	$('.game2_name9').keyup(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');
			var name9=$(this).val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').animate({top:"300px",height:'0px',background:'#ffffff'},1000);
				
				$('.game2_img9 > p').css('visibility','hidden');	
				$('.game2_img9 > input').css('visibility','hidden');
				$('.game2_img9 > span').css('visibility','hidden');
			}	
			var name10=$('.game2_name10').val();
			var name13=$('input:radio[name=game2_name13]:checked').val();
			var name14=$('input:radio[name=game2_name14]:checked').val();
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').css('z-index','-10');
			}
			if(name13==arr_pic_result[13]){
				$('.game2_img13').css('z-index','-10');
			}			
			if(name14==arr_pic_result[14]){
				$('.game2_img14').css('z-index','-10');
			}
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){		
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name10').keyup(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');						  
			var name10=$(this).val();
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').animate({top:"300px",height:'0px',background:'#ffffff'},1000);
				
				$('.game2_img10 > p').css('visibility','hidden');	
				$('.game2_img10 > input').css('visibility','hidden');
				$('.game2_img10 > span').css('visibility','hidden');
			}	
			var name9=$('.game2_name9').val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').css('z-index','-10');
			}
			var name13=$('input:radio[name=game2_name13]:checked').val();
			var name14=$('input:radio[name=game2_name14]:checked').val();			
			if(name13==arr_pic_result[13]){
				$('.game2_img13').css('z-index','-10');
			}			
			if(name14==arr_pic_result[14]){
				$('.game2_img14').css('z-index','-10');
			}
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){
			
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');							
		}		
	});
	$('.game2_name13').click(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');
			var name13=$(this).val();
			if(name13==arr_pic_result[13]){
			$('.game2_img13').animate({top:"150px",height:'0px',background:'#ffffff'},1000);		
			$('.game2_img13 > p').css('visibility','hidden');	
				$('.game2_img13 > input').css('visibility','hidden');
				$('.game2_img13 > span').css('visibility','hidden');
			}	
			var name9=$('.game2_name9').val();
			var name10=$('.game2_name10').val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').css('z-index','-10');
			}
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').css('z-index','-10');
			}
			var name14=$('input:radio[name=game2_name14]:checked').val();					
			if(name14==arr_pic_result[14]){
				$('.game2_img14').css('z-index','-10');
			}
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){			
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');						
		}		
	});
$('.game2_name14').click(function(){
			$('.game2_img3').css('z-index','-10');	
			$('.game2_img4').css('z-index','-10');
			$('.game2_img7').css('z-index','-10');
			$('.game2_img8').css('z-index','-10');								  
			var name14=$(this).val();
			if(name14==arr_pic_result[14]){
				$('.game2_img14').animate({top:"150px",height:'0px',background:'#ffffff'},1000);			
				$('.game2_img14 > p').css('visibility','hidden');	
				$('.game2_img14 > input').css('visibility','hidden');
				$('.game2_img14 > span').css('visibility','hidden');
			}	
			var name9=$('.game2_name9').val();
			var name10=$('.game2_name10').val();
			var name13=$('input:radio[name=game2_name13]:checked').val();
			name9=name9.replace(" " ,"");
			name9=name9.replace("." ,"");
			if(name9.toUpperCase()==arr_pic_result[9].toUpperCase()){
				$('.game2_img9').css('z-index','-10');
			}
			name10=name10.replace(" " ,"");
			name10=name10.replace("." ,"");
			if(name10.toUpperCase()==arr_pic_result[10].toUpperCase()){
				$('.game2_img10').css('z-index','-10');
			}
			if(name13==arr_pic_result[13]){
				$('.game2_img13').css('z-index','-10');
			}		
			
		if(name9.toUpperCase()==arr_pic_result[9].toUpperCase() && name10.toUpperCase()==arr_pic_result[10].toUpperCase() && name13==arr_pic_result[13] && name14==arr_pic_result[14]){			
			$('.game2_img11 > p').css('visibility','visible');	
			$('.game2_img11 > input').css('visibility','visible');
			$('.game2_img11 > span').css('visibility','visible');
			$('.game2_img12 > p').css('visibility','visible');
			$('.game2_img12 > input').css('visibility','visible');
			$('.game2_img12 > span').css('visibility','visible');
			$('.game2_img15 > p').css('visibility','visible');
			$('.game2_img15 > input').css('visibility','visible');
			$('.game2_img15 > span').css('visibility','visible');
			$('.game2_img16 > p').css('visibility','visible');
			$('.game2_img16 > input').css('visibility','visible');
			$('.game2_img16 > span').css('visibility','visible');						
		}		
	});
	$('.game2_name11').keyup(function(){
			$('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');						  
			var name11=$(this).val();				
			var name12=$('.game2_name12').val();
			var name15=$('input:radio[name=game2_name15]:checked').val();
			var name16=$('input:radio[name=game2_name16]:checked').val();	
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').animate({top:"300px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img11 > p').css('visibility','hidden');	
				$('.game2_img11 > input').css('visibility','hidden');
				$('.game2_img11 > span').css('visibility','hidden');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').css('z-index','-10');
			}
			if(name15==arr_pic_result[15]){
				$('.game2_img15').css('z-index','-10');
			}			
			if(name16==arr_pic_result[16]){
				$('.game2_img16').css('z-index','-10');
			}
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		}
	});
	$('.game2_name12').keyup(function(){
			 $('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');	
			var name12=$(this).val();				
			var name11=$('.game2_name11').val();
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').css('z-index','-10');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').animate({top:"300px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img12 > p').css('visibility','hidden');	
				$('.game2_img12 > input').css('visibility','hidden');
				$('.game2_img12 > span').css('visibility','hidden');
			}
			var name15=$('input:radio[name=game2_name15]:checked').val();
			var name16=$('input:radio[name=game2_name16]:checked').val();				
			if(name15==arr_pic_result[15]){
				$('.game2_img15').css('z-index','-10');
			}			
			if(name16==arr_pic_result[16]){
				$('.game2_img16').css('z-index','-10');
			}
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		}
	});
	$('.game2_name15').click(function(){
		$('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');								  
			var name15=$(this).val();
			if(name15==arr_pic_result[15]){
				$('.game2_img15').animate({top:"150px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img15 > p').css('visibility','hidden');	
				$('.game2_img15 > input').css('visibility','hidden');
				$('.game2_img15 > span').css('visibility','hidden');
			}	
			var name11=$('.game2_name11').val();
			var name12=$('.game2_name12').val();			
			var name16=$('input:radio[name=game2_name16]:checked').val();	
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').css('z-index','-10');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').css('z-index','-10');
			}			
			if(name16==arr_pic_result[16]){
				$('.game2_img16').css('z-index','-10');				
			}
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		}
	});
	$('.game2_name16').click(function(){
		$('.game2_img9').css('z-index','-10');	
			$('.game2_img9').css('height','150px');	
			$('.game2_img10').css('z-index','-10');
			$('.game2_img14').css('z-index','-10');
			$('.game2_img13').css('z-index','-10');								  
			var name16=$(this).val();
			if(name16==arr_pic_result[16]){
				
				$('.game2_img16').animate({top:"150px",height:'0px',background:'#ffffff'},1000);				
				$('.game2_img16 > p').css('visibility','hidden');	
				$('.game2_img16 > input').css('visibility','hidden');
				$('.game2_img16 > span').css('visibility','hidden');
			}	
			var name11=$('.game2_name11').val();
			var name12=$('.game2_name12').val();			
			var name15=$('input:radio[name=game2_name15]:checked').val();	
			name11=name11.replace(" " ,"");
			name11=name11.replace("." ,"");
			if(name11.toUpperCase()==arr_pic_result[11].toUpperCase()){
				$('.game2_img11').css('z-index','-10');
			}
			name12=name12.replace(" " ,"");
			name12=name12.replace("." ,"");
			if(name12.toUpperCase()==arr_pic_result[12].toUpperCase()){
				$('.game2_img12').css('z-index','-10');
			}			
			if(name15==arr_pic_result[15]){
				$('.game2_img15').css('z-index','-10');
			}
		if(name11.toUpperCase()==arr_pic_result[11].toUpperCase() && name12.toUpperCase()==arr_pic_result[12].toUpperCase() && name15==arr_pic_result[15] && name16==arr_pic_result[16]){		
			$('.dis_pic').css("display","block");
		
		}
	});
	
	
	});
}