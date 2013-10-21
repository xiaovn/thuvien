<?php
/**
 * Project: thuvien.
 * File: blankpage.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 12:22 - 05/10/2013
 * Website: www.xiao.vn
 */
include_once "header.php";
$b = $books;
$parent_dir = general::getInstance()->get_subject($b->booksubj);
?>

</head>
<body>

<?php require_once "top.php";?>
<?php require_once "nav.php";?>
<div class="containt_center_top clear"></div>
<div class="containt_center_cen clear">

<script>
    $(document).ready(function()
    {
        $("span.on_img").mouseover(function ()
        {
            $(this).addClass("over_img");
        });

        $("span.on_img").mouseout(function ()
        {
            $(this).removeClass("over_img");
        });
    });

    $(function() {
        $(".button_bauchon").click(function()
        {
            var id = $(this).attr("id");
            var dataString = 'id='+ id ;
            var parent = $(this);


            $(this).fadeOut(300);
            $.ajax({
                type: "POST",
                url: "<?php echo XC_URL?>/view/ajaxrate",
                data: dataString,
                cache: false,

                success: function(html)
                {
                    document.getElementById("diem").innerHTML=html;
//parent.html(html);
                    parent.fadeIn(300);
                }
            });


            return false;

        });
    });
    $(function() {
        $(".baoxau").click(function()
        {
            var id = $(this).attr("id");
            var dataString = 'id='+ id ;
            var parent = $(this);


            //$(this).fadeOut(300);
            $.ajax({
                type: "POST",
                url: "<?php echo XC_URL?>/view/ajaxbaoxau",
                data: dataString,
                cache: false,

                success: function(html)
                {
                    //document.getElementById("diem").innerHTML=html;
//parent.html(html);
                    //parent.fadeIn(300);
                    alert("Cảm ơn bạn đã gửi thông báo đến chúng tôi!")
                }
            });


            return false;

        });
    });

    $(function() {
        $(".yeuthich").click(function()
        {
            <?php if($_SESSION['xID'])
            {
            ?>
                var id = $(this).attr("id");
                var dataString = 'id='+ id ;
                var parent = $(this);
                //$(this).fadeOut(300);
                $.ajax({
                    type: "POST",
                    url: "<?php echo XC_URL?>/view/ajaxlike",
                    data: dataString,
                    cache: false,

                    success: function(html)
                    {
                        //document.getElementById("diem").innerHTML=html;
//parent.html(html);
                        //parent.fadeIn(300);
                        alert("Cảm ơn bạn đã chia sẻ cảm xúc với chúng tôi, sự đóng góp về nội dung chính là động lực để ThuVienGiaoDuc phát triển hơn nữa!")
                    }
                });


                return false;
                <?php
            }
            else
            {
            ?>
                alert("Vui lòng đăng nhập để sử dụng tính năng này!");
            <?php } ?>

        });
    });
    $(function() {
        $(".selectgallery").change(function () {

            if ($("#o1").attr("checked")) {
                $('.taomoi').fadeOut(0);
                $('.cosan').fadeIn(200);
            }
            else {
                $('.cosan').fadeOut(0);
                $('.taomoi').fadeIn(200);
            }
        });
    });
    $(function() {
        $(".closebtn").click(function () {
            $('.showbst').fadeOut(200);
        });
    });
    $(function() {
        $(".bosuutap").click(function () {
            <?php
            if($_SESSION['xID'])
            {
            ?>
            $('.showbst').fadeIn(200);
            <?php
            }
            else
            {
            ?>
            alert("Bạn phải đăng nhập để sử dụng tính năng này!")
            <?php
            }
            ?>
        });
    });
</script>

<table cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" class="containt_center_cen_left">

<?php require_once "breadcrumb.php";?>

