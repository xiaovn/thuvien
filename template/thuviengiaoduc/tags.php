<?php
/**
 * Project: thuvien.
 * File: category.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 12:36 - 05/10/2013
 * Website: www.xiao.vn
 */
include_once "header.php";
?>
</head>
<body>

<?php require_once "top.php";?>
<?php require_once "nav.php";?>

    <div class="containt_center_top clear"></div>
    <div class="containt_center_cen clear">
    <table cellpadding="0" cellspacing="0" border="0">
    <tr>
    <td valign="top" class="containt_center_cen_left">

    <?php require_once "breadcrumb.php";?>

    <div class="comment_bai_hoc clear">

    <div class="hc_box lng_box">

    <a href="#" title="Danh mucj">
        <div class="hc_box_title">
            <div class="hc_box_title_left"></div>
            <div class="hc_box_title_center"><?php echo general::getInstance()->get_subject($mamon);?></div>
            <div class="hc_box_title_right"></div>
        </div>
    </a>
    <div class="lng_notes green "><?php ?></div>

    <ul class="ptl_content">
    <?php
    for($i = 1;$i < count($listid);$i++)
    {
        ?>
        <li>
            <div class="lng_img ptl_img">
                <a href="#" title="">
                    <img width="115" height="92" src="http://thuviengiaoduc.org/upload/thumb/<?php echo book::getInstance()->get_info($listid[$i],'bookimage')?>"/>
                </a>
            </div>
            <div class="lng_right ptl_right">
                <div class="lng_right_top">
                    <table width="100%">
                        <tr valign="middle" height="77">
                            <td>
                                <div class="lng_right_tit"><a href="http://thuviengiaoduc.org/view/doc/<?php echo general::getInstance()->permalink($list[$i],'boook');?>" title=""><?php echo book::getInstance()->get_info($listid[$i],'bookname')?></a></div>
                                <div class="lng_right_content">
                                    <?php echo substr(book::getInstance()->get_info($listid[$i],'bookcontent'),0,99);?>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="lng_r_info ptl_r_info">
                    <div class="lng_r_info_item">
                    <span>
                        <img width="15" height="11" src="<?php echo $template_path;?>images/lng_icon_view.png">
                    </span>
                        <span><?php echo book::getInstance()->get_info($listid[$i],'bookview')?></span>
                    </div>
                    <div class="lng_r_info_item">
                    <span>
                        <img width="15" height="11" src="<?php echo $template_path;?>images/icon_down.png"></span>
                        <span><?php echo book::getInstance()->get_info($listid[$i],'bookdown')?></span>
                    </div>
                </div>
            </div>
        </li>
        <?php
    }
    ?>
    </ul>
    <div class="lng_pagi">
        <div>
            Trang &nbsp;
            <?php

                for ( $page = 1; $page <= $sotrang; $page ++ )
                {
                    $class = "";
                    if($_GET['page'] == $page)
                    {
                        $class = "pageactive";
                    }
                    echo "<a href='?page={$page}'><span class='{$class}'>{$page}</span></a>";
                }
            ?>


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