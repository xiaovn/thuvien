<?php
/**
 * Project: thuvien.
 * File: register.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 18:49 - 05/10/2013
 * Website: www.xiao.vn
 */
include "config.php";
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-Equiv="Cache-Control" Content="no-cache">
    <meta http-Equiv="Pragma" Content="no-cache">
    <meta http-Equiv="Expires" Content="0">
    <title>Thư viện giáo dục - Thu vien giao duc - Thu vien tai nguyen giao duc mien phi - On thi toan - ly - hoa - sinh - anh van</title>
    <meta name="description" content="Mô tả"/>
    <meta name="keywords" content="Từ khóa"/>
    <link rel="shortcut icon" href="<?php echo $template_path;?>images/thuviengiaoduc.png"/>
    <!-- style tong hop -->
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>css/ta123_styles.css-v=3.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
    <style type="text/css">
        @media screen and (min-width:0\0) {
            .containt_center_cen{margin-top: -145px !important;}
            .containt_center_top {margin-top: -154px !important;}
            .containt_customer{margin-top: -145px !important;}
            .containt_customer_top{margin-top: -155px !important;}
        }
    </style>
    <script>
        $(document).ready(function(){
        $(".res_radio_ic").click(function(){
            $(".res_radio_box").removeClass("rs_checked")
            $(this).parent(".res_radio_box").addClass("rs_checked");
            $(".res_radio_ic").removeClass("res_radio_checked");
            $(".res_radio_ic").attr("alt","flase");
            $(".rs_checked").children(".res_radio_ic").addClass("res_radio_checked");
            $(".rs_checked").children(".res_radio_ic").attr("alt","true");
        })
        $(".res_check_ic").click(function(){
            if($(this).attr("alt") != "true")
            {
                $(this).addClass("res_radio_checked");
                $(this).attr("alt","true");
            }
            else
            {
                $(this).removeClass("res_radio_checked");
                $(this).attr("alt","false");
            }
        })
        })
    </script>
</head>
<body>
<div class="bg_top">&nbsp;</div>
<div class="bg_center">
<div id="contents">
<div class="top_content clear">
    <div class="logo">
        <a href="index.htm" tppabs="http://www.thuviengiaoduc.org/">
            <img width="230" height="58" src="logo.png" tppabs="http://data.thuviengiaoduc.org/images/v2/home/logo.png" alt="Logo">
        </a>
    </div>
    <div class="action">

        <ul class="first_notLogin">
            <li class="reg_card">
                <div id="hover_boxdt">
                    <a class="gray" href="4668-cach-dat-the-vip-tren-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/4668-cach-dat-the-vip-tren-tienganh123.html">Đăng ký mua thẻ</a>
                    <div class="box_dt_fast">
                        <div class="box_dt_ar"></div>
                        <div class="box_dt_in">
                            <a href="4668-cach-dat-the-vip-tren-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/4668-cach-dat-the-vip-tren-tienganh123.html"><div class="box_dt_row">

                                    Đặt mua thẻ TiếngAnh123 <br />(giao tận nơi)
                                </div></a>


                            <div class="box_dt_row box_dt_sp">

                                <span>Tư vấn và đặt thẻ qua điện thoại: <span class="orange dam">047.305.3868 </span>(8h-21h)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="ac_log">
                <div>
                    <a href="clogin.htm" tppabs="http://www.thuviengiaoduc.org/clogin" class="showlogfromm">Đăng nhập</a>
                    <a href="register.htm" tppabs="http://www.thuviengiaoduc.org/register" class="register-cus">Đăng ký thành viên</a>
                </div>
            </li>
        </ul>
        <div class="other-login">
            <span>Hoặc đăng nhập bằng:</span>
            <a href="javascript:void(0)" title="Đăng nhập bằng tài khoản Facebook" id="icon-fb" class="icon-fb-b"></a>
            <a identity="g" href="javascript:void(0)" title="Đăng nhập bằng tài khoản Gmail" class="openid icon-gg-b"></a>
            <a identity="y" href="javascript:void(0)" title="Đăng nhập bằng tài khoản Yahoo" class="openid icon-yh-b"></a>
        </div>


    </div>
</div>
<div class="menus clear">
<ul>
<li class="home mn">
    <a href="index.htm" tppabs="http://www.thuviengiaoduc.org/"></a>
</li>
<li title="" class="mn first_mn">
    <a href="tieng-anh-tre-em.htm" tppabs="http://www.thuviengiaoduc.org/menu/tieng-anh-tre-em">Tiếng Anh trẻ em</a>
    <div style="width:634px;left:-1px" class="sub_mn shadow">
        <div class="col_sub">
            <ul>
                <li><a title="Rocket to English 1" href="cambridge-young-learners-english.htm" tppabs="http://www.thuviengiaoduc.org/cambridge-young-learners-english">Rocket to English 1</a></li>
                <li><a title="Rocket to English 2" href="cambridge-young-learners-english-2.htm" tppabs="http://www.thuviengiaoduc.org/cambridge-young-learners-english-2">Rocket to English 2</a></li>
                <li><a title="Rocket to English 3" href="cambridge-young-learners-english-3.htm" tppabs="http://www.thuviengiaoduc.org/cambridge-young-learners-english-3">Rocket to English 3</a></li>
                <li><a title="Tiếng Anh trẻ em  lớp 3" href="tieng-anh-tre-em-lop-3.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-3">Tiếng Anh trẻ em lớp 3</a></li>
                <li><a title="Tiếng Anh trẻ em lớp 4" href="tieng-anh-tre-em-lop-4.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-4">Tiếng Anh trẻ em lớp 4</a></li>
                <li><a title="Tiếng Anh trẻ em lớp 5" href="tieng-anh-tre-em-lop-5.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-5">Tiếng Anh trẻ em lớp 5</a></li>
                <li><a title="Fun Fact Zone" href="fun-fact-zone.htm" tppabs="http://www.thuviengiaoduc.org/fun-fact-zone">Fun Fact Zone</a></li>

                <li><a title="The Big Caption" href="the-big-caption.htm" tppabs="http://www.thuviengiaoduc.org/the-big-caption">The Big Caption</a></li>
                <li><a title="What Happens Next?" href="what-happens-next.htm" tppabs="http://www.thuviengiaoduc.org/what-happens-next">What Happens Next?</a></li>

            </ul>
        </div>
        <div class="col_sub">
            <ul>

                <li><a title="Dictation" href="dictation.htm" tppabs="http://www.thuviengiaoduc.org/dictation">Dictation</a></li>
                <li><a title="repetition" href="repetition.htm" tppabs="http://www.thuviengiaoduc.org/repetition">Repetition</a></li>
                <li><a title="ScienKids" href="science-for-kids.htm" tppabs="http://www.thuviengiaoduc.org/science-for-kids">ScienKids</a></li>
                <li><a title="I Can Sing" href="i-can-sing.htm" tppabs="http://www.thuviengiaoduc.org/i-can-sing">I Can Sing</a></li>


                <li><a title="Funny Q &amp; A" href="funny-q-and-a.htm" tppabs="http://www.thuviengiaoduc.org/funny-q-and-a">Funny Q &amp; A</a></li>
                <li><a title="Tongue Twister" href="tongue-twister.htm" tppabs="http://www.thuviengiaoduc.org/tongue-twister">Tongue Twister</a></li>

                <li><a title="Tiếng Anh Trẻ Em Qua Bài Hát" href="tieng-anh-tre-em-qua-bai-hat.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-qua-bai-hat">Tiếng Anh Trẻ Em Qua Bài Hát</a></li>
                <li><a title="Tiếng Anh Trẻ Em Qua Phim" href="tieng-anh-tre-em-qua-phim.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-qua-phim">Tiếng Anh Trẻ Em Qua Phim</a></li>

            </ul>
        </div>
        <div class="col_sub last_des">
            <ul>
                <li><a title="Write Me" href="write-letter-kids.htm" tppabs="http://www.thuviengiaoduc.org/write-letter-kids">Write Me</a></li>
                <li><a title="Word Bag" href="word-bag.htm" tppabs="http://www.thuviengiaoduc.org/word-bag">Word Bag</a></li>
                <li><a title="GoldenKids English Contest" href="goldenkids-english-contest.htm" tppabs="http://www.thuviengiaoduc.org/goldenkids-english-contest">GoldenKids English Contest</a></li>
                <li><a title="Tiếng Anh Trẻ Em Qua Truyện Kể" href="learn-through-stories.htm" tppabs="http://www.thuviengiaoduc.org/learn-through-stories">Tiếng Anh Trẻ Em Qua Truyện Kể</a></li>
                <li><a title="Tiếng Anh trẻ em theo chủ đề" href="tieng-anh-tre-em-theo-chu-de.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-theo-chu-de">Tiếng Anh trẻ em theo chủ đề</a></li>
                <li><a title="Tiếng Anh trẻ em lớp 3 - sách mới" href="tieng-anh-tre-em-lop-3-sach-moi.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-3-sach-moi">Tiếng Anh trẻ em lớp 3 - sách mới</a></li>
                <li><a title="Danh Sách Giáo Viên GoldenKids" href="giao-vien-goldenkids.htm" tppabs="http://www.thuviengiaoduc.org/giao-vien-goldenkids">Giáo Viên GoldenKids Online</a></li>
                <!--
                <li class="last_des"><a title="Write Caption" href="http://www.thuviengiaoduc.org/write-caption">Write Caption</a></li>
                -->
            </ul>
        </div>

    </div>
    <div id="arrow"></div>
