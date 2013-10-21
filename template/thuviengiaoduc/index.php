<?php
/**
 * Project: xvn.
 * File: header.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 3:24 PM - 7/30/13
 * Website: www.xiao.vn
 */

include_once "header.php";
?>
</head>
<body>

<?php require_once "top.php";?>
<?php require_once "nav.php";?>
<?php require_once "slide.php";?>


<div id="ubaPlayer"></div> <!-- for audio player -->
<div class="des_one clear">
<div class="des_one_left">
    <div class="content_des_one">
        <div class="des_tit_left">BÀI GIẢNG - GIÁO TRÌNH</div>
        <ul>
            <?php
            $c = 1;
            foreach($listbg as $bg)
            {
                ?>
                <li>
                    <div class="nums"><?php echo $c;?></div>
                    <div class="des_c">
                        <h3><a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($bg->bookid,'book');?>" title=""><?php echo general::getInstance()->get_subject($bg->booksubj);?>: <?php echo $bg->bookname;?></a></h3>
                        <h8><a href="http://thuviengiaoduc.org/view/tacgia/"><?php echo $bg->bookauthor; ?></a> </h8>
                    </div>
                </li>
                <?php
                $c++;
            }
            ?>

        </ul>
        <a href="http://thuviengiaoduc.org/view/category/1-bai-giang-giao-trinh" class="other_news"></a>
    </div>
</div>
<div class="des_one_center">
    <div class="content_des_one">
        <div class="des_tit_center">TÀI LIỆU THAM KHẢO</div>
        <ul>
            <?php
            $c = 1;
            foreach($listtailieu as $tl)
            {
                ?>
                <li>
                    <div class="nums"><?php echo $c;?></div>
                    <div class="des_c">
                        <h3><a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($tl->bookid,'book');?>" title=""><?php echo general::getInstance()->get_subject($tl->booksubj);?>: <?php echo $tl->bookname;?></a></h3>
                        <h8><a href="http://thuviengiaoduc.org/view/tacgia/"><?php echo $tl->bookauthor; ?></a> </h8>
                    </div>
                </li>
                <?php
                $c++;
            }
            ?>
        </ul>
        <a href="http://thuviengiaoduc.org/view/category/2-tai-lieu-tham-khao" class="other_news"></a>

    </div>
</div>
<div class="des_one_right">
    <div class="content_des_one cdor">
        <div class="des_tit_right">ĐỀ THI - KIỂM TRA</div>
        <ul>
            <?php
            $c = 1;
            foreach($listdethi as $dethi)
            {
                ?>
                <li>
                    <div class="nums"><?php echo $c;?></div>
                    <div class="des_c">
                        <h3><a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($dethi->bookid,'book');?>" title=""><?php echo general::getInstance()->get_subject($dethi->booksubj);?>: <?php echo $dethi->bookname;?></a></h3>
                        <h8><a href="http://thuviengiaoduc.org/view/tacgia/"><?php echo $dethi->bookauthor; ?></a> </h8>
                    </div>
                </li>
                <?php
                $c++;
            }
            ?>
        </ul>
        <a href="http://thuviengiaoduc.org/view/category/3-de-thi-kiem-tra" class="other_news"></a>

    </div>
</div>
</div>


<div class="danhngon2" style="margin-top: 0px; width: 100%; float: left;">
    <a title="" href="#"><img width="1000" height="90" src="<?php echo $template_path;?>/images/order_card.jpg"></a>