<div class="comment_bai_hoc clear">

    <div class="space10"></div>

    <div class="vd_box">
        <div class="vd_box_tit">
            <div class="vd_box_tit_te"><?php echo $b->bookname;?></div>
        </div>
        <div class="lik_tieude_box_top swap_info_detai">
            <div class="lik_tieude_box_img">
                <a href="#">
                    <img src="http://localhost/thuvien/images/thumb/avatar.png"></a></div>
            <div class="info_detai" style="line-height: 100%;">
                <div class="thongtindetai">
                    <div class="thongke_left">
                        <ul class="item">
                            <li><b><span>Môn: </span><span style=" color:#477c00;">&nbsp;<a href="http://thuviengiaoduc.org/view/subject/<?php echo general::getInstance()->permalink($b->booksubj,"subj");?>"><?php echo general::getInstance()->get_subject($b->booksubj)?></a></span><span>Danh mục: </span>&nbsp;<a href="http://thuviengiaoduc.org/view/cat/<?php echo general::getInstance()->permalink($b->bookcat,"cat");?>"><?php echo general::getInstance()->get_category($b->bookcat)?></a></b></li>
                            <li><span>Tác giả: </span>&nbsp;<?php echo $b->bookauthor?></li>
                            <li class="row2"><span>Gửi bởi: </span>&nbsp;<a href="http://thuviengiaoduc.org/member/view/<?php echo general::getInstance()->get_mem_account($b->bookpuber,"username");?>"><?php echo general::getInstance()->get_mem_info($b->bookpuber,"firstname")." ".general::getInstance()->get_mem_info($b->bookpuber,"name")?></a></li>
                            <li><span>Từ khóa: </span>
                                <?php
                                foreach($tags as $tag)
                                {
                                    ?>
                                    <a href="http://thuviengiaoduc.org/tag/<?php echo general::getInstance()->bodau($tag->tag);?>"><?php echo $tag->tag;?></a> &nbsp;
                                <?php
                                }
                                ?>
                                &nbsp;
                            </li>
                            <li class="row2"><span>Năm phát hành: </span><span style=" color:#477c00;">&nbsp;<?php echo $b->bookyear;?></span><span>Gửi lúc: </span>&nbsp;<?php echo $b->bookpubdate;?></li>
                            <li><span>Lượt tải: </span><span style=" color:#477c00;">&nbsp;<?php echo $b->bookdown;?></span><span>Lượt xem: </span>&nbsp;<?php echo $b->bookview;?></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="space10"></div>

        </div>

        <div class="space10"></div>
        <div class="stt_detail_video">
            <div style="margin-left: 12px; margin-bottom: 10px; padding: 0; float: left; width: 730px;">
                <div class="swap_bauchon">
                    <div class="diem" id="diem"><?php echo $b->bookscore;?></div>
                    <span style="font-size: 13px; display: block; float: left; margin: 5px 0 0 -5px;font-weight: bold;">Điểm</span>
                    <a href="" class="button_bauchon" id="<?php echo $b->bookid;?>">
                        <span class="on_img" align="left">  </span>
                    </a>

                </div>
                <div class="swap_chucnang" style="margin-left: 5px;">
                    <ul>
                        <li><a id="<?php echo $b->bookid;?>" href="" class="baoxau clsCheckBaoXau clsCheckUser"></a></li>
                        <li class="xline">|</li>
                        <li><a href="http://thuviengiaoduc.org/download/doc/<?php echo general::getInstance()->permalink($b->bookid,'book');?>" target="_blank" id="download" class="download"></a></li>
                        <li class="xline">|</li>
                        <li><a id="<?php echo $b->bookid;?>" href="" class="yeuthich clsCheckUser"></a></li>
                        <li class="xline">|</li>
                        <li><a id="<?php echo $b->bookid;?>" class="bosuutap clsCheckUser"></a></li>
                        <li class="xline">|</li>
                        <li><a href="#" class="sendmail clsCheckUser"></a></li>
                    </ul>
                    <div class="nav_right"></div>
                </div>
            </div>
            <div style=" text-align:left; color:#0000FF;  font-weight:bold; margin-bottom:20px; width:100%;">Mô tả tài liệu</div>
            <div style="float:left; width:100%;">
                <div class="space5"></div>
                <div style="float:left; width:100%; padding-left:8px;">
                    <iframe src="http://docs.google.com/gview?embedded=true&amp;url=http%3A%2F%2Fthuviengiaoduc.org%2Fupload%2Fdocs%2Fthu-vien-giao-duc-8102-kt-lan1-hk1-ly-12-nc-ma-209.pdf" width="700" height="700"></iframe>
                    <div class="space10"></div></div>
                <div class="space10"></div>
            </div>
            <p></p>
            <div class="vdc_download"></div>

        </div>
        <div class="vd_download"><div class="vd_download_name">TẢI TÀI LIỆU :</div>
            <a href="http://thuviengiaoduc.org/download/doc/<?php echo general::getInstance()->permalink($b->bookid,'book');?>">
                <div class="vd_dl_icon">Download file PDF<div class="vd_ico_dl vd_ico3"></div></div>
            </a>
    </div>