</li>
<li class="mn" title="">
    <a href="tieng-anh-pho-thong.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong">Tiếng Anh phổ thông </a>
    <div class="sub_mn shadow" style="width: 423px; display: none; left: auto; left:-1px">
        <div class="col_sub">
            <ul>
                <li><a href="tieng-anh-pho-thong-lop-6.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-6" title="Tiếng Anh lớp 6">Tiếng Anh lớp 6</a></li>
                <li><a href="tieng-anh-pho-thong-lop-8.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-8" title="Tiếng Anh lớp 8">Tiếng Anh lớp 8</a></li>
                <li><a href="tieng-anh-pho-thong-lop-10.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-10" title="Tiếng Anh lớp 10">Tiếng Anh lớp 10</a></li>
                <li><a href="tieng-anh-pho-thong-lop-12.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-12" title="Tiếng Anh lớp 12">Tiếng Anh lớp 12</a></li>
            </ul>
        </div>
        <div class="col_sub">
            <ul>
                <li><a href="tieng-anh-pho-thong-lop-7.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-7" title="Tiếng Anh lớp 7">Tiếng Anh lớp 7</a></li>
                <li><a href="tieng-anh-pho-thong-lop-9.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-9" title="Tiếng Anh lớp 9">Tiếng Anh lớp 9</a></li>
                <li><a href="tieng-anh-pho-thong-lop-11.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-11" title="Tiếng Anh lớp 11">Tiếng Anh lớp 11</a></li>
                <li><a href="on-thi-dai-hoc.htm" tppabs="http://www.thuviengiaoduc.org/on-thi-dai-hoc" title="Ôn thi đại học">Ôn thi đại học</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="mn ">
    <a href="tieng-anh-nguoi-lon.htm" tppabs="http://www.thuviengiaoduc.org/menu/tieng-anh-nguoi-lon">Tiếng Anh người lớn</a>
    <div class="sub_mn shadow" w="400">
        <div class="col_sub">
            <ul>
                <li rel="sub_2"><a title="Tiếng Anh Cơ Bản 1" href="tieng-anh-co-ban.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-co-ban">Tiếng Anh Cơ Bản 1</a></li>
                <li rel="sub_2"><a title="Tiếng Anh Cơ Bản 2" href="tieng-anh-co-ban-2.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-co-ban-2">Tiếng Anh Cơ Bản 2</a></li>
                <li rel="sub_2"><a title="Giao tiếp cơ bản" href="giao-tiep-co-ban.htm" tppabs="http://www.thuviengiaoduc.org/giao-tiep-co-ban">Giao tiếp cơ bản</a></li>
                <li rel="sub_2"><a title="Luyện Thi TOEIC" href="luyen-thi-toeic-tienganh123.htm" tppabs="http://www.thuviengiaoduc.org/luyen-thi-toeic-tienganh123">Luyện Thi TOEIC</a></li>
                <li rel="sub_2"><a title="Luyện Thi IELTS" href="luyen-thi-ielts-tienganh123.htm" tppabs="http://www.thuviengiaoduc.org/luyen-thi-ielts-tienganh123">Luyện Thi IELTS</a></li>
                <li rel="sub_2"><a title="hoc-qua-dich" href="hoc-qua-dich.htm" tppabs="http://www.thuviengiaoduc.org/hoc-qua-dich">Học qua Dịch</a></li>
                <li rel="sub_3" class="iconSub_3">
                    <a class="a_sub_3" title="Tham khảo" href="tham-khao.htm" tppabs="http://www.thuviengiaoduc.org/menu/tham-khao">Tham khảo</a>
                    <div class="col_sub sub_3">
                        <ul>
                            <li><a title="Communication English - tiếng Anh giao tiếp" href="communication-english.htm" tppabs="http://www.thuviengiaoduc.org/communication-english">Communication English</a></li>

                            <li><a title="Tiếng Anh giao tiếp hàng ngày - Tiếng Anh tình huống" href="tieng-anh-hang-ngay.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-hang-ngay">Everyday English</a></li>

                            <li><a title="Tiếng Anh thương mại - Tiếng Anh kinh doanh - Tiếng Anh thương mại online - tiếng Anh thương mại miễn phí" href="tieng-anh-thuong-mai.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-thuong-mai">Business English</a></li>

                            <li><a title="Tiếng Anh du lịch - Tiếng Anh du lịch trực tuyến - Tiếng Anh du lịch khách sạn" href="tieng-anh-du-lich.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-du-lich">Tourism English</a></li>

                            <li><a title="Luyện thi IELTS" href="luyen-thi-ielts.htm" tppabs="http://www.thuviengiaoduc.org/luyen-thi-ielts">Luyện thi IELTS</a></li>

                            <li class="last_des"><a title="Giáo trình streamline - Giáo trình streamline a - Giáo trình streamline english" href="streamline-a.htm" tppabs="http://www.thuviengiaoduc.org/streamline-a">Streamline A</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="mn ">
    <a href="javascript:;">Kỹ năng</a>
    <div style="width:210px;" class="sub_mn shadow">
        <div class="col_sub last_des">
            <ul>
                <li><a title="Phát âm tiếng Anh - Học phát âm tiếng Anh - Phát âm chuẩn tiếng Anh - Học phát âm tiếng Anh qua video" href="hoc-phat-am-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/hoc-phat-am-tieng-anh">Phát âm tiếng Anh</a></li>
                <li><a title="Ngữ pháp tiếng Anh - Học ngữ pháp tiếng Anh - English Grammar" href="ngu-phap-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/ngu-phap-tieng-anh">Ngữ pháp tiếng Anh</a></li>
                <li><a title="Từ vựng tiếng Anh - Từ vựng tiếng Anh theo chủ đề - Học từ vựng tiếng Anh" href="tu-vung-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/tu-vung-tieng-anh">Từ vựng tiếng Anh</a></li>
                <li><a title="Nghe tiếng Anh - Luyện nghe tiếng Anh - Nghe tiếng Anh online - Nghe tiếng Anh trực tuyến - Nghe tiếng Anh giao tiếp" href="nghe-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/nghe-tieng-anh">Nghe</a></li>
                <li><a title="Nói tiếng Anh - Học nói tiếng Anh - Hội thoại tiếng Anh" href="hoc-noi-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/hoc-noi-tieng-anh">Nói</a></li>
                <li><a title="Đọc tiếng Anh - Học đọc tiếng Anh - Đọc hiểu tiếng Anh - Kỹ năng đọc tiếng Anh" href="hoc-doc-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/hoc-doc-tieng-anh">Đọc</a></li>
                <li><a title="Học viết tiếng Anh - Viết tiếng Anh -  Viết tiếng Anh theo chủ đề - Viết tiếng Anh tốt - Kỹ năng viết tiếng Anh" href="hoc-viet-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/hoc-viet-tieng-anh">Viết</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="mn ">
    <a href="hoc-qua-clip.htm" tppabs="http://www.thuviengiaoduc.org/menu/hoc-qua-clip">Học qua Video</a>
    <div class="sub_mn shadow" style="left: -92px;" w="595">
        <div class="col_sub">
            <ul>
                <li rel="sub_3" class="iconSub_3">
                    <a class="a_sub_3" title="Luyện nghe tiếng Anh" href="Video.htm" tppabs="http://www.thuviengiaoduc.org/menu/Video">Luyện nghe tiếng Anh</a>
                    <div class="col_sub sub_3" style="width: 360px !important;">
                        <ul style="float: left;width: 170px;">

                            <li><a title="Arts" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-arts/9701-singing-proust.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-arts/9701-singing-proust.html%27" tppabs="http://www.thuviengiaoduc.org/video-arts">Arts</a></li>

                            <li><a title="Business" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-business/10058-the-secret-sife-of-seats.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-business/10058-the-secret-sife-of-seats.html%27" tppabs="http://www.thuviengiaoduc.org/video-business">Business</a></li>

                            <li><a title="Interview" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-interview/9521-tiesto.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-interview/9521-tiesto.html%27" tppabs="http://www.thuviengiaoduc.org/video-interview">Interview</a></li>

                            <li><a title="Travel" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-travel/9434-touring-tolkien-in-new-zealand.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-travel/9434-touring-tolkien-in-new-zealand.html%27" tppabs="http://www.thuviengiaoduc.org/video-travel">Travel</a></li>

                            <li><a title="Opinion" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-opinion/9130-the-long-wait.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-opinion/9130-the-long-wait.html%27" tppabs="http://www.thuviengiaoduc.org/video-opinion">Opinion</a></li>

                            <li><a title="Technology" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-technology/10125-120-seconds-with-david-pougue-ihone-5s.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-technology/10125-120-seconds-with-david-pougue-ihone-5s.html%27" tppabs="http://www.thuviengiaoduc.org/video-technology">Technology</a></li>

                            <li><a title="Entertainment" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-entertainment/9771-fans-cheer-as-s-korean-star-rain-ends-military-service.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-entertainment/9771-fans-cheer-as-s-korean-star-rain-ends-military-service.html%27" tppabs="http://www.thuviengiaoduc.org/video-entertainment">Entertainment</a></li>

                            <li><a title="Environment" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-environment/9081-environmental-taxes-in-ireland.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-environment/9081-environmental-taxes-in-ireland.html%27" tppabs="http://www.thuviengiaoduc.org/video-environment">Environment</a></li>

                        </ul>
                        <ul style="float: right;width: 170px;">
                            <li><a title="Health" href="9932-making-the-case-for-eating-fruit.html" tppabs="http://www.thuviengiaoduc.org/video-health">Health</a></li>

                            <li><a title="Living" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-living/10093-man-after-surgery-youre-my-wife.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-living/10093-man-after-surgery-youre-my-wife.html%27" tppabs="http://www.thuviengiaoduc.org/video-living">Living</a></li>

                            <li><a title="Sports" href="9795-arsenals-running-man.html" tppabs="http://www.thuviengiaoduc.org/video-sports">Sports</a></li>

                            <li><a title="Weather" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-weather/10112-thousands-trapped-after-mexico-storms.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-weather/10112-thousands-trapped-after-mexico-storms.html%27" tppabs="http://www.thuviengiaoduc.org/video-weather">Weather</a></li>
                            <li><a href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-animals/9680-wildlife-conservation-in-england.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-animals/9680-wildlife-conservation-in-england.html%27" tppabs="http://www.thuviengiaoduc.org/video-animals" title="Animals">Animals</a></li>
                            <li><a href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-finance/8693-get-your-finances-together.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-finance/8693-get-your-finances-together.html%27" tppabs="http://www.thuviengiaoduc.org/video-finance" title="Finance">Finance</a></li>
                            <li><a href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-news/9716-san-francisco-crash-asiana-214-flight-attendants-ejected.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-news/9716-san-francisco-crash-asiana-214-flight-attendants-ejected.html%27" tppabs="http://www.thuviengiaoduc.org/video-news" title="News">News</a></li>
                            <li class="last_des"><a title="Science" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/video-science/9338-asteroid-exploded-in-the-sky-near-the-russian-city-of-chelyabinsk.html  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/video-science/9338-asteroid-exploded-in-the-sky-near-the-russian-city-of-chelyabinsk.html%27" tppabs="http://www.thuviengiaoduc.org/video-science">Science</a></li>
                        </ul>
                    </div>
                </li>
                <li rel="sub_2"><a title="Học tiếng Anh qua CNN - Nghe CNN" href="hoc-tieng-anh-qua-cnn.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-cnn">Học tiếng Anh qua CNN</a></li>
                <li rel="sub_2"><a title="Học tiếng Anh qua BBC news" href="hoc-tieng-anh-qua-bbc.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-bbc">Học tiếng Anh qua BBC</a></li>
                <li rel="sub_2"><a title="Học tiếng Anh qua Video VOA" href="luyen-nghe-tieng-anh-qua-video-voa.htm" tppabs="http://www.thuviengiaoduc.org/luyen-nghe-tieng-anh-qua-video-voa">Học tiếng Anh qua Video VOA</a></li>
                <li rel="sub_2"><a title="Học tiếng Anh với người nổi tiếng" href="hoc-tieng-anh-voi-nguoi-noi-tieng.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-voi-nguoi-noi-tieng">Học tiếng Anh với người nổi tiếng</a></li>
                <li rel="sub_2"><a title="Học tiếng Anh qua Youtube" href="hoc-tieng-anh-qua-youtube.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-youtube">Học tiếng Anh qua Youtube</a></li>
                <li rel="sub_2"><a title="Học tiếng Anh qua Video TED" href="luyen-nghe-voi-video-ted.htm" tppabs="http://www.thuviengiaoduc.org/luyen-nghe-voi-video-ted">Học tiếng Anh qua Video TED</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="mn ">
    <a href="hoc-va-choi.htm" tppabs="http://www.thuviengiaoduc.org/menu/hoc-va-choi">Học & chơi</a>
    <div style="width:210px; left:auto;right:-40px" class="sub_mn shadow">
        <div class="col_sub">
            <ul>
                <li><a title="Học tiếng Anh qua bài hát" href="hoc-tieng-anh-qua-bai-hat.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-bai-hat">Học tiếng Anh qua bài hát</a></li>
                <li><a title="Học tiếng Anh qua phim Trailer" href="hoc-tieng-anh-qua-phim-trailer.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-phim-trailer">Học tiếng Anh qua phim Trailer</a></li>
                <li><a title="Học tiếng Anh qua truyện cười - truyện cười tiếng Anh" href="hoc-tieng-anh-qua-truyen-cuoi.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-truyen-cuoi">Học tiếng Anh qua truyện cười</a></li>
                <li><a title="Thi Hát tiếng Anh Online" href="thi-hat-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/thi-hat-tieng-anh">Thi Hát tiếng Anh Online</a></li>
                <li><a title="Trò chơi tiếng Anh - English Game" href="tro-choi-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/tro-choi-tieng-anh">Trò chơi tiếng Anh</a></li>
                <li><a title="Danh ngôn tiếng Anh" href="danh-ngon-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/danh-ngon-tieng-anh">Danh ngôn tiếng Anh</a></li>
                <li class="last_des"><a title="What're your words?" href="what-are-your-words.htm" tppabs="http://www.thuviengiaoduc.org/what-are-your-words">What're your words?</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="mn ">
    <a href="bai-test.htm" tppabs="http://www.thuviengiaoduc.org/menu/bai-test">Bài test</a>
    <div style="width:210px;left:auto;right:-40px" class="sub_mn shadow">
        <div class="col_sub">
            <ul>
                <li><a title="Kiểm tra trình độ" href="kiem-tra-trinh-do.htm" tppabs="http://www.thuviengiaoduc.org/kiem-tra-trinh-do">Kiểm tra trình độ</a></li>
                <li><a title="Pronunciation Test" href="pronunciation-test.htm" tppabs="http://www.thuviengiaoduc.org/pronunciation-test">Pronunciation Test</a></li>
                <li><a title="Grammar Test" href="bai-tap-ngu-phap-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/bai-tap-ngu-phap-tieng-anh">Grammar Quiz</a></li>
                <li><a title="Vocabulary Test" href="flash-test.htm" tppabs="http://www.thuviengiaoduc.org/flash-test">Flash Test</a></li>
                <li><a title="Thi đấu tiếng Anh" href="thi-dau.htm" tppabs="http://www.thuviengiaoduc.org/thi-dau">Thi đấu tiếng Anh</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li class="mn" title="">
    <a href="chamdiem.htm" tppabs="http://www.thuviengiaoduc.org/menu/chamdiem">Chấm điểm</a>
    <div class="sub_mn shadow" style="width: 423px; display: none; left:auto;right:-40px;">
        <div class="col_sub">
            <ul>
                <li><a href="dich-anh-viet.htm" tppabs="http://www.thuviengiaoduc.org/dich-anh-viet" title="Dịch Anh - Việt (dễ)">Dịch Anh - Việt (dễ)</a></li>
                <li><a href="dich-viet-anh.htm" tppabs="http://www.thuviengiaoduc.org/dich-viet-anh" title="Dịch Việt - Anh (dễ)">Dịch Việt - Anh (dễ)</a></li>
                <li><a href="viet-qua-tranh-de.htm" tppabs="http://www.thuviengiaoduc.org/viet-qua-tranh-de" title="Viết qua tranh (dễ)">Viết qua tranh (dễ)</a></li>
                <li><a href="viet-essay.htm" tppabs="http://www.thuviengiaoduc.org/viet-essay" title="Viết luận ngắn">Viết luận ngắn</a></li>
                <li><a href="luyen-noi-tieng-anh.htm" tppabs="http://www.thuviengiaoduc.org/luyen-noi-tieng-anh" title="Luyện nói tiếng Anh">Luyện nói tiếng Anh</a></li>
                <li><a href="listening-and-writing-easy.htm" tppabs="http://www.thuviengiaoduc.org/listening-and-writing-easy" title="Nghe và Viết lại (dễ)">Nghe và Viết lại (dễ)</a></li>
            </ul>
        </div>
        <div class="col_sub">
            <ul>
                <li><a href="dich-anh-viet-inter.htm" tppabs="http://www.thuviengiaoduc.org/dich-anh-viet-inter" title="Dịch Anh - Việt (inter)">Dịch Anh - Việt (inter)</a></li>
                <li><a href="dich-viet-anh-inter.htm" tppabs="http://www.thuviengiaoduc.org/dich-viet-anh-inter" title="Dịch Việt - Anh (inter)">Dịch Việt - Anh (inter)</a></li>
                <li><a href="hoc-viet-tieng-anh-qua-tranh.htm" tppabs="http://www.thuviengiaoduc.org/hoc-viet-tieng-anh-qua-tranh" title="Viết qua tranh (inter)">Viết qua tranh (inter)</a></li>
                <li><a href="viet-thu-phan-hoi.htm" tppabs="http://www.thuviengiaoduc.org/viet-thu-phan-hoi" title="Viết thư phản hồi">Viết thư phản hồi</a></li>
                <li><a href="luyen-doc-doan-van.htm" tppabs="http://www.thuviengiaoduc.org/luyen-doc-doan-van" title="Luyện đọc đoạn văn">Luyện đọc đoạn văn</a></li>
                <li><a href="listening-and-writing-advanced.htm" tppabs="http://www.thuviengiaoduc.org/listening-and-writing-advanced" title="Nghe và Viết lại (inter)">Nghe và Viết lại (inter)</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="mn ">
    <a href="hoc-offline.htm" tppabs="http://www.thuviengiaoduc.org/menu/hoc-offline">Học Offline</a>
    <div style="width:210px;left:auto;right:-40px;" class="sub_mn shadow">
        <div class="col_sub">
            <ul>
                <li><a title="Lịch khai giảng" href="lich-khai-giang.htm" tppabs="http://www.thuviengiaoduc.org/lich-khai-giang">Lịch khai giảng</a></li>
                <li class="last_des"><a title="Danh Sách Giáo Viên TiếngAnh123" href="giao-vien-tienganh123.htm" tppabs="http://www.thuviengiaoduc.org/giao-vien-tienganh123">Giáo Viên TiếngAnh123</a></li>
            </ul>
        </div>
    </div>
    <div id="arrow"></div>
