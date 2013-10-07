var event;
function CurveAnimator(from,to,c1,c2){        
		this.path = document.createElementNS('http://www.w3.org/2000/svg','path');
		if (!c1) c1 = from;
		if (!c2) c2 = to;
		this.path.setAttribute('d','M'+from.join(',')+'C'+c1.join(',')+' '+c2.join(',')+' '+to.join(','));
		this.updatePath();
		CurveAnimator.lastCreated = this;
	}
	CurveAnimator.prototype.animate = function(duration,callback,delay){
		var curveAnim = this;
		// TODO: Use requestAnimationFrame if a delay isn't passed
		if (!delay) delay = 1/40;
		clearInterval(curveAnim.animTimer);
		var startTime = new Date;
		curveAnim.animTimer = setInterval(function(){
			var now = new Date;
			var elapsed = (now-startTime)/1000;
			var percent = elapsed/duration;
			if (percent>=1){
				percent = 1;
                if(event){
                    $(document).trigger(event);
                    event = null;
                }
				clearInterval(curveAnim.animTimer);
			}
			var p1 = curveAnim.pointAt(percent-0.01),
			    p2 = curveAnim.pointAt(percent+0.01);
			callback(curveAnim.pointAt(percent),Math.atan2(p2.y-p1.y,p2.x-p1.x)*180/Math.PI);
		},delay*1000);
	};
	CurveAnimator.prototype.stop = function(){	   
		clearInterval(this.animTimer);
	};
	CurveAnimator.prototype.pointAt = function(percent){
		return this.path.getPointAtLength(this.len*percent);
	};
	CurveAnimator.prototype.updatePath = function(){
		this.len = this.path.getTotalLength();
	};
	CurveAnimator.prototype.setStart = function(x,y){
		var M = this.path.pathSegList.getItem(0);
		M.x = x; M.y = y;
		this.updatePath();
		return this;
	};
	CurveAnimator.prototype.setEnd = function(x,y){
		var C = this.path.pathSegList.getItem(1);
		C.x = x; C.y = y;
		this.updatePath();
		return this;
	};
	CurveAnimator.prototype.setStartDirection = function(x,y){
		var C = this.path.pathSegList.getItem(1);
		C.x1 = x; C.y1 = y;
		this.updatePath();
		return this;
	};
	CurveAnimator.prototype.setEndDirection = function(x,y){
		var C = this.path.pathSegList.getItem(1);
		C.x2 = x; C.y2 = y;
		this.updatePath();
		return this;
	};
//detech deveice
function customizeForDevice(){   
    var ua = navigator.userAgent;
    var checker = {
      iphone: ua.match(/(iPhone|iPod|iPad)/),
      blackberry: ua.match(/BlackBerry/),
      android: ua.match(/Android/)
    };
   return checker;
};


//call    
$.fn.moveCurve = function(curve, time, _plusAngle, _event){
    var _self = this;
    $(_self).css("position","absolute");
    curve.animate(time, function(point,angle){
      if(_plusAngle){
        angle += _plusAngle;
      }
      if(_event){
        event = _event;
      }    
      $(_self).children('div').css({  
            "transform":"rotate("+angle+"deg)",
            "-webkit-transform":"rotate("+angle+"deg)",
            "-moz-transform":"rotate("+angle+"deg)",  
            "-ms-transform":"rotate("+angle+"deg)",  
            "-o-transform":"rotate("+angle+"deg)"
        });
      $(_self).css({
            left: point.x+"px",
            top: point.y+"px"
        });
    });
}    

//demo
    /*
        var curve = new CurveAnimator(
          [50,300], [350,300],
          [168,159], [-134,336]
        );  
        
        $(document).ready(function(){
            $('#img').moveCurve(curve, 2);    
        })
    */