</div>
    <div class="space5"></div>
<div id="comment_other">
<div class="compo_left_gr">

<div class="comment">
<div class="space10"></div>
<a href="#" target="_blank">
    <img src="<?php echo $template_path;?>images/ad542x105.png" alt="Quảng cáo">
</a>
<h3 class="font_weight" style="text-align: right; font-size:11px">
    Liên hệ quảng cáo : <strong>0935.765.797</strong>
</h3>

    <div id="form_comment_area">




        <div class="form_send_comment">
            <div class="lik_title_comment">GỬI PHẢN HỒI</div>
            <div class="comment_ico_title">
                <div id="emt_icon" class="comment_ico_img">
                    <img src="<?php echo $template_path;?>images/comment_smile_ico.png">
                </div>
                <div class="comment_ico_text">Chèn biểu tượng cảm xúc</div>
            </div>
            <div class="row-fluid">
                <form name="commentfrm" action="" method="POST">
                    <div class="separator bottom"></div>
                    <p><textarea name="noidung" cols="200" rows="7" class="span12"></textarea> </p>
                    <p><input type="submit" name="submit" value="Gửi phản hồi"></p>
                </form>
            </div>
            <span id="show_error_msg"></span>
        </div>
    </div>






<span id="show_msg_my_comment" style="text-align: left; float: left; font-weight: bold;"></span>
<div class="lik_count_comment">
    CÁC BÌNH LUẬN CHO TÀI LIỆU NÀY
</div>



<div id="show_comment">
<div class="info_cus_box">

<?php foreach($commentlist as $cl)
{
    $memid = $cl->xid;
?>
<div class="lik_box" id="li_comm_3046484">
    <div class="lik_info_box_ct">
        <div class="lik_info_box_top">
            <div class="lik_info_box_img">
                <a href="http://xem.xiao.vn/member/profile/<?php echo $memid;?>" target="_blank">
                    <img src="<?php echo $template_path;?>images/thumb_noavatar.gif">
                </a>

            </div>
            <div class="avt_info_name">
                <a href="http://xem.xiao.vn/member/profile/<?php echo $memid;?>" target="_blank" class="tk_username"><?php echo member::getInstance()->account($memid,"username");?></a>
            </div>
        </div>
        <div class="lik_info_box_bot" id="com_337356">

            <span class="s_content"><?php echo $cl->comment;?></span>
        </div>
        <div class="lik_date_l"></div>
        <div class="lik_date_r"><div class="lik_date_r_f"></div><div class="lik_date_r_l">Gửi lúc: <?php echo date("H:i d-m-Y",strtotime($cl->xtime));?></div></div>


    </div>
    <div class="lik_box_bottom"></div>
    <a title="" target="_blank" href=""><div class="lsf_rb "></div></a>
</div>

<?php }?>

</div>


<div class="pagging_comment">
    <div class="num_pagging clear">
        <ul>
            <li><a href="#view_comment"  class="index_page_comment">1</a></li>
        </ul>
    </div>
</div>

</div>
</div>


