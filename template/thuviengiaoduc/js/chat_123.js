//use for open chat when reload page
var box_chat_status = ($.cookie('box_chat') == 'on' || $.cookie('box_chat') == 'off') ? $.cookie('box_chat') : 'off';
// set disable or enable box_chat
var box_enable = ($.cookie("box_enable") == "off") ? $.cookie("box_enable") : 'on';
var user_chatting = 0;
var url_chat = "http://chat.thuviengiaoduc.org/chat/";
var scroll_box_chat = 1;
var detect_on_window = 0;
$(document).ready(function () {
    setTimeout(function () {

    }, 10000);
    if ($.cookie('fuser_uname') != null) {

        setTimeout(function () {
            chat_channel();
        }, 1500);
    }
    $(window).hover(function () {
        detect_on_window = 1;
    }, function () {
        detect_on_window = 0;
    });
    $(window).focusin(function () {
        detect_on_window = 1;
    }).focusout(function () {
            detect_on_window = 0;
        });
//    setInterval(function () {
//        window.location.reload();
//    }, 800000);
    //$.cookie('total_item_box', '', { expires:-1 }); // clear cookie
    if ($.cookie('fuser_uname') != null) {

        setTimeout(function () {
            if (($.cookie('box_user_chat') == 'off') && ($('#box_c_' + $.cookie('user_chatting')).html() != null)) {
                $('#box_c_' + $.cookie('user_chatting')).parent().hide();
                $.cookie('box_user_chat', 'off');
                $('#ul_close_chat').css('top', '-25px');
                $('#ul_add_friend').css('top', '-25px');
                $('#ul_settings').css('top', '-110px');
            }
        }, 3000);
        //    (function () {
        setTimeout(function () {
            if ($.cookie('box_enable') == 'on') {
                $('#btn_control_box').attr('onclick', 'close_box_chat_friend(this)');
                $('#btn_control_box').removeClass('control_box_off');
                $('#btn_control_box').text('Tắt');
                if ($.cookie('box_chat') == 'on') {
                    if ($('.box_chat_content').html() == '') {
                        $('.box_chat_content').html("<div id='waiting_box_friend'><img src='loading-1.gif'/*tpa=http://chat.thuviengiaoduc.org/assets/images/loading.gif*/ height='24px'></div>");
                    }
                    $('.box_chat_content').show();

                } else {
                    $('.title_box span.title').html("Chat <span id='total_mess'>(0 tin nhắn)</span>");
                    $('.box_chat_content').hide();
                }
            } else {
                $('#btn_control_box').attr('onclick', 'open_box_chat_friend(this)');
                $('.box_chat_content').hide();
                narrow_box_chat();
            }
        }, 2000)

        //

        //  }, 3000);
    }

});


function update_total_mess_when_disable_box() {
    if ($('span.quantity').html() != null) {
        var total = 0;
        $("span.quantity").each(function () {
            total = total + parseInt($(this).text());
        });
        if ($('#total_mess').html() != null) {
            $('#total_mess').html("(" + total + " tin nhắn)");
        }

        $('#box_count_online').text(total);
        if (!$('.box_chat_content').is(':hidden')) {
            $('#box_count_online').hide();
        }
    } else {
        $('#box_count_online').hide();
    }
}


$(function () {
    setTimeout(function () {
        if ($.cookie('fuser_uname') != null) {
            sync_tb_online_chat();
        }
    }, 1000);
});

var div_confirm = '<div id="confirm_close_boxchat"><div class="content_confirm">Bạn muốn tắt chế độ chát<br> và chuyển sang chế độ Offline ?</div><div class="control_button"><a href="javascript:;" id="confirm_cancel" onclick="confirm_cancel_box()">Hủy</a><a href="javascript:;" id="confirm_agree" onclick="confirm_agree_box()">Đồng ý</a><div class="clear_fix"></div></div></div>';
// load box chat
$(function () {
    // alert($.cookie('ta123_chat_login'));
    if ($.cookie('fuser_uname') != null) {
        $('body').append("<div id='box_chat_123'>" + div_confirm + "<div class='box_chat_head' ><div class='title_box' onclick='quick_open_box_chat(this)'><span id='box_count_online'></span><span class='title'>Danh sách bạn bè</span></div><div id='btn_control_box' onclick='open_box_chat_friend(this)' class='control_box control_box_on control_box_off'>Bật</div></div><div class='box_chat_content' onscroll='scroll_box_friend()' id='tiny_chat'></div></div>");

    }
});

function open_box_chat_friend(e) {
    $.cookie("box_enable", 'on');
    $.cookie("box_chat", 'on');
    $(e).attr('onclick', 'close_box_chat_friend(this)');
    $(e).removeClass('control_box_off');
    //
    mark_quick = 1;
    (function poll() {
        var index_message = 0;
        var id_user_chat = 0;
        if (parseInt($.cookie('user_chatting')) > 0) {
            id_user_chat = $.cookie('user_chatting');
        }
        if ($('.c_message').length > 0) {
            index_message = $('.c_message').last().attr('id');
        }
        setTimeout(function () {
            if ($.cookie('box_enable') == 'on') {
                $.ajax({
                    url: url_chat + 'chat_channel',
                    data: {index_message: index_message, id_user_chat: id_user_chat},
                    success: function (data) {
                    },
                    dataType: "jsonp",
                    complete: poll,
                    jsonp: 'callback',
                    jsonpCallback: 'chat_channel_callback'});
            }

//            }
        }, 1000);

    })();
    //
    $('.title_box span.title').html("Danh sách bạn bè");
    if ($('.box_chat_content').html() == '') {
        $('.box_chat_content').html("<div id='waiting_box_friend'><img src='loading-1.gif'/*tpa=http://chat.thuviengiaoduc.org/assets/images/loading.gif*/ height='24px'></div>")
    }
    $('.box_chat_content').show('slow');
    $(e).text('Tắt');
    default_box_chat();

    return false;
}

function default_box_chat() {
    $('#box_chat_123').css('width', '229px');
    $('#box_chat_123 .box_chat_head .title_box').css('width', '150px');
}

function narrow_box_chat() {
    $('#box_chat_123').css('width', '105px');
    $('#box_chat_123 .box_chat_head .title_box').css('width', '30px');
    $('.title_box span.title').html("Chat");
    $('#box_count_online').hide();
}


function close_box_chat_friend(e) {
    $('#confirm_close_boxchat').show();
    return false;
}

