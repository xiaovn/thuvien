    $(document).ready(function(e){
        var count = 0;	
        var userAgent = navigator.userAgent;
        var ie = (userAgent.indexOf('MSIE') != -1);
        var avaiable = true;
        var sound_1 = playSound('sound','http://goldenkids-data.thuviengiaoduc.org/file/learn/child/what-next/bai17/media/audio1');
        var sound_2 = playSound('sound','http://goldenkids-data.thuviengiaoduc.org/file/learn/child/what-next/bai17/media/audio2');
        var sound_3 = playSound('sound','http://goldenkids-data.thuviengiaoduc.org/file/learn/child/what-next/bai17/media/audio3');
        var sound_4 = playSound('sound','http://goldenkids-data.thuviengiaoduc.org/file/learn/child/what-next/bai17/media/audio4');
		var sound_5 = playSound('sound','http://goldenkids-data.thuviengiaoduc.org/file/learn/child/what-next/bai17/media/audio5');
        $('#anh-1').bind('click',function(){
            if(avaiable){
                avaiable = false;
                sound_1.jPlayer("play",0);
                var width = $('#be-frame-sub-1').width();
                var moveLeft = 360 - width;
                var backLeft  = moveLeft/2;
				$('#vietnamese_1').children('.vnm_btn').css('display','table-cell');
                move('#be-frame-sub-1',1200,'linear','18px',moveLeft,1,'visible','');
                setTimeout(function(){
                    move('#be-frame-sub-1',1500,'linear','18px',backLeft,1,'visible','');
                },1200);
				$(sound_1).bind($.jPlayer.event.ended,function(){
					avaiable = true;
					if(count!=4){
						count=1;
					}
				});
            }
        });
        $('#anh-2').bind('click',function(){
            if(avaiable && count>=1){
                avaiable = false;
                sound_2.jPlayer("play",0);
                var width = $('#be-frame-sub-2').width();
                var moveLeft = (360 - width)+380; 
                var backLeft  = ((360 - width)/2)+380;
				$('#vietnamese_2').children('.vnm_btn').css('display','table-cell');
                move('#be-frame-sub-2',1200,'linear','18px',moveLeft,1,'visible','');
                setTimeout(function(){
                    move('#be-frame-sub-2',1800,'linear','18px',backLeft,1,'visible','');
                },1200);
				$(sound_2).bind($.jPlayer.event.ended,function(){
					avaiable = true;
					if(count!=4){
						count = 2;
					}
				});
            }
        });
		
        $('#anh-3').bind('click',function(){
            if(avaiable && count>=2){
                avaiable = false;
                sound_3.jPlayer("play",0);
                var width = $('#be-frame-sub-3').width();
                var moveLeft = 360 - width; 
                var backLeft  = moveLeft/2;
				$('#vietnamese_3').children('.vnm_btn').css('display','table-cell');
				 move('#be-frame-sub-3',1500,'linear','430px',moveLeft,1,'visible','');
				 setTimeout(function(){
					 move('#be-frame-sub-3',1800,'linear','430px',backLeft,1,'visible','');
				},1500);				
				$(sound_3).bind($.jPlayer.event.ended,function(){
					avaiable = true;
					if(count!=4){
						count=3;
					}
				});
            }
        });
	
        $('#be-frame-question').bind('click',function(){
            if(avaiable && count>=3){
                avaiable = false;
                count=4;
                sound_4.jPlayer("play",0);
                nhapnhay('#be-frame-question-char-1');
                setTimeout(function(){
                    nhapnhay('#be-frame-question-char-2');
                    setTimeout(function(){
                        nhapnhay('#be-frame-question-char-3');
                        setTimeout(function(){
                            nhapnhay('#be-frame-question-char-4');                            
                        },400);
                    },400);
                },400);
			$(sound_4).bind($.jPlayer.event.ended,function(){
				avaiable = true;
			});
            }
        });
	
	$('#be-frame-result').bind('click',function(){
		if(avaiable && count>=3){
		avaiable = false;
		count=4;
		sound_5.jPlayer("play",0);
        var width = $('#be-frame-sub-4').width();
        var moveLeft = (360 - width)+380;
        var backLeft  = ((360 - width)/2)+380;
		move('#be-frame-sub-4',1500,'linear','430px',moveLeft,1,'visible','');
		$('#vietnamese_4').children('.vnm_btn').css('display','table-cell');
		setTimeout(function(){
			 move('#be-frame-sub-4',1800,'linear','430px',backLeft,1,'visible','');
			setTimeout(function(){
				avaiable = true;
			},1200);
		},1800);
		}
	});
	
	$('.vnm_btn').bind('click',function(){
		var _sub = $(this).attr('sub');
		$('#'+_sub).css('display', 'table-cell');
	});	
	
    });
    function nhapnhay(ele){
        $(ele).css('visibility','visible');
        setTimeout(function(){
            $(ele).css('visibility','hidden');
            setTimeout(function(){
                $(ele).css('visibility','visible');
            },200);
        },200);
    }

    function playSound(parent, audio){
        var sound = document.createElement('div');
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
    function move(ele,time,timeFun, valueTop, valueLeft, valueOpacity,valueVisibility, callback){
        $(ele).css('visibility',valueVisibility);
        $(ele).animate({
            top: valueTop,
            left: valueLeft,
            opacity: valueOpacity
        },time,timeFun,function(){
            callback;
        });
    }