</div>
<div class="baihoc">

    <div class="space10"></div>
    <div class="lik_baihoc_new">
        <div class="lik_baihoc_title">Cùng tác giả</div>
        <ul>
        <?php
        if($baicungtacgia)
        {
        foreach ($baicungtacgia as $bctg)
        {
          ?>
            <li class="lik_short">
                <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($bctg->bookid,'book');?>" title="Tiêu đề"><?php echo substr($bctg->bookname,0,33);?></a></li>
            <?php
        }
        }
        else
        {
            ?>
            <li class="lik_short">
                <a href="#" title="">Không có tài liệu nào phù hợp</a></li>
            <?php
        }
        ?>
        </ul>
    </div>
  <div class="lik_baihoc_new">
        <div class="lik_baihoc_title">Cùng môn học</div>
        <ul>
            <?php
            if($baicungmon)
            {
                foreach ($baicungmon as $bcm)
                {
                    ?>
                    <li class="lik_short">
                        <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($bcm->bookid,'book');?>" title="Tiêu đề"><?php echo substr($bcm->bookname,0,33);?></a></li>
                <?php
                }
            }
            else
            {
                ?>
                <li class="lik_short">
                    <a href="#" title="">Không có tài liệu nào phù hợp</a></li>
            <?php
            }
            ?>
        </ul>
    </div>


    <div class="lik_baihoc_new">
        <div class="lik_baihoc_title">Cùng thể loại</div>
        <ul>

            <?php
            if($baicungchude)
            {
                foreach ($baicungchude as $bccd)
                {
                    ?>
                    <li class="lik_short">
                        <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($bccd->bookid,'book');?>" title="Tiêu đề"><?php echo substr($bccd->bookname,0,33);?></a></li>
                <?php
                }
            }
            else
            {
                ?>
                <li class="lik_short">
                    <a href="#" title="">Không có tài liệu nào phù hợp</a></li>
            <?php
            }
            ?>
        </ul>
    </div>
    <div class="showbst" style="display: none;">
    <div class="sendmail bootbox modal fade in" tabindex="-1" style="overflow:hidden; position: fixed; top: 10%; left: 50%;" aria-hidden="false">
        <div class="modal-header">
            <a class="closebtn">Thoát</a>
        </div>
        <div class="modal-body">
            <form method="post" action="">
                <div class="formfield">
                    <input type="radio" name="selectgallery" class="selectgallery" id="o1" checked value="cosan">Chọn từ bộ sưu tập đã có
                    &nbsp;
                    &nbsp;
                    <input type="radio" name="selectgallery" class="selectgallery" id="o2" value="taomoi">Tạo mới bộ sưu tập
                </div>

                <hr>
                <div class="cosan" style="margin-bottom: 10px;">
                    <div class="formfield">
                        <div class="lbsendmail" for="Name">Chọn bộ sưu tập:</div>
                        <div class="inputsendmail">
                            <select>
                            <?php
                            $bsts = general::getInstance()->get_bst($_SESSION['xID']);
                            if($bsts)
                            {
                                foreach($bsts as $bst)
                                {
                                    ?>
                                    <option value="<?php echo $bst->id;?>"><?php echo $bst->tenbst;?></option>
                                <?php
                                }
                            }
                            else
                            {
                                ?>
                                <option>Bạn chưa có bộ sưu tập nào.</option>
                                <?php
                            }
                            ?>



                            </select>
                        </div>
                    </div>
                </div>
                <div class="taomoi" style="display: none; margin-bottom: 10px;">
                    <div class="formfield">
                        <div class="lbsendmail" for="Name">Tên BST:</div>
                        <div class="inputsendmail"><input type="text" style="width: 300px;" name="subject" id="subject" /></div>
                    </div>
                    <div class="formfield">
                        <div class="lbsendmail" for="Name">Mô tả:</div>
                        <div class="inputsendmail"><textarea name="Message" rows="3" cols="40" id="Message"></textarea></div>
                    </div>
                </div>
                <div style="text-align: center;"><input type="submit" style="font-family: Tahoma;font-size: 14px; height: 25px;" name="submit" value="Thêm vào bộ sưu tập" class="submit-button" /></div>

            </form>
        </div>
    </div>
    <div class="modal-backdrop fade in"></div>
    </div>
</div>
</div>
</td>
<?php
include_once "sidebar.php";
?>
</tr>
</table>
</div>

<?php
include_once "footer.php";
?>