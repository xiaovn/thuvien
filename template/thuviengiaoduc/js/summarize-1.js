String.prototype.concat = function() {
    return this.replace(/ /g, "_");
};
$(window).load(function(){
    var question_index = 0;
    var next_avaiable = true;
    var goldenkids = false;
    var review_mode = false;
    var score = 0;
    var number_question = $('.class_summarize .lesstion').length;
    var check_goldenkids = document.getElementById('goldenkids_member');
    if(check_goldenkids!=null){
    		goldenkids = true;
    	}
    var practice_list_answer = []; 
    /*---------khai bao am thanh--------*/
   $('.class_summarize audio,.class_summarize video').mediaelementplayer({
        features: ['playpause','progress','current','duration','tracks','fullscreen'],
   });
    $('.class_summarize .lesstion').each(function(index,element){
        var name = $(element).attr('name'); 
        var add_id = name.concat();
        $(element).find('video, audio').attr('id',add_id);
    });
   /*main*/   
    $('.class_summarize .word_answer').focus(function(){
        var _self = $(this);
       if(_self.index()>=2 && goldenkids!=true){
            loadAudioSeekbar('.class_pratice','audio_none_goldenkids');
           $('.class_summarize #popup_non_goldenkid').fadeIn(300,function(){
                playAudioSeekbar('.class_pratice', 'audio_none_goldenkids');
			 	$('.class_summarize #thong_bao_png').animate({
				 	top: '10px' 
				},1000,'linear');                                              
			});            
       }
    });
    $('.class_summarize .word_answer').focus(function(){
            var _self = $(this);
            if(_self.index() == $('.class_summarize .word_answer').length-1 && goldenkids==true){ 
                $('.class_summarize #submit_btn').css('display','block');
            }
    });
    $('.class_summarize #start_btn').bind('click', function(){
        $('.class_summarize #start_screen').css('display','none');
        $('.class_summarize #name_lession').html($('.class_summarize .lesstion').eq(0).attr('name'));        
        $('.class_summarize #next_btn').fadeIn(300);
        $('.class_summarize .lesstion').eq(0).fadeIn(300);
        $('.class_summarize #practice_intruction').fadeIn(300);
    });
    
    $('.class_summarize #redo_btn').bind('click',function(){
        question_index = 0;
        score =0;
        review_mode = false;         
    });
    $('.class_summarize #submit_btn, .class_summarize #result_btn').bind('click', function(){
             score = 0;
            $('.class_summarize .your_answer').empty();            
            $('.class_summarize .word_answer').attr('disabled','true');
            $('.class_summarize #popup_congratulation').fadeIn(300);
            $('.class_summarize .word_answer').each(function(index, element){
                if($.trim($(element).val()) == $.trim($(element).attr('correct'))){
                    score++;
                    $(element).css('color','blue');
                    $('.class_summarize .sound .tick').clone().appendTo('.class_summarize .your_answer');
                }else{
                    $(element).css('color','red');
                    $('.class_summarize .sound .cross').clone().appendTo('.class_summarize .your_answer');
                } 
            });
            $('.class_summarize #result_game').text(score+'/'+$('.class_summarize .word_answer').length);
            pauseAudioSeekbar('.class_summarize'); 
    });
    $('.class_summarize #redo_btn').bind('click',function(){
        $('.class_summarize #popup_congratulation').css('display','none');
         $('.class_summarize .word_answer').removeAttr('disabled');
         $('.class_summarize .word_answer').val('');
         $('.class_summarize .word_answer').css('color','black');
         $('.class_summarize #submit_btn, .class_summarize #result_btn').css('display','none');
         $('.class_summarize .form_answer_correct').css('display','none');
    });
    $('.class_summarize #review_btn').bind('click',function(){
         $('.class_summarize #popup_congratulation').css('display','none');
         $('.class_summarize #submit_btn').css('display','none');
         $('.class_summarize #result_btn').css('display','block');
         $('.class_summarize .form_answer_correct').fadeIn(300);        
    });
    $('.class_summarize #review_btn').bind('click', function(){
        review_mode = true;
        question_index = 0;        
    });
    
});