</div>
<div class="containt_center_top clear"></div>
<div class="containt_center_cen clear">
<table cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" class="containt_center_cen_left"><div class="vbv2_ishomes">
<h3 class="vbv2_tit_three"><a title="Chủ đề hot" href="#">CHỦ ĐỀ HOT</a></h3>
<div class="info_con_one">

    <div class="vbv2_info_con_one vbv2_b_left">
        <span class="vbv2_itemHot">&nbsp;</span>
        <a title="<?php echo general::getInstance()->bst_info($bstlist[0])->tenbst;?>" href="http://thuviengiaoduc.org/view/bst/<?php echo general::getInstance()->permalink($bstlist[0],'bst');?>"><img width="220" height="99" src="<?php echo XC_URL?>/images/bst/<?php echo $bstlist[0];?>.png"></a>
        <h3><a title="#" href="#"><span class="orange1"><?php echo general::getInstance()->bst_info($bstlist[0])->tenbst;?></span></a> </h3>
        <ul>
            <?php
            foreach($bst1 as $b1)
            {
            ?>
                <li>• <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($b1->bookid,'book');?>" title=""><?php echo substr(book::getInstance()->get_info($b1->bookid,'bookname'),0,37);?></a> </li>
            <?php
            }
            ?>

        </ul>
        <a title="<?php echo general::getInstance()->bst_info($bstlist[0])->tenbst;?>" href="http://thuviengiaoduc.org/view/bst/<?php echo general::getInstance()->permalink($bstlist[0],'bst');?>" class="vbv2_more_home mg_20">&nbsp;</a>
    </div>
    <div class="vbv2_info_con_one vbv2_b_left">
        <span class="vbv2_itemHot">&nbsp;</span>
        <a title="<?php echo general::getInstance()->bst_info($bstlist[1])->tenbst;?>" href="http://thuviengiaoduc.org/view/bst/<?php echo general::getInstance()->permalink($bstlist[1],'bst');?>"><img width="220" height="99" src="<?php echo XC_URL?>/images/bst/<?php echo $bstlist[1];?>.png"></a>
        <h3><a title="#" href="#"><span class="orange1"><?php echo general::getInstance()->bst_info($bstlist[1])->tenbst;?></span></a> </h3>
        <ul>
            <?php
            foreach($bst2 as $b2)
            {
                ?>
                <li>• <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($b2->bookid,'book');?>" title=""><?php echo substr(book::getInstance()->get_info($b2->bookid,'bookname'),0,37);?></a> </li>
            <?php
            }
            ?>
        </ul>
        <a title="<?php echo general::getInstance()->bst_info($bstlist[1])->tenbst;?>" href="http://thuviengiaoduc.org/view/bst/<?php echo general::getInstance()->permalink($bstlist[1],'bst');?>"  class="vbv2_more_home mg_20">&nbsp;</a>
    </div>
    <div class="vbv2_info_con_one">
        <a title="<?php echo general::getInstance()->bst_info($bstlist[2])->tenbst;?>" href="http://thuviengiaoduc.org/view/bst/<?php echo general::getInstance()->permalink($bstlist[2],'bst');?>"><img width="220" height="99" src="<?php echo XC_URL?>/images/bst/<?php echo $bstlist[2];?>.png"></a>
        <h3><a title="#" href="#"><span class="orange1"><?php echo general::getInstance()->bst_info($bstlist[2])->tenbst;?></span></a> </h3>
        <ul>
            <?php
            foreach($bst3 as $b3)
            {
                ?>
                <li>• <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($b3->bookid,'book');?>" title=""><?php echo substr(book::getInstance()->get_info($b3->bookid,'bookname'),0,37);?></a> </li>
            <?php
            }
            ?>
        </ul>
        <a title="<?php echo general::getInstance()->bst_info($bstlist[2])->tenbst;?>" href="http://thuviengiaoduc.org/view/bst/<?php echo general::getInstance()->permalink($bstlist[2],'bst');?>"  class="vbv2_more_home mg_20">&nbsp;</a>
    </div>
</div>
<div class="vbb2_info_con_two clear">
    <div class="vbb2_info_con_two_l vbv2_line_abc clear">&nbsp;</div>
    <div class="hpnb_box">
        <div class="hpnb_box_item"><a href="" title="1000 Từ vựng cơ bản"><img width="220" height="71"  src="<?php echo $template_path;?>/images/hp_1000_tv.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/hp_1000_tv.jpg" /></a></div>
        <div class="hpnb_box_item"><a href="" title="6000 Từ tiếng Anh thông dụng"><img  width="220" height="71" src="<?php echo $template_path;?>/images/hp_6000_ta.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/hp_6000_ta.jpg" /></a></div>
        <div class="hpnb_box_item"><a href="" title="101 Video giao tiếp cơ bản"><img  width="220" height="71" src="<?php echo $template_path;?>/images/hp_101_vd.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/hp_101_vd.jpg" /></a></div>
    </div>
</div>