function confirm_cancel_box() {
    $('#confirm_close_boxchat').hide();
}
function confirm_agree_box() {
    $('#btn_control_box').attr('onclick', 'open_box_chat_friend(this)');
    $.cookie("box_enable", 'off');
    $.cookie("box_chat", 'off');
    $('#box_chat_123 .control_box').text('Bật');
    $('#confirm_close_boxchat').hide();
    $('.box_chat_content').hide('slow');
    $('#box_chat_123 .control_box').addClass('control_box_off');
    $('.chat_item_123').remove();
    update_total_mess_when_disable_box();
    $('#box_count_online').hide();
    narrow_box_chat();
    mark_quick = 0;

}

var mark_quick = 0;
function quick_open_box_chat(e) {
    $('.box_chat_content').slideToggle('slow', function () {
        if (!$('.box_chat_content').is(':hidden')) {
            if (mark_quick == 0) {
                (function poll() {
                    var index_message = 0;
                    var id_user_chat = 0;
                    if (parseInt($.cookie('user_chatting')) > 0) {
                        id_user_chat = $.cookie('user_chatting');
                    }
                    if ($('.c_message').length > 0) {
                        index_message = $('.c_message').last().attr('id');
                    }
                    setTimeout(function () {
                        if ($.cookie('box_enable') == 'on') {
                            $.ajax({
                                url: url_chat + 'chat_channel',
                                data: {index_message: index_message, id_user_chat: id_user_chat},
                                success: function (data) {
                                },
                                dataType: "jsonp",
                                complete: poll,
                                jsonp: 'callback',
                                jsonpCallback: 'chat_channel_callback'});
                        }

//            }
                    }, 1000);

                })();
                mark_quick = 1;
            }

            default_box_chat();
            $.cookie("box_enable", 'on');
            $('#btn_control_box').attr('onclick', 'close_box_chat_friend(this)');
            $('#btn_control_box').removeClass('control_box_off');
            $('.title_box span.title').html("Danh sách bạn bè");
            if ($('.box_chat_content').html() == '') {
                $('.box_chat_content').html("<div id='waiting_box_friend'><img src='loading-1.gif'/*tpa=http://chat.thuviengiaoduc.org/assets/images/loading.gif*/ height='24px'></div>")
            }
            $('.box_chat_content').show('slow');
            $('#btn_control_box').text('Tắt');
            $('.title_box span.title').html("Danh sách ban bè");
            $.cookie('box_chat', 'on');
            if (parseInt($('#box_count_online').text()) > 0) {
                $('#box_count_online').show();
            }
        } else {
            $('.title_box span.title').html("Chat <span id='total_mess'>(0 tin nhắn)</span>");
            $.cookie('box_chat', 'off');
            update_total_mess_when_disable_box();
            $('#box_count_online').hide();
        }
    });

    return false;
}


function scroll_box_friend() {

}


function chat_channel() {
    (function poll() {
        var index_message = 0;
        var id_user_chat = 0;
        if (parseInt($.cookie('user_chatting')) > 0) {
            id_user_chat = $.cookie('user_chatting');
        }
        if ($('.c_message').length > 0) {
            index_message = $('.c_message').last().attr('id');
        }
        setTimeout(function () {
            if ($.cookie('box_enable') == 'on') {
                $.ajax({
                    url: url_chat + 'chat_channel',
                    data: {index_message: index_message, id_user_chat: id_user_chat},
                    success: function (data) {
                    },
                    dataType: "jsonp",
                    complete: poll,
                    jsonp: 'callback',
                    jsonpCallback: 'chat_channel_callback'});
            }

//            }
        }, 1000);

    })();
}
var load_box_chat = 0;
function chat_channel_callback(data) {
    if (data.box_user_chat != 'no_load') {
        $('body').append('<div class="chat_item_123" onclick="focus_to_chat()" id="user_chat_' + $.cookie('user_chatting') + '"></div>');
        var content = replace_string_in_jsonp(data.box_user_chat);
        $('#user_chat_' + data.user_id).html(content);
        //$('#user_chat_' + data.user_id + ' .box_user_content').html("<img class='img_loading' src='loading-1.gif'/*tpa=http://chat.thuviengiaoduc.org/assets/images/loading.gif*/>");
        $('.box_user_content .content').animate({ scrollTop: $('.box_user_content .content')[0].scrollHeight}, 0);
        $('.message_time').last().show();
        $(".nano").nanoScroller();
        $('.txt_chat_message').focus();
    }
    if (data.content_boxchat != 'chat_none_load') {
        if ($('.message_is_red').length > 0) {
            $('.message_is_red').remove();
        }
        $('#load_message_end').before(replace_string_in_jsonp(data.content_boxchat));
        $('.message_time').hide();
        $('.message_time').last().show();
        $('.box_user_content .content').animate({ scrollTop: $('.box_user_content .content')[0].scrollHeight}, 0);
        $(".nano").nanoScroller();
    }

    // LOAD BOX FRIEND , DUY NHAT LAN DAU TIEN RELOAD
    if (data.box_friend != 'no_load') {
        var content = replace_string_in_jsonp(data.box_friend);
        if ($.cookie('box_chat') == 'off') {
            $('.box_chat_content').hide();
        }
        if (load_box_chat == 0) {
            $('#box_chat_123 .box_chat_content').html(content);
            load_box_chat = 1;
        }
        $('#box_count_online').show();
        if ($.cookie('box_enable') == 'off' || $.cookie('box_enable') == null) {
            $('.title_box span.title').html("Chat <span id='total_mess'>(0 tin nhắn)</span>");
            $('#box_count_online').hide();
        }
        if ($.cookie('narrow_all_chat_box') == 'off') {
            if ($('#narrow_all_window_chat').html() != null) {
                $('#narrow_all_window_chat').text('Đóng các cửa sổ chát');
            }
        } else {
            if ($('#narrow_all_window_chat').html() != null) {
                $('#narrow_all_window_chat').text('Mở các cửa sổ chát');
            }
        }
        if (parseInt($.cookie('user_chatting')) > 0) {
            $('#mes_quantity_' + $.cookie('user_chatting')).parent().hide();
        }
        $(".nano").nanoScroller();
        update_total_mess_when_disable_box();
        reorder_box_chat();

    }
    // END LOAD BOX FRIEND , DUY NHAT LAN DAU TIEN RELOAD

    // THAY DOI DANH SACH BAN BE NEU CO SU THAY DOI
    if (data.list_friend != 'no_load') {
        $.each(data.list_friend, function (k, v) {
            process_list_friend(k, v);

        });
        $.each(data.list_friend, function (k, v) {
            if ($('#' + k + ' li').length > 0) {
                $('#' + k).show();
                $('#' + k).prev().show();
            } else {
                $('#' + k).hide();
                $('#' + k).prev().hide();
            }
        });
        // END - THAY DOI DANH SACH BAN BE NEU CO SU THAY DOI
    }

    if ($('.box_chat_content').is(':hidden')) {
        update_total_mess_when_disable_box();
        $('#box_count_online').hide();
    } else {
        if (parseInt($('#box_count_online').text()) > 0) {
            $('#box_count_online').show();
        } else {
            $('#box_count_online').hide();
        }
    }


}

