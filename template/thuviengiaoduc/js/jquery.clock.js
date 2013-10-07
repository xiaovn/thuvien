/**
 * @name		jQuery Count-UP Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2012/09/count-up-jquery/
 * @license		MIT License
 */
var _countDownAble = true;
var _countUpAble = true;
var _goldenkids = false;
var _timeoutEvent = true;
var _min = 0;
var _sec = 0;
(function($){
	
	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// Creating the plugin
	$.fn.countup = function(prop){
	   _timeoutEvent = false;
	    $(this).empty();
        var s = 0;
        var m = 0;           
        var options = $.extend({
			callback	: function(){},
			start		: new Date()
		},prop);
		var passed = 0, m, s,positions;
		// Initialize the plugin
		init(this, options);		
		positions = this.find('.position');
		(function tick(){			
			// Number of minutes left
			if(s == 59){
			    s = 0; 
                m++; 
            }            
			updateDuo(4, 5, m);
			// Number of seconds left            
            if(s >= 0){
                s++;
            }
			updateDuo(6, 7, s);			
			// Calling an optional user supplied callback
			options.callback(m, s);
			// Scheduling another call of this function in 1s
            if(_countUpAble == true){               
			     setTimeout(tick, 1000);                 
            }else{                
                if(_goldenkids != true){
                    $(document).trigger('nongks');   
                }else if(_timeoutEvent == true){
                    _min = m;
                    _sec = s;
                    $(document).trigger('complete');                    
                }                
            }
            
            $(document).unbind('continueCountUp').bind('continueCountUp', function(){    	     
    	      _countUpAble = true;  
               tick();       
            });
                   
		})();
        		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}		
		return this;	
    }
    //countdown    
    $.fn.countDown = function(_m,_s,prop){
        $(this).empty();
        var s = _s;
        var m = _m;           
        var options = $.extend({
			callback	: function(){},
			start		: new Date()
		},prop);
		var passed = 0, m, s,positions;

		// Initialize the plugin
		init(this, options);		
		positions = this.find('.position');
		(function tick(){			
			// Number of minutes left
			if(m > 0 && s == 0){
			    s = 59; 
                m--; 
            }            
			updateDuo(4, 5, m);
			// Number of seconds left            
            if(s > 0){
                s--;
            }
			updateDuo(6, 7, s);			
			// Calling an optional user supplied callback
			options.callback(m, s);
			// Scheduling another call of this function in 1s
            if((m != 0 || s != 0) && (_countDownAble == true)){               
			     setTimeout(tick, 1000);
                 _min = m;
                 _sec = s;                 
            }else if((m == 0 && s == 0) || (_countDownAble != true)){                
                if(_goldenkids != true){
                    $(document).trigger('nongks');   
                }else if(_timeoutEvent == true){
                    _min = m;
                    _sec = s;
                    $(document).trigger('timeout');                    
                }                
            }           
		})();		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};
        

	function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
		$.each(['Days','Hours','Minutes','Seconds'],function(i){
			$('<span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em.htm'/*tpa=http://www.thuviengiaoduc.org/file/learn/child/dungchung/lib_new_en/clock/countup/-2.1em*/,
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em.htm'/*tpa=http://www.thuviengiaoduc.org/file/learn/child/dungchung/lib_new_en/clock/countup/2.5em*/,opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);