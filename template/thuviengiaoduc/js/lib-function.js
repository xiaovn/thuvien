function createGame(){
	var ele = {
		init:function(){
			var _self = this;
			var index = 0;
			_self.run(index);
			},
		run: function(index){
			var _self = this;
		}
	}
	ele.init();
    //return(ele);
	}

function fillId(id){
	var resultId = 'no_id';
	if(id!=null){
		resultId = id.replace(/\s+/g, '');
	    resultId = resultId.replace('.', '');
		resultId = resultId.toLowerCase();
		}
	return resultId;
	}
	
function createSound(parent, audio, name, className){
		name = name.replace(/\s+/g, '');
		var sound = document.createElement('div');
		sound.setAttribute('id',name);
		sound.setAttribute('class',className);
		var parent = document.getElementById(parent);
		parent.appendChild(sound);
		  var jPlayer = $(sound).jPlayer({ 
			ready: function() { 
				$(this).jPlayer("setMedia",{
					mp3: audio+'.mp3', 
					oga: audio+'.ogg'
					}); 
			}, 
				swfPath: "js", 
			supplied: "mp3, oga",
			wmode: "window" 
		}); 
		return jPlayer;
	}
//createImg
function createEleHtml(type,id,className,source,parent,width,height,top,left,display){
			fillId(id);
			var ele = document.createElement(type);
			var parent = document.getElementById(parent);
			if(width!=null&&height!=null){
				ele.style.width = width+'px';
				ele.style.height = height+'px';
			}
			ele.style.position = 'absolute';
			ele.style.top = top+'px';
			ele.style.left = left+'px';
			ele.style.display = display;
			ele.setAttribute('id',id);
			ele.setAttribute('class',className);
			ele.setAttribute('src',source);
			parent.appendChild(ele);
		};

//ham set CSS
function setCss(ele, property,value){
    var array = ['-ms-','-moz-','-o-','-webkit-',''];
    for(var i=0,l=array.length; i<l; i++){
        $(ele).css(array[i]+property, value);
    }
}

	
function sendDataToServer(scoreValue){
	var timeValue = $('#clock').text();
	var str = 'score='+score+';time='+timeValue;
	$.ajax({
		  type: "POST",
		  url: "sendscore.php.htm"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/olympic/home/lib/connect/sendscore.php*/,
		  data: {
				'score': scoreValue,
				'time': timeValue
    		},
		  success: function(msg){
			
		  }
      });
	}

//sum value and push to array
function total(number_element){
	var total_value = 0;
	if(number_element.length>0){
		for(var i=0;i<number_element.length;i++){
			if(parseInt(number_element[i])){
				total_value = total_value + number_element[i];
				}
		}
	}
	/*number_element.push(total_value);*/
	return total_value
}
//sum time and push to array
function totaltime(number_element){
	var total_minus = 0;
	var total_second = 0;
	var array_minus = [];
	var array_second = [];
	var value_time = 0;
	for(var i=0;i<number_element.length;i++){
		if(parseInt(number_element[i])){
			array = number_element[i].split(':');
			array_minus[i] = array[0];
			array_second[i] = array[1];
			}
	}
	
	for(var i=0;i<array_second.length;i++){
			if(parseInt(array_second[i])){
				total_second = total_second + parseInt(array_second[i]);
			}
		}
		
	for(var i=0;i<array_minus.length;i++){
			if(parseInt(array_minus[i])){
				total_minus = total_minus + parseInt(array_minus[i]);
			}
		}
		
	var value_second = total_second%60;
	var plus_minus = total_second/60;
	
	value_time = parseInt(total_minus+plus_minus)+':'+value_second;
	/*
	console.log('----array minus------------: '+array_minus);
	console.log('----value second----------: '+value_second);
	console.log('---total_minus----------: '+total_minus);
	console.log('----second----------: '+total_second);
	console.log('----plus minus----------: '+plus_minus);
	console.log('----time----------: '+value_time);
	*/
	//number_element.push(value_time);
	return value_time;
}
/*
function create_star(array_star){
for(var i=0; i<star_number_1_1.length; i++){
		var html_start;
		for(var j=0;j<parseInt(star_number_1_1);j++){
				html_start = html_start+'<img class="img_star" style="position:relative; margin-right:-5px;" src="sao_nhap_nhay.gif"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/olympic/home/lib/imgs/sao_nhap_nhay.gif*/ width="20"/>'
			}
		star_1_1[i] = html_start;
	}
*/

function create_star(number_star,check_total){
	if(number_star!=0&&check_total!='Total'){
		var html_star='';
		for(var j=0;j<parseInt(number_star);j++){
				html_star = html_star+'<img class="img_star" src="sao_nhap_nhay.gif"/*tpa=http://www.thuviengiaoduc.org/file/learn/child/olympic/home/lib/imgs/sao_nhap_nhay.gif*//>'
			}
			return html_star;
	}else if(number_star==0&&check_total!='Total'){
		return '&nbsp;';
	}else{
		return number_star;
		}
}
function zoom(ele){
	$(function($) {
		$(ele).each(function() {
			var oheight = $(this).children(0).height();
			var owidth = $(this).children(0).width();
			var nheight = (oheight + (oheight * 0.25));
			var nwidth = (owidth + (owidth * 0.25));
			var top = ((oheight - nheight) / 2);
			var left = ((owidth - nwidth) / 2);
			$(this).mouseenter(function() {
				$(this).css('z-index', '10').children(0).stop().animate({
						'height' : nheight+'px',
						'width' : nwidth+'px',
						'left' : left+'px',
						'top' : top+'px'
						},210);
			});
			$(this).mouseleave(function() {
				$(this).children(0).stop().animate({
						'left' : '0px',
						'top' : '0px',
						'height' : oheight+'px',
						'width' : owidth+'px'}, 150, function() {
							$(this).css('height', oheight+'px').parent().css('z-index', '1');
						});                     
			});
		}); 
	});
	}
		
/*--------------------jQuery UI-------------------------------------------------------------------------*/
$.fn.exBounce = function(time,timeRun){
    var self = this;
    (function runEffect(){
        self.effect("bounce", { times:time }, timeRun, runEffect);
    })();
   return this;
};

$.fn.exPulsate = function(time,timeRun){
    var self = this;
    (function runEffect(){
        self.effect("pulsate", { times:time }, timeRun, runEffect);
    })();
   return this;
};

$.fn.exShake = function(time,timeRun){
    var self = this;
    (function runEffect(){
        self.effect("shake", {distance:10, times:time }, timeRun, runEffect);
    })();
   return this;
};

$.fn.exSize = function(time,timeRun){
    var self = this;
    (function runEffect(){
        self.effect("size", { times:time }, timeRun, runEffect);
    })();
   return this;
};

$.fn.explode = function(time,timeRun){
    var self = this;
    (function runEffect(){
        self.effect("explode", { times:time }, timeRun, runEffect);
    })();
   return this;
};