function process_list_friend(name_group, list_friend_group) {

    $.each(list_friend_group, function (key, value) {
        if ($('#user_online_' + value.fid).length > 0) {
            if ($('#' + name_group + ' #user_online_' + value.fid).length == 0) {
                $("#user_online_" + value.fid).appendTo('#' + name_group);
            }
            if (parseInt(value.mes_unread) > 0) {
                $('#mes_quantity_' + value.fid).text(value.mes_unread);
                if (parseInt(value.fid) != parseInt($.cookie('user_chatting'))) {
                    $('#mes_quantity_' + value.fid).parent().show();
                } else {
                    $('#mes_quantity_' + value.fid).parent().hide();
                }
            }
            if (parseInt(value.is_online) == 1) {
                $('#user_status_' + value.fid).removeAttr('class');
                $('#user_status_' + value.fid).addClass('status_online');
                $('#mes_quantity_' + value.fid).parent().removeClass('count_cmt_offline');
            }
            if (parseInt(value.is_online) == 0) {
                $('#user_status_' + value.fid).removeAttr('class');
                $('#user_status_' + value.fid).addClass('status_offline');
                $('#mes_quantity_' + value.fid).parent().addClass('count_cmt_offline');

            }
        }

    });

}

function jsonpCallback_boxchat(data) {
    var content = replace_string_in_jsonp(data.html_content);
    $('#box_chat_123 .box_chat_content').html(content);
    $('#box_count_online').show();
    if ($.cookie('box_enable') == 'off' || $.cookie('box_enable') == null) {
        $('.title_box span.title').html("Chat <span id='total_mess'>(0 tin nhắn)</span>");
        $('#box_count_online').hide();
    }
    if ($.cookie('narrow_all_chat_box') == 'off') {
        if ($('#narrow_all_window_chat').html() != null) {
            $('#narrow_all_window_chat').text('Đóng các cửa sổ chát');
        }
    } else {
        if ($('#narrow_all_window_chat').html() != null) {
            $('#narrow_all_window_chat').text('Mở các cửa sổ chát');
        }
    }
    update_total_mess_when_disable_box();
}

function replace_string_in_jsonp(str) {
    str = str.replace('&lt;', '<');
    str = str.replace('&gt;', '>');
    return str;
}
var click_user_chat = 0;

function act_user_choose(e) {
    var user_id = $(e).attr('id').replace('user_online_', '');
    $.cookie('user_chatting', user_id);
    $.cookie('box_user_chat', 'on');
    $('.chat_item_123').remove();
    user_chatting = "txt_c_" + user_id;
    $('#mes_quantity_' + user_id).parent().css('display', 'none');
    // 1 - doi background
    $('.user_item_online').removeClass('user_selected');
    $(e).addClass('user_selected');
    // 1 - end
    if ($('#user_chat_' + user_id).length == 0) {
        $('body').append('<div class="chat_item_123" onclick="focus_to_chat()" id="user_chat_' + user_id + '"></div>');
        $.ajax({
            url: url_chat + 'aj_get_box_user_chat',
            data: {user_id: user_id},
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'jsonpCallback_boxuserchat',
            success: function () {
            }
        });


        reorder_box_chat();

    }
    return false;
}

function jsonpCallback_boxuserchat(data) {
    var content = replace_string_in_jsonp(data.html_content);
    $('#user_chat_' + data.user_id).html(content);
    //$('#user_chat_' + data.user_id + ' .box_user_content').html("<img class='img_loading' src='loading-1.gif'/*tpa=http://chat.thuviengiaoduc.org/assets/images/loading.gif*/>");
    $('.box_user_content .content').animate({ scrollTop: $('.box_user_content .content')[0].scrollHeight}, 0);
    $('.message_time').last().show();
    $(".nano").nanoScroller();
    $('.txt_chat_message').focus();
}


function focus_to_chat() {
    $('.txt_chat_message').focus();
}


function close_chat_box(e) {
    user_chatting = 0;
    $.cookie('user_chatting', 0);
    $('.chat_item_123').remove();
    return false;
}


// reorder box item chat follow box
function reorder_box_chat() {
    var margin_right = 400;
    $(".chat_item_123").each(function () {
        $(this).css('right', (margin_right + 5) + 'px');
        margin_right = margin_right + 260;
    });
    if ($('#box_chatting_123').html() != null) {
        $('#box_chatting_123').css('right', '210px');
        $('#box_chatting_123').css('width', '200px')
    }
    return false;
}


//var act_chatting = 'no_chatting';
function act_user_chatting(e, c_user_chat) {
    if (e.which == 13) {
        if (($.trim($('#txt_c_' + c_user_chat).val()).length != 0)) {
            //act_chatting = 'chatting';
            fn_user_chat(c_user_chat);

        } else {
            if ($('#' + user_chatting).html() != null) {
                $('#' + user_chatting).val("");
            }
        }
        return true;
    } else {
        if ($('#temp_text_chat').html() == null) {
            $('body').append("<span style='display: none' id='temp_text_chat'></span>");
        }
        $('#temp_text_chat').html($('#' + user_chatting).val());
        var width_temp = parseInt($('#temp_text_chat').css('width').replace('px', ''));
        var height_input = 20;
        $('.txt_chat_message').unbind('keyup');
        $('#' + user_chatting).css('height', (height_input + 15 * parseInt(width_temp / 225)) + 'px');
    }
    return true;
}


