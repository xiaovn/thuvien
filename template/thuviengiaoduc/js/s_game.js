var vip = 0;
if (paidmember()) {
    vip = 1;
}
var rs_img = [0, 0, 0, 0, 0, 0, 0, 0];
var rs_text = [0, 0, 0, 0, 0, 0, 0, 0];
$(document).ready(function () {
    /// drag drop image
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
    $('.stt_drag').draggable({
        start: function (event, ui) {
            id_drag = $(this).attr('id');
            top_drag = parseInt($('#' + id_drag).css('top'));
            left_drag = parseInt($('#' + id_drag).css('left'));
            is_drop = 0;

        },
        drag: function (event, ui) {
            position_drag = $(this).attr('drag');
            if (parseInt($(this).css('top')) > 450) {
                id_drag_out = 0;
            }

        },
        stop: function (event, ui) {
            if (is_drop == 0) {
                if ($.inArray(parseInt($(this).attr('drag')), [1, 2, 3, 4]) != '-1') {
                    top_drag = '530px';

                } else {
                    top_drag = '665px'
                }
                if (parseInt($(this).attr('drag')) == 1 || parseInt($(this).attr('drag')) == 5) {
                    left_drag = '0px';
                }
                if (parseInt($(this).attr('drag')) == 2 || parseInt($(this).attr('drag')) == 6) {
                    left_drag = '191px';
                }
                if (parseInt($(this).attr('drag')) == 3 || parseInt($(this).attr('drag')) == 7) {
                    left_drag = '382px';
                }
                if (parseInt($(this).attr('drag')) == 4 || parseInt($(this).attr('drag')) == 8) {
                    left_drag = '573px';
                }

                $('#' + id_drag).animate({
                    top: top_drag,
                    left: left_drag
                }, 300);
            }
        }
    });
    $('.stt_drop').droppable({
        accept: '.stt_drag',
        hoverClass: "drag-hover",
        tolerance: "intersect",
        start: function (event, ui) {

        },
        drop: function (event, ui) {
            position_drop = $(this).attr('inx');
            rs_img[parseInt(position_drop)] = parseInt(position_drag);
            id_drop = $(this).attr('id');
            top_drop = parseInt($('#' + id_drop).css('top'));
            left_drop = parseInt($('#' + id_drop).css('left'));
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
                if (parseInt(id_drag_out) == 0) {
                    if ($.inArray(parseInt($('#' + id_drag_in_drop).attr('drag')), [1, 2, 3, 4]) != '-1') {
                        top_drag = '530px';

                    } else {
                        top_drag = '665px'
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 1 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 5) {
                        left_drag = '0px';
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 2 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 6) {
                        left_drag = '191px';
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 3 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 7) {
                        left_drag = '382px';
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 4 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 8) {
                        left_drag = '573px';
                    }

                }

                $('#' + id_drag_in_drop).animate({
                    top: top_drag,
                    left: left_drag
                }, 300);
                $('#' + id_drag_out).attr('drag_id', id_drag_in_drop);
                $(this).attr('drag_id', id_drag);
                var tem1 = $('#' + id_drag_in_drop).attr('drag');
                var tem2 = $('#' + $(this).attr('drag_id')).attr('drag');
                var po1 = $('#' + id_drag_out).attr('inx');
                var po2 = $(this).attr('inx');
                rs_img[parseInt(po1)] = parseInt(tem1);
                rs_img[parseInt(po2)] = parseInt(tem2);
            }
            $(this).attr('drag_id', id_drag);
        },
        out: function (event, ui) {
            if (id_drag == $(this).attr('drag_id')) {
                $(this).attr('drag_id', 0);
                id_drag_out = $(this).attr('id');
                position_drop = $(this).attr('inx');
                rs_img[parseInt(position_drop)] = 0;
            }
        }
    });


    // drag drog text
    $('.stt_drag_text').draggable({
        start: function (event, ui) {
            id_drag = $(this).attr('id');
            top_drag = parseInt($('#' + id_drag).css('top'));
            left_drag = parseInt($('#' + id_drag).css('left'));
            is_drop = 0;

        },
        drag: function (event, ui) {
            position_drag = $(this).attr('drag');
            if (parseInt($(this).css('top')) > 450) {
                id_drag_out = 0;
            }
        },
        stop: function (event, ui) {
            if ($.inArray(parseInt($(this).attr('drag')), [1, 2, 3, 4]) != '-1') {
                top_drag = '460px';

            } else {
                top_drag = '495px'
            }
            if (is_drop == 0) {
                if (parseInt($(this).attr('drag')) == 1 || parseInt($(this).attr('drag')) == 5) {
                    left_drag = '0px';
                }
                if (parseInt($(this).attr('drag')) == 2 || parseInt($(this).attr('drag')) == 6) {
                    left_drag = '185px';
                }
                if (parseInt($(this).attr('drag')) == 3 || parseInt($(this).attr('drag')) == 7) {
                    left_drag = '370px';
                }
                if (parseInt($(this).attr('drag')) == 4 || parseInt($(this).attr('drag')) == 8) {
                    left_drag = '555px';
                }
                $('#' + id_drag).animate({
                    top: top_drag,
                    left: left_drag
                }, 300);
                // $('#' + id_drop).text("(Kéo Từ vào đây)");
            }
        }
    });
    $('.stt_drop_text').droppable({
        accept: '.stt_drag_text',
        hoverClass: "drag-hover",
        start: function (event, ui) {

        },
        drop: function (event, ui) {
            position_drop = $(this).attr('inx');
            rs_text[parseInt(position_drop)] = parseInt(position_drag);
            id_drop = $(this).attr('id');
            top_drop = parseInt($('#' + id_drop).css('top'));
            left_drop = parseInt($('#' + id_drop).css('left'));
            $('#' + id_drag).animate({
                top: top_drop,
                left: left_drop
            }, 300);
            $(this).text("");
            is_drop = 1;
            setTimeout(function () {
                is_drop = 0;
            }, 1000);
            if ((parseInt($(this).attr('drag_id')) != 0) && ($(this).attr('drag_id') != id_drag)) {
                var id_drag_in_drop = $(this).attr('drag_id');
                if (parseInt(id_drag_out) == 0) {
                    if ($.inArray(parseInt($('#' + id_drag_in_drop).attr('drag')), [1, 2, 3, 4]) != '-1') {
                        top_drag = '460px';
                    } else {
                        top_drag = '495px'
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 1 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 5) {
                        left_drag = '0px';
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 2 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 6) {
                        left_drag = '185px';
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 3 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 7) {
                        left_drag = '370px';
                    }
                    if (parseInt($('#' + id_drag_in_drop).attr('drag')) == 4 || parseInt($('#' + id_drag_in_drop).attr('drag')) == 8) {
                        left_drag = '555px';
                    }

                }
                $('#' + id_drag_in_drop).animate({
                    top: top_drag,
                    left: left_drag
                }, 300);
                $('#' + id_drag_out).attr('drag_id', id_drag_in_drop);
                $('#' + id_drag_out).text('');
                $(this).attr('drag_id', id_drag);
                var tem1 = $('#' + id_drag_in_drop).attr('drag');
                var tem2 = $('#' + $(this).attr('drag_id')).attr('drag');
                var po1 = $('#' + id_drag_out).attr('inx');
                var po2 = $(this).attr('inx');
                rs_text[parseInt(po1)] = parseInt(tem1);
                rs_text[parseInt(po2)] = parseInt(tem2);
            }
            $(this).attr('drag_id', id_drag);

        },

        over: function (event, ui) {

        },
        out: function (event, ui) {
            if (id_drag == $(this).attr('drag_id')) {
                $(this).attr('drag_id', 0);
                id_drag_out = $(this).attr('id');
                $(this).text('(Kéo từ vào đây)');
                position_drop = $(this).attr('inx');
                rs_text[parseInt(position_drop)] = 0;
            }

        }
    });
});
//
var div_false = '<div class="gkt_tf_icon"><img src="'+img_false+'"></div>';
var div_true = '<div class="gkt_tf_icon"><img src="'+img_true+'"></div>';