</li>
<li title="" class="no_arown mn">
    <a href="javascript:if(confirm(%27http://forum.thuviengiaoduc.org/index.php  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://forum.thuviengiaoduc.org/index.php%27" tppabs="http://forum.thuviengiaoduc.org/index.php">Diễn đàn</a>
</li>
</ul>
</div>

<div class="containt_center_top clear"></div>
<div class="containt_center_cen clear">
<table cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" class="containt_center_cen_left">
<div class="comment_bai_hoc clear">
<form action="" method="post" onsubmit="return register()" autocomplete="off" id="bnv_formReg">
<div class="res_box">
<div class="hc_box_title">
    <div class="hc_box_title_left"></div>
    <div class="hc_box_title_center">ĐĂNG KÝ THÀNH VIÊN</div>
    <div class="hc_box_title_right"></div>
</div>

<div class="row-input-other-2">
    <div class="box-other-lg-2">
        <h3>Đăng ký nhanh bằng tài khoản:</h3>
        <ul>
            <li><a title="Đăng nhập bằng tài khoản Facebook" class="icon-fb" id="icon-fb" href="javascript:void(0)">&nbsp;</a></li>
            <li><a title="Đăng nhập bằng tài khoản Google" identity="g" class="icon-gg openid" href="javascript:void(0)">&nbsp;</a></li>
            <li><a title="Đăng nhập bằng tài khoản Yahoo" identity="y" class="icon-yh openid" href="javascript:void(0)">&nbsp;</a></li>
        </ul>
    </div>
</div>
<h3 class="note-mau-regis">Hoặc đăng ký thông thường bằng cách điền thông tin vào mẫu bên dưới:</h3>
<div class="res_step_title">
    <div class="res_step_t_num res_num1">Thông tin tài khoản</div>
    <div class="res_step_t_r"></div>
</div>
<div class="res_notes">Các mục có dấu <span class="red"> * </span>  là bắt buộc phải điền</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up"><b>Tên đăng nhập </b>(ít nhất 5 kí tự): <span class="red">*</span></div>
        <div class="res_f_r_left_down">Ví dụ: hoctienganh</div>
    </div>
    <div class="res_f_r_right">
        <input class="res_input" id="username"  name="username" maxlength="16" value="" type="text">
        <div id="er_username" class="res_f_note"></div>
    </div>
</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up"><b>Mật khẩu </b>(ít nhất 6 kí tự): <span class="red">*</span></div>
        <div class="res_f_r_left_down">Mật khẩu phải bao gồm cả chữ cái và chữ số, có ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường, 1 chữ số và không được chứa khoảng trắng</div>
    </div>
    <div class="res_f_r_right">
        <input class="res_input res_input_pass" onclick="this.select()" id="password" type="password" >
    </div>