// function user chat with user
function fn_user_chat(c_user_chat) {
    var index_message = 0;
    if ($('.c_message').length > 0) {
        index_message = $('.c_message').last().attr('id').replace('mess_', '');
    }
    chat_calculate_timestamp();
    $.ajax({
        url: url_chat + 'aj_user_chatting',
        data: {user_chatting: c_user_chat, message: ta_replace_string($('#txt_c_' + c_user_chat).val()), index_message: (parseInt(index_message) + 1)},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'jsonpCallback_user_chatting',
        // jsonpCallback:'callback_chat_load_end',
        success: function () {
            //act_chatting = 'no_chatting';
        }
    });
    $('#txt_c_' + c_user_chat).val("");
    $('#txt_c_' + c_user_chat).css('height', '20px');
    return true;
}

function ta_replace_string(str) {
    str = str.replace('<', '');
    str = str.replace('>', '');
    return str;
}


function jsonpCallback_user_chatting(data) {
    if ($('.message_is_red').length > 0) {
        $('.message_is_red').each(function () {
            $(this).remove();
        });
    }
    if (replace_string_in_jsonp(data.content_boxchat) != 'chat_none_load') {
        $('#load_message_end').before(replace_string_in_jsonp(data.content_boxchat).replace('message_time', 'message_time message_time_calculate'));
        $('.message_time').hide();
        $('.message_time').last().show();
        $('.box_user_content .content').animate({ scrollTop: $('.box_user_content .content')[0].scrollHeight}, 0);
        $(".nano").nanoScroller();
    }
    return false;
}

// sync server

function sync_friend_request(sync_request_friend) {
    setTimeout(function () {
        $.ajax({
            url: url_chat + 'aj_sync_request_friend',
            data: {request: sync_request_friend},
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'callback_sync_request_friend',
            success: function () {
            }
        });
    }, 1000);
    return true;
}


function callback_sync_request_friend(data) {

}

function sync_respond_make_friend(rid, msg, receive_id) {
    $.ajax({
        url: url_chat + 'aj_sync_respond_friend_request',
        data: {rid: rid, stt: msg, receive_id: receive_id},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_sync_respond_friend',
        success: function () {
        }
    });
    return false;
}

function callback_sync_respond_friend() {

}

function sync_unFriend(owner_id, friend_id) {
    $.ajax({
        url: url_chat + 'aj_sync_respond_unfriend',
        data: {owner: owner_id, friend: friend_id},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_sync_respond_unfriend',
        success: function () {
        }
    });
    return false;
}


function callback_sync_respond_unfriend() {

}
// status : insert|update|delete
function sync_tb_online_chat() {
    $.ajax({
        url: url_chat + 'aj_sync_tb_online',
        data: {user123: $.cookie('fuser_uname'), data_user: syn_chat_data},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_sync_tb_online',
        success: function (data) {
        }
    });
    return false;
}

function callback_sync_tb_online(data) {
//    setTimeout(function () {
//        $.cookie('ta123_chat_login', data.user_id, { expires: 1 });
//    }, 500);
}


// sync chat register new member
function sync_chat_register(user_name, real_name) {
    $.ajax({
        url: url_chat + 'aj_sync_register_member',
        data: {user_name: user_name, real_name: real_name},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_sync_register_member',
        success: function (data) {
        }
    });
}

function callback_sync_register_member() {

}


//function call_scroll_bar() {
//    setTimeout(function () {
//        //  $('.box_user_content').perfectScrollbar();
//    }, 500);
//}


function click_hidden_box_user_chat() {
    if (scroll_box_chat == 1) {
        if ($('.content_box_chat_user').is(':hidden')) {
            $.cookie('box_user_chat', 'on');
            $('#ul_close_chat').css('top', '18px');
            $('#ul_add_friend').css('top', '18px');
            $('#ul_settings').css('top', '18px');
        } else {
            $.cookie('box_user_chat', 'off');
            $('#ul_close_chat').css('top', '-25px');
            $('#ul_add_friend').css('top', '-25px');
            $('#ul_settings').css('top', '-110px');

        }
        $('.content_box_chat_user').slideToggle(1000);
    }
    return false;
}

function click_show_emotions() {
    $('.img_emotion').unbind('click');
    if ($('.show_emotions').is(':hidden')) {
        $('.show_emotions').show();
    } else {
        $('.show_emotions').hide();
    }
    $('.img_emotion').click(function () {
        var emo_title = "[:" + $(this).attr('src').replace('http://chat.thuviengiaoduc.org/assets/images/emotions/', '').replace('.gif', '') + ":]";
        $('.txt_chat_message').val($('.txt_chat_message').val() + emo_title);
        if ($('#temp_text_chat').html() == null) {
            $('body').append("<span style='display: none' id='temp_text_chat'></span>");
        }
        $('#temp_text_chat').html($('#' + user_chatting).val());
        var width_temp = parseInt($('#temp_text_chat').css('width').replace('px', ''));
        var height_input = 28;
        $('.txt_chat_message').unbind('keyup');
        $('#' + user_chatting).css('height', (height_input + 15 * parseInt(width_temp / 225)) + 'px');
        click_close_emotion();
    });
    return false;
}

function click_close_emotion() {
    $('.img_emotion').unbind('click');
    $('.show_emotions').hide();
    return false;
}

function search_friend_box() {
    var txt_search = $('#txt_search_friend').val();
    if (txt_search.length > 0) {
        $('.chat_group').hide();
        $(".user_item_online").hide();
        $(".name_chat:contains(" + txt_search + ")").closest('.user_item_online').css('display', 'block');
        re_background_box_friend_chat();
    } else {
    }

}

function close_box_chat() {
    $('.box_chat_search').hide();
    $.cookie('box_chat', 'off');
    $('.box_chat_content').slideToggle('slow');
    return false;
}

function move_box_chat_user() {
    //$(".chat_item_123").draggable();
    return false;
}

function re_background_box_friend_chat() {
    var stt = 1;
    $(".user_item_online").css('background', '#FEFEFE');
    $(".user_item_online:visible").each(function () {
        if (stt % 2 == 0) {
            $(this).css('background', '#F5F5F5');
        }
        stt = stt + 1;
    });
}
// status :  1|0  favourite|deny
function chat_favourite(e, friend_id, status) {
    $.ajax({
        url: url_chat + 'aj_sync_chat_favourite_deny',
        data: {friend_id: friend_id, status: status},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_chat_friend_favourite',
        success: function (data) {

        }
    });
    if (status == 1) {
        $(e).text("Loại khỏi danh sách yêu thích");
        $(e).attr('onclick', "chat_favourite_remove(this," + friend_id + "," + status + ")");
    }
    if (status == 0) {
        $(e).text("Bỏ chặn người này");
        $(e).attr('onclick', "chat_favourite_remove(this," + friend_id + "," + status + ")");
    }
    load_box_chat = 1;
    scroll_box_chat = 0;
    setTimeout(function () {
        scroll_box_chat = 1;
    }, 1000);
    return false;
}

