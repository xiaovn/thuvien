//public
(function($){
    $.fn.extend({
        runmoabobj: function(options,time){
                var $this = this;
                options["moveback"] = (options["moveback"] == true)?false:true;            
                if(options["moveback"] == true){
                    $this.animate({left: options["left"],top: options["top"]},time,function(){
                        $this.runmoabobj(options,time)
                    })
                }else{
                    $this.animate({left: options["leftcb"],top: options["topcb"]},time,function(){
                        $this.runmoabobj(options,time)
                    })
                }    
            },
        moagobj: function(options,time,callback){
            var $this = $(this);
            var defaults = {
                left: $this.position().left,
                top:  $this.position().top,
                leftcb: $this.position().left,
                topcb:  $this.position().top,
            }
            var options = {
                left: options["left"],
                top:  options["top"],
                leftcb: options["leftcb"],
                topcb:  options["topcb"],
                moveback: false
            }
            options = $.extend({}, defaults, options);
            $this.runmoabobj(options,time)            
        }
    })
})(jQuery)
$.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });

    return this;
};
//main
function $fngks(){
    soundManager.stopAll();
    soundManager.play('_Agks');
	$('#popup_non_goldenkid').fadeIn(300,function(){
	 	$('#thong_bao_png').animate({
		 	top: '10px' 
		},1000,'linear');
	});
}
function $fncheckComplete(){    
    if($("#mkl").data("info").correct >= $('.mklcan').length){        
        soundManager.stopAll();
        soundManager.play('_Ales'+$("#mkl").data("info").inL);
        if($("#mkl").data("info").inL < $("#mkl").data("info").aLes.length-1){            
            $('#mklnext,#inscloud,#inssta').fadeIn(10);
        }else{
            $fnreview();   
        }
    }
}
function $fnreview(){
   $(document).live('_Ales'+$("#mkl").data("info").inL+'_finish',function(){ 
      $('#mklrs').fadeIn(300);
   })
}
function $fnsetIndex(){
    try {
		listMiss = [];
		$('.mklcan').each(function(index, value) {
			if(!$(this).attr('dropped')){
			     listMiss.push(index);
			}			
		});
	} catch (e) {
		console.log(e);
	} finally {
	   $("#mkl").data("info").index = listMiss[0];
       $("#mkl").data("info").hintable = true;
	}
}

