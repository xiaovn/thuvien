$(window).load(function(){
     //goldenkids                       
    if(document.getElementById('goldenkids_member')){
        $('div#fb_gks_page').remove();
    }else{
        $('div#fb_gks_page').nextAll('.mgzp').remove()  
    }    
    //audio
    $('.mgzsp').each(function(index,ele){
        var $this = $(this);
        var $parent = $this.parents('.mgzp').index('.mgzp')+1;
        $('.amgz').createAudio($this.attr('audio'),'_Amgz'+$parent);
        $this.attr('_Aid','_Amgz'+$parent);
    })
	$('.magazine').turn({
        autoCenter: 'true',
		acceleration: true,
        width: $('.magazine').width(),
        height: $('.magazine').height(),
		gradients: !$.isTouch,
		elevation:50,
		when: {
			turned: function(e, page) {				
                var $idAudio = '_Amgz'+$(this).turn('view')[0];
                console.log("$idAudio: "+$idAudio);
                $('.amgz .soundJplayer').jPlayer('stop');
                if(document.getElementById($idAudio)){                   
                   $.fn.playAudio(0,$idAudio,true);
                   $('#'+$idAudio).live($.jPlayer.event.playing, function(){        
                        $('.mgzsp').css({display:"none"});
                        $('.mgzsp_ac').css({display:"block"});
                   })   
                   $(document).live($idAudio+'_ended', function(){                        
                        $('.mgzsp').css({display:"block"});
                        $('.mgzsp_ac').css({display:"none"});
                   })                                   
                }else{
                    $('.mgzsp').css({display:"block"});
                    $('.mgzsp_ac').css({display:"none"});
                }
			}
		}
	});
    
//dich
    $('.vi_btn').live("mousedown", function(){
       $(this).siblings('.vi').toggle();
    });
    $('#ragbook').live('mousedown', function(){
        $(".magazine").turn("page",1);
    }) 

    $('.mgzsp').live('mousedown',function(){
        $('.amgz .soundJplayer').jPlayer('stop');
        $('.mgzsp').css({display:"none"});
        $('.mgzsp_ac').css({display:"block"});
        $.fn.playAudio(0,$(this).attr('_Aid'),true);
    })
});