function callback_chat_friend_favourite(data) {
    if (data.group_favourite != 'no_load') {
        if (parseInt(data.group_favourite.add) == 1) {
            $("#user_online_" + data.group_favourite.user_id).appendTo('#group_chat_favourite');

        } else {
            if (data.group_favourite.is_online == 'on') {
                $("#user_online_" + data.group_favourite.user_id).appendTo('#group_chat_online');

            }
            if (data.group_favourite.is_online == 'off') {
                $("#user_online_" + data.group_favourite.user_id).appendTo('#group_chat_offline');

            }
        }
        if (data.group_favourite.is_online == 'on') {
            $("#user_online_" + data.group_favourite.user_id).removeAttr('class');
            $("#user_online_" + data.group_favourite.user_id).addClass('status_online');
        }
        if (data.group_favourite.is_online == 'off') {
            $("#user_online_" + data.group_favourite.user_id).removeAttr('class');
            $("#user_online_" + data.group_favourite.user_id).addClass('status_offline');
        }

        group_chat_show_hide();

    }
}


function group_chat_show_hide() {
    var group = ['group_chat_favourite', 'group_chat_recent', 'group_chat_online', 'group_chat_offline'];
    $.each(group, function (k, v) {
        if ($('#' + v + ' li').length > 0) {
            $('#' + v).show();
            $('#' + v).prev().show();
        } else {
            $('#' + v).hide();
            $('#' + v).prev().hide();
        }
    });


}

// status :  1|0  favourite|deny
function chat_favourite_remove(e, friend_id, status) {
    $.ajax({
        url: url_chat + 'aj_sync_chat_favourite_deny_remove',
        data: {friend_id: friend_id, status: status},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_chat_friend_favourite',
        success: function (data) {
        }
    });
    if (status == 1) {
        $(e).text("Đưa vào danh sách yêu thích");
        $(e).attr('onclick', "chat_favourite(this," + friend_id + "," + status + ")");
    }

    if (status == 0) {
        $(e).text("Chặn người này");
        $(e).attr('onclick', "chat_favourite(this," + friend_id + "," + status + ")");
    }
    load_box_chat = 1;
    scroll_box_chat = 0;
    setTimeout(function () {
        scroll_box_chat = 1;
    }, 1000);
    return false;
}

function chat_friend_temp(user_id) {
    $.ajax({
        url: url_chat + 'aj_chat_user_temp',
        data: {friend_id: user_id},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_chat_user_temp',
        success: function () {
        }
    });
    return false;
}

function callback_chat_user_temp() {

}

function narrow_group_chat(e) {
    var id_element = $(e).attr('id');
    switch (id_element) {
        case 'g_favourite':
            if ($.cookie('group_chat_favourite') != 'off') {
                $('.narrow', e).removeClass('narrow_open');
                $('#group_chat_favourite').hide('1000');
                $.cookie('group_chat_favourite', 'off');
            } else {
                $('.narrow', e).addClass('narrow_open');
                $('#group_chat_favourite').show('1000');
                $.cookie('group_chat_favourite', 'on');
            }

            break;
        case 'g_recent':
            if ($.cookie('group_chat_recent') != 'off') {
                $('.narrow', e).removeClass('narrow_open');
                $('#group_chat_recent').hide('1000');
                $.cookie('group_chat_recent', 'off');

            } else {
                $('.narrow', e).addClass('narrow_open');
                $('#group_chat_recent').show('1000');
                $.cookie('group_chat_recent', 'on');
            }
            break;
        case 'g_online':
            if ($.cookie('group_chat_online') != 'off') {
                $('.narrow', e).removeClass('narrow_open');
                $('#group_chat_online').hide('1000');
                $.cookie('group_chat_online', 'off');
            } else {
                $('.narrow', e).addClass('narrow_open');
                $('#group_chat_online').show('1000');
                $.cookie('group_chat_online', 'on');
            }

            break;
        case 'g_offline':
            if ($.cookie('group_chat_offline') != 'off') {
                $('.narrow', e).removeClass('narrow_open');
                $('#group_chat_offline').hide('1000');
                $.cookie('group_chat_offline', 'off');
            } else {
                $('.narrow', e).addClass('narrow_open');
                $('#group_chat_offline').show('1000');
                $.cookie('group_chat_offline', 'on');
            }
            break;
        default:
    }


}

function narrow_all_window_chat() {
    var narrow_close = ($.cookie('narrow_all_chat_box') == 'on' || $.cookie('narrow_all_chat_box') == 'off') ? $.cookie('narrow_all_chat_box') : 'on';
    if (narrow_close == 'on') {
        $('#group_chat_favourite').show('1000');
        $.cookie('group_chat_favourite', 'on');
        $('#group_chat_recent').show('1000');
        $.cookie('group_chat_recent', 'on');
        $('#group_chat_offline').show('1000');
        $.cookie('group_chat_offline', 'on');
        $('#group_chat_online').show('1000');
        $.cookie('group_chat_online', 'on');
        $.cookie('narrow_all_chat_box', 'off');
        $('#narrow_all_window_chat').text('Đóng các cửa sổ chat');

    } else {
        $('#group_chat_favourite').hide('1000');
        $.cookie('group_chat_favourite', 'off');
        $('#group_chat_recent').hide('1000');
        $.cookie('group_chat_recent', 'off');
        $('#group_chat_offline').hide('1000');
        $.cookie('group_chat_offline', 'off');
        $('#group_chat_online').hide('1000');
        $.cookie('group_chat_online', 'off');
        $.cookie('narrow_all_chat_box', 'on');
        $('#narrow_all_window_chat').text('Mở các cửa sổ chat');


    }

}