</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up"><b>Xác nhận lại mật khẩu </b>: <span class="red">*</span></div>
        <div class="res_f_r_left_down">Bạn hãy nhập lại mật khẩu ở trên</div>
    </div>
    <div class="res_f_r_right">
        <input class="res_input res_input_pass" onclick="this.select()" id="repassword" type="password" >
        <div id="er_password" class="res_f_note"></div>
    </div>
</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up"><b>Địa chỉ email của bạn</b>: <span class="red">*</span></div>
        <div class="res_f_r_left_down">Bạn hãy nhập email của bạn</div>
    </div>
    <div class="res_f_r_right">
        <input id="res_email" class="res_input" type="text" >
        <div id="er_email" class="res_f_note"></div>
    </div>
</div>
<div class="res_notes font_weight">Email đăng ký phải là email thật để bạn có được những quyền lợi về sau như đổi mật khẩu...</div>
<div class="res_step_title">
    <div class="res_step_t_num res_num2">Thông tin cá nhân</div>
    <div class="res_step_t_r"></div>
</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up">Họ và Tên: </div>
    </div>
    <div class="res_f_r_right">
        <input id="res_name" class="res_input" type="text" >
        <div id="er_hoten" class="res_f_note"></div>
    </div>
    <div id="sex">
        <div class="res_radio_box">
            <div rel="male" class="res_radio_ic res_radio_checked" alt="true"></div>
            <div class="res_radio_te">Nam</div>
        </div>
        <div class="res_radio_box">
            <div rel="female" class="res_radio_ic"></div>
            <div class="res_radio_te">Nữ</div>
        </div>
    </div>
</div>
<div class="res_form_row">
<div class="res_f_r_left">
    <div class="res_f_r_left_up">Ngày sinh:</div>
</div>
<div class="res_f_r_right">
<div class="res_select">
    <label>
        <select id="day">
            <option value="">---</option>

            <option value="1">1</option>

            <option value="2">2</option>

            <option value="3">3</option>

            <option value="4">4</option>

            <option value="5">5</option>

            <option value="6">6</option>

            <option value="7">7</option>

            <option value="8">8</option>

            <option value="9">9</option>

            <option value="10">10</option>

            <option value="11">11</option>

            <option value="12">12</option>

            <option value="13">13</option>

            <option value="14">14</option>

            <option value="15">15</option>

            <option value="16">16</option>

            <option value="17">17</option>

            <option value="18">18</option>

            <option value="19">19</option>

            <option value="20">20</option>

            <option value="21">21</option>

            <option value="22">22</option>

            <option value="23">23</option>

            <option value="24">24</option>

            <option value="25">25</option>

            <option value="26">26</option>

            <option value="27">27</option>

            <option value="28">28</option>

            <option value="29">29</option>

            <option value="30">30</option>

            <option value="31">31</option>

        </select>
    </label>​
</div>
<div class="res_select">
    <label>
        <select id="mon">
            <option value="">-------</option>

            <option value="1">Tháng 1</option>

            <option value="2">Tháng 2</option>

            <option value="3">Tháng 3</option>

            <option value="4">Tháng 4</option>

            <option value="5">Tháng 5</option>

            <option value="6">Tháng 6</option>

            <option value="7">Tháng 7</option>

            <option value="8">Tháng 8</option>

            <option value="9">Tháng 9</option>

            <option value="10">Tháng 10</option>

            <option value="11">Tháng 11</option>

            <option value="12">Tháng 12</option>

        </select>
    </label>​
</div>
<div class="res_select res_select_last">
    <label>
        <select id="year">
            <option value="">-----</option>

            <option value="2013" >2013</option>

            <option value="2012" >2012</option>

            <option value="2011" >2011</option>

            <option value="2010" >2010</option>

            <option value="2009" >2009</option>

            <option value="2008" >2008</option>

            <option value="2007" >2007</option>

            <option value="2006" >2006</option>

            <option value="2005" >2005</option>

            <option value="2004" >2004</option>

            <option value="2003" >2003</option>

            <option value="2002" >2002</option>

            <option value="2001" >2001</option>

            <option value="2000" >2000</option>

            <option value="1999" >1999</option>

            <option value="1998" >1998</option>

            <option value="1997" >1997</option>

            <option value="1996" >1996</option>

            <option value="1995" >1995</option>

            <option value="1994" >1994</option>

            <option value="1993" >1993</option>

            <option value="1992" >1992</option>

            <option value="1991" >1991</option>

            <option value="1990" >1990</option>

            <option value="1989" >1989</option>

            <option value="1988" >1988</option>

            <option value="1987" >1987</option>

            <option value="1986" >1986</option>

            <option value="1985" >1985</option>

            <option value="1984" >1984</option>

            <option value="1983" >1983</option>

            <option value="1982" >1982</option>

            <option value="1981" >1981</option>

            <option value="1980" >1980</option>

            <option value="1979" >1979</option>

            <option value="1978" >1978</option>

            <option value="1977" >1977</option>

            <option value="1976" >1976</option>

            <option value="1975" >1975</option>

            <option value="1974" >1974</option>

            <option value="1973" >1973</option>

            <option value="1972" >1972</option>

            <option value="1971" >1971</option>

            <option value="1970" >1970</option>

            <option value="1969" >1969</option>

            <option value="1968" >1968</option>

            <option value="1967" >1967</option>

            <option value="1966" >1966</option>

            <option value="1965" >1965</option>

            <option value="1964" >1964</option>

            <option value="1963" >1963</option>

            <option value="1962" >1962</option>

            <option value="1961" >1961</option>

            <option value="1960" >1960</option>

            <option value="1959" >1959</option>

            <option value="1958" >1958</option>

            <option value="1957" >1957</option>

            <option value="1956" >1956</option>

            <option value="1955" >1955</option>

            <option value="1954" >1954</option>

            <option value="1953" >1953</option>

            <option value="1952" >1952</option>

            <option value="1951" >1951</option>

            <option value="1950" >1950</option>

            <option value="1949" >1949</option>

            <option value="1948" >1948</option>

            <option value="1947" >1947</option>

            <option value="1946" >1946</option>

            <option value="1945" >1945</option>

            <option value="1944" >1944</option>

            <option value="1943" >1943</option>

            <option value="1942" >1942</option>

            <option value="1941" >1941</option>

            <option value="1940" >1940</option>

            <option value="1939" >1939</option>

            <option value="1938" >1938</option>

            <option value="1937" >1937</option>

            <option value="1936" >1936</option>

            <option value="1935" >1935</option>

            <option value="1934" >1934</option>

            <option value="1933" >1933</option>

            <option value="1932" >1932</option>

            <option value="1931" >1931</option>

            <option value="1930" >1930</option>

            <option value="1929" >1929</option>

            <option value="1928" >1928</option>

            <option value="1927" >1927</option>

            <option value="1926" >1926</option>

            <option value="1925" >1925</option>

            <option value="1924" >1924</option>

            <option value="1923" >1923</option>

            <option value="1922" >1922</option>

            <option value="1921" >1921</option>

            <option value="1920" >1920</option>

        </select>
    </label>​
</div>
</div>
<div class="res_radio_box">
    <div id="showns" class="res_check_ic" alt="false"></div>
    <div class="res_radio_te">Ẩn ngày sinh với mọi người</div>
</div>
</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up">Địa chỉ: </div>
    </div>
    <div class="res_f_r_right">
        <input id="res_address" class="res_input" type="text" >
    </div>
    <div class="res_radio_box">
        <div id="show_address" class="res_check_ic" alt="false"></div>
        <div class="res_radio_te">Ẩn địa chỉ với mọi người</div>
    </div>
</div>
<div class="res_form_row">
<div class="res_f_r_left">
    <div class="res_f_r_left_up">Quốc gia: </div>
</div>
<div class="res_select">
<label>
<select id="national" name="national">
<option selected="selected" value="0">------------------</option>

<option selected="" value="United States">United States</option>

<option selected="" value="Canada">Canada</option>

<option selected="" value="Abu Dhabi">Abu Dhabi</option>

<option selected="" value="Afghanistan">Afghanistan</option>

<option selected="" value="Ajman">Ajman</option>

<option selected="" value="Aland Islands">Aland Islands</option>

<option selected="" value="Albania">Albania</option>

<option selected="" value="Alderney">Alderney</option>

<option selected="" value="Algeria">Algeria</option>

<option selected="" value="American Samoa">American Samoa</option>

<option selected="" value="Andorra">Andorra</option>

<option selected="" value="Angola">Angola</option>

<option selected="" value="Anguilla">Anguilla</option>

<option selected="" value="Antarctica">Antarctica</option>

<option selected="" value="Antigua and Barbuda">Antigua and Barbuda</option>

<option selected="" value="Argentina">Argentina</option>

<option selected="" value="Armenia">Armenia</option>

<option selected="" value="Aruba">Aruba</option>

<option selected="" value="Australia-Aboriginal">Australia-Aboriginal</option>

<option selected="" value="Australia">Australia</option>

<option selected="" value="Austria">Austria</option>

<option selected="" value="Azerbaijan">Azerbaijan</option>

<option selected="" value="Azores">Azores</option>

<option selected="" value="Bahamas">Bahamas</option>

<option selected="" value="Bahrain">Bahrain</option>

<option selected="" value="Balearic Islands">Balearic Islands</option>

<option selected="" value="Bangladesh">Bangladesh</option>

<option selected="" value="Barbados">Barbados</option>

<option selected="" value="Belarus">Belarus</option>

<option selected="" value="Belgium">Belgium</option>

<option selected="" value="Belize">Belize</option>

<option selected="" value="Benin">Benin</option>

<option selected="" value="Bermuda">Bermuda</option>

<option selected="" value="Bhutan">Bhutan</option>

<option selected="" value="Bolivia">Bolivia</option>

<option selected="" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>

<option selected="" value="Botswana">Botswana</option>

<option selected="" value="Bouvet Island">Bouvet Island</option>

<option selected="" value="Brazil">Brazil</option>

<option selected="" value="British Antarctic Territory">British Antarctic Territory</option>

<option selected="" value="British Indian Ocean Territory">British Indian Ocean Territory</option>

<option selected="" value="British Virgin Islands">British Virgin Islands</option>

<option selected="" value="Brunei">Brunei</option>

<option selected="" value="Bulgaria">Bulgaria</option>

<option selected="" value="Burkina Faso">Burkina Faso</option>

<option selected="" value="Burundi">Burundi</option>

