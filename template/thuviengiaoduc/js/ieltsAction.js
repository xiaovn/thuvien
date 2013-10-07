// thanh vien vip
var vip = 0;
var msg_vip = 'Bạn phải là <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html"/*tpa=http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html*/ target="_blank" title="quyền lợi thành viên VIP"  style="color:#0d6af7;">thành viên VIP </a> của TiếngAnh123.Com mới được học tiếp bài học này.';

if (paidmember()) {
    vip = 1;
}
$(document).ready(function () {
    if (vip == 0) {
        $('.is_vip').addClass('non_vip').html(msg_vip).css('float', 'left');
        if ($('.box_active .non_vip').length == 1) {
            $('.bt_next').addClass('bt_next_dis');
        }
    }

    var total = parseInt($('.bt_total').text());
    if (total == 1) {
        $('.iets_control_bt').show();
        $('.iets_bottom').hide();
    }
    if ($('.part_drop').length > 0) {
        var ok_drop = 1;
        $(".stt_drag").draggable({
            start: function (event, ui) {
                event.stopPropagation();
            },
            drag: function (event, ui) {
                $(this).css('z-index', '200');
                ok_drop = 1;
                if ($('.drag-hover').length > 1) {
                    ok_drop = 0;
                }
            }, stop: function () {
                $(this).css('z-index', '0');
                if ($(this).attr('draged')) {
                } else {
                    var inx_drag = parseInt($(this).attr('inx'));
                    var top_drag = inx_drag * 50 + 'px';
                    $(this).animate({
                        top: top_drag,
                        left: '15px'
                    });
                }
            }
        });
        $('.part_drop').each(function (i) {
            $('.part_drop:eq(' + i + ') .stt_drop').each(function () {
                $('.part_drag:eq(' + i + ') .stt_drag').addClass('stt_drag_' + i);
                $(this).droppable({
                    accept: '.stt_drag_' + i,
                    hoverClass: "drag-hover",
                    tolerance: "touch",
                    drop: function (event, ui) {
                        event.stopPropagation();
                        if (ok_drop == 1) {
                            var inx_drop = parseInt($(this).attr('inx'));
                            var top_drop = (inx_drop * 100 + 54) + 'px';
                            var inx_drag = parseInt($(ui.draggable).attr('inx'));
                            var drop = $(this).attr('drop');
                            var drag = $(ui.draggable).attr('drag');
                            $(this).attr('droped', drag);
                            $(ui.draggable).css('z-index', '0');
                            that = this;
                            if ($(this).attr('droped') != '') {
                                top_drag = parseInt($('.stt_drag_' + i + '[draged=' + drop + ']').not(ui.draggable).attr('inx')) * 50 + 'px';
                                $('.stt_drag_' + i + '[draged=' + drop + ']').css('z-index', '0').not(ui.draggable).animate({
                                    top: top_drag,
                                    left: '15px'
                                }, 400).removeAttr('draged');
                            }
                            $(ui.draggable).animate({
                                top: top_drop,
                                left: '-395px'
                            }, 300);
                            $(ui.draggable).attr('draged', drop);

                        }
                    },
                    over: function (event, ui) {
                        $(ui.draggable).removeAttr('draged');
                    }
                });
            });
        });
    }

    // sequence
    if ($('.ielts_sort_drag').length > 0) {
        $(".ielts_sort_drag").draggable({
            drag: function (event, ui) {
                $('.ielts_sort_drag').css('z-index', '100');
                $(this).css('z-index', '200');
            },
            stop: function () {
                if ($(this).attr('nodrop') != '') {
                    var top_drag = parseInt($(this).attr('inx')) * 50;
                    $(this).animate({
                        top: top_drag,
                        left: '0px'
                    }, 300);
                }
            }
        });
        $('.iets_sequence_content').each(function (i) {
            $('.iets_sequence_content:eq(' + i + ') .ielts_sort_drop').each(function () {
                $('.iets_sequence_content:eq(' + i + ') .ielts_sort_drag').addClass('ielts_sort_drag_' + i);
                $('.iets_sequence_content:eq(' + i + ') .ielts_sort_drop').addClass('ielts_sort_drop_' + i);
                $(this).droppable({
                    accept: '.ielts_sort_drag_' + i,
                    tolerance: "intersect",
                    greedy: true,
                    drop: function (event, ui) {
                        var inx_curr = parseInt($(this).attr('inx'));
                        var inx_drag = $(ui.draggable).attr('inx');
                        var draged = $(ui.draggable).attr('draged');
                        var drag = $(ui.draggable).attr('drag');
                        var drop = $(this).attr('drop');
                        var drag_ui = inx_curr * 50;
                        var drag_move = inx_drag * 50;
                        var drag1 = $('.ielts_sort_drag_' + i + '[draged=' + drop + ']').not(ui.draggable).attr('drag');
                        $('.ielts_sort_drop_' + i + '[droped=' + drag + ']').attr('droped', drag1);
                        $('.ielts_sort_drag_' + i + '[draged=' + drop + ']').not(ui.draggable).animate({
                            top: drag_move,
                            left: "0px"
                        }, 300).attr('inx', inx_drag).attr('draged', draged);
                        $(this).attr('droped', drag);
                        $(ui.draggable).animate({
                            top: drag_ui,
                            left: "0px"
                        }, 300).attr('inx', inx_curr).attr('draged', drop);
                        $(ui.draggable).removeAttr('nodrop');
                    },
                    over: function (event, ui) {
                        $(ui.draggable).attr('nodrop', '1');
                    }
                });
            });
        });

    }
    // mark error
    if (!window.CurrentSelection) {
        CurrentSelection = {}
    }
    CurrentSelection.Selector = {}
    CurrentSelection.Selector.getSelected = function () {
        var sel = '';
        if (window.getSelection) {
            sel = window.getSelection()
        }
        else if (document.getSelection) {
            sel = document.getSelection()
        }
        else if (document.selection) {
            sel = document.selection.createRange()
        }
        return sel;
    }
    //function to be called on mouseup
    CurrentSelection.Selector.mouseup = function () {
        var st = CurrentSelection.Selector.getSelected();
        if (st != '') {
            console.log(st);
            if (document.selection && !window.getSelection) {
                var range = st;
                range.pasteHTML("<span class='selectedText'>" + range.htmlText + "</span>");
            }
            else {
                var range = st.getRangeAt(0)
                var newNode = document.createElement("span");
                newNode.setAttribute("class", "selectedText");
                range.surroundContents(newNode);
            }
        } else {
            $(".selectedText").click(function () {
                txt = $(this).text();
                $(this).after(txt);
                $(this).remove();
            });

        }
    }
    $(".iets_box_error").bind("mouseup", CurrentSelection.Selector.mouseup);

});
var i = 0;
var n = 0;
var total = 0;
var inx = 0;
var inx_s = 0;
function delSpace(str) {
    str = str.toLowerCase();
    if (str.indexOf(".") >= 0) {
        str = str.replace(/\./g, " ");
    }
    if (str.indexOf(",") >= 0) {
        str = str.replace(/,/g, " ");
    }
    if (str.indexOf("-") >= 0) {
        str = str.replace(/-/g, " ");
    }
    str = $.trim(str);
    var i = 0;
    var n = str.length;
    while (i < n) {
        if (str[i] == ' ' && str[i + 1] == ' ')
            str = str.replace("  ", " ");
        else
            i++;

    }

    return str;
}
function numbers(e) {
    var keynum;
    var keychar;
    var numcheck;
    if (window.event) // IE8 and earlier
    {
        keynum = e.keyCode;
    }
    else if (e.which) // IE9/Firefox/Chrome/Opera/Safari
    {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    numcheck = /[A-Za-z]/;
    return !numcheck.test(keychar);
}
function testRadio(arr) {
    var s = 0;
    $('.box_active input:radio:checked').each(function () {
        inx = parseInt($(this).attr('inx'));
        if ($(this).val() == arr[inx]) {
            s++;
            $(this).prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
        } else {
            $(this).prev().html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px" />');
        }
    });
    return s;
}
function showRadio(result) {
    var n = result.length;
    var start_rad = $('.box_active input:radio:first').attr('inx');
    var end_rad = $('.box_active input:radio:last').attr('inx');
    for (var i = start_rad; i <= end_rad; i++) {
        $(".box_active input:radio[name=radio_" + i + "][value=" + result[i] + "]").prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
    }
}
function testCheckbox(arr) {
    n = arr.length;
    var s = 0;
    for (i = 0; i < n; i++) {
        if ($('.box_active input[name=checkbox_' + i + ']:checked')) {
            val = '';
            $('.box_active input[name=checkbox_' + i + ']:checked').each(function () {
                val += $(this).val() + '*';
            });
            val = val.substr(0, val.length - 1);
            if (val != '') {
                if (val == arr[i]) {
                    $('.box_active .tf_checkbox:eq(' + i + ')').html('Your answer : Correct!').css('color', 'blue');
                    //$('.box_active .stt_check_tf:eq('+i+')').html('<img src="true-1.png"/*tpa=http://www.thuviengiaoduc.org/file/luyen-thi-ielts/common/js/images/true.png*/ border="0" width="18px" height="18px" />');
                    s++;
                } else {
                    $('.box_active .tf_checkbox:eq(' + i + ')').html('Your answer :Incorrect!').css('color', 'red');
                    //$('.box_active .stt_check_tf:eq('+i+')').html('<img src="false-1.png"/*tpa=http://www.thuviengiaoduc.org/file/luyen-thi-ielts/common/js/images/false.png*/ border="0" width="18px" height="18px" />');
                }
            }
        }
    }
    return s;
}
function showCheckbox(result) {
    var start_rad = $('.box_active input:checkbox:first').attr('inx');
    var end_rad = $('.box_active input:checkbox:last').attr('inx');
    for (var i = start_rad; i <= end_rad; i++) {
        ar_check = result[i].split('*');
        for (j = 0; j < ar_check.length; j++) {
            $('.box_active input:checkbox[name=checkbox_' + i + '][value=' + ar_check[j] + ']').prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px" />');
        }
    }
}
function testBlank_row(arr) {
    var s = 0;
    var okk = 0;
    $('.box_active .iel_row_blank').each(function () {
        okk = 0;
        var i = $(this).index('.iel_row_blank');
        val = $(this).val();
        if (val != '') {

            val = delSpace(val);
            if (val.indexOf("'") >= 0) {
                val = val.replace("'", "\'");
            }
            str = delSpace(arr[i]);
            str = $.trim(str);
            if (str.indexOf('/') > 0) {
                var arr_st = str.split('/');
                for (var t = 0; t < arr_st.length; t++) {
                    if (val == $.trim(arr_st[t])) {
                        okk = 1;
                        break;
                    }
                }
            } else {
                if (val == str) {
                    okk = 1;
                }
            }
            if (okk == 1) {
                $(this).css('color', 'blue');
                s++;
                $(this).prev().attr('stt_bl', 'correct').html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" />');

            } else {
                $(this).css('color', 'red');
                $(this).prev().attr('stt_bl', 'incorrect').html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;" />');
            }
        }
    });
    return s;
}
function showBlank_row(result) {
    $('.box_active .iel_row_blank').each(function () {
        t = $(this).index('.iel_row_blank');
        if ($(this).prev().attr('stt_bl') == 'correct') {
        } else {
            $(this).after('<div class="stt_text_row">' + result[t] + '</div>');
        }
    });
}
function testBlank_part(arr) {
    var s = 0;
    var okk = 0;
    $('.box_active .iel_part_blank').each(function () {
        okk = 0;
        var i = $(this).index('.iel_part_blank');
        val = $(this).val();
        if (val != '') {
            val = delSpace(val);
            if (val.indexOf("'") >= 0) {
                val = val.replace("'", "\'");
            }
            str = delSpace(arr[i]);
            str = $.trim(str);
            if (str.indexOf('/') > 0) {
                var arr_st = str.split('/');
                for (var t = 0; t < arr_st.length; t++) {
                    if (val == $.trim(arr_st[t])) {
                        okk = 1;
                        break;
                    }
                }
            } else {
                if (val == str) {
                    okk = 1;
                }
            }
            if (okk == 1) {
                $(this).css('color', 'blue');
                s++;
                $(this).prev().attr('stt_bl', 'correct').html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" />');

            } else {
                $(this).css('color', 'red');
                $(this).prev().attr('stt_bl', 'incorrect').html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;" />');
            }
        }
    });
    return s;
}
function showBlank_part(result) {
    $('.box_active .iel_part_blank').each(function () {
        t = $(this).index('.iel_part_blank');
        if ($(this).prev().attr('stt_bl') == 'correct') {
        } else {
            $(this).after('&nbsp;&nbsp;&nbsp;<span class="stt_text">' + result[t] + '</span>');
        }
    });
}


function testDrop(arr_drop) {
    var dem = 0;
    var s = 0;
    $('.box_active .part_drop').each(function (t) {
        $('.part_drop').removeClass('part_drop_curr');
        $(this).addClass('part_drop_curr');
        that = this;
        dem = 0;
        countChild = $('.part_drop_curr .stt_drop').length;

        $('.part_drop_curr .stt_drop').each(function (i) {
            if (parseInt($(this).attr('droped')) == arr_drop[(i + inx)]) {
                dem++;
                $(this).parent().prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" alt="correct" />');
                $(this).parent().prev().attr('status_drop', 'correct');
            } else {
                $(this).parent().prev().html('<img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;"  alt="incorrect"  />');
                $(this).parent().prev().attr('status_drop', 'incorrect');
            }
        });
        if (dem == countChild) {
            s++;
        }
        inx += countChild;
    });
    return s;
}
function showDrop(arr_drop) {
    $('.box_active .part_drop').each(function () {
        $('.part_drop').removeClass('part_drop_curr');
        $('.part_drop').next().removeClass('part_drag_curr');
        $(this).addClass('part_drop_curr');
        $(this).next().addClass('part_drag_curr');
        $('.part_drop_curr .stt_drop').each(function () {
            t = $(this).index('.stt_drop');
            if ($(this).parent().prev().attr('status_drop') == 'incorrect') {
                var top_drop = parseInt($(this).attr('inx')) * 100 + 54;
                $('.part_drag_curr').find('.stt_drag[drag=' + arr_drop[t] + ']').animate({
                    top: top_drop,
                    left: '-395px'
                }, 1000);
                $(this).parent().prev().attr('status_drop', 'correct');
                $(this).parent().prev().html('<img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" alt="correct" />');
            }
        });
    });
}
function testSort(arr_sort) {
    var dem = 0;
    var s = 0;
    var ok_drop = 0;
    $('.box_active .iets_sequence_content').each(function () {
        dem = 0;
        $('.iets_sequence_content').removeClass('iets_sequence_curr');
        $(this).addClass('iets_sequence_curr');
        countChild = $('.iets_sequence_curr .ielts_sort_drop').length;
        $('.iets_sequence_curr .ielts_sort_drag').css('color', 'red');
        $('.iets_sequence_curr .ielts_sort_drag').attr('is_droped', 0);
        that = this;
        $('.iets_sequence_curr .ielts_sort_drop').each(function (i) {

            ok_drop = 0;
            inx_s = parseInt($(this).index('.ielts_sort_drop'));
            var val = $(this).attr('droped');
            if (arr_sort[inx_s].indexOf('/') > 0) {
                var arr_sq = arr_sort[inx_s].split('/');
                for (t = 0; t < arr_sq.length; t++) {
                    if (val == arr_sq[t]) {
                        ok_drop = 1;
                        break;
                    }
                }
            } else {
                if (val == arr_sort[inx_s]) {
                    ok_drop = 1;
                } else {
                    ok_drop = 0;
                }
            }
            if (ok_drop == 1) {
                dem++;
                $(this).next().css('color', 'blue');
                $(this).attr('tf_sq', 'correct');
                $('.iets_sequence_curr .ielts_sort_drag[drag=' + val + ']').css('color', 'blue').attr('is_droped', 1);
            } else {
                $(this).attr('tf_sq', 'incorrect');
                $(this).css('color', 'red');
                $(this).next().css('color', 'red');
            }
            $(this).next().text(arr_sort[inx_s]);
        });
        if (dem == countChild) {
            $('.iets_sequence_curr').next().html('Your answer : Correct!').css('color', 'blue');
            s++;
        } else {
            $('.iets_sequence_curr').next().html('Your answer : Incorrect!').css('color', 'red');
        }
    });

    return s;
}

function showwSort(arr_sort) {
    $('.box_active_curr .base_index_sort').css('visibility', 'visible');
    $('.box_active .iets_sequence_content').each(function () {
        $('.iets_sequence_content').removeClass('iets_sequence_curr');
        $(this).addClass('iets_sequence_curr');
        that = this;
        $('.iets_sequence_curr .ielts_sort_drop[tf_sq=incorrect]').each(function (i) {
            inx_s = parseInt($(this).index('.ielts_sort_drop'));
            var top_drop = parseInt($(this).attr('inx')) * 50;
            if (arr_sort[inx_s].indexOf('/') > 0) {
                var arr_sq = arr_sort[inx_s].split('/');
                for (t = 0; t < arr_sq.length; t++) {
                    if ($('.iets_sequence_curr').find('.ielts_sort_drag[drag=' + arr_sq[t] + '][is_droped=0]').length == 1) {
                        $('.iets_sequence_curr').find('.ielts_sort_drag[drag=' + arr_sq[t] + '][is_droped=0]:first').animate({
                            top: top_drop,
                            left: '0px'
                        }, 700).attr('is_droped', 1).draggable("disable");
                        break;
                    }
                }
            } else {
                $('.iets_sequence_curr').find('.ielts_sort_drag[drag=' + arr_sort[inx_s] + ']').animate({
                    top: top_drop,
                    left: '0px'
                }, 700).draggable("disable");
                $(this).attr('tf_sq', 'correct');
            }
        });
    });
}

var start = 0;
var mark = 0;
var n_error = 0;
var m_error = 0;
var t = 0;
function testError(arr_error, arr_pos) {
    var s = 0;
    $('.box_active .iets_box_error').each(function () {
        t = $(this).index('.iets_box_error');
        var str_html = String($('.iets_box_error:eq(' + t + ')').html());
        arr = str_html.split('<span class="selectedText">');
        n = arr.length - 1;
        var i = 0;
        while (str_html.indexOf('<span class="selectedText">') >= 0 && i < n) {
            mark = 0;
            str = $('.iets_box_error:eq(' + t + ') .selectedText:eq(' + i + ')').text();
            start = str_html.indexOf('<span class="selectedText">');

            if (str[0] == ' ') {
                console.log("s");
                start++;
            } else {
                console.log("t");
            }
            str = $.trim(str);

            var ii = arr_error[t].indexOf(str);
            if (ii >= 0) {
                console.log('sta:' + start);
                console.log(arr_pos[t][ii]);
                if (start == arr_pos[t][ii]) {
                    mark = 1;
                } else {
                    mark = 0;
                }
            } else {
                mark = 0;
            }

            if (mark == 1) {
                s++;
                $('.iets_box_error:eq(' + t + ') .selectedText:eq(' + i + ')').before('<span style="color:blue; padding:0px 5px;" class="sh_status_mark"><img src="correct.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/correct.jpg*/ style="width:15px;" /></span>');
            } else {
                $('.iets_box_error:eq(' + t + ') .selectedText:eq(' + i + ')').before('<span style="color:red; padding:0px 5px;" class="sh_status_mark"><img src="incorrect.jpg"/*tpa=http://www.thuviengiaoduc.org/file/dungchung/incorrect.jpg*/ style="width:15px;" /></span>');
            }
            str_html = str_html.replace('<span class="selectedText">', '');
            str_html = str_html.replace('</span>', '');
            $('.selectedText .sh_status_mark').remove();
            i++;
        }
    });
    return s;
}

function testAll(cmd) {
    var dem = 0;
    var countChild = 0;
    var total = 0;
    var sum = $('.box_active .iets_sum').text();
    if ($('.box_active .part_drop').length > 0) {
        total += testDrop(arr_result[4]);
    }
    if ($('.box_active .iel_part_blank').length > 0) {
        total += testBlank_part(arr_result[0]);
    }
    if ($('.box_active .iel_row_blank').length > 0) {
        total += testBlank_row(arr_result[1]);
    }
    if ($('.box_active .iel_radio').length > 0) {
        total += testRadio(arr_result[2]);
    }
    if ($('.box_active .iel_checkbox').length > 0) {
        total += testCheckbox(arr_result[3]);
    }
    if ($('.box_active .iets_sequence').length > 0) {
        total += testSort(arr_result[5]);
    }
    if ($('.box_active .iets_box_error').length > 0) {
        total += testError(arr_error, arr_pos);
    }
    $(cmd).parent().next().html('<div class="base_result">Bạn đã làm đúng ' + total + '/ ' + sum + '</div>');
    $(cmd).hide();
    $(cmd).next().show();
}
function showAnswer(cmd) {
    $(cmd).hide();
    $('.box_active .iets_hidden').show();
    if ($('.box_active .iel_part_blank').length > 0) {
        showBlank_part(arr_result[0]);
    }
    if ($('.box_active .iel_row_blank').length > 0) {
        showBlank_row(arr_result[1]);
    }
    if ($('.box_active .iel_radio').length > 0) {
        showRadio(arr_result[2]);
    }
    if ($('.box_active .iel_checkbox').length > 0) {
        showCheckbox(arr_result[3]);
    }
    if ($('.box_active .part_drop').length > 0) {
        showDrop(arr_result[4]);
    }
    if ($('.box_active .iets_sequence').length > 0) {
        showwSort(arr_result[5]);
    }

}


function typeDrop() {
    var ok = 1;

    $('.box_active .stt_drop').each(function (i) {
        if (!$(this).attr('droped')) {
            ok = 0;
        }
    });
    if (ok == 0) {
        $('.stt_tbao').show();
        $('.stt_tbao').html('Bạn phải làm xong mới được làm câu tiếp theo<br><div class="close" style="float:right; margin-right:10px; cursor:pointer"><img src="close.jpg"/*tpa=http://www.thuviengiaoduc.org/file/luyen-thi-ielts/common/images/close.jpg*/ alt="close"></div>');

        $('.close').click(function () {
            $(this).parent().hide();
        });
    }
    return ok;
}
function nextPage(cmd, num) {
    var t = $(cmd).index('.bt_next');
    if ($(cmd).hasClass('bt_next_dis')) {
    } else {
        $('.bt_prev:eq(' + t + ')').removeClass('bt_prev_dis');
        $('.box_active').removeClass('box_active').next().addClass('box_active');
        if ($('.box_active .non_vip').length == 1) {
            $(cmd).addClass('bt_next_dis')
        }
        var index = $('.bt_index:eq(' + t + ')').text();
        index = parseInt(index);
        index++;
        $('.bt_index:eq(' + t + ')').text(index);
        if (index == num) {
            $(cmd).addClass('bt_next_dis');
        }
        toPos('.box_active:eq(' + t + ')');

    }

}

function prevPage(cmd) {
    var t = $(cmd).index('.bt_prev');
    if ($(cmd).hasClass('bt_prev_dis')) {
    } else {
        $('.bt_next:eq(' + t + ')').removeClass('bt_next_dis');
        $('.box_active').removeClass('box_active').prev().addClass('box_active');
        var index = $('.bt_index:eq(' + t + ')').text();
        index = parseInt(index);
        index--;
        $('.bt_index:eq(' + t + ')').text(index);
        if (index == 1) {
            $(cmd).addClass('bt_prev_dis');
        } else {
            $(cmd).removeClass('bt_prev_dis');
        }
        toPos('.box_active:eq(' + t + ')');
    }

}

function ielTranslate(cmd) {
    var trans = parseInt($(cmd).attr('trans'));
    if (trans == 0) {
        dk = 1;
        $('.iel_translate_button').attr('trans', 1);
        $('.iel_translate_button').val('Đóng bài dịch');
        $('.show_mes_trans').text('Bài học đã được dịch, bạn hãy đưa chuột vào các câu tiếng Anh để xem.');
    } else {
        dk = 0;
        $('.iel_translate_button').attr('trans', 0);
        $('.iel_translate_button').val('Xem bài dịch');
        $('.show_mes_trans').text('');
        $(cmd).parent().next().text('Đã đóng bài dịch.');
    }

}