function show_only_window_chat(stt) {
    switch (stt) {
        case 'favourite':
            $('#group_chat_favourite').show('1000');
            $.cookie('group_chat_favourite', 'on');
            $('#group_chat_recent').hide('1000');
            $.cookie('group_chat_recent', 'off');
            $('#group_chat_offline').hide('1000');
            $.cookie('group_chat_offline', 'off');
            $('#group_chat_online').hide('1000');
            $.cookie('group_chat_online', 'off');

            break;
        case 'recent':
            $('#group_chat_favourite').hide('1000');
            $.cookie('group_chat_favourite', 'off');
            $('#group_chat_recent').show('1000');
            $.cookie('group_chat_recent', 'on');
            $('#group_chat_offline').hide('1000');
            $.cookie('group_chat_offline', 'off');
            $('#group_chat_online').hide('1000');
            $.cookie('group_chat_online', 'off');
            break;
        case 'online':
            $('#group_chat_favourite').hide('1000');
            $.cookie('group_chat_favourite', 'off');
            $('#group_chat_recent').hide('1000');
            $.cookie('group_chat_recent', 'off');
            $('#group_chat_offline').hide('1000');
            $.cookie('group_chat_offline', 'off');
            $('#group_chat_online').show('1000');
            $.cookie('group_chat_online', 'on');

            break;
        case 'offline':
            $('#group_chat_favourite').hide('1000');
            $.cookie('group_chat_favourite', 'off');
            $('#group_chat_recent').hide('1000');
            $.cookie('group_chat_recent', 'off');
            $('#group_chat_offline').show('1000');
            $.cookie('group_chat_offline', 'on');
            $('#group_chat_online').hide('1000');
            $.cookie('group_chat_online', 'off');
            break;
        default:
    }
}
function delay_reload() {
    scroll_box_chat = 0;
    setTimeout(function () {
        scroll_box_chat = 1;
    }, 1000);
    return true;
}


function scroll_content_box_chat(e, chatter_id) {

    if (($(e).scrollTop() == 0)) {
        var index_message = 0;
        if ($('.c_message').length > 0) {
            index_message = $('.c_message').first().attr('id');
        }
        $.ajax({
            url: url_chat + 'aj_chat_load_more',
            data: {friend_id: chatter_id, index_message: index_message},
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'callback_chat_load_more',
            success: function (data) {
                if (data.content_boxchat == 'no_load_chat') {
                    $(e).scrollTop(0);
                } else {
                    $(e).scrollTop(30);
                }
            }
        });

        return false;
    }
}
function callback_chat_load_more(data) {
    if (data.content_boxchat != 'no_load_chat') {
        $('#load_more_message').after(replace_string_in_jsonp(data.content_boxchat));
        $('.message_is_red').remove();
    }
}

function chat_calculate_timestamp() {
    $('.message_time').removeAttr('style');
    $('.message_time').last().css('display', 'block');
    if ($('.message_time_calculate').length > 0) {
        $('.message_time_calculate').each(function () {
            var timestamp = $(this).attr('timestamp');
            $(this).text(chat_calculate_time(timestamp));
        });

    }

}

function chat_calculate_time(timestamp) {
    //type cast, current time, difference in timestamps
    var current_time = Math.round((new Date()).getTime() / 1000);
    var diff = current_time - timestamp;

    //intervals in seconds
    chat_calculate_timestamp
    var year = 31556926;
    var month = 2629744;
    var week = 604800;
    var day = 86400;
    var hour = 3600;
    var minute = 60;

    //now we just find the difference
    if (diff == 0) {
        return 'vài giây trướcc';
    }

    if (diff < 60) {
        return 'khoảng 1 phút trước';
    }

    if (diff >= 60 && diff < hour) {
        diff = Math.floor(diff / minute);
        return diff + ' phút trướcc';
    }

    if (diff >= hour && diff < day) {
        diff = Math.floor(diff / hour);
        return diff + ' giờ trướcc';
    }

    if (diff >= day && diff < week) {
        diff = Math.floor(diff / day);
        if (diff < 3) {
            return diff + ' ngày trước';
        } else {
            var tmp = new Date(timestamp * 1000);
            return  tmp.getHours() + ":" + tmp.getMinutes() + ":" + tmp.getSeconds() + " ngày " + tmp.getDay() + "-" + tmp.getMonth() + "-" + tmp.getFullYear();
        }
    }

    if (diff >= week && diff < month) {
        diff = Math.floor(diff / week);
        var tmp = new Date(timestamp * 1000);
        return  tmp.getHours() + ":" + tmp.getMinutes() + ":" + tmp.getSeconds() + " ngày " + tmp.getDay() + "-" + tmp.getMonth() + "-" + tmp.getFullYear();
    }

    if (diff >= month && diff < year) {
        diff = Math.floor(diff / month);
        var tmp = new Date(timestamp * 1000);
        return  tmp.getHours() + ":" + tmp.getMinutes() + ":" + tmp.getSeconds() + " ngày " + tmp.getDay() + "-" + tmp.getMonth() + "-" + tmp.getFullYear();
    }

    if (diff >= year) {
        diff = Math.floor(diff / year);
        var tmp = new Date(timestamp * 1000);
        return  tmp.getHours() + ":" + tmp.getMinutes() + ":" + tmp.getSeconds() + " ngày " + tmp.getDay() + "-" + tmp.getMonth() + "-" + tmp.getFullYear();
    }
}