<option selected="" value="Cambodia">Cambodia</option>

<option selected="" value="Cameroon">Cameroon</option>

<option selected="" value="Canary Islands">Canary Islands</option>

<option selected="" value="Cape Verde">Cape Verde</option>

<option selected="" value="Cayman Islands">Cayman Islands</option>

<option selected="" value="Central African Republic">Central African Republic</option>

<option selected="" value="Chad">Chad</option>

<option selected="" value="Chile">Chile</option>

<option selected="" value="China">China</option>

<option selected="" value="Christmas Island">Christmas Island</option>

<option selected="" value="Cocos Islands">Cocos Islands</option>

<option selected="" value="Colombia">Colombia</option>

<option selected="" value="Comoros">Comoros</option>

<option selected="" value="Congo-Brazzaville">Congo-Brazzaville</option>

<option selected="" value="Congo-Kinshasa">Congo-Kinshasa</option>

<option selected="" value="Cook Islands">Cook Islands</option>

<option selected="" value="Coral Sea Islands">Coral Sea Islands</option>

<option selected="" value="Costa Rica">Costa Rica</option>

<option selected="" value="Cote DIvoire">Cote DIvoire</option>

<option selected="" value="Croatia">Croatia</option>

<option selected="" value="Cuba">Cuba</option>

<option selected="" value="Cyprus">Cyprus</option>

<option selected="" value="Czech Republic">Czech Republic</option>

<option selected="" value="Denmark">Denmark</option>

<option selected="" value="Djibouti">Djibouti</option>

<option selected="" value="Dominica">Dominica</option>

<option selected="" value="Dominican Republic">Dominican Republic</option>

<option selected="" value="Dubai">Dubai</option>

<option selected="" value="East Timor">East Timor</option>

<option selected="" value="Ecuador">Ecuador</option>

<option selected="" value="Egypt">Egypt</option>

<option selected="" value="El Salvador">El Salvador</option>

<option selected="" value="England">England</option>

<option selected="" value="Equatorial Guinea">Equatorial Guinea</option>

<option selected="" value="Eritrea">Eritrea</option>

<option selected="" value="Estonia">Estonia</option>

<option selected="" value="Ethiopia">Ethiopia</option>

<option selected="" value="Falkland Islands">Falkland Islands</option>

<option selected="" value="Faroe Islands">Faroe Islands</option>

<option selected="" value="Fiji">Fiji</option>

<option selected="" value="Finland">Finland</option>

<option selected="" value="France">France</option>

<option selected="" value="French Guiana Independentist">French Guiana Independentist</option>

<option selected="" value="French Guiana">French Guiana</option>

<option selected="" value="French Polynesia">French Polynesia</option>

<option selected="" value="Fujairah">Fujairah</option>

<option selected="" value="Gabon">Gabon</option>

<option selected="" value="Gambia">Gambia</option>

<option selected="" value="Georgia">Georgia</option>

<option selected="" value="Germany">Germany</option>

<option selected="" value="Ghana">Ghana</option>

<option selected="" value="Gibraltar">Gibraltar</option>

<option selected="" value="Greece">Greece</option>

<option selected="" value="Greenland">Greenland</option>

<option selected="" value="Grenada">Grenada</option>

<option selected="" value="Guadeloupe">Guadeloupe</option>

<option selected="" value="Guam">Guam</option>

<option selected="" value="Guatemala">Guatemala</option>

<option selected="" value="Guernsey">Guernsey</option>

<option selected="" value="Guinea-Bissau">Guinea-Bissau</option>

<option selected="" value="Guinea">Guinea</option>

<option selected="" value="Guyana">Guyana</option>

<option selected="" value="Haiti">Haiti</option>

<option selected="" value="Heard and McDonald Islands">Heard and McDonald Islands</option>

<option selected="" value="Honduras">Honduras</option>

<option selected="" value="Hong Kong">Hong Kong</option>

<option selected="" value="Hungary">Hungary</option>

<option selected="" value="Iceland">Iceland</option>

<option selected="" value="India">India</option>

<option selected="" value="Indonesia">Indonesia</option>

<option selected="" value="Iran">Iran</option>

<option selected="" value="Iraq">Iraq</option>

<option selected="" value="Ireland">Ireland</option>

<option selected="" value="Isle of Man">Isle of Man</option>

<option selected="" value="Israel">Israel</option>

<option selected="" value="Italy">Italy</option>

<option selected="" value="Jamaica">Jamaica</option>

<option selected="" value="Japan">Japan</option>

<option selected="" value="Jersey">Jersey</option>

<option selected="" value="Jordan">Jordan</option>

<option selected="" value="Kazakhstan">Kazakhstan</option>

<option selected="" value="Kenya">Kenya</option>

<option selected="" value="Kiribati">Kiribati</option>

<option selected="" value="Kuwait">Kuwait</option>

<option selected="" value="Kyrgyzstan">Kyrgyzstan</option>

<option selected="" value="Laos">Laos</option>

<option selected="" value="Latvia">Latvia</option>

<option selected="" value="Lebanon">Lebanon</option>

<option selected="" value="Lesotho">Lesotho</option>

<option selected="" value="Liberia">Liberia</option>

<option selected="" value="Libya">Libya</option>

<option selected="" value="Liechtenstein">Liechtenstein</option>

<option selected="" value="Lithuania">Lithuania</option>

<option selected="" value="Lord Howe Island">Lord Howe Island</option>

<option selected="" value="Luxembourg">Luxembourg</option>

<option selected="" value="Macao">Macao</option>

<option selected="" value="Macedonia">Macedonia</option>

<option selected="" value="Madagascar">Madagascar</option>

<option selected="" value="Madeira">Madeira</option>

<option selected="" value="Malawi">Malawi</option>

<option selected="" value="Malaysia">Malaysia</option>

<option selected="" value="Maldives">Maldives</option>

<option selected="" value="Mali">Mali</option>

<option selected="" value="Malta">Malta</option>

<option selected="" value="Marshall Islands">Marshall Islands</option>

<option selected="" value="Martinique">Martinique</option>

<option selected="" value="Mauritania">Mauritania</option>

<option selected="" value="Mauritius">Mauritius</option>

<option selected="" value="Mayotte">Mayotte</option>

<option selected="" value="Mexico">Mexico</option>

<option selected="" value="Micronesia">Micronesia</option>

<option selected="" value="Midway Islands">Midway Islands</option>

<option selected="" value="Moldova">Moldova</option>

<option selected="" value="Monaco">Monaco</option>

<option selected="" value="Mongolia">Mongolia</option>

<option selected="" value="Montenegro">Montenegro</option>

<option selected="" value="Montserrat">Montserrat</option>

<option selected="" value="Morocco">Morocco</option>

<option selected="" value="Mozambique">Mozambique</option>

<option selected="" value="Myanmar">Myanmar</option>

<option selected="" value="Namibia">Namibia</option>

<option selected="" value="Nauru">Nauru</option>

<option selected="" value="Nepal">Nepal</option>

<option selected="" value="Netherlands Antilles">Netherlands Antilles</option>

<option selected="" value="Netherlands">Netherlands</option>

<option selected="" value="New Caledonia">New Caledonia</option>

<option selected="" value="New Zealand-Maori">New Zealand-Maori</option>

<option selected="" value="New Zealand">New Zealand</option>

<option selected="" value="Nicaragua">Nicaragua</option>

<option selected="" value="Niger">Niger</option>

<option selected="" value="Nigeria">Nigeria</option>

<option selected="" value="Niue">Niue</option>

<option selected="" value="Norfolk Island">Norfolk Island</option>

<option selected="" value="North Korea">North Korea</option>

<option selected="" value="Northern Cyprus">Northern Cyprus</option>

<option selected="" value="Northern Ireland">Northern Ireland</option>

<option selected="" value="Northern Marianas">Northern Marianas</option>

<option selected="" value="Norway">Norway</option>

<option selected="" value="Oman">Oman</option>

<option selected="" value="Orkney Islands">Orkney Islands</option>

<option selected="" value="Pakistan">Pakistan</option>

<option selected="" value="Palau">Palau</option>

<option selected="" value="Palestine">Palestine</option>

<option selected="" value="Panama">Panama</option>

<option selected="" value="Papua New Guinea">Papua New Guinea</option>

<option selected="" value="Paraguay">Paraguay</option>

<option selected="" value="Peru">Peru</option>

<option selected="" value="Philippine">Philippine</option>

<option selected="" value="Pitcairn Islands">Pitcairn Islands</option>

<option selected="" value="Poland">Poland</option>

<option selected="" value="Portugal,">Portugal,</option>

<option selected="" value="Puerto Rico">Puerto Rico</option>

<option selected="" value="Qatar">Qatar</option>

<option selected="" value="Ras al-Khaimah">Ras al-Khaimah</option>

<option selected="" value="Reunion">Reunion</option>

<option selected="" value="Romania">Romania</option>

<option selected="" value="Russian Federation,">Russian Federation,</option>

<option selected="" value="Rwanda">Rwanda</option>

<option selected="" value="Sami">Sami</option>

<option selected="" value="Samoa">Samoa</option>

<option selected="" value="San Marino">San Marino</option>

<option selected="" value="Sao Tome e Principe">Sao Tome e Principe</option>

<option selected="" value="Sark">Sark</option>

<option selected="" value="Saudi Arabia">Saudi Arabia</option>

<option selected="" value="Scotland">Scotland</option>

<option selected="" value="Seborga">Seborga</option>

<option selected="" value="Senegal">Senegal</option>

<option selected="" value="Serbia">Serbia</option>

<option selected="" value="Seychelles">Seychelles</option>

<option selected="" value="Sharjah">Sharjah</option>

<option selected="" value="Shetland Islands">Shetland Islands</option>

<option selected="" value="Sierra Leone">Sierra Leone</option>

<option selected="" value="Sikkim">Sikkim</option>

<option selected="" value="Singapore">Singapore</option>

<option selected="" value="Slovakia">Slovakia</option>

<option selected="" value="Slovenia">Slovenia</option>

<option selected="" value="Solomon Islands">Solomon Islands</option>

<option selected="" value="Somalia">Somalia</option>

<option selected="" value="Somaliland">Somaliland</option>

<option selected="" value="South Africa">South Africa</option>

<option selected="" value="South Korea">South Korea</option>

<option selected="" value="Spain">Spain</option>

<option selected="" value="Sri Lanka">Sri Lanka</option>

<option selected="" value="St Helena">St Helena</option>