<div class="vbv2_line_info_home clear"></div>
<div class="vbb2_info_con_fore clear">
    <h3 class="vbv2_tit_three"><a href="#72138" title="Luyện kỹ năng">THÀNH VIÊN TÍCH CỰC</a></h3>
    <?php
    $topposts = general::getInstance()->get_top_post(6);
    foreach($topposts as $tp)
    {
    ?>
        <div class="vbv2_box_fore">
            <a title="" href="http://thuviengiaoduc.org/member/view/<?php echo $tp->xid;?>"><img height="90" src="<?php echo $template_path;?>/images/avatar.png"></a>
            <span><a href="http://thuviengiaoduc.org/member/view/<?php echo $tp->xid;?>" title=""><?php echo member::getInstance()->account($tp->xid,'username')?></a></span>
        </div>
    <?php
    }
    ?>
    <a class="vbv2_more_home mg_20" href="#" title="Xem thêm">&nbsp;</a>
</div>
<div class="vbv2_line_info_home clear"></div>
<div class="vbb2_info_con_5 clear">
    <h3 class="vbv2_tit_three"><a href="#" title="#">TÀI LIỆU MỚI</a></h3>
    <?php
    $count = 0;
    $listsubj = general::getInstance()->get_subject_list();
    foreach($listsubj as $sl)
    {
        if($count%2)
        {
            $class = "vbv2_box_video vbv2_br_l_br vbv2_non_b_bottom";
        }
        else
        {
            $class = "vbv2_box_video vbv2_non_b_bottom";
        }
        $newest_book = general::getInstance()->get_newest_book_by_subject($sl->subjid);
    ?>
        <div class="<?php echo $class;?>">
            <a href="http://thuviengiaoduc.org/view/subject/<?php echo general::getInstance()->permalink($sl->subjid,'subj');?>" title="<?php echo $sl->subjname;?>">
                <h3><span class="orange1"><?php echo $sl->subjname;?></span></h3>
            </a>
            <div class="vbv2_boxchild vbv2_br_l_b">
                <div class="vbv2_imgbox">
                    <a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($newest_book->bookid,'book');?>" title="<?php echo $newest_book->bookname;?>">
                        <img src="http://thuviengiaoduc.org/upload/thumb/<?php echo $newest_book->bookimage;?>" width="85" height="110"/>
                    </a>
                </div>
                <div class="vbv2_info_right_box">
                    <ul>
                        <?php
                        $is = 1;
                        $listbooks = general::getInstance()->get_book_by_subject($sl->subjid,4);
                        foreach($listbooks as $lbs)
                        {
                                ?>
                                <li>• <a <?php if($is == 1){?>class="blue1 dam"<?php }?> href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($lbs->bookid,'book');?>" title="<?php echo $lbs->bookname;?>"><?php echo substr($lbs->bookname,0,37);?></a> </li>
                            <?php
                            $is++;
                        }
                        ?>
                    </ul>
                    <a class="vbv2_more_home" style="margin-top: 15px" href="http://thuviengiaoduc.org/view/subject/<?php echo general::getInstance()->permalink($sl->subjid,'subj');?>" title="Xem thêm">&nbsp;</a>
                </div>

            </div>
        </div>
    <?php
        $count++;
    }
    ?>
</div>