function chat_show_emotion(mess) {
    mess = mess.replace('[:angel:]', "<span class ='emotion_chat emotion_angel'></span>");
    mess = mess.replace('[:angry:]', "<span class ='emotion_chat emotion_angry'></span>");
    mess = mess.replace('[:bear:]', "<span class ='emotion_chat emotion_bear'></span>");
    mess = mess.replace('[:bigsmile:]', "<span class ='emotion_chat emotion_bigsmile'></span>");
    mess = mess.replace('[:blush:]', "<span class ='emotion_chat emotion_blush'></span>");
    mess = mess.replace('[:bow:]', "<span class ='emotion_chat emotion_bow'></span>");
    mess = mess.replace('[:call:]', "<span class ='emotion_chat emotion_call'></span>");
    mess = mess.replace('[:cash:]', "<span class ='emotion_chat emotion_cash'></span>");
    mess = mess.replace('[:clapping:]', "<span class ='emotion_chat emotion_clapping'></span>");
    mess = mess.replace('[:cool:]', "<span class ='emotion_chat emotion_cool'></span>");
    mess = mess.replace('[:crying:]', "<span class ='emotion_chat emotion_crying'></span>");
    mess = mess.replace('[:devil:]', "<span class ='emotion_chat emotion_devil'></span>");
    mess = mess.replace('[:doh:]', "<span class ='emotion_chat emotion_doh'></span>");
    mess = mess.replace('[:dull:]', "<span class ='emotion_chat emotion_dull'></span>");
    mess = mess.replace('[:emo:]', "<span class ='emotion_chat emotion_emo'></span>");
    mess = mess.replace('[:envy:]', "<span class ='emotion_chat emotion_envy'></span>");
    mess = mess.replace('[:evilgrin:]', "<span class ='emotion_chat emotion_evilgrin'></span>");
    mess = mess.replace('[:gigle:]', "<span class ='emotion_chat emotion_gigle'></span>");
    mess = mess.replace('[:handshake:]', "<span class ='emotion_chat emotion_handshake'></span>");
    mess = mess.replace('[:happy:]', "<span class ='emotion_chat emotion_happy'></span>");
    mess = mess.replace('[:heart:]', "<span class ='emotion_chat emotion_heart'></span>");
    mess = mess.replace('[:hi:]', "<span class ='emotion_chat emotion_hi'></span>");
    mess = mess.replace('[:inlove:]', "<span class ='emotion_chat emotion_inlove'></span>");
    mess = mess.replace('[:itwasntme:]', "<span class ='emotion_chat emotion_itwasntme'></span>");
    mess = mess.replace('[:kiss:]', "<span class ='emotion_chat emotion_kiss'></span>");
    mess = mess.replace('[:lipssealed:]', "<span class ='emotion_chat emotion_lipssealed'></span>");
    mess = mess.replace('[:makeup:]', "<span class ='emotion_chat emotion_makeup'></span>");
    mess = mess.replace('[:mmm:]', "<span class ='emotion_chat emotion_mmm'></span>");
    mess = mess.replace('[:muscle:]', "<span class ='emotion_chat emotion_muscle'></span>");
    mess = mess.replace('[:nerd:]', "<span class ='emotion_chat emotion_nerd'></span>");
    mess = mess.replace('[:no:]', "<span class ='emotion_chat emotion_no'></span>");
    mess = mess.replace('[:nod:]', "<span class ='emotion_chat emotion_nod'></span>");
    mess = mess.replace('[:party:]', "<span class ='emotion_chat emotion_party'></span>");
    mess = mess.replace('[:puke:]', "<span class ='emotion_chat emotion_puke'></span>");
    mess = mess.replace('[:punch:]', "<span class ='emotion_chat emotion_punch'></span>");
    mess = mess.replace('[:rofl:]', "<span class ='emotion_chat emotion_rofl'></span>");
    mess = mess.replace('[:sadsmile:]', "<span class ='emotion_chat emotion_sadsmile'></span>");
    mess = mess.replace('[:shake:]', "<span class ='emotion_chat emotion_shake'></span>");
    mess = mess.replace('[:sleepy:]', "<span class ='emotion_chat emotion_sleepy'></span>");
    mess = mess.replace('[:smile:]', "<span class ='emotion_chat emotion_smile'></span>");
    mess = mess.replace('[:smirk:]', "<span class ='emotion_chat emotion_smirk'></span>");
    mess = mess.replace('[:speechless:]', "<span class ='emotion_chat emotion_speechless'></span>");
    mess = mess.replace('[:surprised:]', "<span class ='emotion_chat emotion_surprised'></span>");
    mess = mess.replace('[:sweating:]', "<span class ='emotion_chat emotion_sweating'></span>");
    mess = mess.replace('[:talking:]', "<span class ='emotion_chat emotion_talking'></span>");
    mess = mess.replace('[:thinking:]', "<span class ='emotion_chat emotion_thinking'></span>");
    mess = mess.replace('[:tongueout:]', "<span class ='emotion_chat emotion_tongueout'></span>");
    mess = mess.replace('[:wait:]', "<span class ='emotion_chat emotion_wait'></span>");
    mess = mess.replace('[:whew:]', "<span class ='emotion_chat emotion_whew'></span>");
    mess = mess.replace('[:wink:]', "<span class ='emotion_chat emotion_wink'></span>");
    mess = mess.replace('[:wondering:]', "<span class ='emotion_chat emotion_wondering'></span>");
    mess = mess.replace('[:worried:]', "<span class ='emotion_chat emotion_worried'></span>");
    mess = mess.replace('[:yawn:]', "<span class ='emotion_chat emotion_yawn'></span>");
    mess = mess.replace('[:yes:]', "<span class ='emotion_chat emotion_yes'></span>");
    ////////////////
    mess = mess.replace('[:smh_01:]', "<span class ='emotion_chat emotion_smh_01'></span>");
    mess = mess.replace('[:smh_02:]', "<span class ='emotion_chat emotion_smh_02'></span>");
    mess = mess.replace('[:smh_03:]', "<span class ='emotion_chat emotion_smh_03'></span>");
    mess = mess.replace('[:smh_04:]', "<span class ='emotion_chat emotion_smh_04'></span>");
    mess = mess.replace('[:smh_05:]', "<span class ='emotion_chat emotion_smh_05'></span>");
    mess = mess.replace('[:smh_06:]', "<span class ='emotion_chat emotion_smh_06'></span>");
    mess = mess.replace('[:smh_07:]', "<span class ='emotion_chat emotion_smh_07'></span>");
    mess = mess.replace('[:smh_08:]', "<span class ='emotion_chat emotion_smh_08'></span>");
    mess = mess.replace(':D', "<span class ='emotion_chat emotion_smh_08'></span>");
    mess = mess.replace('[:smh_09:]', "<span class ='emotion_chat emotion_smh_09'></span>");
    mess = mess.replace('[:smh_10:]', "<span class ='emotion_chat emotion_smh_10'></span>");
    mess = mess.replace('[:smh_11:]', "<span class ='emotion_chat emotion_smh_11'></span>");
    mess = mess.replace('[:smh_12:]', "<span class ='emotion_chat emotion_smh_12'></span>");
    mess = mess.replace('[:smh_13:]', "<span class ='emotion_chat emotion_smh_13'></span>");
    mess = mess.replace('[:smh_14:]', "<span class ='emotion_chat emotion_smh_14'></span>");
    mess = mess.replace('[:smh_15:]', "<span class ='emotion_chat emotion_smh_15'></span>");
    mess = mess.replace('[:smh_16:]', "<span class ='emotion_chat emotion_smh_16'></span>");
    mess = mess.replace('[:smh_17:]', "<span class ='emotion_chat emotion_smh_17'></span>");
    mess = mess.replace('[:smh_18:]', "<span class ='emotion_chat emotion_smh_18'></span>");
    mess = mess.replace('[:smh_19:]', "<span class ='emotion_chat emotion_smh_19'></span>");
    mess = mess.replace('[:smh_20:]', "<span class ='emotion_chat emotion_smh_20'></span>");
    mess = mess.replace('[:smh_21:]', "<span class ='emotion_chat emotion_smh_21'></span>");
    mess = mess.replace('[:smh_22:]', "<span class ='emotion_chat emotion_smh_22'></span>");
    mess = mess.replace('[:smh_23:]', "<span class ='emotion_chat emotion_smh_23'></span>");
    mess = mess.replace('[:smh_24:]', "<span class ='emotion_chat emotion_smh_24'></span>");
    mess = mess.replace('[:smh_25:]', "<span class ='emotion_chat emotion_smh_25'></span>");
    mess = mess.replace(':)', "<span class ='emotion_chat emotion_smh_25'></span>");
    mess = mess.replace('[:smh_26:]', "<span class ='emotion_chat emotion_smh_26'></span>");
    mess = mess.replace('[:smh_27:]', "<span class ='emotion_chat emotion_smh_27'></span>");
    mess = mess.replace('[:smh_28:]', "<span class ='emotion_chat emotion_smh_28'></span>");
    mess = mess.replace('[:smh_29:]', "<span class ='emotion_chat emotion_smh_29'></span>");
    mess = mess.replace('[:smh_30:]', "<span class ='emotion_chat emotion_smh_30'></span>");
    mess = mess.replace('[:smh_31:]', "<span class ='emotion_chat emotion_smh_31'></span>");
    mess = mess.replace('[:smh_32:]', "<span class ='emotion_chat emotion_smh_32'></span>");
    mess = mess.replace('[:smh_33:]', "<span class ='emotion_chat emotion_smh_33'></span>");
    mess = mess.replace('[:smh_34:]', "<span class ='emotion_chat emotion_smh_34'></span>");
    mess = mess.replace('[:smh_35:]', "<span class ='emotion_chat emotion_smh_35'></span>");
    mess = mess.replace('[:smh_36:]', "<span class ='emotion_chat emotion_smh_36'></span>");
    mess = mess.replace('[:smh_37:]', "<span class ='emotion_chat emotion_smh_37'></span>");
    mess = mess.replace('[:smh_38:]', "<span class ='emotion_chat emotion_smh_38'></span>");
    mess = mess.replace('[:smh_39:]', "<span class ='emotion_chat emotion_smh_39'></span>");
    mess = mess.replace('[:smh_40:]', "<span class ='emotion_chat emotion_smh_40'></span>");
    mess = mess.replace('[:smh_41:]', "<span class ='emotion_chat emotion_smh_41'></span>");
    mess = mess.replace('[:smh_42:]', "<span class ='emotion_chat emotion_smh_42'></span>");
    mess = mess.replace('[:smh_43:]', "<span class ='emotion_chat emotion_smh_43'></span>");
    mess = mess.replace('[:smh_44:]', "<span class ='emotion_chat emotion_smh_44'></span>");
    mess = mess.replace('=((', "<span class ='emotion_chat emotion_smh_44'></span>");
    mess = mess.replace('[:smh_45:]', "<span class ='emotion_chat emotion_smh_45'></span>");
    mess = mess.replace('[:smh_46:]', "<span class ='emotion_chat emotion_smh_46'></span>");
    mess = mess.replace('[:smh_47:]', "<span class ='emotion_chat emotion_smh_47'></span>");
    mess = mess.replace('[:smh_48:]', "<span class ='emotion_chat emotion_smh_48'></span>");
    mess = mess.replace('[:smh_49:]', "<span class ='emotion_chat emotion_smh_49'></span>");
    mess = mess.replace('[:smh_50:]', "<span class ='emotion_chat emotion_smh_50'></span>");
    mess = mess.replace('[:smh_51:]', "<span class ='emotion_chat emotion_smh_51'></span>");
    mess = mess.replace('[:smh_52:]', "<span class ='emotion_chat emotion_smh_52'></span>");
    mess = mess.replace('[:smh_53:]', "<span class ='emotion_chat emotion_smh_53'></span>");
    mess = mess.replace('[:smh_54:]', "<span class ='emotion_chat emotion_smh_54'></span>");
    mess = mess.replace('[:smh_55:]', "<span class ='emotion_chat emotion_smh_55'></span>");
    mess = mess.replace('[:smh_56:]', "<span class ='emotion_chat emotion_smh_56'></span>");
    mess = mess.replace('[:smh_57:]', "<span class ='emotion_chat emotion_smh_57'></span>");
    mess = mess.replace('[:smh_58:]', "<span class ='emotion_chat emotion_smh_58'></span>");
    mess = mess.replace('[:smh_59:]', "<span class ='emotion_chat emotion_smh_59'></span>");
    mess = mess.replace('[:smh_60:]', "<span class ='emotion_chat emotion_smh_60'></span>");
    mess = mess.replace('[:smh_61:]', "<span class ='emotion_chat emotion_smh_61'></span>");
    mess = mess.replace('[:smh_62:]', "<span class ='emotion_chat emotion_smh_62'></span>");
    mess = mess.replace('[:smh_63:]', "<span class ='emotion_chat emotion_smh_63'></span>");
    mess = mess.replace('[:smh_64:]', "<span class ='emotion_chat emotion_smh_64'></span>");
    mess = mess.replace('[:smh_65:]', "<span class ='emotion_chat emotion_smh_65'></span>");
    mess = mess.replace('[:smh_66:]', "<span class ='emotion_chat emotion_smh_66'></span>");
    return mess;
}

function chat_sync_logout(e, uid) {
    var url_redirect = $(e).attr('href');
    $.ajax({
        url: url_chat + 'aj_sync_tb_online_logout',
        data: {uid: uid},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback_sync_tb_online_logout',
        success: function (data) {
            //$.cookie('ta123_chat_login', null);
//            $.removeCookie('ta123_chat_login');
            $.removeCookie('box_enable');
            $.removeCookie('box_chat');
            $.removeCookie('user_chatting');
        }
    });
    setTimeout(function () {
        window.location.href = url_redirect;
    }, 500);
    return false;
}

function callback_sync_tb_online_logout(data) {
    setTimeout(function () {
        console.log(data);
    }, 1500);
}





