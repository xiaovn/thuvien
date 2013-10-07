/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 9/4/13
 * Time: 9:15 AM
 * To change this template use File | Settings | File Templates.
 */
var vip = 0;
if (paidmember()) {
    vip = 1;
}
var arr_drag_position = new Array();
var arr_drop_position = new Array();
$(document).ready(function () {
    game_drag_drop();


});

function game_drag_drop() {
    create_arr_result();
    create_item_drag();
    order_item_drag();
    reorder_item_drop();
    // drag drop
    var id_drag = 0;
    var id_drop = 0;
    var top_drag = 0;
    var left_drag = 0;
    var top_drop = 0;
    var left_drop = 0;
    var is_drop = 0;
    var is_drag = 0;
    var id_drag_out = 0;
    var position_drag = 0;
    var position_drop = 0;
    var stt_drag = 0;
    $('.drag_item').draggable({
        start: function (event, ui) {
            id_drag = $(this).attr('id'); // drag_17
            stt_drag = $(this).attr('drag');
            top_drag = parseInt($('#drag_p_' + stt_drag).position().top);
            left_drag = parseInt($('#drag_p_' + stt_drag).position().left);
            is_drop = 0;
        },
        drag: function (event, ui) {
            if (parseInt($(this).css('top')) < 50) {
                id_drag_out = 0
            }
        },
        stop: function (event, ui) {
            if (is_drop == 0) {
                $('#' + id_drag).animate({
                    top: top_drag,
                    left: left_drag
                }, 300);
                reorder_item();

            }
        }
    });
    $('.blank_drop').droppable({
        accept: '.drag_item',
        hoverClass: "drag-hover",
        tolerance: "intersect",
        start: function (event, ui) {

        },
        drop: function (event, ui) {
            id_drop = $(this).attr('id');
            top_drop = parseInt($('#' + id_drop).position().top);
            left_drop = parseInt($('#' + id_drop).position().left);
            $(this).text($('#' + id_drag).text());
            $('#' + id_drag).animate({
                top: top_drop,
                left: left_drop
            }, 300);
            is_drop = 1;
            setTimeout(function () {
                is_drop = 0;
            }, 1000);
            if ((parseInt($(this).attr('drag_id')) != 0) && ($(this).attr('drag_id') != id_drag)) {
                var id_drag_in_drop = $(this).attr('drag_id');
                console.log(id_drag_in_drop);

                if (parseInt(id_drag_out) != 0) {
                    top_drag = $('#' + id_drag_out).position().top;
                    left_drag = $('#' + id_drag_out).position().left;
                } else {
                    var temp_drag = $('#' + id_drag_in_drop).attr('drag');
                    top_drag = $('#drag_p_' + temp_drag).position().top;
                    left_drag = $('#drag_p_' + temp_drag).position().left;
                }
                $('#' + id_drag_in_drop).animate({
                    top: top_drag,
                    left: left_drag
                }, 300);
                $('#' + id_drag_out).attr('drag_id', id_drag_in_drop);
                $('#' + id_drag_out).text($('#' + id_drag_in_drop).text());
                $(this).attr('drag_id', id_drag);

            }
            $(this).attr('drag_id', id_drag);
            reorder_item();
        },
        out: function (event, ui) {
            if (id_drag == $(this).attr('drag_id')) {
                $(this).text('text')
                id_drag_out = $(this).attr('id');
                $(this).attr('drag_id', 0);
            }

        }
    });
    //end drag drop
}


function reorder_item() {
    $(".blank_drop").each(function () {
        var top_temp = $(this).position().top;
        var left_temp = $(this).position().left;
        var id_drag_temp = $(this).attr('drag_id');

        $('#' + id_drag_temp).animate({
            top: top_temp,
            left: left_temp
        }, 300);
    });
}


function create_item_drag() {
    for (var i = 0; i < arr_result.length; i++) {
        $('.drag_area').append('<div class="drag_item">' + arr_result[i] + '</div>');
    }
    for (var i = 0; i < arr_result.length; i++) {
        $('.drag_area').append('<div class="drag_item_p">' + arr_result[i] + '</div>');
    }

}

var arr_result = new Array();
function create_arr_result() {
    var k = 0;
    for (var i = 0; i < arr_text.length; i++) {
        var temp = arr_text[i].split('_');
        for (var j = 0; j < temp.length; j++) {
            arr_result[k] = temp[j];
            k++;
        }
    }
}


function order_item_drag() {
    var i = 0;
    $(".drag_item").each(function () {
        $(this).attr('id', 'drag_' + (parseInt(i) + 1));
        $(this).attr('drag', (i + 1));
        $(this).attr('arr_stt', i);
        $(this).addClass('no_border');
        $(this).attr('a_stt', i);
        arr_drag_position[i] = {"top": $(this).position().top, "left": $(this).position().left, "width": $(this).outerWidth(), "height": $(this).outerHeight()};
        i++;
    });
    var j = 0;
    $(".drag_item_p").each(function () {
        $(this).css('position', 'absolute');
        $(this).css('opacity', 0.5);
        $(this).attr('id', 'drag_p_' + (parseInt(j) + 1));
        var atr = arr_drag_position[j];
        $(this).css('top', atr.top + 'px');
        $(this).attr('a_stt', j);
        $(this).css('left', atr.left + 'px');
        j++;
    });
    reorder_drag_item(arr_result);
}

