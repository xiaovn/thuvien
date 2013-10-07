var _active;
$.fn.captionBox = function(){
            var _video = this;        
            var _subVideo = $(_video).find('.are_video');
            var _height  = _subVideo.height();
            var _index = -1;
            var _scrollValue = 0;
            var _heightCompare = 0;
            var _scroll = _height/2;
            var _toggePlay = true;
            var _scrollAvaiable = true;
            $(_subVideo).bind("mouseover",function(){
                _scrollAvaiable = false;
            });
            $(_subVideo).bind("mouseout",function(){
                _scrollAvaiable = true;
            });                 
            $(_video).find('audio, video').mediaelementplayer({
                // automatically create these translations on load
                translations:['es','ar','yi','zh-cn'],
                // allow the user to add additional translations
                translationSelector: true,
                // start with English automatically turned on
                startLanguage: 'en',
                success: function (mediaElement, domObject) { 
                    // add event listener
                    mediaElement.addEventListener('play', function(){
                        _toggePlay = true;
                        $(_subVideo).find('.sub_video').each(function(index, element){
                            var _self = element;
                            var _secValue = 0;
                            if($(_self).attr('sec')){
                                    var _sec = parseInt($(_self).attr('sec'));
                                    _secValue = _secValue + _sec;
                                }
                                if($(_self).attr('min')){
                                    var _min = parseInt($(_self).attr('min'));
                                    _secValue = _secValue + (_min * 60);
                                }                             
                            $(_self).bind('click', function(){
                                mediaElement.setCurrentTime(_secValue);
                                var $scrollTop = 0;
                                for(var $i = 0; $i < $(_self).index('.sub_video'); $i++){
                                    var $this = $('.sub_video').eq($i);
                                    $scrollTop += $this.outerHeight() + parseInt($this.css('margin-top')) + parseInt($this.css('margin-bottom'));
                                };
                                if($scrollTop > 0){if($scrollTop>0){$(_subVideo).scrollTop($scrollTop);}}
                            });
                        });
                    },false);
                    mediaElement.addEventListener('playing', function(){
                        $('.me-plugin').bind('click',function(){
                            if( _toggePlay == true){
                                _toggePlay = false;
                                mediaElement.pause();
                            }
                        });               
                    }, false);
                    mediaElement.addEventListener('timeupdate', function(e){                         
                        //console.log(e)                        
                        var _time = Math.floor(mediaElement.currentTime);
                        $(_subVideo).find('.sub_video').each(function(index, element){
                            var _self = element;
                            var _secValue = 0;
                            if($(_self).attr('sec')){
                                    var _sec = parseInt($(_self).attr('sec'));
                                    _secValue = _secValue + _sec;
                                }
                                if($(_self).attr('min')){
                                    var _min = parseInt($(_self).attr('min'));
                                    _secValue = _secValue + (_min * 60);
                                }                         
                            if($(_self).attr('sec') && _secValue == _time){                                                                
                                if($(_self).index() != _index){
                                    /*scroll*/
                                    _index = $(_self).index();
                                    if((_scrollAvaiable == true) || ($.browser.webkit && !window.chrome)){
                                        var $scrollTop = 0;
                                        for(var $i = 0; $i < $(_self).index('.sub_video'); $i++){
                                            var $this = $('.sub_video').eq($i);
                                            $scrollTop += $this.outerHeight() + parseInt($this.css('margin-top')) + parseInt($this.css('margin-bottom'));
                                        };
                                        if($scrollTop > 0){if($scrollTop>0){$(_subVideo).scrollTop($scrollTop);}}
                                    }
                                    /*add sub*/
                                    $(_subVideo).find('.sub_video').removeClass("sub_active");
                                    $(_self).addClass('sub_active');
                                    _active = _self;                                
                                }         
                            }
                        });                     
                    },false);                   
                }
            });
        return this;
    }
$(window).load(function() {
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		$(".gdk").css('display','block');
    	}else{
    	   $(".ngdk").css('display','block');
    	}
    $('.video').each(function(index, element){
        $(element).captionBox();                
    });   
});