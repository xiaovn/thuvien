var level_btn_avaiable;
$(window).load(function() {
	$(".home_chi_btn").bind('click', function() {
        var ranking = $('#your-ranking_1').html();
        $('#your-ranking').html(ranking);
		$(gameElement.sound_beep).jPlayer('play');
		$(this).effect("explode", 300, function() {
			gameElement.btn_home = this;
			gameElement.popup = document.getElementById($(gameElement.btn_home).attr('screen_id'));
			$(gameElement.popup).fadeIn(500, function() {
				switch (gameElement.popup.id) {
				case 'rating-screen':
					{
						$('#wrap-popup-rating-screen').fadeOut(100);
						$('.level-btn').removeClass('level-btn-active');
						$('#congratulation_table').fadeOut(100);
						var count = $('.level-btn').length;
						var i = 0;
						var move = function() {
							if (i < count) {
								$('.level-btn:eq(' + i + ')').animate({
									left: '0px'
								}, 300, 'linear', function() {
									$('.level-btn:eq(' + i + ')').animate({
										left: '10px'
									}, 100, 'linear', function() {
										$('.level-btn:eq(0)').css('left', '20px');
										$('.level-btn:eq(0)').css('z-index', '1');
										$('.level-btn:eq(0)').addClass('level-btn-active');
                                        $('.table_ranking:eq(0)').css('display','block');
										i++;
										move();
									});
								});
							} else {
								level_btn_avaiable = true;
								$('#ratting_table').fadeOut(10);
								$('.level-btn:eq(0)').css('z-index', '0');
								$(document).trigger('load_top_ten');
							}
						}
						move();;
						break;
					}
				case 'play-screen':
					{
						$('#exit_btn_play-screen').fadeIn(10);
						break;
					}
				}
			});
		});
	});
    /*------------------------------------------------------------------*/
     $('.level-btn').bind('click',function(){
            if(level_btn_avaiable==true){
                var _self = this;
                $('.level-btn').removeClass('level-btn-active');
                $(_self).addClass('level-btn-active');
                $('.level-btn').animate({
                    left: 10
                },100);
                $(_self).animate({
                    left: 25
                },100,'linear',function(){
                    $('#your-ranking').empty();
                    var id_ranking = $(_self).attr('id_your_ranking');
                    var ranking = $('#'+id_ranking).html();
                    $('#your-ranking').html(ranking);
                    $('.table_ranking').css('display','none');
                    $('.table_ranking').eq($(_self).attr('level')).fadeIn(300);                    
                });
                $(gameElement.sound_beep).jPlayer('play');
            }
        });
     /*-------------------------------------------------------------------*/
     $('.ranking_info').bind('click', function(){
        $('.ranking_info').css('background-color','transparent');
        $(this).css('background-color','#fdfc9e');
     });
     
})