function reorder_item_drop() {
    var i = 0;
    $(".blank_drop").each(function () {
        $(this).attr('id', 'drop_' + (parseInt(i) + 1));
        $(this).attr('drop', (i + 1));
        $(this).attr('arr_stt', i);
        $(this).attr('drag_id', 0);
        arr_drop_position[i] = {"top": $(this).position().top, "left": $(this).position().left, "width": $(this).outerWidth(), "height": $(this).outerHeight()};
        i++;
    });

    var p = 0;
    $(".paragraph_drop").each(function () {
        $(this).attr('id', 'paragraph_' + p);
        $(this).attr('p_answer', 2);
        p++;
    });

}

function reorder_drag_item(arr_drag) {
    var arr_temp = [];
    for (var k = 0; k < arr_drag.length; k++) {
        var ck = true;
        while (ck) {
            // Math.floor(Math.random() * (max - min + 1) + min)
            var number = parseInt(Math.floor(Math.random() * (parseInt(arr_drag.length) + 1)));
            if ($.inArray(parseInt(number), arr_temp) == -1 && parseInt(number) > 0) {
                arr_temp[k] = parseInt(number);
                ck = false;
            }
        }
    }
    for (var i = 0; i < arr_temp.length; i++) {
        $('#drag_' + arr_temp[i]).appendTo('.drag_area');
    }

    for (var i = 0; i < arr_temp.length; i++) {
        $('#drag_p_' + arr_temp[i]).css('top', $('#drag_' + arr_temp[i]).position().top + 'px');
        $('#drag_p_' + arr_temp[i]).css('left', $('#drag_' + arr_temp[i]).position().left + 'px');
        $('#drag_p_' + arr_temp[i]).css('z-index', '10');
    }

    for (var i = 0; i < arr_temp.length; i++) {
        $('#drag_' + arr_temp[i]).css('position', 'absolute');
        $('#drag_' + arr_temp[i]).css('z-index', 20);
        $('#drag_' + arr_temp[i]).css('top', $('#drag_p_' + arr_temp[i]).position().top + 'px');
        $('#drag_' + arr_temp[i]).css('left', $('#drag_p_' + arr_temp[i]).position().left + 'px');

    }
}

function submit_game() {
    $('html').animate({scrollTop: 350}, 'slow');

    if (parseInt(vip) == 0) {
        $('#submit_result').html('<div style="display:block; color:green" class="base_result">Bạn phải là <a style="color:#0d6af7; text-decoration:underline" title="quyền lợi thành viên VIP" target="_blank" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/>thành viên VIP của TiếngAnh123.Com</a> mới được xem kết quả và đáp án.</div>');
        $('#submit_result').show();
        return true;
    }
    $('.drag_area,#btn_submit,#hr_area').hide();
    $('#btn_show_answer,#submit_result').show();
    var result_submit = new Array();
    var i = 0;
    $('.paragraph_drop').attr('p_answer', 2);
    var correct = 0;
    $(".blank_drop").each(function () {
        var sb_id_drag = $(this).attr('drag_id');
        if (sb_id_drag == 0) {
            result_submit[i] = 'f123';
        } else {
            $(this).addClass('text_black');
            result_submit[i] = $('#' + sb_id_drag).text();
        }
        if ($.trim(arr_result[i]) != $.trim(result_submit[i])) {
            $(this).closest('.paragraph_drop').attr('p_answer', 0);
        } else {
            if (parseInt($(this).closest('.paragraph_drop').attr('p_answer')) == 2) {
                $(this).closest('.paragraph_drop').attr('p_answer', 1);
                correct++;
            }
        }

        i++;
    });

    $('.drop_area .paragraph_drop').each(function () {
        if (parseInt($(this).attr('p_answer')) == 0) {
            $(this).append('<span class="s_key key_false"></span>');
        } else {
            $(this).append('<span class="s_key key_true"></span>');
        }
    });
    $('#submit_result').text('Bạn đã làm đúng ' + correct + '/' + $('.paragraph_drop').length + ' câu');
    return false;
}

function show_answer() {
    $('.content_answer').html($('.drop_area').html());
    $('.gkt_box_answer,#btn_redo').show();
    $('#btn_show_answer').hide();
    var i = 0;
    $('.content_answer .blank_drop').each(function () {
        $(this).text(arr_result[i]);
        i++;
    });
    var m = 0;
    $('.content_answer .paragraph_drop').each(function () {

        $(this).append('<div class="text_translation">' + arr_translate[m] + '</div>');
        m++;
    });
    $('.content_answer .blank_drop').removeClass('text_black');
    $('.content_answer .s_key').remove();


}

function redo_game() {
    $('.blank_drop').removeClass('text_black');
    $('.blank_drop').text('text');
    $('.drag_area').html('');
    $('.content_answer').html('');
    $('.drag_area,#btn_submit,#hr_area').show();
    $('#btn_show_answer,.gkt_box_answer,#btn_redo,#submit_result').hide();
    $('.s_key').remove();
    game_drag_drop();
    $('html').animate({scrollTop: 350}, 'slow');

}