<option selected="" value="St Kitts and Nevis">St Kitts and Nevis</option>

<option selected="" value="St Lucia">St Lucia</option>

<option selected="" value="St Pierre and Miquelon">St Pierre and Miquelon</option>

<option selected="" value="St Vincent and the Grenadines">St Vincent and the Grenadines</option>

<option selected="" value="Sudan">Sudan</option>

<option selected="" value="uriname">uriname</option>

<option selected="" value="Swaziland">Swaziland</option>

<option selected="" value="Sweden">Sweden</option>

<option selected="" value="Switzerland">Switzerland</option>

<option selected="" value="Syria">Syria</option>

<option selected="" value="Tahiti">Tahiti</option>

<option selected="" value="Taiwan">Taiwan</option>

<option selected="" value="Tajikstan">Tajikstan</option>

<option selected="" value="Tanzania">Tanzania</option>

<option selected="" value="Thailand">Thailand</option>

<option selected="" value="Tibet">Tibet</option>

<option selected="" value="Togo">Togo</option>

<option selected="" value="Tokelau">Tokelau</option>

<option selected="" value="Tonga">Tonga</option>

<option selected="" value="Trinidad and Tobago">Trinidad and Tobago</option>

<option selected="" value="Tromelin">Tromelin</option>

<option selected="" value="Tunisia">Tunisia</option>

<option selected="" value="Turkey">Turkey</option>

<option selected="" value="Turkmenistan">Turkmenistan</option>

<option selected="" value="Tuvalu">Tuvalu</option>

<option selected="" value="US Virgin Islands">US Virgin Islands</option>

<option selected="" value="Uganda">Uganda</option>

<option selected="" value="Ukraine">Ukraine</option>

<option selected="" value="Umm al-Qaiwan">Umm al-Qaiwan</option>

<option selected="" value="United Kingdom">United Kingdom</option>

<option selected="" value="United Nations">United Nations</option>

<option selected="" value="Uruguay">Uruguay</option>

<option selected="" value="Uzbekistan">Uzbekistan</option>

<option selected="" value="Vanuatu">Vanuatu</option>

<option selected="" value="Vatican City State">Vatican City State</option>

<option selected="" value="Venezuela">Venezuela</option>

<option selected="" value="Wake Island">Wake Island</option>

<option selected="" value="Wales">Wales</option>

<option selected="" value="Wallis &amp; Futuna">Wallis &amp; Futuna</option>

<option selected="" value="Western Sahara">Western Sahara</option>

<option selected="" value="Yemen">Yemen</option>

<option selected="" value="Yugoslavia">Yugoslavia</option>

<option selected="" value="Zambia">Zambia</option>

<option selected="" value="Zimbabwe">Zimbabwe</option>

<option selected="" value="Vietnam">Vietnam</option>

</select>​
</label>
</div>
</div>
<div class="res_form_row">
    <div class="res_f_r_left">
        <div class="res_f_r_left_up">Nơi công tác / trường: </div>
    </div>
    <div class="res_f_r_right">
        <input id="res_school" class="res_input" type="text" >
    </div>
</div>
<div class="res_step_title">
    <div class="res_step_t_num res_num3">Quy định sử dụng</div>
    <div class="res_step_t_r"></div>
</div>
<div class="res_form_row">
    <div class="res_radio_box">
        <div id="dieukhoan" class="res_check_ic res_radio_checked res_radio_checked" alt="true"></div>
        <div class="res_radio_te"><span class="font_weight">Tôi đồng ý với<a href="2310-quy-dinh-su-dung.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2310-quy-dinh-su-dung.html" target="_blank" class="blue2"> Điều khoản và Quy định sử dụng</a> tại TiếngAnh123 <span class="red">*</span></span></div>

    </div>
</div>
<div id="er_dieukhoan" class="res_f_note"></div>
<div class="res_form_row">
    <div class="res_f_r_left res_code_te">
        <div class="res_f_r_left_up">Bạn hãy điền 6 kí tự bên hình vào ô bên cạnh để hoàn thành</div>
    </div>
    <div class="res_f_r_right">
        <div class="res_code_img"><img id="reloadCapcha"  src="captcha.php.png" tppabs="http://www.thuviengiaoduc.org/pages/captcha.php"></div>
        <div class="res_code_bt"><a href="javascript:;" id="rsreloadCapcha"><img src="res_bt_code.png" tppabs="http://www.thuviengiaoduc.org/images/home/res_bt_code.png"></a></div>
        <input class="res_input res_input_code" id="code" type="text" >
        <div id="er_code" class="res_f_note"></div>
    </div>
    <div class="res_form_bt">
        <input type="submit" value="" class="res_form_sub">
    </div>
    <div class="res_form_bt">
        <a href="index.htm" tppabs="http://www.thuviengiaoduc.org/" class="res_form_can"></a>
    </div>

</div>

</div>
</form>
</div>
</td>
<td valign="top"  class="containt_center_cen_right"><div class="search clear">
    <form action="http://www.thuviengiaoduc.org/search.html">
        <input type="hidden" name="cx" value="018190178346521003272:szsvnrednru" />
        <input type="hidden" name="cof" value="FORID:10" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input type="text" name="q" class="input_search" value="Tìm kiếm bài học"/>
        <input class="btnsm" name="sa" style="width: 37px; height: 38px;" type="image" src="bg_search_right.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/bg_search_right.jpg">
    </form>
    </div>
<a href="tra-cuu-tu-dien-online.html" tppabs="http://www.thuviengiaoduc.org/dictionary/tra-cuu-tu-dien-online.html" title="Tra từ điển"><img src="tudien_small.jpg" tppabs="http://data.thuviengiaoduc.org/images/tudien_small.jpg" width="225" height="41" border="0"></a>
<div class="dic font_weight">Để tra nghĩa một từ, bạn hãy click chuột hai lần vào từ đó.</div>
<div class="tongdai font_weight">
    Tổng đài hỗ trợ trực tuyến <br>
    <span class="size_lon"> 047.305.3868</span> (8h-21h)
</div>
<a title="Đăng ký mua thẻ VIP - GOLDENKIDS trên TiếngAnh123.com" href="4668-cach-dat-the-vip-tren-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/4668-cach-dat-the-vip-tren-tienganh123.html"><img width="225" height="127" src="button_dk.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/button_dk.jpg"/></a>



<div class="hoidapnhanh"></div>

<div class="content_hoidapnhanh">

<span class="font_weight red">Bạn phải đăng nhập mới được đặt câu hỏi hoặc trả lời.</span>




<div class="RsCus">
<ul id="rsHoiDapNhanh">
<li class="ques" id="ch41614">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8zMzY1Mzc=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8zMzY1Mzc=%27" tppabs="http://www.thuviengiaoduc.org/member/336537" class="">hoangvuthuylinh</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
    <span class="font_weight">Do you like + V-ing hả m.n</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41614" class="font_weight replay"><span class="blue1">Trả lời : </span><b>0</b></a>

    </div>
    <div class="info_replay" id="show_id_41614">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41614"></span>
                    <ul>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41613">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MzU5NDM=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MzU5NDM=%27" tppabs="http://www.thuviengiaoduc.org/member/835943" class="">thuthao5a2</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a><a href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" target='_blank'><span class='spanVipKid'><img width="9" height="10" class='kidwithvip' src="kids.png" tppabs="http://www.thuviengiaoduc.org/images/icons/kids.png"/></span> </a> :
    <span class="font_weight">Show the deer where to run nghĩa là gì?</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41613" class="font_weight replay"><span class="blue1">Trả lời : </span><b>0</b></a>

    </div>
    <div class="info_replay" id="show_id_41613">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41613"></span>
                    <ul>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41612">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjA1Mjk1  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjA1Mjk1%27" tppabs="http://www.thuviengiaoduc.org/member/1205295" class="">AFAS123</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
    <span class="font_weight">I've been meaning to ask you for a while là j z??</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41612" class="font_weight replay"><span class="blue1">Trả lời : </span><b>0</b></a>

    </div>
    <div class="info_replay" id="show_id_41612">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41612"></span>
                    <ul>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41611">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci85NTQxODY=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci85NTQxODY=%27" tppabs="http://www.thuviengiaoduc.org/member/954186" class="">hoaithanh5b</a> <a href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" target='_blank'><span class='spanVipKid'><img width="9" height="10" src="kids.png" tppabs="http://www.thuviengiaoduc.org/images/icons/kids.png"/></span> </a> :
    <span class="font_weight">dvvvvvvv</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41611" class="font_weight replay"><span class="blue1">Trả lời : </span><b>0</b></a>

    </div>
    <div class="info_replay" id="show_id_41611">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41611"></span>
                    <ul>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41610">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MjI4ODc=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MjI4ODc=%27" tppabs="http://www.thuviengiaoduc.org/member/822887" class="">doducminhhp</a> <a href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" target='_blank'><span class='spanVipKid'><img width="9" height="10" src="kids.png" tppabs="http://www.thuviengiaoduc.org/images/icons/kids.png"/></span> </a> :
    <span class="font_weight">custard apple là gì ạ?</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41610" class="font_weight replay"><span class="blue1">Trả lời : </span><b>3</b></a>

    </div>
    <div class="info_replay" id="show_id_41610">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41610"></span>
                    <ul>
                        <li id="72158">
                            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MjgxMTI=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MjgxMTI=%27" tppabs="http://www.thuviengiaoduc.org/member/828112">joeynguyen851994</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
                            <span class="font_weight">quả na-mãng cầu</span>
                            <h4>

                                <a class="voteup" id="72158" up="72158" rel="41610" href="javascript:;" title="Vote Up">0</a>&nbsp;
                                <a class="votedown" id="72158" down="72158" rel="41610" href="javascript:;" title="Vote Down">0</a>
                            </h4>

                        </li>

                        <li id="72152">
                            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMTE1ODUy  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMTE1ODUy%27" tppabs="http://www.thuviengiaoduc.org/member/1115852">phuonglinh88</a> <a href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" target='_blank'><span class='spanVipKid'><img width="9" height="10" src="kids.png" tppabs="http://www.thuviengiaoduc.org/images/icons/kids.png"/></span> </a> :
                            <span class="font_weight">banh tao</span>
                            <h4>

                                <a class="voteup" id="72152" up="72152" rel="41610" href="javascript:;" title="Vote Up">0</a>&nbsp;
                                <a class="votedown" id="72152" down="72152" rel="41610" href="javascript:;" title="Vote Down">0</a>
                            </h4>

                        </li>

                        <li id="72141">
                            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci83ODIzMTg=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci83ODIzMTg=%27" tppabs="http://www.thuviengiaoduc.org/member/782318">I_don_know</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
                            <span class="font_weight">banh tao</span>
                            <h4>

                                <a class="voteup" id="72141" up="72141" rel="41610" href="javascript:;" title="Vote Up">0</a>&nbsp;
                                <a class="votedown" id="72141" down="72141" rel="41610" href="javascript:;" title="Vote Down">0</a>
                            </h4>

                        </li>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41609">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMDY1NDE2  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMDY1NDE2%27" tppabs="http://www.thuviengiaoduc.org/member/1065416" class="">giolaidairaquan</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
    <span class="font_weight">em thưa cô, khi cài đặt TA123 Sound Recorder có bảng ghi user name và password thì phải làm gì nữa ạ?</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41609" class="font_weight replay"><span class="blue1">Trả lời : </span><b>0</b></a>

    </div>
    <div class="info_replay" id="show_id_41609">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41609"></span>
                    <ul>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41607">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMDAwNjg0  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMDAwNjg0%27" tppabs="http://www.thuviengiaoduc.org/member/1000684" class="">anhphuonghd</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
                <span class="font_weight">We(go)___go___to supermarket to (buy)__buy___some food