function $next(){
    $("#mkl").data("info").inL++;
    if($("#mkl").data("info").inL >= 2 && !document.getElementById('goldenkids_member')){
        $fngks(); 
     }else{
        $init()
     }
}
function $init(){
      soundManager.stopAll();
      $("#mkl").data("info").nextable = true;
      $("#mkl").data("info").hintable = true;
      $('.mkldrag').remove();
      $('#mklafa').empty().css({left: -680});
      $("#mkl").data("info").index = 0; 
      $("#mkl").data("info").correct = 0;
      $key = $("#mkl").data("info").aLes[$("#mkl").data("info").inL].split('@')      
      var $stt = 0;
      $.each($key, function(index,value){        
        $stt = index;
        $stt++;
        $('#mklafa').append('<div class="mklcan" id="drop'+index+'" drag="drag'+index+'" >'+$stt+'</div>');
        $('#mkladrag').append('<div class="ab mkldrag" id="drag'+index+'" drop="drop'+index+'"><div class="ab mklmkbl"></div><div class="mklw">'+value+'</div></div>');
      })
      $left = 30;
      $('#mkladrag').randomize();
      $('.mkldrag').each(function(){
            var $this = $(this),
                $pw = 91,
                $ph = $this.height(),
                $chil = $this.find('.mklw'),
                $cw = $chil.width();
                $cl = (($pw-$cw)/2)-10;
                $chil.css({"margin-left": $cl});                
                var dragparams = {
                    start: {x: 318,y: 180,angle: -100},  
                    end: {
                        x: $left += $cw,
                        y: Math.floor(Math.random() * (300 - 30 + 1)) + 30,
                        angle: 0,
                        length: 0
                    }
                };
                $this.animate({path : new $.path.bezier(dragparams)},1000, function(){
                    $this.draggable({
                        revert: "invalid",
                        stop: function(event){                            
                    		if(!$this.attr('dropped')){
                    		    soundManager.play('_Awrong');
                    		}
                    	}
                    });
                })
       })        
       $('.mklcan').each(function(index,value){
            var $this = $(this);
            $this.droppable({
              accept: $('#'+$this.attr('drag')),
              tolerance: 'touch', 
              drop: function(event,ui){
                $idacor = Math.floor(Math.random() * (($("#mkl").data("info").json["audioCorrect"].split(',').length-1) - 0 + 1)) + 0;
                $this.droppable("destroy");
                ui.draggable.attr('dropped',true);
                $this.attr('dropped',true);
                $fnsetIndex();   
                $("#mkl").data("info").correct++;      
                if(navigator.userAgent.match(/(iPhone|iPod|iPad)/)){
                    if($("#mkl").data("info").correct < $('.mklcan').length){
                      soundManager.play('_Acorrect'+$idacor);                        
                    }   
                }else{soundManager.play('_Acorrect'+$idacor);}
                                      
                var cntrLeft = $this.position().left+15;
                var cntrTop = 388;                                       
                ui.draggable.animate({
                    left: cntrLeft + "px",
                    top: cntrTop + "px"
                },{duration: 500, start:function(){
                    $('#'+$this.attr('drag')).draggable("disable");}, 
                    complete:function(){
                        $('#'+$this.attr('drag')).draggable("enable");
                        $fncheckComplete();
                    }});
              }
            });
       })            
      $('#mklafa').animate({left: 0},{duration: 1000,easing:"easeOutBounce", complete: function(){}})
      $('.mklmkbl').sprite({fps: 4, no_of_frames: 3});   
}  
var $idacor;
$(window).load(function(){
//public
     _fnmsc("/file/learn/child/dungchung/lib_new_en/goldenkids","_Agks");
    $('.mklmkbl').draggable();    
//ins
    $('#mklStart, #mklnext').hover(function(){
      if(!$('#mklStart').data("active")){
          $('#mklStart').data("active",true);
          if($.browser.webkit && !window.chrome){}else{soundManager.play('_Astarfly');}                    
          $('#insgame').stop().animate({top: 0,opacity: 0},200,function(){
             $(this).css({top: 20, left: 20}).animate({left: 0,opacity: 1},200,function(){
                $('#mklStart').data("active",false);
             });
          })
          $('#insstart').animate({top: 65,opacity: 0},200,function(){
             $(this).css({top: 57, left: -10}).animate({left: 0,opacity: 1},200);
          })
          $('.insst').each(function(){
              $(this).css('display','block').stop().css({width:10,height:10,top:0,left:0,opacity: 1}).animate({
                left: parseInt($(this).attr("_l")),
                top: parseInt($(this).attr("_t")),
                width: parseInt($(this).attr("_w")),
                height: parseInt($(this).attr("_h")),
                rotate: "+=20",
                opacity: 0.4
              },{duration: 1000, easing:"easeOutCirc", complete:function(){
                    $('.insst').css({width:10,height:10,top:0,left:0})               
              }})  
        })          
      }           
    })
    $('#mklStart').one("mousedown",function(){
        soundManager.stopAll();
        soundManager.play('_AClick');
        $('#inscloud, #mklStart, #mklisp').fadeOut(100);
        $('#inssta').fadeOut(100, function(){
             $init()
        });
    })
    $('#mklisp').live('mousedown', function(){
        if(!$('#mklisp').data("active")){
            $('#mklisp').data("active",true);
            soundManager.play('_AIns');            
            $(this).animate({scale: 1},200,'swing').animate({scale: 0.9},{duration: 200, easing: 'swing', complete: function(){
                $('#mklisp').data("active",false);
            }});
        }      
    })
//main
    $('#mklmkh').sprite({fps: 4, no_of_frames: 3});
    $('#mklmk1').sprite({fps: 4, no_of_frames: 2});
    $('#mklmk3').sprite({fps: 4, no_of_frames: 4});
    $('#mklmk4').sprite({fps: 7, no_of_frames: 2});
    $('#mklmk5').sprite({fps: 4, no_of_frames: 2});      
    $('#sticks').sprite({fps: 20, no_of_frames: 4});
    $('#mklmk4').moagobj({top: 25, topcb: 60},1000);
    $('#mklmkh').moagobj({top: 25, topcb: 150},3000);
    $('#mklmkh').hover(function(){
        $('#sticks').css({display: "block"});    
    },function(){
        $('#sticks').css({display: "none"});
    })      
    $('#mklmk1').hover(function(){
        if(!$('#mklmk1').data("ac")){
            $('#mklmk1').data("ac",true);
            $('#mklmk1').spState(2);
            setTimeout(function(){
                $('#mklmk1').spState(1);
                $('#mklmk1').data("ac",false);
            },3000);            
        }
    });
    $('#mklmk5').hover(function(){
        if(!$('#mklmk5').data("ac")){
            $('#mklmk5').data("ac",true);
            $('#mklmk5').spState(2);
            setTimeout(function(){
                $('#mklmk5').spState(1);
                $('#mklmk5').data("ac",false);
            },3000);            
        }
    });
    $('#mklmk4').live('mousedown', function(){
        if(!$('#mklmk4').data("ac")){
            $('#mklmk4').data("ac",true);
            $('#mklmk4').spState(2).fps(2);
            $('#mklmk4').stop();
            setTimeout(function(){
                $('#mklmk4').spState(1).fps(4);
                $('#mklmk4').data("ac",false);
                $('#mklmk4').moagobj({top: 25, topcb: 60},1000)
            },3000);            
        }
    }); 
    $('#mklmkh').live('mousedown', function(){    
        if($('.mklcan').length != 0 && $("#mkl").data("info").index < $('.mklcan').length && $("#mkl").data("info").hintable == true){
            $("#mkl").data("info").hintable = false;
             soundManager.stopAll();
             soundManager.play('_AHint');
             var $drop = $('.mklcan').eq($("#mkl").data("info").index);
             var $drag = $('#drag'+$("#mkl").data("info").index);  
             $drop.droppable("destroy");     
             $drop.attr('dropped',true);                 
                var cntrLeft = $drop.position().left+15;
                var cntrTop = 388;                                       
                $drag.animate({
                    left: cntrLeft + "px",
                    top: cntrTop + "px"
                },{duration: 500,
                   start:function(){                        
                        $drag.draggable("disable");
                        $fnsetIndex();
                   }, 
                   complete:function(){
                        $("#mkl").data("info").correct++; 
                        $drag.draggable("enable");
                        $fncheckComplete()
             }});
         }
    })
    $('#mklnext').live('mousedown', function(){         
         if($("#mkl").data("info").nextable){
            $("#mkl").data("info").nextable = false;
            soundManager.stopAll();
            soundManager.play('_AClick');
            $(this).animate({scale: 1},200,'swing').animate({scale: 0.9},{duration: 200, easing: 'swing', complete: function(){
                $('#mklnext,#inscloud,#inssta').fadeOut(10);
                $next();
            }});
        }         
    })
    $('#mklrsp').live('mousedown', function(){
        if(!$('#mklrsp').data("active")){
            $('#mklrsp').data("active",true);
            soundManager.stopAll();
            soundManager.play('_Apar');            
            $(this).animate({scale: 1},200,'swing').animate({scale: 0.9},{duration: 200, easing: 'swing', complete: function(){
                $('#mklrsp').data("active",false);
            }});
        }      
    })
    $('#mklrep').live('mousedown', function(){
        soundManager.stopAll();
        soundManager.play('_AClick');             
        $('#mklrs').fadeOut(10, function(){
            $("#mkl").data("info").inL = 0;
            $init()
        });
    })
})