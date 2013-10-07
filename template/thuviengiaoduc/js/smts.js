$.fn.limitString = function(limit){
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
$(window).load(function() {
	var textArea = $(".content textarea");
	textArea.wrap("<div class='textarea-wrapper' />");
	var textAreaWrapper = textArea.parent(".textarea-wrapper");
	textAreaWrapper.mCustomScrollbar({
		scrollInertia: 0,
        scrollButtons:{
            enable: true
        },
		advanced: {
			autoScrollOnFocus: false
		}
	});
	var hiddenDiv = $(document.createElement("div")),
		content = null;
	hiddenDiv.addClass("hiddendiv");
	$("body").prepend(hiddenDiv);
	textArea.bind("keyup", function(e) {
		content = $(this).val();
		var clength = content.length;
		var cursorPosition = textArea.getCursorPosition();
		content = "<span>" + content.substr(0, cursorPosition) + "</span>" + content.substr(cursorPosition, content.length);
		content = content.replace(/\n/g, "<br />");
		hiddenDiv.html(content + "<br />");
		$(this).css("height", hiddenDiv.height());
		textAreaWrapper.mCustomScrollbar("update");
		var hiddenDivSpan = hiddenDiv.children("span"),
			hiddenDivSpanOffset = 0,
			viewLimitBottom = (parseInt(hiddenDiv.css("min-height"))) - hiddenDivSpanOffset,
			viewLimitTop = hiddenDivSpanOffset,
			viewRatio = Math.round(hiddenDivSpan.height() + textAreaWrapper.find(".mCSB_container").position().top);
		if (viewRatio > viewLimitBottom || viewRatio < viewLimitTop) {
			if ((hiddenDivSpan.height() - hiddenDivSpanOffset) > 0) {
				textAreaWrapper.mCustomScrollbar("scrollTo", hiddenDivSpan.height() - hiddenDivSpanOffset);
			} else {
				textAreaWrapper.mCustomScrollbar("scrollTo", "top");
			}
		}
	});
	$.fn.getCursorPosition = function() {
		var el = $(this).get(0),
			pos = 0;
		if ("selectionStart" in el) {
			pos = el.selectionStart;
		} else if ("selection" in document) {
			el.focus();
			var sel = document.selection.createRange(),
				selLength = document.selection.createRange().text.length;
			sel.moveStart("character", -el.value.length);
			pos = sel.text.length - selLength;
		}
		return pos;
	}
    
//Limit char      
    if(document.getElementById('goldenkids_member')){
        if(document.getElementById('sendcms')){
            $('#smtsfta').keyup(function(){$(this).limitString(parseInt($('#smts').attr('limitchar')));});
            $('#sendcms').attr('disabled',true);
            $('.form_send_comment_bt > a').css({"visibility":"hidden"});
        }else{
            $('#smtsfta').attr('disabled',true).val($('#sendcm').text());
            $('#smtssubmit').css({display:"none"});            
        }
    }else{
        $('#smtsfta').attr('disabled',true).val("Bạn phải đăng nhập để sử dụng chức năng này!").css({color:"red"});
        $('#smtssubmit').css({display:"none"});
    }
    $('#smtssubmit').live('mousedown',function(){
      $('#sendcms').val($('#smtsfta').val());  
      $('.form_send_comment_bt > a').trigger('click');
      $('#sendcms').attr('disabled',true);
      $('#smtssubmit').css({display:"none"});
    })
})