function submit_game() {
    if (parseInt(vip) == 0) {
        $('#submit_result').html('<div style="display:block; color:green" class="base_result">Bạn phải là <a style="color:#0d6af7; text-decoration:underline" title="quyền lợi thành viên VIP" target="_blank" href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/>thành viên VIP của TiếngAnh123.Com</a> mới được xem kết quả và đáp án.</div>');
        $('#submit_result').show();
        return true;
    }
    $('html').animate({scrollTop: 350}, 'slow');
//    $('#drop_1').html($('#drag_img_1').clone());
    $('.gkt_tf_icon').remove();
    for (var k = 0; k < 8; k++) {
        if ($('#drag_img_' + rs_img[k]).html() != null) {
            var html_tem = $('#drag_img_' + rs_img[k]).html();
            $('#drop_' + (parseInt(k) + 1)).html(html_tem);
        }
    }

    for (var l = 0; l < 8; l++) {
        if ($('#drag_text_' + rs_text[l]).html() != null) {
            var html_tem = $('#drag_text_' + rs_text[l]).html();
            $('#drop_text_' + (parseInt(l) + 1)).html(html_tem);
        }
    }


    var j = 0;
    for (var i = 0; i < 8; i++) {
        if ((answer_img[i] == rs_img[i]) && (answer_text[i] == rs_text[i])) {
            $('#area_' + i).prepend(div_true);
            j++;
        } else {
            $('#area_' + i).prepend(div_false);
        }
    }
    $('#submit_result').show();
    $('#submit_result').text('Bạn đã làm đúng ' + j + '/8 câu');
    $('.gkt_line_ar,.gkt_bottom_box,.gkt_text_box,.gkt_box_answer,.gkt_redo_bt').hide();
    $('#btn_show_answer').show();

    return true;
}

