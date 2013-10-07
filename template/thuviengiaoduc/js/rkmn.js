var curve = new CurveAnimator(
  [-231,109], [900,50],
  [200,250], [100,20]
);
  
function randomIndex(ele){
    var $this = $(ele);
    var $arrDom = [];
    for(var i=0; i<$this.length; i++){
        $arrDom.push(i);
    }
    return $arrDom.sort(function() { return 0.5 - Math.random();});
}
function $randomApple(){
    //$('.rkmnslicon').spStop(true);
    $('#rkmntt2').animate({height: 23, width: 173, left: 564, top: 12},1000);
    var $start = 0; 
    var $arrRd = randomIndex('.rkmnapp');    
    $('.rkmnapp').each(function(index, ele){
        $('.rkmnapp').eq($arrRd[index]).delay($start).animate({"margin":0,width: 62, height: 62,"font-size": 30, "line-height": "62px"},{duration: 1000, easing: "easeOutQuart", complete: function(){
             $(this).attr('selectable',true);
        }});
        $(this).togglescale();  
        $start+=300;    
    })     
}
$(function(){
    $.fn.extend({
        togglescale: function(){
            var $this = $(this);
            function $runScale(){
                var $rot1 = 1.1;
                var $rot2 = 1;                
                $this.animate({scale: $rot1},500).animate({scale: $rot2},{duration: 500, complete: function(){
                    if($this.data('stopScale') != true){ 
                      $runScale();
                    }else{
                        $this.data('stopScale',false);    
                    }                    
                }})
            }
            $this.hover(function(){              
                if($this.data('stopScale') != true){
                    $runScale();
                    soundManager.play('_Aapphover');
                }else{
                    $this.data('stopScale',false);
                }
            },function(){
                $this.data('stopScale',true);
            }) 
        }
    })
})
var $json;
$(function(){
    $.ajax({
          url: $('#prget').attr('link'),
          type: "POST",
          dataType: 'json',
          async: false,
          success: function(ms){                    
            console.log(ms);
            $json = ms;
            $.each(ms["audio_hover_select"],function(index,value){                
                 _fnmsc(value,"_Asl"+index);
            })
            _fnmsc(ms["audio_rocket"],"_Arocket");
            _fnmsc(ms["audio_apple_hover"],"_Aapphover"); 
            _fnmsc(ms["audio_apple_falling"],"_Aappfall");
            _fnmsc(ms["audio_title"],"_Atitle");
            $('.rkmnapp').each(function(index,ele){
                var $stt = index;
                $stt++;
                _fnmsc(ms["audio_unit_"+$stt],"_Aunit"+index);
            })
          },
          error: function(er){
            console.log(er.responseText);
          }
    }) 
})
$(window).load(function(){
    $('#rkmn').data('objHover',false);
    $('#rkmnslicon1').sprite({fps: 4, no_of_frames: 5});
    $('#rkmnslicon2').sprite({fps: 3, no_of_frames: 3});
    $('#rkmnslicon3').sprite({fps: 3, no_of_frames: 5});
    $('#rkmnslicon4').sprite({fps: 4, no_of_frames: 5});
    $('#rkmnvtr').gJPlayV({});
    $('#rkmntbsl').animate({scale: 0.0001},10,function(){
        $('#rkmntbsl').css({display:"block"});
    })
    var $apAc = window.location.pathname.replace(/%20/g,"").replace(/\s+/g, '').match(/[0-9]+/g);
    if($apAc){
          $('#rkmntr').css({width: 516, height: 516, left: 17, top: 20, opacity: 1});
          $('.rkmnapp').each(function(index, ele){
            $(this).css({"margin":0,width: 62, height: 62,"font-size": 30, "line-height": "62px"});
            $(this).attr('selectable',true);
            $(this).togglescale();
          }).promise().done(function(){
             setTimeout(function(){
                $('#rkmnap'+$apAc[0]).trigger('mousedown');
             },500)
          });   
    }else{               
        $('#rkmntt').delay(1000).animate({width: 375},{duration: 4000, start: function(){            
            soundManager.play('_Arocket');    
        }});
        $('#rkmnrk').moveCurve(curve, 7.5, 17,"rkcp");        
        $(document).live("rkcp", function(){
            if(!$('#rkmn').attr("opened")){
                $('#rkmn').attr("opened",true);
                soundManager.stopAll();
                $('#rkmn').css({"cursor":"default"});
                $('#rkmnrk, #rkmntt').css({"display":"none"});
                $('#rkmntr').animate({width: 516, height: 516, left: 17, top: 20, opacity: 1},{queue: false, duration: 1500, easing:'swing', complete: function(){
                    soundManager.play('_Atitle');
                    $randomApple();
                }})        
            }
        })
        $('#rkmn').one("mousedown", function(){
            if(!$('#rkmn').attr("opened")){
                $('#rkmn').attr("opened",true);
                soundManager.stopAll();            
                $('#rkmn').css({"cursor":"default"});
                $('#rkmnrk, #rkmntt').css({"display":"none"});
                $('#rkmntr').animate({width: 516, height: 516, left: 17, top: 20, opacity: 1},{queue: false, duration: 1500, easing:'swing', complete: function(){
                    soundManager.play('_Atitle');
                    $randomApple();        
                }})           
            }
        })
    }
    $('.rkmnapp').live("mousedown", function(){
            var $this = $(this);   
            soundManager.stopAll();
            soundManager.play('_Aappfall');   
            $(document).unbind('_Aappfall_finish').bind('_Aappfall_finish',function(){                
                soundManager.play('_Aunit'+$this.index('.rkmnapp'));
            })      
            $clone = $this.clone();
            $this.stop().css({width: 0, height: 0, "font-size": "0px","margin": "0px 0px 0px 31px","line-height": "0px"});
            $('.appClone').remove();                    
            $('.appzoom').stop().animate({"margin":0,width: 62, height: 62,"font-size": 30, "line-height": "62px"},{duration: 1000, easing: "easeOutQuart"});
            $('.rkmnapp').removeClass('appzoom');            
            $this.addClass('appzoom');  
            //$('#rkmnttsl').text($this.attr('name'))                   
            $.each($json["link"][$this.index('.rkmnapp')],function(index, value){
                 $('.rkmnsl').eq(index).attr('href',value);     
            })
            $clone.addClass("appClone").css({zIndex: 1}).appendTo('#rkmn').animate({top: 478, opacity: 0},300,'swing',function(){    
                $clone.remove();                
                $('#rkmntbsl').stop().animate({scale: 0.0001},10).animate({scale: 1},{duration: 1000, start: function(){
                    $('#rkmnttsl').text($this.attr('name'));  
                }});
            })
    })
    $('.rkmnsl').hover(function(){
        //$(this).spStart();        
        if($.browser.webkit && !window.chrome){
             
        }else if($('#rkmn').data('objHover')!= $(this).attr('id')){
               $('#rkmn').data('objHover',$(this).attr('id'));
               soundManager.stopAll();
               soundManager.play("_Asl"+$(this).index('.rkmnsl'));
        }          
    },function(){
        $('#rkmn').data('objHover',false);
        //$(this).spStop(true);
    })
    $('.rkmnsl').live("mousedown", function(){
        var $this = $(this);
        var $index = $this.index('.rkmnsl');
        if($.browser.webkit && !window.chrome){            
            soundManager.play("_Asl"+$index);
            $(document).unbind("_Asl"+$index+"_finish").bind("_Asl"+$index+"_finish",function(){
                window.location.href = $this.attr('href');
            })
        }else{
            window.location.href = $this.attr('href');            
        }
    })
    $('#rkmncltbsl').live("mousedown", function(){
        soundManager.stopAll();
        $('.appzoom').stop().animate({"margin":0,width: 62, height: 62,"font-size": 30, "line-height": "62px"},{duration: 1000, easing: "easeOutQuart"});
        $('.rkmnapp').removeClass('appzoom');
        $('#rkmntbsl').stop().animate({scale: 0.0001},10);
    })
})