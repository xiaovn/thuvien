$.fn.limitString = function(limit){
        /*
        alert(
        "All characters : " + $("#test").val().length  + 
              ", Characters only : " + $("#test").val().replace(/ /g,'').length +
              ", Trim() method : " + $.trim($("#test").val()).length);
       });
       */
//console.log(limit);
    var _self = this;
    var charNumber = $(_self).val();
    var count = charNumber.match(/ /g);
    if(count){
        if(count.length >= limit){
            $(_self).attr('maxlength', $(_self).val().length);
        }else{
            $(_self).removeAttr('maxlength');
        }
    }
    return this;
}
$(window).load(function(){
     var limit_char = parseInt($('.wrme_d1').attr('limit_char'));   
    $('#post_text').keyup(function(){
        $(this).limitString(limit_char);
    });
});