cô ơi!câu này chia như vậy hay là hiện tại tiếp diễn</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41607" class="font_weight replay"><span class="blue1">Trả lời : </span><b>1</b></a>

    </div>
    <div class="info_replay" id="show_id_41607">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41607"></span>
                    <ul>
                        <li id="72138">
                            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMTY2NDc4  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMTY2NDc4%27" tppabs="http://www.thuviengiaoduc.org/member/1166478">daoha98</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
                            <span class="font_weight">are going to go</span>
                            <h4>

                                <a class="voteup" id="72138" up="72138" rel="41607" href="javascript:;" title="Vote Up">1</a>&nbsp;
                                <a class="votedown" id="72138" down="72138" rel="41607" href="javascript:;" title="Vote Down">0</a>
                            </h4>

                        </li>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


<li class="ques" id="ch41605">
    <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MDcwMDk=  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci84MDcwMDk=%27" tppabs="http://www.thuviengiaoduc.org/member/807009" class="">langoctin99</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
    <span class="font_weight">GOOD NIGHT !!!</span>
    <div class="action_hoidapnhanh">
        <a href="javascript:;" id="id_41605" class="font_weight replay"><span class="blue1">Trả lời : </span><b>2</b></a>

    </div>
    <div class="info_replay" id="show_id_41605">
        <div class="info_top"></div>
        <div class="info_cen">
            <div class="nano">
                <div class="content">
                    <span class="error41605"></span>
                    <ul>
                        <li id="72153">
                            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMDE2Nzk0  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMDE2Nzk0%27" tppabs="http://www.thuviengiaoduc.org/member/1016794">langtudatinh2012</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
                            <span class="font_weight">g9</span>
                            <h4>

                                <a class="voteup" id="72153" up="72153" rel="41605" href="javascript:;" title="Vote Up">0</a>&nbsp;
                                <a class="votedown" id="72153" down="72153" rel="41605" href="javascript:;" title="Vote Down">0</a>
                            </h4>

                        </li>

                        <li id="72142">
                            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjE3ODIw  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjE3ODIw%27" tppabs="http://www.thuviengiaoduc.org/member/1217820">risingtonewhight</a> <a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a> :
                            <span class="font_weight">fen_khiu.. you too!</span>
                            <h4>

                                <a class="voteup" id="72142" up="72142" rel="41605" href="javascript:;" title="Vote Up">0</a>&nbsp;
                                <a class="votedown" id="72142" down="72142" rel="41605" href="javascript:;" title="Vote Down">0</a>
                            </h4>

                        </li>

                    </ul>
                </div>
            </div>

        </div>
        <div class="info_bot"></div>
    </div>
</li>


</ul>
<div class="pagging">
    <a href="javascript:;" onclick="hoidap_top()" class="vbv2_back">&nbsp;</a>
    <span class="vbv2_current" limit="8">8</span>
    <a href="javascript:;" onclick="hoidap_top()" class="vbv2_next">&nbsp;</a>


</div>
</div>
<div class="fanpage">
    <a target="_blank" href="javascript:if(confirm(%27http://www.facebook.com/pages/Tieng-Anh-123/174446175978225?sk=likes  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.facebook.com/pages/Tieng-Anh-123/174446175978225?sk=likes%27" tppabs="http://www.facebook.com/pages/Tieng-Anh-123/174446175978225?sk=likes"><img width="220" height="121" src="Untitleds.png" tppabs="http://data.thuviengiaoduc.org/images/v2/home/Untitleds.png" title="Cộng đồng TiếngAnh123 trên Facebook"></a>
</div>
<div style="text-align: center;width: 231px;margin-left: -11px;">
    <div class="nhanbaihoc"></div>
    <div class="font_weight nhandiachiemail">Nhập địa chỉ Email của bạn :</div>

    <form action="http://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onSubmit="window.open('http://feedburner.google.com/fb/a/mailverify?uri=tienganh123', 'popupwindow', 'scrollbars=yes,width=230,height=230');return true">
        <input type="text" name="email" class="input_nhanbaihoc">
        <input type="hidden" value="tienganh123" name="uri"/>
        <input type="hidden" name="loc" value="en_US"/>
        <input type="submit" class="btnsm1" value="Đăng ký">
    </form>

    <a href="javascript:if(confirm(%27http://feeds.feedburner.com/tienganh123  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://feeds.feedburner.com/tienganh123%27" tppabs="http://feeds.feedburner.com/tienganh123" target="_blank">
        <img src="tienganh123-bg=FF9900&fg=444444&anim=1&label=listeners.gif" tppabs="http://feeds.feedburner.com/~fc/tienganh123?bg=FF9900&fg=444444&anim=1&label=listeners" height="26" width="88" style="border:0" alt="" />
    </a>

    <div class="font_weight nhandiachiemail">Sau khi đăng ký bạn hãy mở email <br>để kích hoạt</div>
</div>
<div class="thongke"></div>
<table class="linethongke">
    <tr>
        <td>Tổng số thành viên:  1.225.785</td>
    </tr>
    <tr>
        <td colspan="2">
            Thành viên mới nhất:
            <br>
            <a class="blue1" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjE5  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjE5%27" tppabs="http://www.thuviengiaoduc.org/member/1226619" target="_blank" title="Xem thông tin">qqailaai</a>
        </td>
    </tr>
    <tr>
        <td>Đang trực tuyến:  785</td>
    </tr>
</table>
<div id="histats_counter"></div>
<div class="mem_vip_reg">
    <h3>Chúc mừng 5 thành viên</h3>
    <h3>VIP, GoldenKid mới nhất: </h3>
    <ul>
        <li>
            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2Njc5  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2Njc5%27" tppabs="http://www.thuviengiaoduc.org/member/1226679">minhquyen8486&nbsp;<a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a></a>
            <div style="clear:both"></div>
        </li>

        <li>
            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjYz  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjYz%27" tppabs="http://www.thuviengiaoduc.org/member/1226663">winxclub_flora&nbsp;<a href="2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" target='_blank'><span class='spanVipKid'><img width="9" height="10" src="kids.png" tppabs="http://www.thuviengiaoduc.org/images/icons/kids.png"/></span> </a></a>
            <div style="clear:both"></div>
        </li>

        <li>
            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjYx  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjYx%27" tppabs="http://www.thuviengiaoduc.org/member/1226661">nguyetkhoi&nbsp;<a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a></a>
            <div style="clear:both"></div>
        </li>

        <li>
            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjYy  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI2NjYy%27" tppabs="http://www.thuviengiaoduc.org/member/1226662">nothuong&nbsp;<a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a></a>
            <div style="clear:both"></div>
        </li>

        <li>
            <a class="tk_username" href="javascript:if(confirm(%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI0ODYy  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.thuviengiaoduc.org/clogin/L21lbWJlci8xMjI0ODYy%27" tppabs="http://www.thuviengiaoduc.org/member/1224862">hoasontra_95_080fa3&nbsp;<a href="214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target='_blank'><span class='spanVipKid'><img width="20" height="9" src="vip.png" tppabs="http://www.thuviengiaoduc.org/images/icons/vip.png"/></span> </a></a>
            <div style="clear:both"></div>
        </li>

    </ul>
</div>
</div>
</td>
</tr>
</table>
</div>