<div class="vbv2_line_info_home clear"></div>
<div class="vbb2_info_con_8 clear">
    <h3 class="vbv2_tit_three"><a href="#" title="#">GIÁO TRÌNH THEO LỚP</a></h3>
    <div class="vbv2_info_con_one vbv2_b_left">
        <a href="http://thuviengiaoduc.org/view/category/<?php echo general::getInstance()->permalink(3,'cat');?>" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong"><img width="220" height="99"  src="<?php echo $template_path;?>/images/img5.jpg" tppabs="http://data.thuviengiaoduc.org/images/v2/home/img5.jpg"></a>
        <h3><a href="http://thuviengiaoduc.org/view/category/<?php echo general::getInstance()->permalink(3,'cat');?>" tppabs="http://www.thuviengiaoduc.org/tieng-anh-pho-thong">Đề thi - bài kiểm tra <span class="orange1">mới nhất</span></a> </h3>
        <ul>
            <?php
            $listdethis = general::getInstance()->get_top_book_by_category(3,3);
            foreach($listdethis as $ldt)
            {
            ?>
                <li>• <a  href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($ldt->bookid,'book');?>" title="<?php echo $ldt->bookname;?>" class="blue1"><?php echo substr($ldt->bookname,0,37);?></a> </li>
            <?php
            }
            ?>

        </ul>
        <a href="http://thuviengiaoduc.org/view/category/<?php echo general::getInstance()->permalink(3,'cat');?>" class="vbv2_more_home mg_20">&nbsp;</a>
    </div>
    <div class="vbv2_info_con_one vbv2_b_left">
        <a href="http://thuviengiaoduc.org/view/school/<?php echo general::getInstance()->permalink(2,'schoollevel');?>"><img width="220" height="99"  src="<?php echo $template_path;?>/images/ig_thpt.jpg"></a>
        <h3><a href="#">Tài liệu <span class="orange1">Trung học cơ sở</span></a></h3>
        <div class="vbv2_list_class">
            <?php
            $listgrade = general::getInstance()->get_grade_by_level(2);
            foreach($listgrade as $lg)
            {
                ?>
                <a href="http://thuviengiaoduc.org/view/grade/<?php echo general::getInstance()->permalink($lg->gradeid,'grade');?>">Lớp <span class="dam orange1"><?php echo $lg->gradeid;?></span></a>
            <?php
            }
            ?>
        </div>
    </div>
    <div class="vbv2_info_con_one">
        <a href="http://thuviengiaoduc.org/view/school/<?php echo general::getInstance()->permalink(3,'schoollevel');?>"><img width="220" height="99"  src="<?php echo $template_path;?>/images/ig_thpt2.jpg"></a>
        <h3><a href="#">Tài liệu <span class="orange1">trung học phổ thông</span></a></h3>
        <div class="vbv2_list_class">
            <?php
            $listgrade2 = general::getInstance()->get_grade_by_level(3);
            foreach($listgrade2 as $lg2)
            {
                ?>
                <a href="http://thuviengiaoduc.org/view/grade/<?php echo general::getInstance()->permalink($lg2->gradeid,'grade');?>">Lớp <span class="dam orange1"><?php echo $lg2->gradeid;?></span></a>
            <?php
            }
            ?>
        </div>
    </div>
</div>



<div class="vbv2_line_info_home clear"></div>
<div class="vbb2_info_con_three clear">
    <h3 class="vbv2_tit_three"><a href="#" title="#">Sự kiện - Chia sẻ nhận quà</a></h3>

    <div class="hld2_kids_top1" style="min-height:100px;">
        <div class="hld2_tch_left">
            <div class="hld2_tch_title">Top 5 <span class="orange1">cao thủ chia sẻ</span></div>
            <?php
            $topuploads = general::getInstance()->get_top_member_by_score();
            $medal = 1;
            $hc = "";
            foreach($topuploads as $topupload)
            {
                if($medal == 1)
                {
                    $hc = "hld2_tch_left_ico";
                }
                elseif($medal == 2)
                {
                    $hc = "hld2_tch_left_ico hld2_tch_left_ico2";
                }
                else
                {
                    $hc = "hld2_tch_left_ico hld2_tch_left_ico3";
                }
            ?>
                <div class="hld2_tch_left_tit">
                    <div class="<?php echo $hc;?> "></div>
                    <div class="hld2_tch_left_te">
                        <a class="tk_username" href="http://thuviengiaoduc.org/member/view/<?php echo $topupload->xid;?>">
                            <?php echo member::getInstance()->account($topupload->xid,"username");?>
                        </a> (<b><?php echo $topupload->score;?></b> điểm)</div>
                </div>
            <?php
                $medal++;
            }
            ?>


        </div>
        <?php
        $event_chia_se = general::getInstance()->get_event_info(1);
        ?>
        <div class="hld2_tch_right">
            <div class="hld2_tch_title">Thể lệ và cách thức tham gia</div>
            <div class="hld2_tch_right_te">
                <?php
                echo $event_chia_se->eventdes;
                ?><br />
            </div>
            <?php
            $startTimeStamp = strtotime(date("Y-m-d"));
            $endTimeStamp = strtotime(date("Y-m-d",strtotime($event_chia_se->eventend)));

            $timeDiff = abs($endTimeStamp - $startTimeStamp);

            $numberDays = $timeDiff/86400;  // 86400 seconds in one day

            // and you might want to convert to integer
            $numberDays = intval($numberDays);
            ?>
            <a href="#" title=""><div class="hld2_tch_right_bt"><span>Sự kiện còn </span> <?php echo $numberDays;?> ngày</div></a>
        </div>
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