function show_answer() {
    $('.gkt_box_answer,.gkt_box_answer,.gkt_redo_bt').show();
    $('#btn_redo').show();
    $('#btn_show_answer').hide();
    for (var k = 0; k < 8; k++) {
        if ($('#drag_img_' + answer_img[k]).html() != null) {
            var html_tem = $('#drag_img_' + answer_img[k]).html();
            $('#answer_img_' + (parseInt(k) + 1)).html(html_tem);
        }
    }

    for (var l = 0; l < 8; l++) {
        if ($('#drag_text_' + answer_text[l]).html() != null) {
            var html_tem = $('#drag_text_' + answer_text[l]).html();
            $('#answer_text_' + (parseInt(l) + 1)).html(html_tem);
        }
    }
}

function redo_game() {
    $('html').animate({scrollTop: 350}, 'slow');
    $('.gkt_tf_icon').remove();
    $('#btn_redo').hide();
    $('.gkt_box_answer').hide();
    $('#submit_result').hide();
    $('.gkt_line_ar,.gkt_bottom_box,.gkt_text_box').show();
    $('.stt_drop').html('(Ảnh)');
    $('.stt_drop_text').html('(Kéo từ vào đây)');
    rs_img = [0, 0, 0, 0, 0, 0, 0, 0];
    rs_text = [0, 0, 0, 0, 0, 0, 0, 0];


    $(".stt_drag").each(function () {
        var top_drag_default = 0;
        var left_drag_default = 0;
        if ($.inArray(parseInt($(this).attr('drag')), [1, 2, 3, 4]) != '-1') {
            top_drag_default = '530px';

        } else {
            top_drag_default = '665px'
        }
        if (parseInt($(this).attr('drag')) == 1 || parseInt($(this).attr('drag')) == 5) {
            left_drag_default = '0px';
        }
        if (parseInt($(this).attr('drag')) == 2 || parseInt($(this).attr('drag')) == 6) {
            left_drag_default = '191px';
        }
        if (parseInt($(this).attr('drag')) == 3 || parseInt($(this).attr('drag')) == 7) {
            left_drag_default = '382px';
        }
        if (parseInt($(this).attr('drag')) == 4 || parseInt($(this).attr('drag')) == 8) {
            left_drag_default = '573px';
        }

        $('#' + $(this).attr('id')).animate({
            top: top_drag_default,
            left: left_drag_default
        }, 300);
    });

    $(".stt_drag_text").each(function () {
        var top_drag_default = 0;
        var left_drag_default = 0;
        if ($.inArray(parseInt($(this).attr('drag')), [1, 2, 3, 4]) != '-1') {
            top_drag_default = '460px';

        } else {
            top_drag_default = '495px'
        }
        if (parseInt($(this).attr('drag')) == 1 || parseInt($(this).attr('drag')) == 5) {
            left_drag_default = '0px';
        }
        if (parseInt($(this).attr('drag')) == 2 || parseInt($(this).attr('drag')) == 6) {
            left_drag_default = '185px';
        }
        if (parseInt($(this).attr('drag')) == 3 || parseInt($(this).attr('drag')) == 7) {
            left_drag_default = '370px';
        }
        if (parseInt($(this).attr('drag')) == 4 || parseInt($(this).attr('drag')) == 8) {
            left_drag_default = '555px';
        }
        $('#' + $(this).attr('id')).animate({
            top: top_drag_default,
            left: left_drag_default
        }, 300);

    });


}