<div class="containt_center_bot clear"></div>
<div class="info_footer">
    <div class="containt_info">
        <!-- Tin tuc -->
        <ul>
            <li class="row"><a href="tin-tuc.htm" tppabs="http://www.thuviengiaoduc.org/menu/tin-tuc"> Tin tức</a></li>
            <li class="font_weight"><a href="tin-tuc-tienganh123.htm" tppabs="http://www.thuviengiaoduc.org/tin-tuc-tienganh123"> Tin tức từ TiếngAnh123</a></li>
            <li class="font_weight"><a href="kinh-nghiem-hoc-tap.htm" tppabs="http://www.thuviengiaoduc.org/kinh-nghiem-hoc-tap"> Kinh nghiệm học tập</a></li>
            <li class="font_weight"><a href="huong-dan.htm" tppabs="http://www.thuviengiaoduc.org/huong-dan"> Hướng dẫn sử dụng</a></li>
            <li class="font_weight"><a href="all_comment.htm" tppabs="http://www.thuviengiaoduc.org/all_comment"> Nhận xét mới nhất</a></li>
        </ul>
        <!-- Tieng anh tre em -->
        <ul>
            <li class="row"><a href="tieng-anh-tre-em.htm" tppabs="http://www.thuviengiaoduc.org/menu/tieng-anh-tre-em"> Tiếng Anh trẻ em</a></li>
            <li class="font_weight">
                <a>Rocket to English </a>
                <a href="cambridge-young-learners-english.htm" tppabs="http://www.thuviengiaoduc.org/cambridge-young-learners-english">1</a>
                <a>-</a>
                <a href="cambridge-young-learners-english-2.htm" tppabs="http://www.thuviengiaoduc.org/cambridge-young-learners-english-2">2</a>
                <a>-</a>
                <a href="cambridge-young-learners-english-3.htm" tppabs="http://www.thuviengiaoduc.org/cambridge-young-learners-english-3">3</a>
            </li>
            <li class="font_weight">
                <a>Tiếng Anh lớp </a>
                <a href="tieng-anh-tre-em-lop-3.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-3">3</a>
                <a>-</a>
                <a href="tieng-anh-tre-em-lop-4.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-4">4</a>
                <a>-</a>
                <a href="tieng-anh-tre-em-lop-5.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-lop-5">5</a>
            </li>
            <li class="font_weight"><a href="learn-through-stories.htm" tppabs="http://www.thuviengiaoduc.org/learn-through-stories"> Tiếng Anh trẻ em qua truyện kể</a></li>
            <li class="font_weight"><a href="tieng-anh-tre-em-qua-bai-hat.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-tre-em-qua-bai-hat"> Tiếng Anh trẻ em qua bài hát</a></li>
        </ul>
        <!-- Tieng anh pho thong -->
        <ul>
            <li class="row"><a href="tieng-anh-pho-thong.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong"> Tiếng Anh phổ thông</a></li>
            <li class="font_weight">
                <a>Tiếng Anh lớp </a>
                <a href="tieng-anh-pho-thong-lop-6.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-6">6</a>
                <a>-</a>
                <a href="tieng-anh-pho-thong-lop-7.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-7">7</a>
                <a>-</a>
                <a href="tieng-anh-pho-thong-lop-8.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-8">8</a>
                <a>-</a>
                <a href="tieng-anh-pho-thong-lop-9.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-9">9</a>
            </li>
            <li class="font_weight">
                <a>Tiếng Anh lớp </a>
                <a href="tieng-anh-pho-thong-lop-10.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-10">10</a>
                <a>-</a>
                <a href="tieng-anh-pho-thong-lop-11.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-11">11</a>
                <a>-</a>
                <a href="tieng-anh-pho-thong-lop-12.htm" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong-lop-12">12</a>
            </li>
            <li class="font_weight"><a href="on-thi-dai-hoc.htm" tppabs="http://www.thuviengiaoduc.org/on-thi-dai-hoc"> Ôn thi đại học</a></li>
        </ul>
        <!-- Tieng anh nguoi lon -->
        <ul>
            <li class="row"><a href="tieng-anh-nguoi-lon-1.htm" tppabs="http://www.thuviengiaoduc.org/bai-hoc-moi/tieng-anh-nguoi-lon"> Tiếng Anh người lớn</a></li>
            <li class="font_weight"><a href="luyen-thi-toeic-tienganh123.htm" tppabs="http://www.thuviengiaoduc.org/luyen-thi-toeic-tienganh123"> Luyện thi TOEIC</a></li>
            <li class="font_weight">
                <a>Học tiếng Anh qua </a>
                <a href="hoc-tieng-anh-qua-cnn.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-cnn">CNN</a>
                <a>-</a>
                <a href="hoc-tieng-anh-qua-bbc.htm" tppabs="http://www.thuviengiaoduc.org/hoc-tieng-anh-qua-bbc">BBC</a>
            </li>
            <li class="font_weight"><a href="nghe-tieng-anh-theo-chu-de.htm" tppabs="http://www.thuviengiaoduc.org/nghe-tieng-anh-theo-chu-de"> Luyện nghe video theo chủ đề</a></li>
            <li class="font_weight"><a href="hoc-qua-dich.htm" tppabs="http://www.thuviengiaoduc.org/hoc-qua-dich"> Học qua dịch</a></li>
        </ul>
        <!-- Cham diem online -->
        <ul>
            <li class="row"><a href="chamdiem.htm" tppabs="http://www.thuviengiaoduc.org/menu/chamdiem"> Chấm điểm online </a></li>
            <li class="font_weight"><a href="viet-qua-tranh-de.htm" tppabs="http://www.thuviengiaoduc.org/viet-qua-tranh-de"> Viết qua tranh (dễ)</a></li>
            <li class="font_weight"><a href="viet-essay.htm" tppabs="http://www.thuviengiaoduc.org/viet-essay"> Viết bài luận</a></li>
            <li class="font_weight"><a href="luyen-doc-doan-van.htm" tppabs="http://www.thuviengiaoduc.org/luyen-doc-doan-van"> Luyện đọc đoạn văn</a></li>
            <li class="font_weight"><a href="listening-and-writing-easy.htm" tppabs="http://www.thuviengiaoduc.org/listening-and-writing-easy"> Nghe và viết lại</a></li>
            <!--
            <li class="row"><a href="/menu/hoc-offline"> Lớp học offline </a></li>
            <li class="font_weight"><a href="/lich-khai-giang"> Lịch khai giảng</a></li>
            <li class="font_weight"><a href="/giao-vien-tienganh123"> Giáo viên TiếngAnh123</a></li>
            -->
        </ul>
    </div>
</div>
<div class="footer">
    <div class="footer_info">
        <p><strong>TiếngAnh123.Com - a product of BeOnline Co., Ltd.</strong></p>

        <div class="font_weight">Giấy phép ĐKKD số: 0102852740 cấp bởi Sở Kế hoạch và Đầu tư Hà Nội.<br>
            Giấy phép đào tạo tiếng Anh số: 9268/QĐ-SGD&ĐT cấp bởi Sở Giáo dục và Đào tạo Hà Nội.<br>
            Giấy xác nhận cung cấp dịch vụ mạng xã hội học tiếng Anh trực tuyến số: 36/GXN-TTĐT cấp bởi Bộ Thông tin & Truyền thông. <br>
            Địa chỉ: <span class="black1"> số nhà 15-23, ngõ 259/9 phố Vọng, Đồng Tâm, Hai Bà Trưng, Hà Nội. Tel: 0473053868 - 0436628077.</span> <a href="mailto:lophoc@thuviengiaoduc.org" class="blue1">Email: lophoc@thuviengiaoduc.org </a><br>
        </div>
    </div>
    <div class="line_doc"></div>
    <div class="reg_news">
        <div class="form_reg_news">
            <form onsubmit="window.open('http://feedburner.google.com/fb/a/mailverify?uri=tienganh123', 'popupwindow', 'scrollbars=yes,width=230,height=230');return true" target="popupwindow" method="post" action="http://feedburner.google.com/fb/a/mailverify">
                <input type="hidden" name="uri" value="tienganh123">
                <input type="hidden" value="en_US" name="loc">
                <input class="input_reg_news" type="text" name="email" value="Email đăng ký nhận bài học mới">
                <input id="btn_regs" type="image" src="bg_form_dangky_email_right.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/bg_form_dangky_email_right.jpg">
            </form>
        </div>
        <div class="share">
            <table width="100%">
                <tr>
                    <td>Theo TiếngAnh123 trên : </td>
                    <td>
                        <a href="javascript:if(confirm(%27https://www.facebook.com/pages/Tieng-Anh-123/174446175978225?ref=stream  \n\nThis file was not retrieved by Teleport Pro, because it is addressed using an unsupported protocol (e.g., gopher).  \n\nDo you want to open it from the server?%27))window.location=%27https://www.facebook.com/pages/Tieng-Anh-123/174446175978225?ref=stream%27" tppabs="https://www.facebook.com/pages/Tieng-Anh-123/174446175978225?ref=stream" target="_blank">
                            <img width="31" height="31" src="face_icon_gray.png" tppabs="http://data.thuviengiaoduc.org/images/v2/home/face_icon_gray.png" hover="http://data.thuviengiaoduc.org/images/v2/home/face_icon_hover.png"/>
                        </a>
                        <a href="javascript:if(confirm(%27https://twitter.com/tienganh123  \n\nThis file was not retrieved by Teleport Pro, because it is addressed using an unsupported protocol (e.g., gopher).  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/tienganh123%27" tppabs="https://twitter.com/tienganh123" target="_blank">
                            <img width="31" height="31" src="twitter_icon_gray.png" tppabs="http://data.thuviengiaoduc.org/images/v2/home/twitter_icon_gray.png" hover="http://data.thuviengiaoduc.org/images/v2/home/twitter_icon_hover.png"/>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</div>
<div class="bootom_footer"></div>
</div>
<div class="bg_bottom"></div>
</div>

<div id="boxes">
    <div id="dialogie" class="window">
        <div class="popup_box_ie">
            <div class="popup_download">
                <span><a href="javascript:if(confirm(%27http://download.cdn.mozilla.net/pub/mozilla.org/firefox/releases/19.0.1/win32/vi/Firefox%20Setup%2019.0.1.exe  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://download.cdn.mozilla.net/pub/mozilla.org/firefox/releases/19.0.1/win32/vi/Firefox%20Setup%2019.0.1.exe%27" tppabs="http://download.cdn.mozilla.net/pub/mozilla.org/firefox/releases/19.0.1/win32/vi/Firefox%20Setup%2019.0.1.exe" target="_blank"><img width="86" height="86" src="icon_ff.jpg" tppabs="http://www.thuviengiaoduc.org/images/icon_ff.jpg" /></a></span>
                <span><a href="javascript:if(confirm(%27http://dl.google.com/chrome/install/1364.97/chrome_installer.exe  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://dl.google.com/chrome/install/1364.97/chrome_installer.exe%27" tppabs="http://dl.google.com/chrome/install/1364.97/chrome_installer.exe" target="_blank"><img width="86" height="86" src="icon_ch.jpg" tppabs="http://www.thuviengiaoduc.org/images/icon_ch.jpg" /></a></span>
                <span><a href="javascript:if(confirm(%27http://download.microsoft.com/download/F/8/8/F8871EEC-61E7-4C8C-9A8D-4B61AE5743A6/IE8-WindowsXP-x86-VIT.exe  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://download.microsoft.com/download/F/8/8/F8871EEC-61E7-4C8C-9A8D-4B61AE5743A6/IE8-WindowsXP-x86-VIT.exe%27" tppabs="http://download.microsoft.com/download/F/8/8/F8871EEC-61E7-4C8C-9A8D-4B61AE5743A6/IE8-WindowsXP-x86-VIT.exe" target="_blank"><img width="86" height="86" src="icon_ie.jpg" tppabs="http://www.thuviengiaoduc.org/images/icon_ie.jpg" /></a></span>
            </div>
            <div class="popup_skip"><a href="javascript:;"><img width="77" height="21" title="Bỏ qua" src="bt_skip.png" tppabs="http://www.thuviengiaoduc.org/images/bt_skip.png" style="margin-top: 0;" class="close" /></a></div>
        </div>
    </div>
    <div id="mask"></div>
</div>

<input type="hidden" id="ie_memid" value="">
<input type="hidden" id="is_vipkid" value="">
<input type="hidden" id="pathname" value="/register">
</body>
</html>
